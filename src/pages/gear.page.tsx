import { ArrowPathIcon } from '@heroicons/react/20/solid'
import React from 'react'
import {
  ParchmentButton,
  ParchmentToggleButton,
} from '../components/ParchmentButton'
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
  toggleCategory,
} from '../features/gear/gear-slice'
import {
  TradeGoods,
  TradeGoodsViewModel,
  gearCategoryLabelDict,
} from '../features/gear/gear.data'
import { ServiceViewModel } from '../features/gear/services.data'
import { capitalize, notNullish } from '../functions/utils.functions'
import { materialLabelDict } from '../models/material.model'
import { talentLabelDict } from '../models/talent.model'
import { toolLabelDict } from '../models/tool.model'
import { weightLabelDict } from '../models/weight.model'
import { useAppDispatch, useAppSelector } from '../store/store.hooks'
import { TranslationKey } from '../store/translations/translation.model'
import { selectTranslateFunction } from '../store/translations/translation.slice'

export const GearPage = () => {
  const t = useAppSelector(selectTranslateFunction(['gear', 'common']))
  const { gear } = useAppSelector(selectGear(t))

  return (
    <div className="flex w-full flex-col gap-y-8">
      <PageHeader>{t('gear:Title')}</PageHeader>
      <section className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        <GearFilterPanel></GearFilterPanel>
        <div className="md:col-span-2 lg:col-span-3">
          <Stack.Vertical>
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

            <div className="grid auto-rows-max items-stretch gap-2 sm:grid-cols-2 sm:gap-4 xl:grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-3">
              {gear.tradeGoods.length > 0 ? (
                <h2 className="yx-heading col-span-full mb-0 text-3xl">
                  {t('gear:Gear.tradeGoods')}
                </h2>
              ) : null}
              {gear.tradeGoods.map((g) => (
                <GearCard key={g.name.id} gear={g}></GearCard>
              ))}
            </div>

            <div className="grid auto-rows-max items-stretch gap-2 pb-8 sm:grid-cols-2 sm:gap-4 xl:grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-3">
              {gear.services.length > 0 ? (
                <h2 className="yx-heading col-span-full mb-0 text-3xl">
                  {t('gear:service.service')}
                </h2>
              ) : null}

              {gear.services.map((s) => (
                <ServiceCard key={s.name.id} service={s}></ServiceCard>
              ))}
            </div>
          </Stack.Vertical>
        </div>
      </section>
    </div>
  )
}

const GearCard = ({ gear }: { gear: TradeGoodsViewModel }) => {
  const t = useAppSelector(selectTranslateFunction(['gear', 'common']))

  return (
    <Parchment small key={gear.name.id}>
      <Stack.Vertical>
        <Stack.Horizontal distribute wrap>
          <div>
            <h2 className="yx-heading mb-0 text-lg">{gear.name.translation}</h2>
            <div className="text-sm text-neutral-500">
              {t(gearCategoryLabelDict[gear.category])}
            </div>
          </div>
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

const ServiceCard = ({ service }: { service: ServiceViewModel }) => {
  const t = useAppSelector(selectTranslateFunction(['gear', 'common']))

  return (
    <Parchment small key={service.name.id}>
      <Stack.Vertical>
        <Stack.Horizontal distribute wrap>
          <div>
            <h2 className="yx-heading mb-0 text-lg">
              {service.name.translation}
            </h2>
            <div className="text-sm text-neutral-500">
              {t(gearCategoryLabelDict[service.category])}
            </div>
          </div>
          <GearPrice price={service.price}></GearPrice>
        </Stack.Horizontal>

        <div>{t(service.effects.label)}</div>

        <Stack.Horizontal distribute wrap>
          <Stat size="small" label={t('gear:Supply.Supply')}>
            <span>{t(service.supply.label)}</span>
            {notNullish(service.supply.amount) ? (
              <span> ({service.supply.amount})</span>
            ) : null}
          </Stat>
          <Stat size="small" label={t('gear:MarketType.MarketType')}>
            {t(
              `gear:MarketType.${capitalize(
                service.marketType,
              )}` as TranslationKey<'gear'>,
            )}
          </Stat>
        </Stack.Horizontal>
      </Stack.Vertical>
    </Parchment>
  )
}

const GearFilterPanel = () => {
  const t = useAppSelector(selectTranslateFunction(['gear', 'common']))
  const { maxPrice, search, categories } = useAppSelector(selectGear(t))
  const dispatch = useAppDispatch()

  const handleMaxPriceChange = (value: number) => {
    dispatch(setMaxPrice(value))
  }

  const handleSearchChange = (value: string) => {
    dispatch(setSearch(value))
  }

  return (
    <Stack.Vertical>
      <ParchmentInput
        focus={true}
        label={t('gear:Filters.Search')}
        value={search}
        onChange={handleSearchChange}
      ></ParchmentInput>

      <div>
        <h4>{t('gear:category.cateogory')}</h4>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-1">
          {categories.map((c) => (
            <ParchmentToggleButton
              fullWidth
              active={c.active}
              key={c.category}
              onPress={() => dispatch(toggleCategory(c.category))}
            >
              {t(`gear:category.${c.category}`)}
            </ParchmentToggleButton>
          ))}
        </div>
      </div>

      <Stepper
        label={t('gear:Filters.MaxPrice')}
        id="gear-max-price"
        min={0}
        max={Infinity}
        onChange={handleMaxPriceChange}
        value={maxPrice}
      ></Stepper>
      <div className="mt-8">
        <ParchmentButton
          onPress={() => dispatch(reRollSupply())}
          buttonType="danger"
        >
          <ArrowPathIcon className="aspect-square w-5" />
          <span>{t('gear:Supply.Reroll')}</span>
        </ParchmentButton>
      </div>
    </Stack.Vertical>
  )
}

const GearPrice = ({ price }: { price: TradeGoods['price'] }) => {
  const t = useAppSelector(selectTranslateFunction(['common']))
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

  if (price._type === 'daily') {
    return (
      <div className="flex items-center gap-1">
        <CoinPrice coinPurse={copperToCoinPurse(price.copper)} />
        <span>{t('common:Coin.day')}</span>
      </div>
    )
  }

  if (price._type === 'hex') {
    return (
      <div className="flex items-center gap-1">
        <CoinPrice coinPurse={copperToCoinPurse(price.copper)} />
        <span>{t('common:Coin.hex')}</span>
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

export type CoinPurse = {
  copper: number
  silver: number
  gold: number
}

const copperToCoinPurse = (copper: number): CoinPurse => ({
  gold: Math.floor(copper / 100),
  silver: Math.floor((copper % 100) / 10),
  copper: (copper % 100) % 10,
})

export default GearPage
