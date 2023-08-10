import { PageHeader } from '../../components/page-header'
import { useAppSelector } from '../../store/store.hooks'
import { selectTranslateFunction } from '../../store/translations/translation.slice'

function JournalPage() {
  const t = useAppSelector(selectTranslateFunction(['journal', 'common']))

  return (
    <div>
      <PageHeader>{t('journal:title')}</PageHeader>
    </div>
  )
}

export default JournalPage
