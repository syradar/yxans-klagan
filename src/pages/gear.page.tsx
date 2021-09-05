import React from 'react'
import 'twin.macro'
import tw from 'twin.macro'
import { Parchment } from '../components/parchment'

export const GearPage = () => {
  return (
    <div tw="flex flex-col gap-y-8 w-full">
      <h1 tw="text-center text-6xl" className="yx-heading">
        Utrustning
      </h1>

      <div tw="">
        <Parchment>
          <h2 tw="text-center font-bold text-2xl uppercase mb-4">
            Vanliga tjänster
          </h2>
          <table tw="w-full">
            <thead>
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
                <tr key={rs.service} tw="">
                  <td
                    tw="px-2 py-1 border-b border-gray-400"
                    css={[i % 2 === 0 && tw`bg-gray-200`]}
                  >
                    {rs.service}
                  </td>
                  <td
                    tw="px-2 py-1 border-b border-gray-400"
                    css={[i % 2 === 0 && tw`bg-gray-200`]}
                  >
                    {priceFormat(rs.price)}
                  </td>
                  <td
                    tw="px-2 py-1 border-b border-gray-400"
                    css={[i % 2 === 0 && tw`bg-gray-200`]}
                  >
                    {rs.availability}
                  </td>
                  <td
                    tw="px-2 py-1 border-b border-gray-400"
                    css={[i % 2 === 0 && tw`bg-gray-200`]}
                  >
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

interface ServiceCost {
  copper: number
  per?: Per
}

interface RegularService {
  service: string
  price: ServiceCost
  availability: 'Vanlig' | 'Ovanlig'
  comment?: string
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
    availability: 'Vanlig',
    price: { copper: 3 },
  },
  {
    service: 'Klippning',
    availability: 'Vanlig',
    price: { copper: 5 },
  },
  {
    service: 'Läkarvård',
    availability: 'Ovanlig',
    price: { copper: 5 },
  },
  {
    service: 'Livvakt',
    availability: 'Ovanlig',
    price: { copper: 10, per: 'day' },
  },
  {
    service: 'Tvätt av kläder',
    availability: 'Vanlig',
    price: { copper: 5 },
  },
  {
    service: 'Budbärare',
    availability: 'Vanlig',
    price: { copper: 10, per: 'hex' },
  },
  {
    service: 'Vägtull',
    availability: 'Vanlig',
    price: { copper: 2 },
  },
  {
    service: 'Övernattning värdshus, sovsal',
    availability: 'Vanlig',
    price: { copper: 2 },
  },
  {
    service: 'Övernattning värdshus, eget rum',
    availability: 'Vanlig',
    price: { copper: 5 },
  },
  {
    service: 'Ståtligt härbärge',
    availability: 'Ovanlig',
    price: { copper: 20 },
  },
  {
    service: 'Skål stuvning',
    availability: 'Vanlig',
    price: { copper: 3 },
    comment: 'Täcker dagsbehovet av Mat.',
  },
  {
    service: 'Måltid på värdshus',
    availability: 'Vanlig',
    price: { copper: 10 },
    comment: 'Täcker dagsbehovet av Mat och Vatten.',
  },
  {
    service: 'Festmåltid',
    availability: 'Ovanlig',
    price: { copper: 100 },
    comment: 'Täcker dagsbehovet av Mat och Vatten.',
  },
  {
    service: 'Stop mjöd',
    availability: 'Vanlig',
    price: { copper: 2 },
    comment: 'Täcker dagsbehovet av Vatten.',
  },
  {
    service: 'Kalk vin',
    availability: 'Ovanlig',
    price: { copper: 4 },
    comment: 'Täcker dagsbehovet av Vatten.',
  },
  {
    service: 'Lärare',
    availability: 'Ovanlig',
    price: { copper: 10, per: 'day' },
    comment: 'Kan va dyrare',
  },
]
