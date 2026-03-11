import { BookPageTitle } from '../../../components/BookPageTitle'
import { SeparatedComponents } from '../../../components/SeparatedComponents'
import Stack from '../../../components/Stack'
import { Typography } from '../../../components/Typography'
import { SkillList } from '../../../components/skill-list'
import { useAppSelector } from '../../../store/store.hooks'
import { selectTranslateFunction } from '../../../store/translations/translation.slice'
import { CommunityMonsterViewModel } from '../community-monster.model'
import {
  monsterArmorTypeTranslationDict,
  movementTypeTranslationDict,
} from '../monster.model'
import { MonsterAttributeGrid } from './MonsterAttributeGrid'

export type CommunityMonsterDisplayProps = {
  como: CommunityMonsterViewModel
  bookPart: string
}

export const CommunityMonsterDisplay = ({
  como,
  bookPart,
}: CommunityMonsterDisplayProps) => {
  const t = useAppSelector(selectTranslateFunction(['monsters', 'common']))

  return (
    <div>
      <Stack.Vertical wrap={false}>
        <BookPageTitle subTitle={bookPart}>{t(como.name)}</BookPageTitle>

        {como.credits.length > 0 ? (
          <div>
            {t('monsters:community_monster.created_by')}{' '}
            <SeparatedComponents
              components={como.credits.map((credit) =>
                credit.link ? (
                  <a
                    key={credit.id}
                    href={credit.link}
                    className="hover:text-red-700 hover:underline"
                  >
                    {credit.name}
                  </a>
                ) : (
                  <span key={credit.id}>{credit.name}</span>
                ),
              )}
              separator={<span>{', '}</span>}
            />
          </div>
        ) : null}

        <Typography variant="body" parchment>
          {t(como.description)}
        </Typography>

        <section>
          <Typography variant="h3">{t(`common:attribute`)}</Typography>
          <MonsterAttributeGrid attributes={como.attributes} />
        </section>

        <section className="grid grid-cols-2 gap-4">
          <div>
            <Typography variant="h3">
              {t(`monsters:movement.movement`)}
            </Typography>
            <div>
              {t(movementTypeTranslationDict[como.movement.type])}{' '}
              {como.movement.distance}{' '}
              {t(
                como.movement.distance === 1
                  ? 'monsters:movement.zones_one'
                  : 'monsters:movement.zones_other',
              )}
            </div>
          </div>

          {como.armor && (
            <div>
              <Typography variant="h3">{t('monsters:armor_label')}</Typography>
              <div>
                <span className="font-medium">
                  {t(monsterArmorTypeTranslationDict[como.armor.label])}:{' '}
                </span>
                {como.armor.values.length}
              </div>
            </div>
          )}
        </section>
        <section>
          <div className="md:w-full">
            <Typography variant="h3">{t(`monsters:skill`)}</Typography>
            {como.skills.length === 0 ? (
              <div>{t('monsters:skills.none')}</div>
            ) : (
              <SkillList
                skills={
                  como.skills
                    .map((s) => ({
                      value: s.value,
                      name: t(s.name),
                    }))
                    .sort((a, b) => a.name.localeCompare(b.name)) as {
                    name: string
                    value: number
                  }[]
                }
              ></SkillList>
            )}
          </div>
        </section>
      </Stack.Vertical>
    </div>
  )
}

type RollButtonProps = {
  onClick: () => void
  children: React.ReactNode
}
export const RollButton = ({ onClick, children }: RollButtonProps) => (
  <button
    onClick={onClick}
    className="pointer-fine:hover:bg-red-500 pointer-fine:hover:border-red-500 pointer-fine:hover:text-black select-none rounded-none border-2 border-black bg-white px-1 py-0.5 text-sm font-bold uppercase leading-none tracking-wide text-black duration-75 focus:outline-none"
    type="button"
  >
    {children}
  </button>
)
