import { nanoid } from 'nanoid'
import { ComponentPropsWithoutRef, useState } from 'react'
import { Train } from '../../../components/Stack'
import { Stat } from '../../../components/Stat'
import { Typography } from '../../../components/Typography'
import { getRandomInt } from '../../../functions/dice.functions'
import { useAppSelector } from '../../../store/store.hooks'
import { selectTranslateFunction } from '../../../store/translations/translation.slice'
import { CommunityMonsterAttackType } from '../community-monster.model'
import {
  MonsterAttackViewModel,
  monsterAttackTypeTranslationDict,
  poisonTypeTranslationDict,
} from '../monster.model'

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
  const t = useAppSelector(selectTranslateFunction(['monsters', 'common']))

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
            {counter}: {t(monsterAttackTypeTranslationDict[m.type])}
          </Typography>

          <div className="mb-2">
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

          {/* CORRECCIÓN AQUÍ: Usamos 'm' en lugar de 'monster' */}
          <MonsterAttackStats monsters={m} />
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
  monsters: MonsterAttackViewModel<CommunityMonsterAttackType>
}
const MonsterAttackStats = ({
  monsters: { attack, damage, range },
}: MonsterAttackStatsProps) => {
  const t = useAppSelector(selectTranslateFunction(['monsters', 'common']))

  return (
    <Train distribute wrap>
      <Stat label={t(`monsters:attack.attack`)} size="small">
        {attack ? attack : '–'}
      </Stat>

      {!damage ? (
        <Stat label={t('monsters:attack.damage.damage')}>–</Stat>
      ) : (
        <>
          {damage.blunt && (
            <Stat label={t('monsters:attack.damage.blunt')} size="small">
              {damage.blunt}
            </Stat>
          )}
          {damage.slash && (
            <Stat label={t('monsters:attack.damage.slash')} size="small">
              {damage.slash}
            </Stat>
          )}
          {damage.stab && (
            <Stat label={t('monsters:attack.damage.stab')} size="small">
              {damage.stab}
            </Stat>
          )}
          {damage.fear && (
            <Stat label={t('monsters:attack.damage.damage')} size="small">
              {t('monsters:attack.damage.fear')}
            </Stat>
          )}
          {damage.disease && (
            <Stat label={t('monsters:attack.damage.disease')} size="small">
              {damage.disease}
            </Stat>
          )}
          {damage.non_typical && (
            <Stat label={t('monsters:attack.damage.non_typical')} size="small">
              {damage.non_typical}
            </Stat>
          )}
          {damage.poison && (
            <Stat label={t('monsters:attack.damage.poison')} size="small">
              <>
                {t(poisonTypeTranslationDict[damage.poison.type])} (
                {damage.poison.potency})
              </>
            </Stat>
          )}
          {damage.weapon && (
            <Stat label={t('monsters:attack.damage.damage')} size="small">
              {damage.weapon}
            </Stat>
          )}
        </>
      )}
      <Stat label={t(`monsters:attack.range`)}>{t(range)}</Stat>
    </Train>
  )
}
