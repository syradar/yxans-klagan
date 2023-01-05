import { PageHeader } from '../components/page-header'
import { Parchment } from '../components/parchment'
import { rollD6 } from '../functions/dice.functions'

export const GearPage = () => {
  return (
    <div className="flex w-full flex-col gap-y-8">
      <PageHeader>Utrustning</PageHeader>

      <div>
        <Parchment>
          <h2 className="yx-heading mb-4 flex text-center text-4xl">
            Vanliga tjänster
          </h2>
          <table className="w-full">
            <thead className="hidden lg:table-header-group">
              <tr>
                <td className="border-b-2 border-gray-400 px-2 py-1 font-bold uppercase">
                  Tjänst
                </td>
                <td className="border-b-2 border-gray-400 px-2 py-1 font-bold uppercase">
                  Pris
                </td>
                <td className="border-b-2 border-gray-400 px-2 py-1 font-bold uppercase">
                  Tillgång
                </td>
                <td className="border-b-2 border-gray-400 px-2 py-1 font-bold uppercase">
                  Kommentar
                </td>
              </tr>
            </thead>
            <tbody>
              {regularServices.map((rs) => (
                <tr
                  key={rs.service}
                  className="group grid grid-cols-2 lg:table-row"
                >
                  <td className="px-2 py-1 group-even:bg-gray-200 lg:border-b lg:border-gray-400">
                    <div className="text-sm lg:hidden">Tjänst</div>
                    {rs.service}
                  </td>
                  <td className="px-2 py-1 group-even:bg-gray-200 lg:border-b lg:border-gray-400">
                    <div className="text-sm lg:hidden">Pris</div>
                    {priceFormat(rs.price)}
                  </td>
                  <td className="px-2 py-1 group-even:bg-gray-200 lg:border-b lg:border-gray-400">
                    <div className="text-sm lg:hidden">Tillgång</div>
                    {availabilityFormat(rs.availability)}
                  </td>
                  <td className="px-2 py-1 group-even:bg-gray-200 lg:border-b lg:border-gray-400">
                    <div className="text-sm lg:hidden">Kommentar</div>
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
      const count = rollD6() === 6 ? 1 : 0

      return `Sällsynt (${count} ex)`
    }

    case `ovanlig`: {
      const count = rollD6() >= 4 ? rollD6() : 0

      return `Ovanlig (${count} ex)`
    }

    case `vanlig`:
    default:
      return `Vanlig`
  }
}

const priceFormat = (sc: ServiceCost): string => {
  const coins = formatCoinPurse(copperToCoinPurse(sc.copper))
  const per = sc.per ? perFormat[sc.per] : ''

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

const perFormat: { readonly [P in Per]: string } = {
  day: ' per dag',
  hex: ' per hexagon',
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

export default GearPage
