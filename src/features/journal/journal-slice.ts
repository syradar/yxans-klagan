import type { PayloadAction } from '@reduxjs/toolkit'
import { createSelector, createSlice } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'
import { Err, None, Ok, Option, Result, Some } from 'ts-results'
import { z } from 'zod'
import {
  ForbiddenLandsDate,
  ForbiddenLandsDateClass,
  ForbiddenLandsDateSerializable,
  forbiddenLandsDateSerializableSchema,
  forbiddenLandsDateStringSchema,
  formatForbiddenLandsDate,
  parseForbiddenLandsDate,
} from '../../models/forbidden-lands-date.model'
import {
  Hex,
  HexKey,
  hexKeySchema,
  isHexKey,
} from '../../pages/places/map.model'
import { createStateStorageWithSerializer } from '../../store/persist/state-storage'
import { RootState } from '../../store/store'

import { isNullish, isString, maybe } from '../../functions/utils.functions'
import {
  GameSource,
  gameSourceSchema,
  selectHex,
  selectSource,
} from '../map/map-slice'

// * EncounterNote - Notes that detail an encounter

export const NOTE_MAX_LENGTH = 1000

export const explorationNoteSchema = z.object({
  id: z.string(),
  hexKey: hexKeySchema,
  gameSource: gameSourceSchema,
  exploredAt: forbiddenLandsDateSerializableSchema.optional(),
  note: z
    .object({
      body: z.string().max(NOTE_MAX_LENGTH),
      createdAt: forbiddenLandsDateSerializableSchema,
      updatedAt: forbiddenLandsDateSerializableSchema,
    })
    .optional(),
})

export const explorationNoteDateStringSchema = z.object({
  id: z.string(),
  hexKey: hexKeySchema,
  gameSource: gameSourceSchema,
  exploredAt: forbiddenLandsDateStringSchema.or(z.null()),
  note: z
    .object({
      body: z.string().max(NOTE_MAX_LENGTH),
      createdAt: forbiddenLandsDateStringSchema,
      updatedAt: forbiddenLandsDateStringSchema,
    })
    .or(z.null()),
})

export type ExplorationNote = z.infer<typeof explorationNoteSchema>
export const isValidExplorationNote = (val: unknown): val is ExplorationNote =>
  explorationNoteSchema.safeParse(val).success

export type ExplorationNoteDateString = z.infer<
  typeof explorationNoteDateStringSchema
>

export const journalStateSchema = z.object({
  explorationNotes: z.record(
    gameSourceSchema,
    z.record(hexKeySchema, explorationNoteSchema.or(z.undefined())),
  ),
  settings: z.object({
    useHandwrittenFont: z.boolean(),
  }),
})

export const journalStateSerializableSchema = z.object({
  explorationNotes: z.record(
    gameSourceSchema,
    z.record(hexKeySchema, explorationNoteDateStringSchema.or(z.undefined())),
  ),
  settings: z.object({
    useHandwrittenFont: z.boolean(),
  }),
})
export type JournalState = z.infer<typeof journalStateSchema> & {
  explorationNotes: Record<GameSource, Partial<Record<HexKey, ExplorationNote>>>
}
export type JournalStateSerializable = z.infer<
  typeof journalStateSerializableSchema
> & {
  explorationNotes: Record<
    GameSource,
    Partial<Record<HexKey, ExplorationNoteDateString>>
  >
}

const journalDeserializer = (
  val: JournalStateSerializable,
): Result<JournalState, Error> => {
  const explorationNotes: Record<
    GameSource,
    Partial<Record<HexKey, ExplorationNote>>
  > = {
    bitterReach: explorationNoteDeserializer(
      val.explorationNotes.bitterReach,
    ).unwrapOr({}),
    ravland: explorationNoteDeserializer(val.explorationNotes.ravland).unwrapOr(
      {},
    ),
  }

  const result: JournalState = {
    explorationNotes,
    settings: {
      useHandwrittenFont: val.settings.useHandwrittenFont,
    },
  }

  return Ok(result)
}

