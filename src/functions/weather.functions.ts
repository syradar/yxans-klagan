import { Day } from '../models/calendar.model'
import { TranslationKey } from '../store/translations/translation.model'
import { range } from './array.functions'
import { choose } from './dice.functions'
import { inRange, notNullish } from './utils.functions'

const normalizeTempDeltaWithWetness = (
  temp: number,
  wetnessPercent: number,
) => {
  return temp * (1 / ((1 + wetnessPercent) * (1 + wetnessPercent)))
}

const getRandomArrayIndex = <T>(e: T[]): number => {
  return Math.min(e.length - 1, Math.floor(Math.random() * e.length))
}

function toCelsius(fahrenheit: number) {
  return Math.floor((fahrenheit - 32) / 1.8)
}

export const getTempString = (fahrenheit: number) =>
  `${toCelsius(fahrenheit)} ${degreeSymbol}C`

export const getFahrenheitTempString = (fahrenheit: number) =>
  `${fahrenheit} ${degreeSymbol}F`

export function toKilometers(miles: number) {
  return Math.floor(1.6 * miles)
}
export function toMetersPerSecond(mph: number) {
  return Math.floor((1600 * mph) / 3600)
}

const degreeSymbol = '°'
const TEMP_CHANGE_TYPES = [1, 1, 0.3, 3]

export enum TemperatureUnit {
  Imperial,
  Metric,
}

const units: TemperatureUnit = TemperatureUnit.Metric

enum WindUnitType {
  KPH = 'Metric (kph wind)',
  MPS = 'Metric (mps wind)',
  MPH = 'Imperial (mph wind)',
}
const windUnit: WindUnitType = WindUnitType.KPH

interface WeatherSystemPropLink {
  prev: number
  current: number
  next: number
}

export interface WeatherEvent {
  name: string
  description: string
}

export type StormType = 'None' | 'Windstorm' | 'Snowstorm' | 'Rainstorm'

export const stormTypeTranslationKeyDict: Record<
  StormType,
  TranslationKey<'calendar'>
> = {
  None: 'calendar:StormNone',
  Windstorm: 'calendar:StormWind',
  Snowstorm: 'calendar:StormSnow',
  Rainstorm: 'calendar:StormRain',
}

export type Downpour =
  | 'None'
  | 'Drizzle'
  | 'Showers'
  | 'LightRain'
  | 'Raining'
  | 'LightSnow'
  | 'SnowShowers'
  | 'Snowing'

export const downpourTranslationKeyDict: Record<
  Downpour,
  TranslationKey<'calendar'>
> = {
  None: 'calendar:DownPourNone',
  Drizzle: 'calendar:DownPourDrizzle',
  Showers: 'calendar:DownPourShowers',
  LightRain: 'calendar:DownPourLightRain',
  Raining: 'calendar:DownPourRaining',
  LightSnow: 'calendar:DownPourLightSnow',
  SnowShowers: 'calendar:DownPourSnowShowers',
  Snowing: 'calendar:DownPourSnowing',
}

interface WeatherDayDto {
  temp: number
  lowTemp: number
  wetness: number
  wind: number
  isWindy: boolean
  isRaining: boolean
  isCalm: boolean
  isCloudy: boolean
  isPartlyCloudy: boolean
  isStorm: boolean
  hasEvent: boolean
  stormType: StormType
  downpour: Downpour
  windDesc: string
  specialDesc: string
  eventType?: WeatherEvent
  supernaturalEvent?: Partial<WeatherEvent>
}

export class WeatherDay {
  temp: number
  lowTemp: number
  wetness: number
  wind: number
  isWindy: boolean
  isRaining: boolean
  isCalm: boolean
  isCloudy: boolean
  isPartlyCloudy: boolean
  isStorm: boolean
  hasEvent: boolean
  stormType: StormType
  downpour: Downpour
  windDesc: string
  specialDesc: string
  eventType?: WeatherEvent

