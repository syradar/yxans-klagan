import { BookPageTitle } from '../../../components/BookPageTitle'
import Stack from '../../../components/Stack'
import { Typography } from '../../../components/Typography'
import { SkillList } from '../../../components/skill-list'
import { withId } from '../../../functions/utils.functions'
import { useAppSelector } from '../../../store/store.hooks'
import { selectTranslateFunction } from '../../../store/translations/translation.slice'
import { CommunityMonsterViewModel } from '../community-monster.model'
import { MonsterAttribute } from './MonsterAttribute'

export type CommunityMonsterDisplayProps = {
  como: CommunityMonsterViewModel
  bookPart: string
}

export const CommunityMonsterDisplay = ({
  como,
  bookPart,
}: CommunityMonsterDisplayProps) => {
  const t = useAppSelector(selectTranslateFunction(['monster', 'common']))

  return (
    <div>
      <Stack.Vertical wrap={false}>
        <BookPageTitle subTitle={bookPart}>{t(como.name)}</BookPageTitle>

        <Typography variant="body" parchment>
          {t(como.description)}
        </Typography>
        <section>
          <Typography variant="h3">{t(`common:Attribute`)}</Typography>
          <div className="grid grid-cols-2 gap-4">
            {como.attributes.strength && (
              <MonsterAttribute
                key={`${t(como.name)}-strength`}
                values={como.attributes.strength.values.map(withId)}
                label={t(`common:Attributes.${como.attributes.strength.label}`)}
              />
            )}
            {como.attributes.agility && (
              <MonsterAttribute
                key={`${t(como.name)}-agility`}
                values={como.attributes.agility.values.map(withId)}
                label={t(`common:Attributes.${como.attributes.agility.label}`)}
              />
            )}
            {como.attributes.wits && (
              <MonsterAttribute
                key={`${t(como.name)}-.wits`}
                values={como.attributes.wits.values.map(withId)}
                label={t(`common:Attributes.${como.attributes.wits.label}`)}
              />
            )}
            {como.attributes.empathy && (
              <MonsterAttribute
                key={`${t(como.name)}-.empathy`}
                values={como.attributes.empathy.values.map(withId)}
                label={t(`common:Attributes.${como.attributes.empathy.label}`)}
              />
            )}
          </div>
        </section>

        <section className="grid grid-cols-2 gap-4">
          <div>
            <Typography variant="h3">
              {t(`monster:Movement.Movement`)}
            </Typography>
            <div>
              {t(`monster:Movement.${como.movement.type}`)}{' '}
              {como.movement.distance}{' '}
              {t(
                como.movement.distance === 1
                  ? 'monster:Movement.Zones_one'
                  : 'monster:Movement.Zones_other',
              )}
            </div>
          </div>

          {como.armor && (
            <div>
              <Typography variant="h3">{t('monster:ArmorLabel')}</Typography>
              <div>
                <span className="font-medium">
                  {t(`monster:Armor.${como.armor.label}`)}:{' '}
                </span>
                {como.armor.values.length}
              </div>
            </div>
          )}
        </section>
        <section>
          <div className="md:w-full">
            <Typography variant="h3">{t(`monster:Skill`)}</Typography>
            {como.skills.length === 0 ? (
              <div>{t('monster:Skills.None')}</div>
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