const explorationNoteDeserializer = (
  notes: Partial<Record<HexKey, ExplorationNoteDateString>>,
): Result<Partial<Record<HexKey, ExplorationNote>>, Error> => {
  const result: Partial<Record<HexKey, ExplorationNote>> = {}

  for (const key of Object.keys(notes)) {
    if (!isHexKey(key)) {
      return new Err(new Error(`Invalid hex key: ${key}`))
    }

    const explorationNote = notes[key]

    if (isNullish(explorationNote)) {
      continue
    }
    const exploredAt = maybe(explorationNote.exploredAt)
      .andThen((date) => {
        const parsed = parseForbiddenLandsDate(date)

        return parsed.ok ? Some(parsed.val) : None
      })
      .unwrapOr(undefined)

    const note = maybe(explorationNote.note)
      .toResult(new Error('Note is nullish'))
      .andThen((note) => {
        const createdAt = parseForbiddenLandsDate(note.createdAt)
        const updatedAt = parseForbiddenLandsDate(note.updatedAt)

        if (createdAt.err || updatedAt.err) {
          return new Err(
            new Error(`Invalid date string: ${createdAt.val} ${updatedAt.val}`),
          )
        }

        const newNote = {
          ...note,
          createdAt: createdAt.val,
          updatedAt: updatedAt.val,
        }

        return Ok(newNote)
      })

    if (note.err) {
      return new Err(note.val)
    }

    result[key] = {
      ...explorationNote,
      exploredAt,
      note: note.val,
    }
  }

  return new Ok(result)
}

const journalSerializer = (
  val: JournalState,
): Result<JournalStateSerializable, Error> => {
  const result: JournalStateSerializable = {
    explorationNotes: {
      bitterReach: explorationNoteSerializer(
        val.explorationNotes.bitterReach,
      ).unwrapOr({}),
      ravland: explorationNoteSerializer(val.explorationNotes.ravland).unwrapOr(
        {},
      ),
    },
    settings: {
      useHandwrittenFont: val.settings.useHandwrittenFont,
    },
  }

  return Ok(result)
}

const explorationNoteSerializer = (
  notes: Partial<Record<HexKey, ExplorationNote>>,
): Result<Partial<Record<HexKey, ExplorationNoteDateString>>, Error> => {
  const result: Partial<Record<HexKey, ExplorationNoteDateString>> = {}

  for (const key of Object.keys(notes)) {
    if (!isHexKey(key)) {
      return new Err(new Error(`Invalid hex key: ${key}`))
    }

    const explorationNote = notes[key]

    if (isNullish(explorationNote)) {
      continue
    }

    result[key] = {
      ...explorationNote,
      exploredAt: maybe(explorationNote.exploredAt)
        .map(formatForbiddenLandsDate)
        .unwrapOr(null),
      note: maybe(explorationNote.note)
        .map((note) => ({
          ...note,
          createdAt: formatForbiddenLandsDate(note.createdAt),
          updatedAt: formatForbiddenLandsDate(note.updatedAt),
        }))
        .unwrapOr(null),
    }
  }

  return new Ok(result)
}

const JOURNAL_STATE_STORAGE_KEY = 'journalState'
export const localStorageJournalState = createStateStorageWithSerializer<
  JournalState,
  JournalStateSerializable
>({
  key: JOURNAL_STATE_STORAGE_KEY,
  label: 'JOURNAL',
  schema: journalStateSerializableSchema,
  serializer: journalSerializer,
  deserializer: journalDeserializer,
  schemaOutput: journalStateSchema,
})

export const initialJournalState: JournalState = {
  explorationNotes: {
    bitterReach: {},
    ravland: {
      X25: {
        id: nanoid(),
        gameSource: 'ravland',
        hexKey: 'X25',
        exploredAt: {
          year: 1165,
          month: 1,
          day: 1,
          monthIndex: 0,
        },
        note: {
          body: `From state :D Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.

          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.`,
          createdAt: {
            year: 1165,
            month: 1,
            day: 1,
            monthIndex: 0,
          },
          updatedAt: {
            year: 1165,
            month: 1,
            day: 2,
            monthIndex: 0,
          },
        },
      },
    },
  },
  settings: {
    useHandwrittenFont: false,
  },
}
const local = localStorageJournalState.load()
const initialState: JournalState = local.unwrapOr(initialJournalState)

console.log('[Journal] local', local)
console.log('[Journal] Initial state', initialState)

