import { useTranslation } from 'react-i18next'
import { ParchmentCard } from '../../components/card'
import { PageHeader } from '../../components/page-header'
import { Parchment } from '../../components/parchment'
import { ParchmentButton } from '../../components/ParchmentButton'
import Stack from '../../components/Stack'
import { Typography } from '../../components/Typography'
import { useValidLanguage } from '../../hooks/useValidLanguage'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { build, selectStronghold } from './strongholdSlice'

export const StrongholdPage = () => {
  const { t } = useTranslation(['stronghold'])
  const currentLang = useValidLanguage()

  const { strongHold } = useAppSelector(selectStronghold)

  const dispatch = useAppDispatch()

  return (
    <div className="flex w-full flex-col gap-y-8">
      <PageHeader>{t('stronghold:PageTitle')}</PageHeader>

      <div>{t('stronghold:PageDescription')}</div>

      <Parchment>
        <Typography variant="h2" parchment>
          Built functions
        </Typography>

        <div className="grid grid-cols-4 gap-4">
          {strongHold.builtFunctions.length > 0 ? (
            strongHold.builtFunctions.map((f) => (
              <ParchmentCard key={f.type}>
                <Stack.Vertical>
                  <Typography variant="h3" parchment>
                    {f.label}
                  </Typography>
                  <div>{f.description}</div>
                </Stack.Vertical>
              </ParchmentCard>
            ))
          ) : (
            <div>No functions built yet</div>
          )}
        </div>
      </Parchment>

      <Parchment>
        <Typography variant="h2" parchment>
          Available for building
        </Typography>
        <div className="grid grid-cols-4 gap-4">
          {strongHold.availableFunctions.map((f) => (
            <ParchmentCard key={f.type}>
              <Stack.Vertical>
                <Typography variant="h3" parchment>
                  {f.label}
                </Typography>
                <div>{f.description}</div>
                <div>
                  Requirements:{' '}
                  {f.requirements.length > 0 ? f.requirements.join(', ') : '–'}
                </div>
                <div>
                  Tools: {f.tools.length > 0 ? f.tools.join(', ') : '–'}
                </div>
                <div>
                  Materials:{' '}
                  {f.rawMaterials
                    .map((rm) => `${rm.amount} ${rm.type}`)
                    .join(', ')}
                </div>
                <div>Time: {f.time}</div>
                <div>Limit: {f.limit}</div>
                <ParchmentButton onClick={() => dispatch(build(f.type))}>
                  Build
                </ParchmentButton>
              </Stack.Vertical>
            </ParchmentCard>
          ))}
        </div>
      </Parchment>
      <pre>{JSON.stringify(strongHold, null, 2)}</pre>
    </div>
  )
}

export default StrongholdPage
