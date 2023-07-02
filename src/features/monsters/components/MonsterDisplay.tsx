import { BookPageTitle } from '../../../components/BookPageTitle'
import Stack from '../../../components/Stack'
import { Typography } from '../../../components/Typography'
import { useAppSelector } from '../../../store/store.hooks'
import { selectTranslateFunction } from '../../../store/translations/translation.slice'
import { MonsterViewModel } from '../monster.model'
import { MonsterAttributeGrid } from './MonsterAttributeGrid'

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
                  {t('common:page')}: {m.pageReference} {t('common:gmbook')}
                </>
              </div>
            )}
          </div>
        </Stack.Horizontal>

        <Typography variant="h3">{t(`common:attribute`)}</Typography>
        <MonsterAttributeGrid attributes={m.attributes} />
      </section>
    </Stack.Vertical>
  )
}
