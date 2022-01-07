import React from 'react'
import { useTranslation } from 'react-i18next'
import 'twin.macro'
import tw from 'twin.macro'
import { MonsterAttackViewModel } from '../models/monster.model'
import { Card } from './card'
import { Train } from './stack'
import { Stat } from './stat'

export interface MonsterAttackProps {
  monsterViewModel: MonsterAttackViewModel
  counter: number
  selected?: boolean
}

export const MonsterAttack = ({
  monsterViewModel: m,
  counter,
  selected = false,
}: MonsterAttackProps) => {
  const { t } = useTranslation(['monsters', 'common'])

  return (
    <Card
      thin
      subtle
      tw="flex flex-col gap-1 p-2 transition-colors"
      css={[selected ? tw`bg-gray-200` : tw``]}
    >
      <div tw="text-lg font-medium">
        {counter}: {t(`Attack.${m.type}.Type`)}
      </div>

      <div>
        {!m.descriptionExtras
          ? t(m.description)
          : t(m.description, { ...m.descriptionExtras })}
      </div>

      <Train distribute>
        <Stat label={t(`Attack.Attack`)} size="small">
          {m.attack ? m.attack : '–'}
        </Stat>

        {!m.damage ? (
          <Stat label={t('Attack.Damage.Damage')}>–</Stat>
        ) : (
          <>
            {m.damage.Blunt && (
              <Stat label={t('Attack.Damage.Blunt')} size="small">
                {m.damage.Blunt}
              </Stat>
            )}
            {m.damage.Slash && (
              <Stat label={t('Attack.Damage.Slash')} size="small">
                {m.damage.Slash}
              </Stat>
            )}
            {m.damage.Stab && (
              <Stat label={'Attack.Damage.Stab'} size="small">
                {m.damage.Stab}
              </Stat>
            )}
            {m.damage.Fear && (
              <Stat label={t('Attack.Damage.Damage')} size="small">
                {t('Attack.Damage.Fear')}
              </Stat>
            )}
            {m.damage.Disease && (
              <Stat label={t('Attack.Damage.Disease')} size="small">
                {m.damage.Disease}
              </Stat>
            )}
            {m.damage.NonTypical && (
              <Stat label={t('Attack.Damage.NonTypical')} size="small">
                {m.damage.NonTypical}
              </Stat>
            )}
            {m.damage.Poison && (
              <Stat label={t('Attack.Damage.Poison')} size="small">
                {t(`Poisons.${m.damage.Poison.type}`)} (
                {m.damage.Poison.potency})
              </Stat>
            )}
            {m.damage.Weapon && (
              <Stat label={t('Attack.Damage.Damage')} size="small">
                {m.damage.Weapon}
              </Stat>
            )}
          </>
        )}

        <Stat label={t(`Attack.Range`)}>{t(m.range, { ns: 'common' })}</Stat>
      </Train>
    </Card>
  )
}
