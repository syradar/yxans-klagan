import { SupplyViewModel, supplyLabelDict } from '../../models/supply'
import { TranslationKey } from '../../store/translations/translation.model'
import { Gear, GearCategory } from './gear.data'

export type ServiceId =
  | 'bathAtInn'
  | 'haircut'
  | 'healing'
  | 'bodyguard'
  | 'clothesWashed'
  | 'courier'
  | 'roadToll'
  | 'lodgingAtInnDormitory'
  | 'lodgingAtInnSeparateRoom'
  | 'fineDwelling'
  | 'bowlOfStew'
  | 'heartyMeal'
  | 'feast'
  | 'flagonOfAle'
  | 'chaliceOfWine'
  | 'teacher'

export type Service = Gear & {
  name: {
    id: ServiceId
    label: TranslationKey<'gear'>
  }
}

export type ServiceViewModel = Omit<Service, 'name' | 'supply'> & {
  category: GearCategory
  name: {
    id: ServiceId
    label: TranslationKey<'gear'>
    translation: string
  }
  supply: SupplyViewModel
}

export const serviceViewModel = (
  service: Service,
  translation: string,
  supplyAmount: number | undefined,
): ServiceViewModel => ({
  ...service,
  name: {
    ...service.name,
    translation,
  },
  supply: {
    label: supplyLabelDict[service.supply],
    amount: supplyAmount,
    supply: service.supply,
  },
})

export const services: Service[] = [
  {
    category: 'services',
    name: { id: 'bathAtInn', label: 'gear:service.bath_at_inn.name' },
    price: {
      _type: 'instant',
      copper: 3,
    },
    supply: 'common',
    effects: { label: 'gear:service.bath_at_inn.effect' },
    marketType: 'dailyLiving',
  },
  {
    category: 'services',
    name: { id: 'haircut', label: 'gear:service.haircut.name' },
    price: {
      _type: 'instant',
      copper: 5,
    },
    supply: 'common',
    effects: { label: 'gear:service.haircut.effect' },
    marketType: 'dailyLiving',
  },
  {
    category: 'services',
    name: { id: 'healing', label: 'gear:service.healing.name' },
    price: {
      _type: 'instant',
      copper: 50,
    },
    supply: 'common',
    effects: { label: 'gear:service.healing.effect' },
    marketType: 'dailyLiving',
  },
  {
    category: 'services',
    name: { id: 'bodyguard', label: 'gear:service.bodyguard.name' },
    price: {
      _type: 'daily',
      copper: 10,
    },
    supply: 'uncommon',
    effects: { label: 'gear:service.bodyguard.effect' },
    marketType: 'dailyLiving',
  },
  {
    category: 'services',
    name: { id: 'clothesWashed', label: 'gear:service.clothes_washed.name' },
    price: {
      _type: 'instant',
      copper: 10,
    },
    supply: 'common',
    effects: { label: 'gear:service.clothes_washed.effect' },
    marketType: 'dailyLiving',
  },
  {
    category: 'services',
    name: { id: 'courier', label: 'gear:service.courier.name' },
    price: {
      _type: 'hex',
      copper: 10,
    },
    supply: 'common',
    effects: { label: 'gear:service.courier.effect' },
    marketType: 'dailyLiving',
  },
  {
    category: 'services',
    name: { id: 'roadToll', label: 'gear:service.road_toll.name' },
    price: {
      _type: 'instant',
      copper: 2,
    },
    supply: 'common',
    effects: { label: 'gear:service.road_toll.effect' },
    marketType: 'dailyLiving',
  },
  {
    category: 'services',
    name: {
      id: 'lodgingAtInnDormitory',
      label: 'gear:service.lodging_at_inn_dormitory.name',
    },
    price: {
      _type: 'instant',
      copper: 2,
    },
    supply: 'common',
    effects: { label: 'gear:service.lodging_at_inn_dormitory.effect' },
    marketType: 'dailyLiving',
  },
  {
    category: 'services',
    name: {
      id: 'lodgingAtInnSeparateRoom',
      label: 'gear:service.lodging_at_inn_separate_room.name',
    },
    price: {
      _type: 'instant',
      copper: 5,
    },
    supply: 'common',
    effects: { label: 'gear:service.lodging_at_inn_separate_room.effect' },
    marketType: 'dailyLiving',
  },
  {
    category: 'services',
    name: { id: 'fineDwelling', label: 'gear:service.fine_dwelling.name' },
    price: {
      _type: 'instant',
      copper: 20,
    },
    supply: 'uncommon',
    effects: { label: 'gear:service.fine_dwelling.effect' },
    marketType: 'dailyLiving',
  },
  {
    category: 'services',
    name: { id: 'bowlOfStew', label: 'gear:service.bowl_of_stew.name' },
    price: {
      _type: 'instant',
      copper: 3,
    },
    supply: 'common',
    effects: { label: 'gear:service.bowl_of_stew.effect' },
    marketType: 'dailyLiving',
  },
  {
    category: 'services',
    name: { id: 'heartyMeal', label: 'gear:service.hearty_meal.name' },
    price: {
      _type: 'instant',
      copper: 10,
    },
    supply: 'common',
    effects: { label: 'gear:service.hearty_meal.effect' },
    marketType: 'dailyLiving',
  },
  {
    category: 'services',
    name: { id: 'feast', label: 'gear:service.feast.name' },
    price: {
      _type: 'instant',
      copper: 100,
    },
    supply: 'uncommon',
    effects: { label: 'gear:service.feast.effect' },
    marketType: 'dailyLiving',
  },
  {
    category: 'services',
    name: { id: 'flagonOfAle', label: 'gear:service.flagon_of_ale.name' },
    price: {
      _type: 'instant',
      copper: 2,
    },
    supply: 'common',
    effects: { label: 'gear:service.flagon_of_ale.effect' },
    marketType: 'dailyLiving',
  },
  {
    category: 'services',
    name: { id: 'chaliceOfWine', label: 'gear:service.chalice_of_wine.name' },
    price: {
      _type: 'instant',
      copper: 4,
    },
    supply: 'uncommon',
    effects: { label: 'gear:service.chalice_of_wine.effect' },
    marketType: 'dailyLiving',
  },
  {
    category: 'services',
    name: { id: 'teacher', label: 'gear:service.teacher.name' },
    price: {
      _type: 'daily',
      copper: 10,
    },
    supply: 'uncommon',
    effects: { label: 'gear:service.teacher.effect' },
    marketType: 'dailyLiving',
  },
]
