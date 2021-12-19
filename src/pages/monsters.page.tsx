import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { css } from 'twin.macro'
import { Button } from '../components/Button'
import { ListItem } from '../components/list-item'
import { MonsterAttribute } from '../components/monster-attributes'
import { PageHeader } from '../components/page-header'
import { Parchment } from '../components/parchment'
import { bookMonsters } from '../data/monster.data'
import { createMonstersViewModel } from '../functions/monster.functions'
import {
  createRandomMonster,
  createRandomMonsterViewModel,
} from '../functions/random-monster.functions'
import {
  MonsterViewModel,
  RandomMonsterViewModel,
} from '../models/monster.model'

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

  const hasSkills = ({ skills }: RandomMonsterViewModel): boolean => {
    return Object.values(skills).some((sv) => sv > 0)
  }

  const [randomMonster, setRandomMonster] = useState(
    createRandomMonsterViewModel(createRandomMonster(t)),
  )

  return (
    <div tw="flex flex-col gap-y-8 w-full ">
      <PageHeader>{t('Title')}</PageHeader>
      <div tw="grid lg:(grid-template-columns[25% 1fr]) gap-16">
        <div>
          <h3 tw="text-xl font-bold mb-2">{t(`BookMonsters`)}</h3>
          <Button
            isSmall
            onClick={() =>
              setRandomMonster(
                createRandomMonsterViewModel(createRandomMonster(t)),
              )
            }
          >
            Random Monster
          </Button>
          <ul
            tw="bg-gray-100 max-h-96 lg:max-h-[initial] xl:max-h-[initial] 2xl:max-h-[initial]"
            css={css`
              overflow-y: overlay;
            `}
          >
            {monsters.sort(monsterComparer).map((m) => (
              <ListItem key={m.name} onClick={() => setMonster(m)}>
                {t(`Monster.${m.name}`, { ns: 'common' })}
              </ListItem>
            ))}
          </ul>
        </div>

        <Parchment tw="lg:(w-3/4)" deps={[monster, i18n.language]}>
          <div tw="mb-16 flex flex-col gap-2">
            <h2 tw="text-4xl mb-2" className="yx-heading">
              {randomMonster.size} {randomMonster.type}
            </h2>

            <div className="yx-prose">
              <p>
                {t('TheMonsterHas')} {randomMonster.description.head}
              </p>

              <p>{randomMonster.description.limbs}</p>

              <p>{t('LivesIn', { home: t(`Homes.${randomMonster.home}`) })}.</p>
            </div>
            <h3 tw="text-xl font-medium">{t(`Attribute`)}</h3>
            {randomMonster.attributes.strength && (
              <MonsterAttribute
                key={`${randomMonster.size}-strength`}
                values={[...randomMonster.attributes.strength.values]}
                label={t(
                  `Attributes.${randomMonster.attributes.strength.label}`,
                )}
              />
            )}
            {randomMonster.attributes.agility && (
              <MonsterAttribute
                key={`${randomMonster.size}-agility`}
                values={[...randomMonster.attributes.agility.values]}
                label={t(
                  `Attributes.${randomMonster.attributes.agility.label}`,
                )}
              />
            )}
            {randomMonster.armor && (
              <div>
                <h3 tw="text-xl font-medium">{t('ArmorLabel')}</h3>
                <MonsterAttribute
                  key={`${randomMonster.size}-armor`}
                  values={[...randomMonster.armor.values]}
                  label={t(`Armor.${randomMonster.armor.label}`)}
                />
              </div>
            )}

            <h3 tw="text-xl font-medium">{t(`Movement.Movement`)}</h3>
            <div>
              {t(`Movement.${randomMonster.movement.type}`)}{' '}
              {randomMonster.movement.distance}{' '}
              {t(`Movement.Zones`, {
                count: randomMonster.movement.distance,
              })}
            </div>

            <h3 tw="text-xl font-medium">{t(`Skill`)}</h3>
            {!hasSkills(randomMonster) ? (
              <div>No skills</div>
            ) : (
              <div>
                {randomMonster.skills.Melee > 0 && (
                  <div>
                    {t(`Skills.Melee`)} {randomMonster.skills.Melee}
                  </div>
                )}
                {randomMonster.skills.Stealth > 0 && (
                  <div>
                    {t(`Skills.Stealth`)} {randomMonster.skills.Stealth}
                  </div>
                )}
                {randomMonster.skills.Move > 0 && (
                  <div>
                    {t(`Skills.Move`)} {randomMonster.skills.Move}
                  </div>
                )}
                {randomMonster.skills.Scouting > 0 && (
                  <div>
                    {t(`Skills.Scouting`)} {randomMonster.skills.Scouting}
                  </div>
                )}
              </div>
            )}
          </div>
          <header tw="mb-4">
            <h2 tw="text-4xl mb-2" className="yx-heading">
              {t(`Monster.${monster.name}`, { ns: ['common'] })}
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
                values={[...monster.attributes.strength.values]}
                label={t(`Attributes.${monster.attributes.strength.label}`)}
              />
            )}
            {monster.attributes.agility && (
              <MonsterAttribute
                key={`${monster.name}-agility`}
                values={[...monster.attributes.agility.values]}
                label={t(`Attributes.${monster.attributes.agility.label}`)}
              />
            )}
            {monster.attributes.wits && (
              <MonsterAttribute
                key={`${monster.name}-wits`}
                values={[...monster.attributes.wits.values]}
                label={t(`Attributes.${monster.attributes.wits.label}`)}
              />
            )}
            {monster.attributes.empathy && (
              <MonsterAttribute
                key={`${monster.name}-empathy`}
                values={[...monster.attributes.empathy.values]}
                label={t(`Attributes.${monster.attributes.empathy.label}`)}
              />
            )}
          </div>
        </Parchment>
      </div>
    </div>
  )
}
