import React from 'react'
import { useTranslation } from 'react-i18next'
import 'twin.macro'
import { MonsterType, RandomMonsterViewModel } from '../models/monster.model'
import { DefinitionList } from './definition-list'
import { MonsterAttribute } from './monster-attributes'
import { SkillList } from './skill-list'

export interface RandomMonsterDisplayProps {
  rm: RandomMonsterViewModel
}

export const RandomMonsterDisplay = ({ rm }: RandomMonsterDisplayProps) => {
  const { t } = useTranslation(['monsters', 'common'])

  const getSizeContext = (t: MonsterType) => {
    switch (t) {
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

  return (
    <div tw="flex flex-col gap-2">
      <h2 tw="text-4xl mb-2" className="yx-heading">
        {t(`Size.${rm.size}`, { ...getSizeContext(rm.type) })}{' '}
        {t(`Type.${rm.type}`)}
      </h2>

      <div className="yx-prose" tw="max-w-prose mb-4">
        <p>
          {t('TheMonsterHas')} {rm.description.head}. {rm.description.limbs}.{' '}
          {t('LivesIn', { home: t(`Homes.${rm.home}`) })}.
        </p>
      </div>

      <div tw="flex gap-8 flex-col md:flex-row">
        <div tw="flex-1">
          <h3 tw="text-xl font-medium">{t(`Attribute`)}</h3>
          {rm.attributes.strength && (
            <div tw="mb-2">
              <MonsterAttribute
                key={`${rm.size}-strength`}
                values={[...rm.attributes.strength.values]}
                label={t(`Attributes.${rm.attributes.strength.label}`)}
              />
            </div>
          )}
          {rm.attributes.agility && (
            <div tw="mb-2">
              <MonsterAttribute
                key={`${rm.size}-agility`}
                values={[...rm.attributes.agility.values]}
                label={t(`Attributes.${rm.attributes.agility.label}`)}
              />
            </div>
          )}
          {rm.armor && (
            <div tw="mb-2">
              <h3 tw="text-xl font-medium">{t('ArmorLabel')}</h3>
              <div tw="font-medium">
                {rm.armor.label}: {rm.armor.values.length}
              </div>
            </div>
          )}

          <h3 tw="text-xl font-medium">{t(`Movement.Movement`)}</h3>
          <div tw="mb-2">
            {t(`Movement.${rm.movement.type}`)} {rm.movement.distance}{' '}
            {t(`Movement.Zones`, {
              count: rm.movement.distance,
            })}
          </div>

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
        <div tw="flex-1 flex flex-col gap-4">
          <section>
            <h3 tw="text-xl font-medium">{t(`Trait.Traits`)}</h3>
            <DefinitionList
              definitions={rm.traits.map((trait) => ({
                name: t(trait.name),
                description: trait.description,
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
      <h3 tw="text-xl font-medium">{t(`Attack.Attacks`)}</h3>
      <table tw="w-full">
        <thead>
          <tr tw="uppercase border-b-[1px] border-gray-500">
            <th tw="font-bold p-1 text-left">{t(`Attack.Type`)}</th>
            <th tw="font-bold p-1 text-center">{t(`Attack.Attack`)}</th>
            <th tw="font-bold p-1 text-center">{t(`Attack.Damage`)}</th>
            <th tw="font-bold p-1 text-center">{t(`Attack.Range`)}</th>
            <th tw="font-bold p-1 text-left word-break[break-all]">
              {t(`Attack.Description`)}
            </th>
          </tr>
        </thead>
        <tbody>
          {rm.attacks.map((a) => (
            <tr
              key={a.type}
              tw="border-b-[1px] border-gray-500 odd-of-type:bg-gray-200"
            >
              <td tw="py-1 px-2">{t(`Attack.${a.type}.Type`)}</td>
              <td tw="py-1 px-2 text-center">{a.attack}</td>
              <td tw="py-1 px-2 text-center">{a.damage}</td>
              <td tw="py-1 px-2 text-center whitespace-nowrap">
                {t(a.range, { ns: 'common' })}
              </td>
              <td tw="py-1 px-2 word-break[break-all]">{t(a.description)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
