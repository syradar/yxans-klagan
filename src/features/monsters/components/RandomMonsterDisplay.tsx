import { BookPageTitle } from '../../../components/BookPageTitle'
import Stack from '../../../components/Stack'
import { Typography } from '../../../components/Typography'
import { DefinitionList } from '../../../components/definition-list'
import { SkillList } from '../../../components/skill-list'
import { withId } from '../../../functions/utils.functions'
import { useAppSelector } from '../../../store/store.hooks'
import { TranslationKey } from '../../../store/translations/translation.model'
import { selectTranslateFunction } from '../../../store/translations/translation.slice'
import {
  MonsterDescriptionItemViewModel,
  MonsterType,
  RandomMonsterViewModel,
  monsterHomeLabels,
} from '../monster.model'
import { MonsterAttribute } from './MonsterAttribute'

export type RandomMonsterDisplayProps = {
  rm: RandomMonsterViewModel
  bookPart: string
}

export const RandomMonsterDisplay = ({
  rm,
  bookPart,
}: RandomMonsterDisplayProps) => {
  const t = useAppSelector(selectTranslateFunction(['monster', 'common']))

  const isDefinitiveArticle = (type: MonsterType): boolean => {
    switch (type) {
      case 'Grazing':
      case 'Predator':
      case 'AggressivePredator':
        return true
      default:
        return false
    }
  }
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
      return `${t('monster:TheMonsterHas')} ${translatedHeads.join('')}.`
    }

    const [lastHead, ...restOfHeads] = translatedHeads

    return `${t('monster:TheMonsterHas')} ${restOfHeads.join(
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
      return `${t('monster:TheMonsterHas')} ${translatedLimbs.join('')}.`
    }

    const [lastLimb, ...restOfLimbs] = [...translatedLimbs].reverse()

    return `${t('monster:TheMonsterHas')} ${restOfLimbs.join(
      ', ',
    )} & ${lastLimb}.`
  }

  const describeHome = (monsterHome: TranslationKey<'monster'>): string =>
    `${t('monster:LivesIn', {
      context: {
        home: t(monsterHome),
      },
    })}.`

  return (
    <div>
      <Stack.Vertical wrap={false}>
        <BookPageTitle subTitle={bookPart}>
          {t(
            `monster:Size.${rm.size}${
              isDefinitiveArticle(rm.type) ? '_def' : ''
            }` as TranslationKey<'monster'>,
          )}{' '}
          {t(`monster:Type.${rm.type}`)}
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
          <Typography variant="h3">{t(`common:Attribute`)}</Typography>
          <div className="grid grid-cols-2 gap-4">
            {rm.attributes.strength && (
              <MonsterAttribute
                key={`${rm.size}-strength`}
                values={rm.attributes.strength.values.map(withId)}
                label={t(`common:Attributes.${rm.attributes.strength.label}`)}
              />
            )}
            {rm.attributes.agility && (
              <MonsterAttribute
                key={`${rm.size}-agility`}
                values={rm.attributes.agility.values.map(withId)}
                label={t(`common:Attributes.${rm.attributes.agility.label}`)}
              />
            )}
          </div>
        </section>

        <section>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Typography variant="h3">
                {t(`monster:Movement.Movement`)}
              </Typography>
              <div>
                {t(`monster:Movement.${rm.movement.type}`)}{' '}
                {rm.movement.distance}{' '}
                {t(
                  rm.movement.distance === 1
                    ? 'monster:Movement.Zones_one'
                    : 'monster:Movement.Zones_other',
                )}
              </div>
            </div>
            {rm.armor && (
              <div>
                <Typography variant="h3">{t('monster:ArmorLabel')}</Typography>

                <div>
                  <span className="font-medium">
                    {t(`monster:Armor.${rm.armor.label}`)}:{' '}
                  </span>
                  {rm.armor.values.length}
                </div>
              </div>
            )}
          </div>
        </section>

        <section className="flex flex-wrap gap-x-8 gap-y-4 4xl:flex-col">
          <div className="md:w-full">
            <Typography variant="h3">{t(`monster:Skill`)}</Typography>
            {rm.skills.length === 0 ? (
              <div>{t('monster:Skills.None')}</div>
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
            <Typography variant="h3">{t(`monster:Trait.Traits`)}</Typography>
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
              {t(`monster:Weakness.Weakness`)}
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
              {t(`monster:Motivation.Motivation`)}
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
