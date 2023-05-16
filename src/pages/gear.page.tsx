import { useEffect, useState } from 'react'
import { ParchmentInput } from '../components/ParchmentInput'
import { PageHeader } from '../components/page-header'
import { Parchment } from '../components/parchment'
import { rollD6 } from '../functions/dice.functions'
import { ParchmentButton } from '../components/ParchmentButton'
import { ArrowPathIcon } from '@heroicons/react/24/outline'
import { useTranslation } from 'react-i18next'
import { LabelValue } from '../components/LabelValue'

export const GearPage = () => {
  const { t } = useTranslation(['gear'])
  const [searchGoods, setSearchGoods] = useState('')
  const [maxPrice, setMaxPrice] = useState<number>(Infinity)
  const [itemAvailability, setItemAvailability] = useState<
    Record<string, Availability> | undefined
  >(undefined)

  useEffect(() => {
    const savedBefore = localStorage.getItem('itemAvailability')
    if (savedBefore) {
      try {
        setItemAvailability(JSON.parse(savedBefore))
      } catch (error) {
        console.log('Error parsing saved availability:', error)
        setItemAvailability(undefined)
      }
    } else {
      refreshAvailability()
    }
  }, [])

  const refreshAvailability = () => {
    const availability: Record<string, Availability> = {}
    consumerGoods.forEach((item) => {
      availability[item.item] = availabilityFormat(
        item.availability,
      ) as Availability
    })
    regularServices.forEach((item) => {
      availability[item.service] = availabilityFormat(
        item.availability,
      ) as Availability
    })
    setItemAvailability(availability)
  }

  useEffect(() => {
    console.log('Saving available', itemAvailability)
    if (itemAvailability) {
      localStorage.setItem('itemAvailability', JSON.stringify(itemAvailability))
    }
  }, [itemAvailability])

  const filteredGoods = consumerGoods.filter((goods: ConsumerGoods) => {
    const matchesSearch = goods.item
      .toLowerCase()
      .includes(searchGoods.toLowerCase())
    const isWithinPriceRange = goods.price.copper <= maxPrice

    return matchesSearch && isWithinPriceRange
  })

  const filteredServices = regularServices.filter((service: RegularService) => {
    const matchesSearch = service.service
      .toLowerCase()
      .includes(searchGoods.toLowerCase())
    const isWithinPriceRange = service.price.copper <= maxPrice

    return matchesSearch && isWithinPriceRange
  })

  return (
    <div className="flex w-full flex-col gap-y-8">
      <PageHeader>Utrustning</PageHeader>
      <div className="flex flex-col-reverse justify-between md:flex-row">
        <div className="mt-4 flex md:mt-0">
          <div className="mr-2">
            <LabelValue label={t('gear:SearchGoods')}>
              <ParchmentInput
                value={searchGoods}
                onChange={(value: string) => setSearchGoods(value)}
              />
            </LabelValue>
          </div>

          <LabelValue label={t('gear:MaxPrice')}>
            <ParchmentInput
              value={maxPrice === Infinity ? '' : maxPrice.toString()}
              onChange={(value: string) => {
                const parsedValue = parseInt(value)
                setMaxPrice(isNaN(parsedValue) ? Infinity : parsedValue)
              }}
            />
          </LabelValue>
        </div>
        <ParchmentButton onClick={() => refreshAvailability()}>
          <ArrowPathIcon className="h-5 w-5" />
          <div>{t('gear:RefreshAvailability')}</div>
        </ParchmentButton>
      </div>

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
              {filteredServices.map((rs) => (
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
                  {itemAvailability && (
                    <td className="px-2 py-1 group-even:bg-gray-200 lg:border-b lg:border-gray-400">
                      <div className="text-sm lg:hidden">Tillgång</div>
                      {itemAvailability[rs.service]}
                    </td>
                  )}
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
      <div>
        <Parchment>
          <h2 className="yx-heading mb-4 flex text-center text-4xl">
            Bruksföremål
          </h2>
          <table className="w-full">
            <thead className="hidden lg:table-header-group">
              <tr>
                <td className="border-b-2 border-gray-400 px-2 py-1 font-bold uppercase">
                  Föremål
                </td>
                <td className="border-b-2 border-gray-400 px-2 py-1 font-bold uppercase">
                  Pris
                </td>
                <td className="border-b-2 border-gray-400 px-2 py-1 font-bold uppercase">
                  Tillgång
                </td>
                <td className="border-b-2 border-gray-400 px-2 py-1 font-bold uppercase">
                  Vikt
                </td>
                <td className="border-b-2 border-gray-400 px-2 py-1 font-bold uppercase">
                  Råvaror
                </td>
                <td className="border-b-2 border-gray-400 px-2 py-1 font-bold uppercase">
                  Tidsåtgång
                </td>
                <td className="border-b-2 border-gray-400 px-2 py-1 font-bold uppercase">
                  Talang
                </td>
                <td className="border-b-2 border-gray-400 px-2 py-1 font-bold uppercase">
                  Verktyg
                </td>
                <td className="border-b-2 border-gray-400 px-2 py-1 font-bold uppercase">
                  Effekt
                </td>
              </tr>
            </thead>
            <tbody>
              {filteredGoods.map((rs) => (
                <tr
                  key={rs.item}
                  className="group grid grid-cols-2 lg:table-row"
                >
                  <td className="px-2 py-1 group-even:bg-gray-200 lg:border-b lg:border-gray-400">
                    <div className="text-sm lg:hidden">Föremål</div>
                    {rs.item}
                  </td>
                  <td className="px-2 py-1 group-even:bg-gray-200 lg:border-b lg:border-gray-400">
                    <div className="text-sm lg:hidden">Pris</div>
                    {priceFormat(rs.price)}
                  </td>
                  {itemAvailability && (
                    <td className="px-2 py-1 group-even:bg-gray-200 lg:border-b lg:border-gray-400">
                      <div className="text-sm lg:hidden">Tillgång</div>
                      {itemAvailability[rs.item]}
                    </td>
                  )}
                  <td className="px-2 py-1 group-even:bg-gray-200 lg:border-b lg:border-gray-400">
                    <div className="text-sm lg:hidden">Vikt</div>
                    {rs.weight ?? ''}
                  </td>
                  <td className="px-2 py-1 group-even:bg-gray-200 lg:border-b lg:border-gray-400">
                    <div className="text-sm lg:hidden">Råvaror</div>
                    {rs.rawMaterials ?? ''}
                  </td>
                  <td className="px-2 py-1 group-even:bg-gray-200 lg:border-b lg:border-gray-400">
                    <div className="text-sm lg:hidden">Tidsåtgång</div>
                    {rs.timeToProduce ?? ''}
                  </td>
                  <td className="px-2 py-1 group-even:bg-gray-200 lg:border-b lg:border-gray-400">
                    <div className="text-sm lg:hidden">Talang</div>
                    {rs.talents ?? ''}
                  </td>
                  <td className="px-2 py-1 group-even:bg-gray-200 lg:border-b lg:border-gray-400">
                    <div className="text-sm lg:hidden">Verktyg</div>
                    {rs.tools ?? ''}
                  </td>
                  <td className="px-2 py-1 group-even:bg-gray-200 lg:border-b lg:border-gray-400">
                    <div className="text-sm lg:hidden">Effekt</div>
                    {rs.effect ?? ''}
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
type Weight = 'småsak' | 'lätt' | 'normal' | 'tung'
type TimeToProduce = 'Ett kvartsdygn' | 'En dag' | 'Två veckor'

interface Cost {
  copper: number
  per?: Per
}
interface RegularService {
  service: string
  price: Cost
  availability: Availability
  comment?: string
}

interface ConsumerGoods {
  item: string
  price: Cost
  availability: Availability
  weight: Weight
  rawMaterials: string
  timeToProduce: TimeToProduce
  talents: string
  tools: string
  effect: string
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

const priceFormat = (sc: Cost): string => {
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

const consumerGoods: ConsumerGoods[] = [
  {
    item: 'Pilar, järnspets',
    price: { copper: 12 },
    availability: 'vanlig',
    weight: 'normal',
    rawMaterials: '1/2 Järn, 1 Trä',
    timeToProduce: 'Ett kvartsdygn',
    talents: 'Smed, Bågmakare',
    tools: 'Smedja, kniv',
    effect: 'Ökar resurstärning Pilar ett steg',
  },
  {
    item: 'Pilar, träspets',
    price: { copper: 6 },
    availability: 'vanlig',
    weight: 'normal',
    rawMaterials: '1 Trä',
    timeToProduce: 'Ett kvartsdygn',
    talents: 'Bågmakare',
    tools: 'Kniv',
    effect: 'Ökar resurstärning Pilar ett steg. Målets skyddsvärde fördubblas',
  },
]

export default GearPage
