import { useEffect, useState } from 'react'
import { Group } from '../components/group'
import { List } from '../components/list'
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
import { useAppSelector } from '../store/store.hooks'
import {
  selectCurrentLanguage,
  selectTranslateFunction,
} from '../store/translations/translation.slice'

export const MonstersPage = () => {
  const t = useAppSelector(selectTranslateFunction(['monster', 'common']))
  const currentLanguage = useAppSelector(selectCurrentLanguage)
  const monsters = bookMonsters
    .map(createMonstersViewModel)
    .sort(monsterComparer(t))
  const [monster, setMonster] = useState(monsters[0])

  const [showRandomMonster, setShowRandomMonster] = useState(true)

  const [randomMonster, setRandomMonster] = useState(
    createRandomMonsterViewModel(),
  )

  const selectMonster = (m: MonsterViewModel) => {
    setMonster(m)
    setShowRandomMonster(false)
  }

  const generateRandomMonster = () => {
    setRandomMonster(createRandomMonsterViewModel())
    setShowRandomMonster(true)
  }

  useEffect(() => {
    monsters.sort(monsterComparer(t))
  }, [currentLanguage, monsters, t])

  return (
    <div className="flex w-full flex-col gap-y-8 ">
      <PageHeader>{t('monster:Title')}</PageHeader>
      <div className="grid gap-16 lg:grid-cols-fr-1/3">
        <div>
          <List>
            <Group
              marginBottom
              label={t(`monster:GenerateMonster`)}
              open={true}
            >
              <ul>
                <li className="border border-b-0 border-gray-300 last:border-b">
                  <ListItemButton onClick={() => generateRandomMonster()}>
                    {t('monster:RandomMonster')}
                  </ListItemButton>
                </li>
              </ul>
            </Group>
            <Group label={t(`monster:BookMonsters`)} open={true}>
              <ul>
                {monsters.map((m) => (
                  <li
                    key={m.name}
                    className="border border-b-0 border-gray-300 last:border-b"
                  >
                    <ListItemButton onClick={() => selectMonster(m)}>
                      {t(m.name)}
                    </ListItemButton>
                  </li>
                ))}
              </ul>
            </Group>
          </List>
        </div>

        <div className="">
          <Parchment>
            {showRandomMonster ? (
              <RandomMonsterDisplay rm={randomMonster}></RandomMonsterDisplay>
            ) : (
              <MonsterDisplay m={monster}></MonsterDisplay>
            )}
          </Parchment>
        </div>
      </div>
    </div>
  )
}

export default MonstersPage
