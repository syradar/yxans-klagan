import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import 'twin.macro'
import tw, { styled } from 'twin.macro'
import { rollD6 } from '../functions/dice.functions'
import {
  MonsterDescriptionItemViewModel,
  MonsterType,
  RandomMonsterViewModel,
} from '../models/monster.model'
import { getId } from '../models/utils.model'
import { DefinitionList } from './definition-list'
import { MonsterAttack } from './monster-attack'
import { MonsterAttribute } from './monster-attributes'
import { SkillList } from './skill-list'
import { Pancake } from './Stack'

export interface RandomMonsterDisplayProps {
  rm: RandomMonsterViewModel
}

export const RandomMonsterDisplay = ({ rm }: RandomMonsterDisplayProps) => {
  const { t } = useTranslation(['monsters', 'common'])
  const [selectedAttack, setSeletecAttack] = useState<number | undefined>(
    undefined,
  )

  const rollAttack = () => {
    setSeletecAttack(undefined)
    setTimeout(() => {
      setSeletecAttack(rollD6())
    }, 100)
  }

  const getSizeContext = (type: MonsterType) => {
    switch (type) {
      case 'Grazing':
      case 'Predator':
      case 'AggressivePredator':
        return {
          context: 'def',
        }
      default:
        return {}
    }
  }
  const describeMonsterHeads = (
    heads: MonsterDescriptionItemViewModel[],
  ): string => {
    const translatedHeads = heads.map((h) =>
      h.count ? t(h.key, { count: h.count }) : t(h.key),
    )

    if (translatedHeads.length === 1) {
      return `${t('TheMonsterHas')} ${translatedHeads.join('')}.`
    }

    const [lastHead, ...restOfHeads] = translatedHeads

    return `${t('TheMonsterHas')} ${restOfHeads.join(', ')} & ${lastHead}.`
  }

  const describeMonsterLimbs = (
    limbs: MonsterDescriptionItemViewModel[],
  ): string => {
    const translatedLimbs = limbs.map((l) =>
      l.count ? t(`${l.key}_count`, { count: l.count }) : t(l.key),
    )

    if (translatedLimbs.length === 1) {
      return `${t('TheMonsterHas')} ${translatedLimbs.join('')}.`
    }

    const [lastLimb, ...restOfLimbs] = [...translatedLimbs].reverse()

    return `${t('TheMonsterHas')} ${restOfLimbs.join(', ')} & ${lastLimb}.`
  }

  const describeHome = (monsterHome: string): string =>
    `${t('LivesIn', { home: t(`Homes.${monsterHome}`) })}.`

  return (
    <Pancake wrap={false}>
      <h2 tw="text-4xl mb-2" className="yx-heading">
        {t(`Size.${rm.size}`, { ...getSizeContext(rm.type) })}{' '}
        {t(`Type.${rm.type}`)}
      </h2>

      <div className="yx-prose" tw="max-w-prose mb-4">
        <p>
          {[
            describeMonsterHeads(rm.description.head),
            describeMonsterLimbs(rm.description.limbs),
            describeHome(rm.home),
          ].join(' ')}
        </p>
      </div>

      <section tw="grid grid-cols-1 4xl:(gap-8 grid-cols-2)">
        <div tw="flex gap-8 flex-col mb-4 md:flex-row 4xl:(flex)">
          <div tw="flex-1">
            <h3 tw="text-xl font-medium">{t(`Attribute`)}</h3>
            <div tw="sm:(flex gap-8) md:block mb-2">
              {rm.attributes.strength && (
                <div tw="mb-2">
                  <MonsterAttribute
                    key={`${rm.size}-strength`}
                    values={[...rm.attributes.strength.values]}
                    label={t(`Attributes.${rm.attributes.strength.label}`, {
                      ns: 'common',
                    })}
                  />
                </div>
              )}
              {rm.attributes.agility && (
                <div tw="mb-2">
                  <MonsterAttribute
                    key={`${rm.size}-agility`}
                    values={[...rm.attributes.agility.values]}
                    label={t(`Attributes.${rm.attributes.agility.label}`, {
                      ns: 'common',
                    })}
                  />
                </div>
              )}
            </div>
            <section tw="flex flex-wrap gap-x-8 gap-y-4 4xl:flex-col">
              {rm.armor && (
                <div>
                  <h3 tw="text-xl font-medium">{t('ArmorLabel')}</h3>
                  <div>
                    <span tw="font-medium">
                      {t(`Armor.${rm.armor.label}`)}:{' '}
                    </span>
                    {rm.armor.values.length}
                  </div>
                </div>
              )}

              <div>
                <h3 tw="text-xl font-medium">{t(`Movement.Movement`)}</h3>
                <div>
                  {t(`Movement.${rm.movement.type}`)} {rm.movement.distance}{' '}
                  {t(`Movement.Zones`, {
                    count: rm.movement.distance,
                  })}
                </div>
              </div>

              <div tw="md:w-full">
                <h3 tw="text-xl font-medium">{t(`Skill`)}</h3>
                {rm.skills.length === 0 ? (
                  <div>{t('Skills.None')}</div>
                ) : (
                  <SkillList
                    skills={rm.skills
                      .map((s) => ({ ...s, name: t(s.name) }))
                      .sort((a, b) => a.name.localeCompare(b.name))}
                  ></SkillList>
                )}
              </div>
            </section>
          </div>

          <div tw="flex-1 grid grid-cols-2 gap-4 lg:(grid-cols-none auto-rows-min   gap-4)">
            <section>
              <h3 tw="text-xl font-medium">{t(`Trait.Traits`)}</h3>
              <DefinitionList
                definitions={rm.traits.map((trait) => ({
                  name: t(trait.name),
                  description: t(trait.description.key, {
                    count: trait.description.count,
                  }),
                }))}
              ></DefinitionList>
            </section>
            <section>
              <h3 tw="text-xl font-medium">{t(`Weakness.Weakness`)}</h3>
              <DefinitionList
                definitions={[rm.weakness].map((w) => ({
                  name: t(w.name),
                  description: t(w.description),
                }))}
              ></DefinitionList>
            </section>
            <section>
              <h3 tw="text-xl font-medium">{t(`Motivation.Motivation`)}</h3>
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
            <div tw="flex gap-2 items-baseline">
              <h3 tw="text-xl font-medium">{t(`Attack.Attacks`)}</h3>
              <RollButton onClick={() => rollAttack()}>
                {t('Attack.Roll')}
              </RollButton>
            </div>
            <div tw="grid gap-2 md:(grid-cols-2)">
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

export const RollButton = styled.button(() => [
  // The common button styles
  tw`px-1 py-0.5 leading-none font-bold uppercase select-none tracking-wide focus:outline-none transform duration-75`,
  tw`border-2 border-black rounded-none`,
  // Use the variant grouping feature to add variants to multiple classes
  tw`pointer-fine:hover:(bg-red-500 border-red-500 text-black) `,
  tw`bg-white text-black`,
  tw`text-sm`,
])
