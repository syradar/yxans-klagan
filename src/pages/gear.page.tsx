import { ArrowPathIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { ParchmentButton } from '../components/ParchmentButton'
import { ParchmentInput } from '../components/ParchmentInput'
import { SeparatedComponents } from '../components/SeparatedComponents'
import Stack from '../components/Stack'
import { Stat } from '../components/Stat'
import { Stepper } from '../components/Stepper'
import { Field } from '../components/field'
import { Group } from '../components/group'
import { PageHeader } from '../components/page-header'
import { Parchment } from '../components/parchment'
import {
  reRollSupply,
  selectGear,
  setMaxPrice,
  setSearch,
} from '../features/gear/gear-slice'
import { Gear, GearViewModel } from '../features/gear/gear.data'
import { rollD6 } from '../functions/dice.functions'
import { capitalize, notNullish } from '../functions/utils.functions'
import { weightLabelDict } from '../models/weight.model'
import { useAppDispatch, useAppSelector } from '../store/store.hooks'
import { TranslationKey } from '../store/translations/translation.model'
import { selectTranslateFunction } from '../store/translations/translation.slice'
import { talentLabelDict } from '../models/talent.model'
import { materialLabelDict } from '../models/material.model'
import { toolLabelDict } from '../models/tool.model'

export const GearPage = () => {
  const t = useAppSelector(selectTranslateFunction(['gear', 'common']))
  const { items, maxPrice, search } = useAppSelector(selectGear(t))
  const dispatch = useAppDispatch()

  const handleMaxPriceChange = (value: number) => {
    dispatch(setMaxPrice(value))
  }

  const handleSearchChange = (value: string) => {
    dispatch(setSearch(value))
  }

  return (
    <div className="flex w-full flex-col gap-y-8">
      <PageHeader>{t('gear:Title')}</PageHeader>

      <Stack.Vertical>
        <div className="flex flex-col flex-wrap gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col flex-wrap gap-4 sm:flex-row">
            <div className="order-2 grow sm:order-1">
              <ParchmentInput
                focus={true}
                label={t('gear:Filters.Search')}
                value={search}
                onChange={handleSearchChange}
              ></ParchmentInput>
            </div>
            <div className="order-1">
              <Stepper
                label={t('gear:Filters.MaxPrice')}
                id="gear-max-price"
                min={0}
                max={Infinity}
                onChange={handleMaxPriceChange}
                value={maxPrice}
              ></Stepper>
            </div>
          </div>
          <div className="order-first place-self-end lg:order-last">
            <ParchmentButton onPress={() => dispatch(reRollSupply())}>
              <ArrowPathIcon className="aspect-square w-5" />
              <span>{t('gear:Supply.Reroll')}</span>
            </ParchmentButton>
          </div>
        </div>

        {/* Wait for Strict Mode support in React-Aria */}
        {/* <NumberField
            label="Price"
            value={maxPrice}
            formatOptions={{
              style: 'currency',
              currency: 'USD',
            }}
            onChange={handleMaxPriceChange}
          /> */}

        <div className="grid items-stretch gap-2 sm:grid-cols-2 sm:gap-4 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5">
          {items.map((g) => (
            <GearCard key={g.name.id} gear={g}></GearCard>
          ))}
        </div>

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
      </Stack.Vertical>
    </div>
  )
}

const GearCard = ({ gear }: { gear: GearViewModel }) => {
  const t = useAppSelector(selectTranslateFunction(['gear', 'common']))

  return (
    <Parchment small key={gear.name.id}>
      <Stack.Vertical>
        <Stack.Horizontal distribute wrap>
          <h2 className="yx-heading text-lg">{gear.name.translation}</h2>
          <GearPrice price={gear.price}></GearPrice>
        </Stack.Horizontal>

        <div>{t(gear.effects.label)}</div>

        <Stack.Horizontal distribute wrap>
          <Stat size="small" label={t('gear:Supply.Supply')}>
            <span>{t(gear.supply.label)}</span>
            {notNullish(gear.supply.amount) ? (
              <span> ({gear.supply.amount})</span>
            ) : null}
          </Stat>
          <Stat size="small" label={t('common:Weight.Weight')}>
            {t(weightLabelDict[gear.weight])}
          </Stat>
          <Stat size="small" label={t('gear:MarketType.MarketType')}>
            {t(
              `gear:MarketType.${capitalize(
                gear.marketType,
              )}` as TranslationKey<'gear'>,
            )}
          </Stat>
        </Stack.Horizontal>

        <Group label={t('gear:craft')}>
          <Field label={t('common:material.material')}>
            {gear.rawMaterials
              .map((r) => {
                const mat = t(materialLabelDict[r.material])

                return `${r.value} ${mat}`
              })
              .join(', ')}
          </Field>

          <Field label={t('common:time.time')}>{t(gear.time)}</Field>
          <Field label={t('common:talents.talents')}>
            {gear.talents.length === 0
              ? '–'
              : gear.talents.map((tal) => t(talentLabelDict[tal])).join(', ')}
          </Field>
          <Field label={t('common:tool.tool')}>
            {gear.tools.length === 0
              ? '–'
              : gear.tools.map((tool) => t(toolLabelDict[tool])).join(', ')}
          </Field>
        </Group>
      </Stack.Vertical>
    </Parchment>
  )
}

const GearPrice = ({ price }: { price: Gear['price'] }) => {
  if (price._type === 'instant') {
    return <CoinPrice coinPurse={copperToCoinPurse(price.copper)} />
  }

  if (price._type === 'range') {
    return (
      <div className="flex gap-1">
        <CoinPrice coinPurse={copperToCoinPurse(price.min)} />
        <span>{'–'}</span>
        <CoinPrice coinPurse={copperToCoinPurse(price.max)} />
      </div>
    )
  }

  if (price._type === 'tiered') {
    return (
      <div className="flex gap-1">
        <SeparatedComponents
          components={price.tiers.map((t) => (
            <CoinPrice key={t.tier} coinPurse={copperToCoinPurse(t.copper)} />
          ))}
          separator={<span>{'/'}</span>}
        ></SeparatedComponents>
      </div>
    )
  }

  return (
    <div>
      <pre>{JSON.stringify(price, null, 2)}</pre>
    </div>
  )
}

type CoinProps = {
  children: React.ReactNode
  denomination: 'copper' | 'silver' | 'gold'
}
const Coin = ({ children, denomination }: CoinProps) => {
  const t = useAppSelector(selectTranslateFunction(['common']))

  return (
    <div className="flex items-center gap-1">
      <div>
        {children}{' '}
        <span className="sr-only">
          {denomination === 'copper' ? t('common:Coin.Copper') : ''}
          {denomination === 'silver' ? t('common:Coin.Silver') : ''}
          {denomination === 'gold' ? t('common:Coin.Gold') : ''}
        </span>
      </div>
      <div
        className={`aspect-square w-3 rounded-full border
    ${denomination === 'copper' ? 'border-amber-800 bg-amber-600' : ''}
    ${denomination === 'silver' ? 'border-gray-400 bg-gray-200' : ''}
    ${denomination === 'gold' ? 'border-yellow-500 bg-yellow-300' : ''}
    `}
      ></div>
    </div>
  )
}

const CoinPrice = ({ coinPurse }: { coinPurse: CoinPurse }) => {
  return (
    <div className="flex gap-2">
      {coinPurse.gold > 0 ? (
        <Coin denomination="gold">{coinPurse.gold}</Coin>
      ) : null}
      {coinPurse.silver > 0 ? (
        <Coin denomination="silver">{coinPurse.silver}</Coin>
      ) : null}
      {coinPurse.copper > 0 ? (
        <Coin denomination="copper">{coinPurse.copper}</Coin>
      ) : null}
    </div>
  )
}

type Per = 'day' | 'hex'
export type Availability = 'vanlig' | 'ovanlig' | 'sällsynt'

type ServiceCost = {
  copper: number
  per?: Per
}

type RegularService = {
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

export type CoinPurse = {
  copper: number
  silver: number
  gold: number
}

const formatCoinPurse = (cp: CoinPurse): string => {
  const gold = cp.gold > 0 ? `${cp.gold} guld` : []
  const silver = cp.silver > 0 ? `${cp.silver} silver` : []
  const copper = cp.copper > 0 ? `${cp.copper} koppar` : []

  return [gold, silver, copper].flat().join(' ')
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
