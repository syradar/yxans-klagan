import { nanoid } from 'nanoid'
import { ComponentPropsWithoutRef, useState } from 'react'
import { Train } from '../../../components/Stack'
import { Stat } from '../../../components/Stat'
import { Typography } from '../../../components/Typography'
import { getRandomInt } from '../../../functions/dice.functions'
import { useAppSelector } from '../../../store/store.hooks'
import { selectTranslateFunction } from '../../../store/translations/translation.slice'
import { CommunityMonsterAttackType } from '../community-monster.model'
import { MonsterAttackViewModel } from '../monster.model'

export type MonsterAttackProps = ComponentPropsWithoutRef<'div'> & {
  monsterViewModel: MonsterAttackViewModel<CommunityMonsterAttackType>
  counter: number
  selected?: boolean
}

export const MonsterAttack = ({
  monsterViewModel: m,
  counter,
  selected = false,
}: MonsterAttackProps) => {
  const t = useAppSelector(selectTranslateFunction(['monster', 'common']))

  const [options] = useState({
    baseFrequency: getRandomInt(1, 10) / 100,
    numOctaves: getRandomInt(1, 5),
    scale: getRandomInt(1, 5),
    id: nanoid(),
  })

  return (
    <div>
      <div className="relative flex-1">
        <div
          className={`absolute inset-0 rounded-lg  border-8  transition-colors
                        ${
                          selected
                            ? 'border-amber-900/25 '
                            : 'border-transparent'
                        }`}
          style={{ filter: `url(#filter-${options.id})` }}
        ></div>
        <div className="flex flex-col p-4">
          <Typography variant="h4">
            {counter}: {t(`monster:Attack.${m.type}.Type`)}
          </Typography>

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

          <MonsterAttackStats monster={m} />
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        height="0"
        width="0"
      >
        <defs>
          <filter id={`filter-${options.id}`} height="1.4" width="1.4">
            <feTurbulence
              baseFrequency={options.baseFrequency}
              numOctaves={options.numOctaves}
              type="fractalNoise"
              result="turbulence"
            />
            <feDisplacementMap
              in2="turbulence"
              scale={options.scale}
              result="displacement"
              xChannelSelector="R"
              in="SourceGraphic"
            />
            <feMergeNode
              in2="SourceGraphic"
              in="displacement"
              operator="atop"
              result="fbSourceGraphic"
            />
          </filter>
        </defs>
      </svg>
    </div>
  )
}

type MonsterAttackStatsProps = {
  monster: MonsterAttackViewModel<CommunityMonsterAttackType>
}
const MonsterAttackStats = ({
  monster: { attack, damage, range },
}: MonsterAttackStatsProps) => {
  const t = useAppSelector(selectTranslateFunction(['monster', 'common']))

  return (
    <Train distribute wrap>
      <Stat label={t(`monster:Attack.Attack`)} size="small">
        {attack ? attack : '–'}
      </Stat>

      {!damage ? (
        <Stat label={t('monster:Attack.Damage.Damage')}>–</Stat>
      ) : (
        <>
          {damage.Blunt && (
            <Stat label={t('monster:Attack.Damage.Blunt')} size="small">
              {damage.Blunt}
            </Stat>
          )}
          {damage.Slash && (
            <Stat label={t('monster:Attack.Damage.Slash')} size="small">
              {damage.Slash}
            </Stat>
          )}
          {damage.Stab && (
            <Stat label={t('monster:Attack.Damage.Stab')} size="small">
              {damage.Stab}
            </Stat>
          )}
          {damage.Fear && (
            <Stat label={t('monster:Attack.Damage.Damage')} size="small">
              {t('monster:Attack.Damage.Fear')}
            </Stat>
          )}
          {damage.Disease && (
            <Stat label={t('monster:Attack.Damage.Disease')} size="small">
              {damage.Disease}
            </Stat>
          )}
          {damage.NonTypical && (
            <Stat label={t('monster:Attack.Damage.NonTypical')} size="small">
              {damage.NonTypical}
            </Stat>
          )}
          {damage.Poison && (
            <Stat label={t('monster:Attack.Damage.Poison')} size="small">
              <>
                {t(`monster:Poisons.${damage.Poison.type}`)} (
                {damage.Poison.potency})
              </>
            </Stat>
          )}
          {damage.Weapon && (
            <Stat label={t('monster:Attack.Damage.Damage')} size="small">
              {damage.Weapon}
            </Stat>
          )}
        </>
      )}
      <Stat label={t(`monster:Attack.Range`)}>{t(range)}</Stat>
    </Train>
  )
}