  constructor(e: WeatherDayDto) {
    this.temp = e.temp
    this.lowTemp = e.lowTemp
    this.wetness = e.wetness
    this.wind = e.wind
    this.isWindy = e.isWindy
    this.isRaining = e.isRaining
    this.isCalm = e.isCalm
    this.isCloudy = e.isCloudy
    this.isPartlyCloudy = e.isPartlyCloudy
    this.isStorm = e.isStorm
    this.hasEvent = e.hasEvent
    this.stormType = e.stormType
    this.downpour = e.downpour
    this.windDesc = e.windDesc
    this.specialDesc = e.specialDesc
    this.eventType = e.eventType
  }

  GetHighString() {
    return units === TemperatureUnit.Imperial
      ? this.temp + degreeSymbol + 'F'
      : toCelsius(this.temp) + degreeSymbol + 'C'
  }

  GetLowString() {
    return units === TemperatureUnit.Imperial
      ? this.lowTemp + degreeSymbol + 'F'
      : toCelsius(this.lowTemp) + degreeSymbol + 'C'
  }

  GetWindString() {
    switch (windUnit) {
      case WindUnitType.KPH:
        return `${toKilometers(this.wind)} kph`
      case WindUnitType.MPS:
        return `${toMetersPerSecond(this.wind)} mps`
      case WindUnitType.MPH:
      default:
        return `${this.wind} mph`
    }
  }
}
export const isRaining = (d: Downpour): boolean => {
  switch (d) {
    case 'Drizzle':
    case 'LightRain':
    case 'Raining':
    case 'Showers':
      return true

    default:
      return false
  }
}

export const isSnowing = (d: Downpour): boolean =>
  d === 'LightSnow' || d === 'SnowShowers' || d === 'Snowing'

export const getWeatherIcon = (day: Day): string => {
  switch (true) {
    case isRaining(day.downpour):
      return `🌧`
    case isSnowing(day.downpour):
      return `❄️`
    case day.isCloudy:
      return `☁️`
    case day.isPartlyCloudy:
      return `⛅️`

    case day.downpour === 'None':
    default:
      return `☀️`
  }
}

export const getMoonEmoji = (moon?: 'full' | 'new') => {
  if (typeof moon !== 'undefined') {
    return moon === 'full' ? '🌕' : '🌑'
  }

  return undefined
}

export class WeatherSystem {
  days: WeatherDay[] = []
  duration: number = Math.floor(1 + 14 * Math.random())
  hasEvent: boolean
  eventType?: WeatherEvent
  isCalm: boolean
  isStorm: boolean
  wetness: number
  temp: number
  lowDelta: number
  wind: number

  previousSystem?: WeatherSystem
  nextSystem?: WeatherSystem

  rampupType = getRandomArrayIndex(TEMP_CHANGE_TYPES)
  rampdownType = getRandomArrayIndex(TEMP_CHANGE_TYPES)

  constructor(
    climate: number,
    wetness: number,
    tempVariation: number,
    wetnessVariation: number,
  ) {
    const rand = Math.random()
    this.hasEvent = rand > 0.9
    this.isStorm = rand > 0.8
    this.isCalm = rand < 0.3

    const wetnessDelta = 1.5 * wetnessVariation * (0.5 + 0.5 * rand)
    this.wetness = wetness + wetnessDelta * rand * 40

    const deltaD = normalizeTempDeltaWithWetness(
      1.5 * tempVariation * (0.5 + 0.5 * rand),
      this.wetness / 100,
    )
    this.temp = climate + deltaD * rand * 40

    this.lowDelta =
      5 +
      normalizeTempDeltaWithWetness(10 * Math.random() + 10, this.wetness / 100)

    this.wind = 30 * (rand - 0.2)

    if (this.isStorm) {
      this.wind += 20 * Math.random()
      if (this.duration > 4) {
        this.duration = Math.floor(this.duration / 2)
      }
      if (this.hasEvent && this.duration > 3) {
        this.duration = Math.floor(this.duration / 2)
      }
    }

    if (this.isCalm) {
      this.wind = Math.max(0, this.wind - 10 * Math.random())
    }

    if (this.hasEvent) {
      this.eventType = this.GetEventType()
    }
    this.days = []
  }

  SetPreviousSystem(system: WeatherSystem) {
    this.previousSystem = system
  }

  SetNextSystem(system: WeatherSystem) {
    this.nextSystem = system
  }

