import { BookPageTitle } from '../../../components/BookPageTitle'
import Stack from '../../../components/Stack'
import { Typography } from '../../../components/Typography'
import { withId } from '../../../functions/utils.functions'
import { useAppSelector } from '../../../store/store.hooks'
import { selectTranslateFunction } from '../../../store/translations/translation.slice'
import { MonsterViewModel } from '../monster.model'
import { MonsterAttribute } from './MonsterAttribute'

export type MonsterDisplayProps = {
  m: MonsterViewModel
  bookPart: string
}

export const MonsterDisplay = ({ m, bookPart }: MonsterDisplayProps) => {
  const t = useAppSelector(selectTranslateFunction(['monster', 'common']))

  return (
    <Stack.Vertical full>
      <section>
        <BookPageTitle subTitle={bookPart}>{t(m.name)}</BookPageTitle>

        <Stack.Horizontal wrap>
          <div>
            {m.pageReference && (
              <div>
                <>
                  {t('common:Page')}: {m.pageReference} {t('common:GMBook')}
                </>
              </div>
            )}
          </div>
        </Stack.Horizontal>

        <Typography variant="h3">{t(`common:Attribute`)}</Typography>

        <div className="grid grid-cols-2 gap-4">
          {m.attributes.strength && (
            <MonsterAttribute
              key={`${m.name}-strength`}
              values={m.attributes.strength.values.map(withId)}
              label={t(`common:Attributes.${m.attributes.strength.label}`)}
            />
          )}
          {m.attributes.agility && (
            <MonsterAttribute
              key={`${m.name}-agility`}
              values={m.attributes.agility.values.map(withId)}
              label={t(`common:Attributes.${m.attributes.agility.label}`)}
            />
          )}
          {m.attributes.wits && (
            <MonsterAttribute
              key={`${m.name}-wits`}
              values={m.attributes.wits.values.map(withId)}
              label={t(`common:Attributes.${m.attributes.wits.label}`)}
            />
          )}
          {m.attributes.empathy && (
            <MonsterAttribute
              key={`${m.name}-empathy`}
              values={m.attributes.empathy.values.map(withId)}
              label={t(`common:Attributes.${m.attributes.empathy.label}`)}
            />
          )}
        </div>
      </section>
    </Stack.Vertical>
  )
}
