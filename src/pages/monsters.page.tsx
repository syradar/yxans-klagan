import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import 'twin.macro'
import { List } from '../components/list'
import { Group } from '../components/group'
import { ListItemButton } from '../components/list-item'
import { MonsterDisplay } from '../components/monster-display'
import { PageHeader } from '../components/page-header'
import { Parchment } from '../components/parchment'
import { RandomMonsterDisplay } from '../components/random-monster-display'
import { bookMonsters } from '../data/monster.data'
import {
  createMonstersViewModel,
  monsterComparer,
} from '../functions/monster.functions'
import { createRandomMonsterViewModel } from '../functions/random-monster.functions'
import { MonsterViewModel } from '../models/monster.model'

export const MonstersPage = () => {
  const { t, i18n } = useTranslation(['monsters', 'common'])
  const monsters = bookMonsters
    .map(createMonstersViewModel)
    .sort(monsterComparer(t))
  const [monster, setMonster] = useState(monsters[0])

  const [showRandomMonster, setShowRandomMonster] = useState(true)

  const [randomMonster, setRandomMonster] = useState(
    createRandomMonsterViewModel(t),
  )

  const selectMonster = (m: MonsterViewModel) => {
    setMonster(m)
    setShowRandomMonster(false)
  }

  const generateRandomMonster = () => {
    setRandomMonster(createRandomMonsterViewModel(t))
    setShowRandomMonster(true)
  }

  useEffect(() => {
    monsters.sort(monsterComparer(t))
  }, [i18n.language])

  return (
    <div tw="flex flex-col gap-y-8 w-full ">
      <PageHeader>{t('Title')}</PageHeader>
      <div tw="grid lg:(grid-template-columns[1fr 3fr]) gap-16">
        <div>
          <List>
            <Group tw="mb-8" label={t(`GenerateMonster`)} open={true}>
              <ul>
                <li tw="border border-gray-300 border-b-0 last:border-b">
                  <ListItemButton onClick={() => generateRandomMonster()}>
                    {t('RandomMonster')}
                  </ListItemButton>
                </li>
              </ul>
            </Group>
            <Group label={t(`BookMonsters`)} open={true}>
              <ul>
                {monsters.map((m) => (
                  <li
                    key={m.name}
                    tw="border border-gray-300 border-b-0 last:border-b"
                  >
                    <ListItemButton onClick={() => selectMonster(m)}>
                      {t(`Monster.${m.name}`, { ns: 'common' })}
                    </ListItemButton>
                  </li>
                ))}
              </ul>
            </Group>
          </List>
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
