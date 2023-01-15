import { useTranslation } from 'react-i18next'
import { PageHeader } from '../../components/page-header'
import { Parchment } from '../../components/parchment'
import { ParchmentButton } from '../../components/ParchmentButton'

export const VillagePage = () => {
  const { t } = useTranslation('names')

  return (
    <div className="flex w-full flex-col gap-y-8">
      {/* <PageHeader>{t('Title')}</PageHeader> */}
      <PageHeader>TT VILLAGE</PageHeader>

      <ParchmentButton>TT NEW VILLAGE</ParchmentButton>

      <div className="flex flex-wrap gap-4 xl:min-w-[600px]">
        <div className="basis-[500px]">
          <Parchment>VILLAGE</Parchment>
        </div>
      </div>
    </div>
  )
}

export default VillagePage
