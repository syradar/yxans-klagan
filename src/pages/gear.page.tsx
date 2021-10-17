import React from 'react'
import tw from 'twin.macro'
import { PageHeader, Parchment } from '../components'
import { getRandomInt } from '../functions/dice.functions'

export const GearPage = () => {
  return (
    <div tw="flex flex-col gap-y-8 w-full">
      <PageHeader>Utrustning</PageHeader>

      <div>
        <Parchment>
          <h2 tw="text-4xl text-center flex mb-4" className="yx-heading">
            Vanliga tjänster
          </h2>
          <table tw="w-full">
            <thead tw="hidden lg:(table-header-group)">
              <tr>
                <td tw="font-bold uppercase px-2 py-1 border-b-2 border-gray-400">
                  Tjänst
                </td>
                <td tw="font-bold uppercase px-2 py-1 border-b-2 border-gray-400">
                  Pris
                </td>
                <td tw="font-bold uppercase px-2 py-1 border-b-2 border-gray-400">
                  Tillgång
                </td>
                <td tw="font-bold uppercase px-2 py-1 border-b-2 border-gray-400">
                  Kommentar
                </td>
              </tr>
            </thead>
            <tbody>
              {regularServices.map((rs, i) => (
                <tr key={rs.service} tw="grid grid-cols-2 lg:(table-row)">
                  <td
                    tw="px-2 py-1 lg:(border-b border-gray-400)"
                    css={[i % 2 === 0 && tw`bg-gray-200`]}
                  >
                    <div tw="text-sm lg:(hidden)">Tjänst</div>
                    {rs.service}
                  </td>
                  <td
                    tw="px-2 py-1 lg:(border-b border-gray-400)"
                    css={[i % 2 === 0 && tw`bg-gray-200`]}
                  >
                    <div tw="text-sm lg:(hidden)">Pris</div>
                    {priceFormat(rs.price)}
                  </td>
                  <td
                    tw="px-2 py-1 lg:(border-b border-gray-400)"
                    css={[i % 2 === 0 && tw`bg-gray-200`]}
                  >
                    <div tw="text-sm lg:(hidden)">Tillgång</div>
                    {availabilityFormat(rs.availability)}
                  </td>
                  <td
                    tw="px-2 py-1 lg:(border-b border-gray-400)"
                    css={[i % 2 === 0 && tw`bg-gray-200`]}
                  >
                    <div tw="text-sm lg:(hidden)">Kommentar</div>
                    {rs.comment ?? ''}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Parchment>
      </div>
    </div>
  )
}

type Per = 'day' | 'hex'
type Availability = 'vanlig' | 'ovanlig' | 'sällsynt'

interface ServiceCost {
  copper: number
  per?: Per
}

interface RegularService {
  service: string
  price: ServiceCost
  availability: Availability
  comment?: string
}

const availabilityFormat = (a: Availability): string => {
  switch (a) {
    case `sällsynt`: {
      const count = getRandomInt() === 6 ? 1 : 0

      return `Sällsynt (${count} ex)`
    }

    case `ovanlig`: {
      const count = getRandomInt() >= 4 ? getRandomInt() : 0

      return `Ovanlig (${count} ex)`
    }

    case `vanlig`:
    default:
      return `Vanlig`
  }
}

const priceFormat = (sc: ServiceCost): string => {
  const coins = formatCoinPurse(copperToCoinPurse(sc.copper))
  const per = perFormat(sc.per)

  return `${coins} ${per}`
}

interface CoinPurse {
  copper: number
  silver: number
  gold: number
}

const formatCoinPurse = (cp: CoinPurse): string => {
  const gold = cp.gold > 0 ? `${cp.gold} guld` : ``
  const silver = cp.silver > 0 ? `${cp.silver} silver` : ``
  const copper = cp.copper > 0 ? `${cp.copper} koppar` : ``

  return [gold, silver, copper].join(' ')
}

const copperToCoinPurse = (copper: number): CoinPurse => ({
  gold: Math.floor(copper / 100),
  silver: Math.floor((copper % 100) / 10),
  copper: (copper % 100) % 10,
})

const perFormat = (per?: Per): string => {
  switch (per) {
    case 'day':
      return ' per dag'
    case 'hex':
      return ' per hexagon'
    default:
      return ''
  }
}

const regularServices: RegularService[] = [
  {
    service: 'Bad på värdshus',
    availability: 'vanlig',
    price: { copper: 3 },
  },
  {
    service: 'Klippning',
    availability: 'vanlig',
    price: { copper: 5 },
  },
  {
    service: 'Läkarvård',
    availability: 'ovanlig',
    price: { copper: 5 },
  },
  {
    service: 'Livvakt',
    availability: 'ovanlig',
    price: { copper: 10, per: 'day' },
  },
  {
    service: 'Tvätt av kläder',
    availability: 'vanlig',
    price: { copper: 5 },
  },
  {
    service: 'Budbärare',
    availability: 'vanlig',
    price: { copper: 10, per: 'hex' },
  },
  {
    service: 'Vägtull',
    availability: 'vanlig',
    price: { copper: 2 },
  },
  {
    service: 'Övernattning värdshus, sovsal',
    availability: 'vanlig',
    price: { copper: 2 },
  },
  {
    service: 'Övernattning värdshus, eget rum',
    availability: 'vanlig',
    price: { copper: 5 },
  },
  {
    service: 'Ståtligt härbärge',
    availability: 'ovanlig',
    price: { copper: 20 },
  },
  {
    service: 'Skål stuvning',
    availability: 'vanlig',
    price: { copper: 3 },
    comment: 'Täcker dagsbehovet av Mat.',
  },
  {
    service: 'Måltid på värdshus',
    availability: 'vanlig',
    price: { copper: 10 },
    comment: 'Täcker dagsbehovet av Mat och Vatten.',
  },
  {
    service: 'Festmåltid',
    availability: 'ovanlig',
    price: { copper: 100 },
    comment: 'Täcker dagsbehovet av Mat och Vatten.',
  },
  {
    service: 'Stop mjöd',
    availability: 'vanlig',
    price: { copper: 2 },
    comment: 'Täcker dagsbehovet av Vatten.',
  },
  {
    service: 'Kalk vin',
    availability: 'ovanlig',
    price: { copper: 4 },
    comment: 'Täcker dagsbehovet av Vatten.',
  },
  {
    service: 'Lärare',
    availability: 'ovanlig',
    price: { copper: 10, per: 'day' },
    comment: 'Kan vara dyrare',
  },
]
