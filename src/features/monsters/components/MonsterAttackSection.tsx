import { ArrowPathIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'
import { ParchmentButton } from '../../../components/ParchmentButton'
import Stack from '../../../components/Stack'
import { Typography } from '../../../components/Typography'
import { getRandomInt } from '../../../functions/dice.functions'
import { getId } from '../../../models/utils.model'
import { useAppSelector } from '../../../store/store.hooks'
import { selectTranslateFunction } from '../../../store/translations/translation.slice'
import { CommunityMonsterViewModel } from '../community-monster.model'
import { RandomMonsterViewModel, MonsterViewModel } from '../monster.model'
import { MonsterAttack } from './MonsterAttack'

type MonsterAttackSectionProps = {
  // Añadimos MonsterViewModel y any para que no haya quejas de TypeScript
  como: CommunityMonsterViewModel | RandomMonsterViewModel | MonsterViewModel | any
}

export const MonsterAttackSection = ({ como }: MonsterAttackSectionProps) => {
  const t = useAppSelector(selectTranslateFunction(['monsters', 'common']))

  const [selectedAttack, setSeletecAttack] = useState<number | undefined>(
    undefined,
  )

  // Medida de seguridad: Si no hay ataques, no dibuja nada
  if (!como.attacks || como.attacks.length === 0) return null

  const rollAttack = () => {
    setSeletecAttack(undefined)
    setTimeout(() => {
      setSeletecAttack(getRandomInt(1, como.attacks.length))
    }, 100)
  }

  return (
    <Stack.Vertical>
      <div className="flex items-center gap-2">
        <Typography variant="h3">{t(`monsters:attack.attacks` as any)}</Typography>

        <ParchmentButton buttonType="ghost" small onPress={() => rollAttack()}>
          <ArrowPathIcon
            className={`size-5
    ${selectedAttack ? 'animate-[spin_250ms_ease-in-out_0.5]' : ''}
                `}
          />
          {t('monsters:attack.roll' as any)}
        </ParchmentButton>
      </div>
      <div className="grid gap-2 2xl:grid-cols-2">
        {como.attacks.map((a: any, index: number) => (
          <MonsterAttack
            key={a.type !== 'generic' ? a.type : `${a.type}-${getId()}`}
            selected={index + 1 === (selectedAttack ?? 0)}
            monsterViewModel={a}
            counter={index + 1}
          ></MonsterAttack>
        ))}
      </div>
    </Stack.Vertical>
  )
}
