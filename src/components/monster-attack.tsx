import { useTranslation } from 'react-i18next'
import { MonsterAttackViewModel } from '../models/monster.model'
import { Card } from './card'
import { Train } from './Stack'
import { Stat } from './Stat'

export type MonsterAttackProps = {
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
      extraCss={`
        flex flex-col gap-1 p-2 transition-colors
        ${selected ? 'bg-gray-200' : ''}
      `}
    >
      <div className="text-lg font-medium">
        {counter}: {t(`monsters:Attack.${m.type}.Type`)}
      </div>

      <div>
        {m.descriptionExtras
          ? (t(m.description, {
              ns: 'monsters',
              defaultValue: m.description,
              ...m.descriptionExtras,
            }) as string)
          : (t(m.description, {
              ns: 'monsters',
              defaultValue: m.description,
            }) as string)}
      </div>

      <Train distribute>
        <Stat label={t(`monsters:Attack.Attack`)} size="small">
          {m.attack ? m.attack : '–'}
        </Stat>

        {!m.damage ? (
          <Stat label={t('monsters:Attack.Damage.Damage')}>–</Stat>
        ) : (
          <>
            {m.damage.Blunt && (
              <Stat label={t('monsters:Attack.Damage.Blunt')} size="small">
                {m.damage.Blunt}
              </Stat>
            )}
            {m.damage.Slash && (
              <Stat label={t('monsters:Attack.Damage.Slash')} size="small">
                {m.damage.Slash}
              </Stat>
            )}
            {m.damage.Stab && (
              <Stat label={t('monsters:Attack.Damage.Stab')} size="small">
                {m.damage.Stab}
              </Stat>
            )}
            {m.damage.Fear && (
              <Stat label={t('monsters:Attack.Damage.Damage')} size="small">
                {t('monsters:Attack.Damage.Fear')}
              </Stat>
            )}
            {m.damage.Disease && (
              <Stat label={t('monsters:Attack.Damage.Disease')} size="small">
                {m.damage.Disease}
              </Stat>
            )}
            {m.damage.NonTypical && (
              <Stat label={t('monsters:Attack.Damage.NonTypical')} size="small">
                {m.damage.NonTypical}
              </Stat>
            )}
            {m.damage.Poison && (
              <Stat label={t('monsters:Attack.Damage.Poison')} size="small">
                <>
                  {t(`Poisons.${m.damage.Poison.type}`, {
                    ns: 'monsters',
                    defaultValue: '',
                  })}{' '}
                  ({m.damage.Poison.potency})
                </>
              </Stat>
            )}
            {m.damage.Weapon && (
              <Stat label={t('monsters:Attack.Damage.Damage')} size="small">
                {m.damage.Weapon}
              </Stat>
            )}
          </>
        )}

        <Stat label={t(`monsters:Attack.Range`)}>
          {t(m.range, { ns: 'common' })}
        </Stat>
      </Train>
    </Card>
  )
}