  GenerateDays(): void {
    const temp: WeatherSystemPropLink = {
      current: this.temp,
      next: notNullish(this.nextSystem) ? this.nextSystem.temp : this.temp,
      prev: notNullish(this.previousSystem)
        ? this.previousSystem.temp
        : this.temp,
    }

    const wetness: WeatherSystemPropLink = {
      current: this.wetness,
      next: notNullish(this.nextSystem)
        ? this.nextSystem.wetness
        : this.wetness,
      prev: notNullish(this.previousSystem)
        ? this.previousSystem.wetness
        : this.wetness,
    }

    this.days = generateDays({
      temp,
      wetness,
      duration: this.duration,
      rampupType: this.rampupType,
      rampdownType: this.rampdownType,
      lowDelta: this.lowDelta,
      wind: this.wind,
      isStorm: this.isStorm,
      isCalm: this.isCalm,
      hasEvent: this.hasEvent,
      eventType: this.eventType,
      previousSystem: this.previousSystem,
    })
  }

  GetEventType(): SpecialWeatherEvent | undefined {
    const selectedSpecialEvents = specialEvents
      .map((se) => {
        const k = [
          inRange(se.requirements.temp)(this.temp),
          inRange(se.requirements.wetness)(this.temp),
          inRange(se.requirements.wind)(this.temp),
        ].some((r) => r)

        return range(k ? se.weight : 0).map((_) => se)
      })
      .flat()

    return choose(selectedSpecialEvents)
  }
}

type GenerateDaysProps = {
  temp: WeatherSystemPropLink
  wetness: WeatherSystemPropLink
  duration: number
  rampupType: number
  rampdownType: number
  lowDelta: number
  wind: number
  isStorm: boolean
  isCalm: boolean
  hasEvent: boolean
  eventType?: WeatherEvent
  previousSystem?: WeatherSystem
}
const generateDays = ({
  temp,
  wetness,
  duration,
  rampupType,
  rampdownType,
  lowDelta,
  wind,
  isStorm,
  isCalm,
  hasEvent,
  eventType,
  previousSystem,
}: GenerateDaysProps) => {
  return range(duration).map((di) => {
    const { tempDelta, wetnessDelta } = getTempAndWetnessDelta(
      di,
      duration,
      rampupType,
      rampdownType,
      temp,
      wetness,
    )

    const randTempChange = 4 * Math.random() - 2
    const randWetnessChange = 4 * Math.random() - 2
    const ramdDeltaChangedTemp = 4 * Math.random() - 2

    const changedTemp = temp.current + tempDelta + randTempChange
    const changedWetness = wetness.current + wetnessDelta + randWetnessChange
    const deltaChangedTemp = changedTemp - (lowDelta + ramdDeltaChangedTemp)

    let newWind = (0.5 + 0.5 * Math.random()) * wind

    const isRaining = isItRaining(changedWetness, isStorm)
    const isWindy = newWind >= 10

    const { windSpeed, stormType } = getStormTypeAndWindSpeed(
      changedWetness,
      changedTemp,
      newWind,
      isStorm,
    )

    newWind = windSpeed
    const windDescription = isWindy ? getWindDescription(newWind) : ''

    const downpour =
      !isStorm && isRaining
        ? getDownpour(changedTemp, deltaChangedTemp, changedWetness)
        : 'None'

    const specialDesc =
      di === 0
        ? getSpecialDesc(
            duration,
            isStorm,
            temp.current,
            wetness.current,
            rampupType,
            rampdownType,
            previousSystem,
          )
        : ''

    const flooredChangedWetness = Math.floor(changedWetness)
    const flooredChangedTemp = Math.floor(changedTemp)

    const cloudy =
      flooredChangedWetness > 50 &&
      flooredChangedTemp > 45 &&
      downpour === 'None'

    const partlyCloudy =
      flooredChangedWetness > 45 &&
      flooredChangedTemp > 50 &&
      downpour === 'None'

    return new WeatherDay({
      temp: flooredChangedTemp,
      lowTemp: Math.floor(deltaChangedTemp),
      wetness: flooredChangedWetness,
      wind: Math.floor(newWind),
      isWindy,
      isRaining,
      isCalm,
      isStorm,
      hasEvent,
      stormType,
      downpour,
      windDesc: windDescription,
      specialDesc,
      eventType,
      isCloudy: cloudy,
      isPartlyCloudy: partlyCloudy,
      supernaturalEvent: undefined,
    })
  })
}

