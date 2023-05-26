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
    name: { id: 'bathAtInn', label: 'gear:service.bathAtInn.name' },
    price: {
      _type: 'instant',
      copper: 3,
    },
    supply: 'common',
    effects: { label: 'gear:service.bathAtInn.effect' },
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
    name: { id: 'clothesWashed', label: 'gear:service.clothesWashed.name' },
    price: {
      _type: 'instant',
      copper: 10,
    },
    supply: 'common',
    effects: { label: 'gear:service.clothesWashed.effect' },
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
    name: { id: 'roadToll', label: 'gear:service.roadToll.name' },
    price: {
      _type: 'instant',
      copper: 2,
    },
    supply: 'common',
    effects: { label: 'gear:service.roadToll.effect' },
    marketType: 'dailyLiving',
  },
  {
    category: 'services',
    name: {
      id: 'lodgingAtInnDormitory',
      label: 'gear:service.lodgingAtInnDormitory.name',
    },
    price: {
      _type: 'instant',
      copper: 2,
    },
    supply: 'common',
    effects: { label: 'gear:service.lodgingAtInnDormitory.effect' },
    marketType: 'dailyLiving',
  },
  {
    category: 'services',
    name: {
      id: 'lodgingAtInnSeparateRoom',
      label: 'gear:service.lodgingAtInnSeparateRoom.name',
    },
    price: {
      _type: 'instant',
      copper: 5,
    },
    supply: 'common',
    effects: { label: 'gear:service.lodgingAtInnSeparateRoom.effect' },
    marketType: 'dailyLiving',
  },
  {
    category: 'services',
    name: { id: 'fineDwelling', label: 'gear:service.fineDwelling.name' },
    price: {
      _type: 'instant',
      copper: 20,
    },
    supply: 'uncommon',
    effects: { label: 'gear:service.fineDwelling.effect' },
    marketType: 'dailyLiving',
  },
  {
    category: 'services',
    name: { id: 'bowlOfStew', label: 'gear:service.bowlOfStew.name' },
    price: {
      _type: 'instant',
      copper: 3,
    },
    supply: 'common',
    effects: { label: 'gear:service.bowlOfStew.effect' },
    marketType: 'dailyLiving',
  },
  {
    category: 'services',
    name: { id: 'heartyMeal', label: 'gear:service.heartyMeal.name' },
    price: {
      _type: 'instant',
      copper: 10,
    },
    supply: 'common',
    effects: { label: 'gear:service.heartyMeal.effect' },
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
    name: { id: 'flagonOfAle', label: 'gear:service.flagonOfAle.name' },
    price: {
      _type: 'instant',
      copper: 2,
    },
    supply: 'common',
    effects: { label: 'gear:service.flagonOfAle.effect' },
    marketType: 'dailyLiving',
  },
  {
    category: 'services',
    name: { id: 'chaliceOfWine', label: 'gear:service.chaliceOfWine.name' },
    price: {
      _type: 'instant',
      copper: 4,
    },
    supply: 'uncommon',
    effects: { label: 'gear:service.chaliceOfWine.effect' },
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
