import { useState } from 'react'
import { rollD6 } from '../functions/dice.functions'
import { withId } from '../functions/utils.functions'
import {
  MonsterDescriptionItemViewModel,
  MonsterType,
  RandomMonsterViewModel,
  monsterHomeLabels,
} from '../models/monster.model'
import { getId } from '../models/utils.model'
import { DefinitionList } from './definition-list'
import { MonsterAttack } from './monster-attack'
import { MonsterAttribute } from './monster-attributes'
import { SkillList } from './skill-list'
import { Pancake } from './Stack'
import { useAppSelector } from '../store/store.hooks'
import { selectTranslateFunction } from '../store/translations/translation.slice'
import { TranslationKey } from '../store/translations/translation.model'

export type RandomMonsterDisplayProps = {
  rm: RandomMonsterViewModel
}

export const RandomMonsterDisplay = ({ rm }: RandomMonsterDisplayProps) => {
  const t = useAppSelector(selectTranslateFunction(['monster', 'common']))
  const [selectedAttack, setSeletecAttack] = useState<number | undefined>(
    undefined,
  )

  const rollAttack = () => {
    setSeletecAttack(undefined)
    setTimeout(() => {
      setSeletecAttack(rollD6())
    }, 100)
  }

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
    <Pancake wrap={false}>
      <h2 className="yx-heading mb-2 text-4xl">
        {t(
          `monster:Size.${rm.size}${
            isDefinitiveArticle(rm.type) ? '_def' : ''
          }` as TranslationKey<'monster'>,
        )}{' '}
        {t(`monster:Type.${rm.type}`)}
      </h2>

      <div className="yx-prose mb-4 max-w-prose">
        <p>
          {[
            describeMonsterHeads(rm.description.head),
            describeMonsterLimbs(rm.description.limbs),
            describeHome(monsterHomeLabels[rm.home]),
          ].join(' ')}
        </p>
      </div>

      <section className="grid grid-cols-1 4xl:grid-cols-2 4xl:gap-8">
        <div className="mb-4 flex flex-col gap-8 md:flex-row 4xl:flex">
          <div className="flex-1">
            <h3 className="text-xl font-medium">{t(`common:Attribute`)}</h3>
            <div className="mb-2 sm:flex sm:gap-8 md:block">
              {rm.attributes.strength && (
                <div className="mb-2">
                  <MonsterAttribute
                    key={`${rm.size}-strength`}
                    values={rm.attributes.strength.values.map(withId)}
                    label={t(
                      `common:Attributes.${rm.attributes.strength.label}`,
                    )}
                  />
                </div>
              )}
              {rm.attributes.agility && (
                <div className="mb-2">
                  <MonsterAttribute
                    key={`${rm.size}-agility`}
                    values={rm.attributes.agility.values.map(withId)}
                    label={t(
                      `common:Attributes.${rm.attributes.agility.label}`,
                    )}
                  />
                </div>
              )}
            </div>
            <section className="flex flex-wrap gap-x-8 gap-y-4 4xl:flex-col">
              {rm.armor && (
                <div>
                  <h3 className="text-xl font-medium">
                    {t('monster:ArmorLabel')}
                  </h3>
                  <div>
                    <span className="font-medium">
                      {t(`monster:Armor.${rm.armor.label}`)}:{' '}
                    </span>
                    {rm.armor.values.length}
                  </div>
                </div>
              )}

              <div>
                <h3 className="text-xl font-medium">
                  {t(`monster:Movement.Movement`)}
                </h3>
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

              <div className="md:w-full">
                <h3 className="text-xl font-medium">{t(`monster:Skill`)}</h3>
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
          </div>

          <div className="grid flex-1 auto-rows-min grid-cols-2 gap-4 lg:grid-cols-none   lg:gap-4">
            <section>
              <h3 className="text-xl font-medium">
                {t(`monster:Trait.Traits`)}
              </h3>
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
            </section>
            <section>
              <h3 className="text-xl font-medium">
                {t(`monster:Weakness.Weakness`)}
              </h3>
              <DefinitionList
                definitions={[rm.weakness].map((w) => ({
                  name: t(w.name),
                  description: t(w.description),
                }))}
              ></DefinitionList>
            </section>
            <section>
              <h3 className="text-xl font-medium">
                {t(`monster:Motivation.Motivation`)}
              </h3>
              <DefinitionList
                definitions={[rm.motivation].map((m) => ({
                  name: t(m.name),
                  description: t(m.description),
                }))}
              ></DefinitionList>
            </section>
          </div>
        </div>
        <div>
          <Pancake>
            <div className="flex items-baseline gap-2">
              <h3 className="text-xl font-medium">
                {t(`monster:Attack.Attacks`)}
              </h3>
              <RollButton onClick={() => rollAttack()}>
                {t('monster:Attack.Roll')}
              </RollButton>
            </div>
            <div className="grid gap-2 md:grid-cols-2">
              {rm.attacks.map((a, index) => (
                <MonsterAttack
                  key={a.type !== 'Generic' ? a.type : `${a.type}-${getId()}`}
                  selected={index + 1 === selectedAttack ?? 0}
                  monsterViewModel={a}
                  counter={index + 1}
                ></MonsterAttack>
              ))}
            </div>
          </Pancake>
        </div>
      </section>
    </Pancake>
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