const getTempAndWetnessDelta = (
  durationIndex: number,
  duration: number,
  rampupType: number,
  rampdownType: number,
  temp: WeatherSystemPropLink,
  wetness: WeatherSystemPropLink,
): {
  tempDelta: number
  wetnessDelta: number
} => {
  if (duration < 3) {
    return {
      tempDelta: 0,
      wetnessDelta: 0,
    }
  }

  const isFirstHalf = durationIndex < duration / 2

  const tempChange = getTempChange(isFirstHalf, durationIndex, duration)

  const newChange = getNewTempChange(
    isFirstHalf,
    tempChange,
    rampupType,
    rampdownType,
  )

  const tempDelta = getTempOrWetnessDelta(isFirstHalf, newChange, temp)

  const wetnessDelta = getTempOrWetnessDelta(isFirstHalf, newChange, wetness)

  return {
    tempDelta,
    wetnessDelta,
  }
}

const getTempChange = (
  isFirstHalfOfDuration: boolean,
  durationIndex: number,
  duration: number,
): number => {
  if (isFirstHalfOfDuration) {
    return 1 - (durationIndex + 1) / (duration / 2)
  }

  return (durationIndex + 1 - duration / 2) / (duration / 2)
}

const getTempOrWetnessDelta = (
  isFirstHalf: boolean,
  newChange: number,
  val: WeatherSystemPropLink,
): number => {
  const t = isFirstHalf ? val.prev : val.next

  return ((t - val.current) / 2) * newChange
}

const getNewTempChange = (
  isFirstHalf: boolean,
  tempChange: number,
  rampupType: number,
  rampdownType: number,
) => {
  const rampType = isFirstHalf ? rampupType : rampdownType
  const newTempChange = Math.pow(tempChange, TEMP_CHANGE_TYPES[rampType])

  return isNaN(newTempChange) ? tempChange : newTempChange
}

const isItRaining = (changedWetness: number, isStorm: boolean): boolean => {
  const aboveLowWetness = changedWetness > 30
  const aboveMediumWetness = changedWetness > 50

  switch (true) {
    case !isStorm && aboveLowWetness:
      return 100 * Math.random() < changedWetness
    case isStorm && aboveMediumWetness:
      return true
    default:
      return false
  }
}

const getStormTypeAndWindSpeed = (
  changedWetness: number,
  changedTemp: number,
  windSpeed: number,
  isStorm: boolean,
): { stormType: StormType; windSpeed: number } => {
  const windStormSpeed = windSpeed + (10 + Math.floor(15 * Math.random()))
  const isAboveFreezing = changedTemp > 32
  const lowWetness = changedWetness < 50

  switch (true) {
    case isStorm && lowWetness:
      return {
        stormType: 'Windstorm',
        windSpeed: windStormSpeed,
      }

    case isStorm && !lowWetness && isAboveFreezing:
      return {
        windSpeed,
        stormType: 'Rainstorm',
      }

    case isStorm && !lowWetness && !isAboveFreezing:
      return {
        windSpeed,
        stormType: 'Snowstorm',
      }

    default:
      return {
        windSpeed,
        stormType: 'None',
      }
  }
}

const getWindDescription = (windSpeed: number): string => {
  const gustSpeed = Math.floor(windSpeed + 10 + 15 * Math.random())
  switch (true) {
    case windSpeed < 20:
      return 'Windy'
    case windSpeed < 30:
      return 'Blustery'
    case windSpeed >= 30:
      return `Very windy, with gusts up to ${gustSpeed} mph. Can knock down branches, fell trees and damage wooden structures.`

    default:
      return ''
  }
}

