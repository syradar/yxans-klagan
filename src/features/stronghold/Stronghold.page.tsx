import { useTranslation } from 'react-i18next'
import { ParchmentCard } from '../../components/card'
import { PageHeader } from '../../components/page-header'
import { Parchment } from '../../components/parchment'
import { ParchmentButton } from '../../components/ParchmentButton'
import Stack from '../../components/Stack'
import { Typography } from '../../components/Typography'
import { useValidLanguage } from '../../hooks/useValidLanguage'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import {
  build,
  selectStronghold,
  selectUnavailableStrongholdFunctions,
} from './strongholdSlice'

export const StrongholdPage = () => {
  const { t } = useTranslation(['stronghold'])
  const currentLang = useValidLanguage()

  const { stronghold } = useAppSelector(selectStronghold)
  const unavailableStrongholdFunctions = useAppSelector(
    selectUnavailableStrongholdFunctions,
  )

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
          {stronghold.builtFunctions.length > 0 ? (
            stronghold.builtFunctions.map((f) => (
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
          Function not built
        </Typography>
        <div className="grid grid-cols-4 gap-4">
          {stronghold.availableFunctions.map((f) => (
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
          {unavailableStrongholdFunctions.length > 0
            ? unavailableStrongholdFunctions.map((uf) => (
                <ParchmentCard key={uf.type}>
                  <Stack.Vertical>
                    <Typography variant="h3" parchment>
                      {uf.label}
                    </Typography>
                    <div>{uf.description}</div>
                    <div>
                      Requirements:{' '}
                      {uf.requirements.length > 0
                        ? uf.requirements.join(', ')
                        : '–'}
                    </div>
                    <div>
                      Tools: {uf.tools.length > 0 ? uf.tools.join(', ') : '–'}
                    </div>
                    <div>
                      Materials:{' '}
                      {uf.rawMaterials
                        .map((rm) => `${rm.amount} ${rm.type}`)
                        .join(', ')}
                    </div>
                    <div>Time: {uf.time}</div>
                    <div>Limit: {uf.limit}</div>
                    <ParchmentButton disabled>Build</ParchmentButton>
                  </Stack.Vertical>
                </ParchmentCard>
              ))
            : null}
        </div>
      </Parchment>
      <pre>{JSON.stringify(stronghold, null, 2)}</pre>
    </div>
  )
}

export default StrongholdPage
