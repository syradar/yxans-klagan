import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { css } from 'twin.macro'
import { Button } from '../components/Button'
import { ListItem } from '../components/list-item'
import { MonsterDisplay } from '../components/monster-display'
import { PageHeader } from '../components/page-header'
import { Parchment } from '../components/parchment'
import { RandomMonsterDisplay } from '../components/random-monster-display'
import { bookMonsters } from '../data/monster.data'
import {
  createMonstersViewModel,
  monsterComparer,
} from '../functions/monster.functions'
import {
  createRandomMonster,
  createRandomMonsterViewModel,
} from '../functions/random-monster.functions'
import { MonsterViewModel } from '../models/monster.model'

export const MonstersPage = () => {
  const { t, i18n } = useTranslation(['monsters', 'common'])
  const monsters = bookMonsters
    .map(createMonstersViewModel)
    .sort(monsterComparer(t))
  const [monster, setMonster] = useState(monsters[0])

  const [showRandomMonster, setShowRandomMonster] = useState(true)

  const [randomMonster, setRandomMonster] = useState(
    createRandomMonsterViewModel(createRandomMonster(t), t),
  )

  const selectMonster = (m: MonsterViewModel) => {
    setMonster(m)
    setShowRandomMonster(false)
  }

  const generateRandomMonster = () => {
    setRandomMonster(createRandomMonsterViewModel(createRandomMonster(t), t))
    setShowRandomMonster(true)
  }

  useEffect(() => {
    monsters.sort(monsterComparer(t))
  }, [i18n.language])

  return (
    <div tw="flex flex-col gap-y-8 w-full ">
      <PageHeader>{t('Title')}</PageHeader>
      <div tw="grid lg:(grid-template-columns[25% 1fr]) gap-16">
        <div>
          <h3 tw="text-xl font-bold mb-2">{t(`GenerateMonster`)}</h3>
          <Button tw="mb-4" isSmall onClick={() => generateRandomMonster()}>
            Random Monster
          </Button>
          <h3 tw="text-xl font-bold mb-2">{t(`BookMonsters`)}</h3>
          <ul
            tw="bg-gray-100 max-h-96 lg:max-h-[initial] xl:max-h-[initial] 2xl:max-h-[initial]"
            css={css`
              overflow-y: overlay;
            `}
          >
            {monsters.map((m) => (
              <ListItem key={m.name} onClick={() => selectMonster(m)}>
                {t(`Monster.${m.name}`, { ns: 'common' })}
              </ListItem>
            ))}
          </ul>
        </div>

        <Parchment
          tw="lg:(w-3/4)"
          deps={[monster, randomMonster, i18n.language]}
        >
          {showRandomMonster ? (
            <RandomMonsterDisplay rm={randomMonster}></RandomMonsterDisplay>
          ) : (
            <MonsterDisplay m={monster}></MonsterDisplay>
          )}
        </Parchment>
      </div>
    </div>
  )
}
