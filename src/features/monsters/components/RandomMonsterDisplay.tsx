import { BookPageTitle } from '../../../components/BookPageTitle'
import Stack from '../../../components/Stack'
import { Typography } from '../../../components/Typography'
import { DefinitionList } from '../../../components/definition-list'
import { SkillList } from '../../../components/skill-list'
import { useAppSelector } from '../../../store/store.hooks'
import { TranslationKey } from '../../../store/translations/translation.model'
import { selectTranslateFunction } from '../../../store/translations/translation.slice'
import {
  MonsterDescriptionItemViewModel,
  RandomMonsterViewModel,
  createMonsterSizeTranslationDict,
  monsterArmorTypeTranslationDict,
  monsterHomeLabels,
  monsterTypeTranslationDict,
  movementTypeTranslationDict,
} from '../monster.model'
import { MonsterAttributeGrid } from './MonsterAttributeGrid'

export type RandomMonsterDisplayProps = {
  rm: RandomMonsterViewModel
  bookPart: string
}

export const RandomMonsterDisplay = ({
  rm,
  bookPart,
}: RandomMonsterDisplayProps) => {
  const t = useAppSelector(selectTranslateFunction(['monster', 'common']))

  const describeMonsterHeads = (
    heads: MonsterDescriptionItemViewModel[],
  ): string => {
    const translatedHeads = heads.map((h) =>
      t(
        h.key,
        h.count ? { context: { count: h.count.toString() } } : undefined,
      ),
    )

    if (translatedHeads.length === 1) {
      return `${t('monster:the_monster_has')} ${translatedHeads.join('')}.`
    }

    const [lastHead, ...restOfHeads] = translatedHeads

    return `${t('monster:the_monster_has')} ${restOfHeads.join(
      ', ',
    )} & ${lastHead}.`
  }

  const describeMonsterLimbs = (
    limbs: MonsterDescriptionItemViewModel[],
  ): string => {
    const translatedLimbs = limbs.map((l) =>
      t(
        l.key,
        l.count ? { context: { count: l.count.toString() } } : undefined,
      ),
    )

    if (translatedLimbs.length === 1) {
      return `${t('monster:the_monster_has')} ${translatedLimbs.join('')}.`
    }

    const [lastLimb, ...restOfLimbs] = [...translatedLimbs].reverse()

    return `${t('monster:the_monster_has')} ${restOfLimbs.join(
      ', ',
    )} & ${lastLimb}.`
  }

  const describeHome = (monsterHome: TranslationKey<'monster'>): string =>
    `${t('monster:lives_in', {
      context: {
        home: t(monsterHome),
      },
    })}.`

  return (
    <div>
      <Stack.Vertical wrap={false}>
        <BookPageTitle subTitle={bookPart}>
          {t(createMonsterSizeTranslationDict(rm.type)[rm.size])}{' '}
          {t(monsterTypeTranslationDict[rm.type])}
        </BookPageTitle>

        <div className="yx-prose mb-4 max-w-prose">
          <p>
            {[
              describeMonsterHeads(rm.description.head),
              describeMonsterLimbs(rm.description.limbs),
              describeHome(monsterHomeLabels[rm.home]),
            ].join(' ')}
          </p>
        </div>

        <section>
          <Typography variant="h3">{t(`common:attribute`)}</Typography>
          <MonsterAttributeGrid attributes={rm.attributes} />
        </section>

        <section>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Typography variant="h3">
                {t(`monster:movement.movement`)}
              </Typography>
              <div>
                {t(movementTypeTranslationDict[rm.movement.type])}{' '}
                {rm.movement.distance}{' '}
                {t(
                  rm.movement.distance === 1
                    ? 'monster:movement.zones_one'
                    : 'monster:movement.zones_other',
                )}
              </div>
            </div>
            {rm.armor && (
              <div>
                <Typography variant="h3">{t('monster:armor_label')}</Typography>

                <div>
                  <span className="font-medium">
                    {t(monsterArmorTypeTranslationDict[rm.armor.label])}:{' '}
                  </span>
                  {rm.armor.values.length}
                </div>
              </div>
            )}
          </div>
        </section>

        <section className="flex flex-wrap gap-x-8 gap-y-4 4xl:flex-col">
          <div className="md:w-full">
            <Typography variant="h3">{t(`monster:skill`)}</Typography>
            {rm.skills.length === 0 ? (
              <div>{t('monster:skills.none')}</div>
            ) : (
              <SkillList
                skills={
                  rm.skills
                    .map((s) => ({
                      value: s.value,
                      name: t(s.name),
                    }))
                    .sort((a, b) => a.name.localeCompare(b.name)) as {
                    name: string
                    value: number
                  }[]
                }
              ></SkillList>
            )}
          </div>
        </section>

        <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <Typography variant="h3">{t(`monster:trait.traits`)}</Typography>
            <DefinitionList
              definitions={rm.traits.map((trait) => ({
                name: t(trait.name),
                description: t(
                  trait.description.key,
                  trait.description.count
                    ? {
                        context: {
                          count: trait.description.count.toString(),
                        },
                      }
                    : undefined,
                ),
              }))}
            ></DefinitionList>
          </div>
          <div>
            <Typography variant="h3">
              {t(`monster:weakness.weakness`)}
            </Typography>
            <DefinitionList
              definitions={[rm.weakness].map((w) => ({
                name: t(w.name),
                description: t(w.description),
              }))}
            ></DefinitionList>
          </div>
          <div>
            <Typography variant="h3">
              {t(`monster:motivation.motivation`)}
            </Typography>
            <DefinitionList
              definitions={[rm.motivation].map((m) => ({
                name: t(m.name),
                description: t(m.description),
              }))}
            ></DefinitionList>
          </div>
        </section>
      </Stack.Vertical>
    </div>
  )
}

type RollButtonProps = {
  onClick: () => void
  children: React.ReactNode
}
export const RollButton = ({ onClick, children }: RollButtonProps) => (
  <button
    onClick={onClick}
    className="pointer-fine:hover:bg-red-500 pointer-fine:hover:border-red-500 pointer-fine:hover:text-black select-none rounded-none border-2 border-black bg-white px-1 py-0.5 text-sm font-bold uppercase leading-none tracking-wide text-black duration-75 focus:outline-none"
    type="button"
  >
    {children}
  </button>
)
