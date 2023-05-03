import { MonsterAttackViewModel } from '../models/monster.model'
import { useAppSelector } from '../store/store.hooks'
import { selectTranslateFunction } from '../store/translations/translation.slice'
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
  const t = useAppSelector(selectTranslateFunction(['monster', 'common']))

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
        {counter}: {t(`monster:Attack.${m.type}.Type`)}
      </div>

      <div>
        {t(
          m.description,
          m.descriptionExtras
            ? {
                context: {
                  count: m.descriptionExtras.count.toString(),
                },
              }
            : undefined,
        )}
      </div>

      <Train distribute>
        <Stat label={t(`monster:Attack.Attack`)} size="small">
          {m.attack ? m.attack : '–'}
        </Stat>

        {!m.damage ? (
          <Stat label={t('monster:Attack.Damage.Damage')}>–</Stat>
        ) : (
          <>
            {m.damage.Blunt && (
              <Stat label={t('monster:Attack.Damage.Blunt')} size="small">
                {m.damage.Blunt}
              </Stat>
            )}
            {m.damage.Slash && (
              <Stat label={t('monster:Attack.Damage.Slash')} size="small">
                {m.damage.Slash}
              </Stat>
            )}
            {m.damage.Stab && (
              <Stat label={t('monster:Attack.Damage.Stab')} size="small">
                {m.damage.Stab}
              </Stat>
            )}
            {m.damage.Fear && (
              <Stat label={t('monster:Attack.Damage.Damage')} size="small">
                {t('monster:Attack.Damage.Fear')}
              </Stat>
            )}
            {m.damage.Disease && (
              <Stat label={t('monster:Attack.Damage.Disease')} size="small">
                {m.damage.Disease}
              </Stat>
            )}
            {m.damage.NonTypical && (
              <Stat label={t('monster:Attack.Damage.NonTypical')} size="small">
                {m.damage.NonTypical}
              </Stat>
            )}
            {m.damage.Poison && (
              <Stat label={t('monster:Attack.Damage.Poison')} size="small">
                <>
                  {t(`monster:Poisons.${m.damage.Poison.type}`)} (
                  {m.damage.Poison.potency})
                </>
              </Stat>
            )}
            {m.damage.Weapon && (
              <Stat label={t('monster:Attack.Damage.Damage')} size="small">
                {m.damage.Weapon}
              </Stat>
            )}
          </>
        )}

        <Stat label={t(`monster:Attack.Range`)}>{t(m.range)}</Stat>
      </Train>
    </Card>
  )
}
