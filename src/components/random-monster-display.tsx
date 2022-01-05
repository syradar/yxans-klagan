import React from 'react'
import { useTranslation } from 'react-i18next'
import 'twin.macro'
import { css } from 'twin.macro'
import { MonsterType, RandomMonsterViewModel } from '../models/monster.model'
import { DefinitionList } from './definition-list'
import { MonsterAttribute } from './monster-attributes'
import { SkillList } from './skill-list'
import { Pancake } from './stack'

export interface RandomMonsterDisplayProps {
  rm: RandomMonsterViewModel
}

export const RandomMonsterDisplay = ({ rm }: RandomMonsterDisplayProps) => {
  const { t } = useTranslation(['monsters', 'common'])

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

  return (
    <Pancake wrap={false}>
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

      <section tw="grid grid-cols-1 4xl:(gap-8 grid-cols-2)">
        <div tw="flex gap-8 flex-col mb-2 md:flex-row 4xl:(flex)">
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
        <div>
          <h3 tw="text-xl font-medium">{t(`Attack.Attacks`)}</h3>
          <table tw="w-full">
            <thead tw="hidden md:table-header-group">
              <tr tw="uppercase border-b-[1px] border-gray-500">
                <th tw="font-bold p-1 text-left">#</th>
                <th tw="font-bold p-1 text-left">{t(`Attack.Type`)}</th>
                <th tw="font-bold p-1 text-center">{t(`Attack.Attack`)}</th>
                <th tw="font-bold p-1 text-center">{t(`Attack.Damage`)}</th>
                <th tw="font-bold p-1 text-center">{t(`Attack.Range`)}</th>
                <th tw="font-bold p-1 text-left word-break[break-all]">
                  {t(`Attack.Description`)}
                </th>
              </tr>
            </thead>
            <tbody tw="grid sm:grid-cols-2  md:table-row-group">
              {rm.attacks.map((a, index) => (
                <tr
                  key={a.type}
                  tw="flex flex-col p-2 md:(table-row p-0) odd-of-type:bg-gray-200 md:odd-of-type:bg-gray-200 md:odd-of-type:border-r-0 sm:(odd-of-type:bg-transparent odd-of-type:border-r-[1px]) border-b-[1px] last-of-type:border-0 border-gray-500"
                  css={css`
                    @media (min-width: 640px) and (max-width: 767px) {
                      :nth-of-type(4n + 3) {
                        background-color: rgba(
                          229,
                          231,
                          235,
                          var(--tw-bg-opacity)
                        );
                      }
                      :nth-of-type(4n + 4) {
                        background-color: rgba(
                          229,
                          231,
                          235,
                          var(--tw-bg-opacity)
                        );
                      }
                    }
                  `}
                >
                  <td tw="hidden text-lg font-medium md:(table-cell py-1 px-2 text-base font-normal) ">
                    {index + 1}
                  </td>
                  <td tw="block text-lg font-medium md:(table-cell py-1 px-2 text-base font-normal) ">
                    <span tw="md:hidden">{index + 1}: </span>
                    {t(`Attack.${a.type}.Type`)}
                  </td>
                  <td tw="block md:(table-cell py-1 px-2) md:text-center">
                    <span tw="font-medium md:hidden">
                      {t(`Attack.Attack`)}:{' '}
                    </span>
                    {a.attack}
                  </td>
                  <td tw="block md:(table-cell py-1 px-2) md:text-center">
                    <span tw="font-medium md:hidden">
                      {t(`Attack.Damage`)}:{' '}
                    </span>
                    {a.damage}
                  </td>
                  <td tw="block md:(table-cell py-1 px-2) md:text-center whitespace-nowrap">
                    <span tw="font-medium md:hidden">
                      {t(`Attack.Range`)}:{' '}
                    </span>
                    {t(a.range, { ns: 'common' })}
                  </td>
                  <td tw="block md:(table-cell py-1 px-2) ">
                    {t(a.description)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </Pancake>
  )
}
