import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { css } from 'twin.macro'
import { ListItem } from '../components/list-item'
import { MonsterAttribute } from '../components/monster-attributes'
import { PageHeader } from '../components/page-header'
import { Parchment } from '../components/parchment'
import { bookMonsters } from '../data/monster.data'
import { createMonstersViewModel } from '../functions/monster.functions'
import { MonsterViewModel } from '../models/monster.model'

export const MonstersPage = () => {
  const { t, i18n } = useTranslation(['monsters', 'common'])
  const monsters = createMonstersViewModel(bookMonsters)
  const [monster, setMonster] = useState(monsters[0])
  const monsterComparer = (
    a: MonsterViewModel,
    b: MonsterViewModel,
  ): number => {
    const ma = t(`Monster.${a.name}`)
    const mb = t(`Monster.${b.name}`)

    if (ma < mb) {
      return -1
    }
    if (ma > mb) {
      return 1
    }

    return 0
  }

  return (
    <div tw="flex flex-col gap-y-8 w-full ">
      <PageHeader>{t('Title')}</PageHeader>
      <div tw="grid lg:(grid-template-columns[25% 1fr]) gap-16">
        <div>
          <h3 tw="text-xl font-bold mb-2">{t(`BookMonsters`)}</h3>
          <ul
            tw="bg-gray-100 max-h-96 lg:max-h-[initial] xl:max-h-[initial] 2xl:max-h-[initial]"
            css={css`
              overflow-y: overlay;
            `}
          >
            {monsters.sort(monsterComparer).map((m) => (
              <ListItem key={m.name} onClick={() => setMonster(m)}>
                {t(`Monster.${m.name}`)}
              </ListItem>
            ))}
          </ul>
        </div>

        <Parchment tw="lg:(w-3/4)" deps={[monster, i18n.language]}>
          <header tw="mb-4">
            <h2 tw="text-4xl mb-2" className="yx-heading">
              {t(`Monster.${monster.name}`)}
            </h2>
            {monster.pageReference && (
              <div>
                {t('Page', { ns: 'common' })}: {monster.pageReference}{' '}
                {t('GMBook', { ns: 'common' })}
              </div>
            )}
          </header>
          <h3 tw="text-xl font-bold">{t(`Attribute`)}</h3>
          <div tw="flex flex-col gap-2">
            {monster.attributes.strength && (
              <MonsterAttribute
                key={`${monster.name}-strength`}
                attribute={{ ...monster.attributes.strength }}
              />
            )}
            {monster.attributes.agility && (
              <MonsterAttribute
                key={`${monster.name}-agility`}
                attribute={{ ...monster.attributes.agility }}
              />
            )}
            {monster.attributes.wits && (
              <MonsterAttribute
                key={`${monster.name}-wits`}
                attribute={{ ...monster.attributes.wits }}
              />
            )}
            {monster.attributes.empathy && (
              <MonsterAttribute
                key={`${monster.name}-empathy`}
                attribute={{ ...monster.attributes.empathy }}
              />
            )}
          </div>
        </Parchment>
      </div>
    </div>
  )
}
