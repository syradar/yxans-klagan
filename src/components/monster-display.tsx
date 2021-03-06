import React from 'react'
import { useTranslation } from 'react-i18next'
import 'twin.macro'
import { MonsterViewModel } from '../models/monster.model'
import { MonsterAttribute } from './monster-attributes'
import { Pancake } from './Stack'

export interface MonsterDisplayProps {
  m: MonsterViewModel
}

export const MonsterDisplay = ({ m }: MonsterDisplayProps) => {
  const { t } = useTranslation(['monsters', 'common'])

  return (
    <div>
      <header tw="mb-4">
        <h2 tw="text-4xl mb-2" className="yx-heading">
          {t(`Monster.${m.name}`, { ns: ['common'] })}
        </h2>
        {m.pageReference && (
          <div>
            {t('Page', { ns: 'common' })}: {m.pageReference}{' '}
            {t('GMBook', { ns: 'common' })}
          </div>
        )}
      </header>
      <h3 tw="text-xl font-bold">{t(`Attribute`)}</h3>

      <Pancake spacing="small">
        {m.attributes.strength && (
          <MonsterAttribute
            key={`${m.name}-strength`}
            values={[...m.attributes.strength.values]}
            label={t(`Attributes.${m.attributes.strength.label}`, {
              ns: 'common',
            })}
          />
        )}
        {m.attributes.agility && (
          <MonsterAttribute
            key={`${m.name}-agility`}
            values={[...m.attributes.agility.values]}
            label={t(`Attributes.${m.attributes.agility.label}`, {
              ns: 'common',
            })}
          />
        )}
        {m.attributes.wits && (
          <MonsterAttribute
            key={`${m.name}-wits`}
            values={[...m.attributes.wits.values]}
            label={t(`Attributes.${m.attributes.wits.label}`, { ns: 'common' })}
          />
        )}
        {m.attributes.empathy && (
          <MonsterAttribute
            key={`${m.name}-empathy`}
            values={[...m.attributes.empathy.values]}
            label={t(`Attributes.${m.attributes.empathy.label}`, {
              ns: 'common',
            })}
          />
        )}
      </Pancake>
    </div>
  )
}
