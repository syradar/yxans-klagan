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
  const t = useAppSelector(selectTranslateFunction(['monsters', 'common']))

  return (
    <Stack.Vertical full>
      <section>
        <BookPageTitle subTitle={bookPart}>{t(m.name)}</BookPageTitle>

        <Stack.Horizontal wrap>
          <div>
            {m.pageReference && (
              <div className="mb-2 text-sm italic opacity-80">
                <>
                  {t('common:page')}: {m.pageReference}
                </>
              </div>
            )}
          </div>
        </Stack.Horizontal>

        <Typography variant="h3">{t(`common:attribute` as any)}</Typography>
        <MonsterAttributeGrid attributes={m.attributes} />

        {/* --- SECCIÓN DE DATOS AMPLIADOS CON PROTECCIÓN --- */}
        <div className="mt-4 flex flex-col gap-2 text-md">
          
          {m.movement !== undefined && (
            <div>
              <strong>{t('monsters:movement.movement' as any)}:</strong> {m.movement}
            </div>
          )}

          {m.armor !== undefined && (
            <div>
              <strong>{t('monsters:armor_label' as any)}:</strong> {m.armor}
            </div>
          )}

          {m.skills && Array.isArray(m.skills) && m.skills.length > 0 && (
            <div>
              <strong>{t('common:skills.skills' as any)}:</strong> {m.skills.join(', ')}
            </div>
          )}

          {m.traits && Array.isArray(m.traits) && m.traits.length > 0 && (
            <div>
              <strong>{t('monsters:trait.traits' as any)}:</strong>
              <ul className="list-disc pl-5 mt-1">
                {(m.traits as string[]).map((trait, index) => (
                  <li key={index}>{trait}</li>
                ))}
              </ul>
            </div>
          )}

          {m.weaknesses && Array.isArray(m.weaknesses) && m.weaknesses.length > 0 && (
            <div>
              <strong>{t('monsters:weakness.weakness' as any)}:</strong>
              <ul className="list-disc pl-5 mt-1">
                {(m.weaknesses as string[]).map((weakness, index) => (
                  <li key={index}>{weakness}</li>
                ))}
              </ul>
            </div>
          )}
          
        </div>
      </section>
    </Stack.Vertical>
  )
}