const journalSlice = createSlice({
  name: 'journal',
  initialState,
  reducers: {
    toggleUseHandwritten(state) {
      state.settings.useHandwrittenFont = !state.settings.useHandwrittenFont
    },
    upsertExplorationNote(
      state,
      action: PayloadAction<{
        hexKey: HexKey
        gameSource: GameSource
        note: string
        updatedAt: ForbiddenLandsDateSerializable
      }>,
    ) {
      const { hexKey, note: body, updatedAt, gameSource } = action.payload

      const stateExplorationNote = state.explorationNotes[gameSource][hexKey]

      if (!stateExplorationNote) {
        state.explorationNotes[gameSource][hexKey] = {
          id: nanoid(),
          gameSource,
          hexKey,
          exploredAt: undefined,
          note: {
            body,
            createdAt: updatedAt,
            updatedAt,
          },
        }

        return
      }

      stateExplorationNote.note = maybe(stateExplorationNote.note)
        .map((note) => ({
          ...note,
          body,
          updatedAt,
        }))
        .unwrapOr({
          body,
          createdAt: updatedAt,
          updatedAt,
        })
    },
    toggleExploredAt(
      state,
      action: PayloadAction<{
        hexKey: HexKey
        gameSource: GameSource
        exploredAt: ForbiddenLandsDateSerializable
      }>,
    ) {
      const { hexKey, exploredAt, gameSource } = action.payload

      const stateExplorationNote = state.explorationNotes[gameSource][hexKey]

      if (!stateExplorationNote) {
        state.explorationNotes[gameSource][hexKey] = {
          id: nanoid(),
          gameSource,
          hexKey,
          exploredAt,
          note: {
            body: '',
            createdAt: exploredAt,
            updatedAt: exploredAt,
          },
        }

        return
      }

      stateExplorationNote.exploredAt = stateExplorationNote.exploredAt
        ? undefined
        : exploredAt
    },
  },
})

export const { toggleUseHandwritten, upsertExplorationNote, toggleExploredAt } =
  journalSlice.actions

export const selectJournal = (state: RootState) => state.journal

export type ExplorationNoteViewModel = Omit<
  ExplorationNote,
  'exploredAt' | 'note'
> & {
  exploredAt: Option<ForbiddenLandsDate>
  note: Option<{
    body: string
    createdAt: ForbiddenLandsDate
    updatedAt: ForbiddenLandsDate
  }>
}

export const selectAllExplorationNotes = createSelector(
  [selectSource, selectJournal],
  (source, journal): ExplorationNoteViewModel[] => {
    const notes = Object.values(journal.explorationNotes[source]).map(
      (explorationNote) => {
        return {
          ...explorationNote,
          exploredAt: maybe(explorationNote.exploredAt).map((date) => {
            return new ForbiddenLandsDateClass(date)
          }),
          note: maybe(explorationNote.note).map((note) => {
            return {
              ...note,
              createdAt: new ForbiddenLandsDateClass(note.createdAt),
              updatedAt: new ForbiddenLandsDateClass(note.updatedAt),
            }
          }),
        }
      },
    )

    return notes
  },
)

export const selectNote = (hexKey: HexKey) =>
  createSelector(
    [selectHex(hexKey), selectSource, selectJournal],
    (
      hex,
      source,
      journal,
    ): { hex: Option<Hex>; note: ExplorationNoteViewModel } => {
      const explorationNote = journal.explorationNotes[source][hexKey]

      if (!explorationNote) {
        return {
          hex,
          note: {
            id: nanoid(),
            gameSource: source,
            hexKey,
            exploredAt: None,
            note: None,
          },
        }
      }

      const result: ExplorationNoteViewModel = {
        id: explorationNote.id,
        gameSource: explorationNote.gameSource,
        hexKey: explorationNote.hexKey,
        exploredAt: maybe(explorationNote.exploredAt).map((date) => {
          return new ForbiddenLandsDateClass(date)
        }),
        note: maybe(explorationNote.note).map((note) => {
          if (isString(note.createdAt)) {
            throw new Error('Invalid date string')
          }

          if (isString(note.updatedAt)) {
            throw new Error('Invalid date string')
          }

          return {
            ...note,
            createdAt: new ForbiddenLandsDateClass(note.createdAt),
            updatedAt: new ForbiddenLandsDateClass(note.updatedAt),
          }
        }),
      }

      return {
        hex,
        note: result,
      }
    },
  )

export default journalSlice.reducer