const getSpecialDesc = (
  duration: number,
  isStorm: boolean,
  temp: number,
  wetness: number,
  rampupType: number,
  rampdownType: number,
  previousSystem?: WeatherSystem,
): string => {
  const tempAir = (prevTemp: number, temp: number) =>
    prevTemp < temp ? 'Warmer' : 'Colder'

  const airWetness = (prevWetness: number, wetness: number) =>
    prevWetness < wetness ? ' and wetter' : ' and drier'

  const airSpeed = (rampupType: number, rampdownType: number) => {
    switch (true) {
      case rampupType === 2:
        return ' quickly'
      case rampupType === 3:
        return ' slowly'
      case rampdownType === 3:
        return ' and will linger'

      default:
        return ''
    }
  }

  let ret = ''

  if (duration <= 1) {
    return ret
  }

  if (isStorm) {
    ret = 'Stormy weather is moving in fast.'
  } else if (notNullish(previousSystem)) {
    ret += tempAir(previousSystem.temp, temp)
    ret += airWetness(previousSystem.wetness, wetness)
    ret += ' air is moving in'
    ret += airSpeed(rampupType, rampdownType)
    ret += '.'
  }

  return ret
}

const getDownpour = (
  temp: number,
  lowTemp: number,
  wetness: number,
): Downpour => {
  const isAboveFreezing = temp > 32 && lowTemp > 32
  const isTeeShirtWeather = temp >= 50 && lowTemp >= 50
  const lowWetness = wetness < 50
  const mediumWetness = wetness < 75
  const highWetness = wetness >= 75

  switch (true) {
    case isAboveFreezing && lowWetness:
      return 'Drizzle'

    case isAboveFreezing && mediumWetness && isTeeShirtWeather:
      return 'Showers'

    case isAboveFreezing && mediumWetness && !isTeeShirtWeather:
      return 'LightRain'

    case isAboveFreezing && highWetness:
      return 'Raining'

    case !isAboveFreezing && lowWetness:
      return 'LightSnow'

    case !isAboveFreezing && mediumWetness:
      return 'SnowShowers'

    case !isAboveFreezing && highWetness:
      return 'Snowing'

    default:
      return 'None'
  }
}

interface SpecialWeatherEvent extends WeatherEvent {
  requirements: {
    temp?: [number, number]
    wetness?: [number, number]
    wind?: [number, number]
  }
  weight: number
}

// * DATA

