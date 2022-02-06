import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import 'twin.macro'
import { Button } from '../components/Button'
import { PageHeader } from '../components/page-header'
import { Parchment } from '../components/parchment'
import { Pancake, Train } from '../components/stack'
import { getRandomOccupation } from '../functions/occupation.function'
import { Occupation } from '../models/occupation.model'
import { getId, ID } from '../models/utils.model'

type OldOccupation = {
  id: ID
  occupation: Occupation
}

export const NpcPage = () => {
  const { t, i18n } = useTranslation(['npc', 'common'])
  const [occupation, setOccupation] = useState<Occupation>(
    getRandomOccupation(),
  )
  const [oldOccupation, setOldOccupation] = useState<OldOccupation[]>([])

  const generateOccupation = () => {
    setOldOccupation(() =>
      [
        {
          occupation: occupation,
          id: getId(),
        },
        ...oldOccupation,
      ].slice(0, 5),
    )
    setOccupation(getRandomOccupation())
  }

  return (
    <div tw="flex flex-col gap-y-8 w-full pb-16">
      <PageHeader>{t('Title')}</PageHeader>
      <Parchment deps={[i18n.language, occupation, oldOccupation]}>
        <Pancake>
          <Train distribute>
            <h2 tw="text-2xl lg:(text-4xl)" className="yx-heading">
              {t('OccupationHeader')}
            </h2>
            <Button isSmall onClick={() => generateOccupation()}>
              {t('OccupationButton')}
            </Button>
          </Train>

          <div tw="text-lg lg:(text-2xl)" className="yx-prose">
            {t(`Occupation.${occupation}`)}
          </div>
          <Pancake spacing="small">
            {[...oldOccupation].map((oo, index) => (
              <div
                key={oo.id}
                tw="text-gray-500"
                css={{
                  opacity: 1 - index * 0.2,
                }}
              >
                {t(`Occupation.${oo.occupation}`)}
              </div>
            ))}
          </Pancake>
        </Pancake>
      </Parchment>
    </div>
  )
}

export default NpcPage