const specialEvents: SpecialWeatherEvent[] = [
  {
    name: 'Insect Migration',
    description:
      'Clouds of insects fill the air and clog the street as they go out in search of new homes en masse.',
    requirements: {
      wetness: [0, 40],
      temp: [50, 200],
    },
    weight: 3,
  },
  {
    name: 'Sandstorm',
    description:
      "Dust and grit are blown up into the air by high winds. Being out in a sandstorm is miserable: it's easy to get disoriented, the high winds can damage structures and people, and heat stroke is a risk as pores get clogged with grit.",
    requirements: {
      wetness: [0, 40],
      temp: [70, 200],
    },
    weight: 2,
  },
  {
    name: 'Tornado',
    description:
      'A single tornado will typically last only a little while, usually only minutes, but they move fast and can travel up to 30 miles per hour.  Anything caught in the path of a tornado is likely to be destroyed or killed as extremely high winds pick it up into the air, break it apart and fling it around. Tornadoes happen inside of a powerful thunderstorm, which brings risks of rain, flooding and lightning even once the tornado is gone.',
    requirements: {
      temp: [40, 200],
    },
    weight: 1,
  },
  {
    name: 'Hurricane',
    description:
      'Hurricanes are devastating storms with high winds and significant amounts of rain.  They cause severe flooding and destruction of property, and can often devastate entire cities.',
    requirements: {
      wetness: [50, 200],
      temp: [60, 200],
    },
    weight: 1,
  },
  {
    name: 'Chinook',
    description:
      "A chinook is a sudden period of warm air that can occur in the middle of winter. They are heralded by a strange cloud formation, a 'chinook arch', where a solid line of cloud can be seen approaching in an otherwise clear sky.",
    requirements: {
      temp: [-50, 30],
      wetness: [0, 45],
    },
    weight: 1,
  },
  {
    name: 'Hail',
    description:
      'Hailstorms are very short-lived, usually lasting less than half an hour, periods inside of what would otherwise be a storm or thunderstorm.  Pellets of ice fall from the sky that can damage anything out in the open. Hailstorms can fell trees, break tree limbs and injure unprotected people out and about in them.',
    requirements: {
      temp: [32, 200],
      wetness: [50, 200],
    },
    weight: 1,
  },
  {
    name: 'Thunderstorm',
    description:
      'Thunderstorms are powerful storms which include lightning strikes.  They can cause flooding, the powerful winds can knock down tree limbs or even trees, and being struck by lightning can kill or severely injure any living being.',
    requirements: {
      temp: [33, 200],
      wetness: [50, 200],
    },
    weight: 4,
  },
  {
    name: 'Thundersnow',
    description:
      'Thundersnow is a rare phenomenon where a snow storm includes lightning strikes.  These snowstorms are usually powerful, including a large amount of snow accumulation, and quite cold.  Being struck by lightning can kill or severely injure any living being.',
    requirements: {
      temp: [-200, 32],
      wetness: [50, 200],
    },
    weight: 1,
  },
  {
    name: 'Flooding',
    description:
      'Too much rain over a long period of time or a lot of rain in a short period of time can cause rivers to run over their banks, flooding surrounding areas.  This usually destroys homes and can carry people and belongings away.  Anyone caught in the open during a flood is in extreme danger, and regions can be devastated.',
    requirements: {
      temp: [33, 200],
      wetness: [50, 200],
    },
    weight: 1,
  },
  {
    name: 'Slide',
    description:
      'When a hill or cliff face takes damage from severe weather, it can come crashing down onto low-lying areas.  Anyone caught in a slide is in extreme danger, and it will destroy most structures in an area.',
    requirements: {
      temp: [33, 200],
    },
    weight: 1,
  },
  {
    name: 'Avalanche',
    description:
      'When too much snow accumulates, it can slide off mountains in a powerful wave.  Avalanches are extremely dangerous and likely to kill anyone caught in them, as well as destroy any towns or villages in their way.',
    requirements: {
      temp: [-200, 30],
    },
    weight: 1,
  },
  {
    name: 'Blizzard',
    description:
      'Blizzards are extreme snowstorms: a lot of snow, a lot of wind, and very cold.  It is nearly impossible to see due to the sheer amount of snow.  The prime danger is getting lost or disoriented while inside one.  Blizzards can also cut off isolated individuals and communities from supplies, leading to starvation.',
    requirements: {
      temp: [-30, 20],
      wetness: [50, 200],
    },
    weight: 3,
  },
  {
    name: 'Wildfire',
    description:
      'Wildfire is a very dangerous situation where dry conditions and a spark (sometimes an unattended cooking fire, sometimes heat lightning) cause whole forests to catch fire and burn. Wildfires can destroy wilderness towns and are likely to kill anyone caught in them.  They also produce a lot of smoke, which can make the air hard to breathe for many miles from the source of the blaze.',
    requirements: {
      temp: [75, 200],
      wetness: [-200, 30],
    },
    weight: 3,
  },
]

export class GenerateWeather {
  constructor(
    private days: number,
    private climate: number,
    private wetness: number,
    public weatherSystems: WeatherSystem[] = [],
  ) {
    let tempVariation = Math.sin(0.24 * Math.PI)
    let wetnessVariation = Math.sin(0.24 * Math.PI)

    const firstWeatherSystem = new WeatherSystem(
      this.climate,
      this.wetness,
      tempVariation,
      wetnessVariation,
    )

    for (let dayIndex = 0; dayIndex < this.days; ) {
      tempVariation = Math.sin(-1 * (dayIndex / this.days + 0.12) * 2 * Math.PI)
      wetnessVariation = Math.sin(2 * (dayIndex / this.days + 0.12) * Math.PI)

      let ws: WeatherSystem

      do {
        ws = new WeatherSystem(
          this.climate,
          this.wetness,
          tempVariation,
          wetnessVariation,
        )
      } while (dayIndex + ws.duration > this.days)

      dayIndex += ws.duration

      this.weatherSystems.push(ws)

      if (weatherSystems.length > 1) {
        ws.SetPreviousSystem(weatherSystems[weatherSystems.length - 2])
        this.weatherSystems[weatherSystems.length - 2].SetNextSystem(ws)
        this.weatherSystems[weatherSystems.length - 2].GenerateDays()
      } else {
        ws.SetPreviousSystem(firstWeatherSystem)
      }
    }

    this.weatherSystems[weatherSystems.length - 1].GenerateDays()
  }
}
