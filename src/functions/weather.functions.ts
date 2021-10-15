import { Day } from '../models/calendar.model'
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

const SUPERNATURAL_CHANCE = 6
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

export enum StormType {
  None = 'StormNone',
  Windstorm = 'StormWind',
  Snowstorm = 'StormSnow',
  Rainstorm = 'StormRain',
}

export enum Downpour {
  None = 'DownPourNone',
  Drizzle = 'DownPourDrizzle',
  Showers = 'DownPourShowers',
  LightRain = 'DownPourLightRain',
  Raining = 'DownPourRaining',
  LightSnow = 'DownPourLightSnow',
  SnowShowers = 'DownPourSnowShowers',
  Snowing = 'DownPourSnowing',
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
  supernaturalEvent?: Partial<WeatherEvent>

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
    if (100 * Math.random() < SUPERNATURAL_CHANCE) {
      const t = getRandomArrayIndex(supernaturalEvents)
      supernaturalEvents[t].applyEffects(this)
    }
  }
  Render() {
    const e = ''

    // this.supernaturalEvent && (e += supernaturalIcon),
    // this.event && (e += 'warningIcon')
    // this.temp < 32 && (e += 'coldIcon')
    // this.windy && (e += 'windyIcon')
    // this.raining
    //   ? this.temp > 32
    //     ? (e += 'rainIcon')
    //     : (e += 'snowIcon')
    //   : this.cloudy
    //     ? (e += 'cloudIcon')
    //     : this.partCloudy
    //       ? (e += 'partlyCloudyIcon')
    //       : (e += 'sunIcon')

    // (e += '\r\n')
    // this.specialDesc && (e += this.specialDesc)
    // (e += '\r\n');
    // (e += '\tHigh: ')
    // (e += this.GetHighString())
    // (e += '\r\n')
    // (e += '\tLow: ')
    // (e += this.GetLowString())
    // (e += '\r\n')
    // (e += '\tWind: ')
    // (e += this.GetWindString())
    // (e += '\r\n')
    // this.precipDesc && (e += this.precipDesc + '\r\n')
    // this.windDesc && (e += this.windDesc + '\r\n')
    // (e += this.GetSpecialString())
    // (e += '\r\n')
    return e
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

  GetSpecialString() {
    const e = ''

    return e

    //   this.stormType &&
    //     this.event
    //       ? this.eventType.name &&(
    //         (e += this.eventType.name + '!\r\n')
    //         (e += this.eventType.description + '\r\n'))
    //       : (e += this.stormType + '\r\n'),
    //   this.supernaturalEvent &&
    //     ((e += '~'),
    //     (e += this.supernaturalEvent.name + '\r\n'),
    //     (e += this.supernaturalEvent.description + '\r\n'),
    //   e
    // )
  }
}
export const isRaining = (d: Downpour): boolean => {
  switch (d) {
    case Downpour.Drizzle:
    case Downpour.LightRain:
    case Downpour.Raining:
    case Downpour.Showers:
      return true

    default:
      return false
  }
}

export const isSnowing = (d: Downpour): boolean =>
  d === Downpour.LightSnow ||
  d === Downpour.SnowShowers ||
  d === Downpour.Snowing

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

    case day.downpour === Downpour.None:
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

    this.days = generateDays(
      temp,
      wetness,
      this.duration,
      this.rampupType,
      this.rampdownType,
      this.lowDelta,
      this.wind,
      this.isStorm,
      this.isCalm,
      this.hasEvent,
      this.eventType,
      this.previousSystem,
    )
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

const generateDays = (
  temp: WeatherSystemPropLink,
  wetness: WeatherSystemPropLink,
  duration: number,
  rampupType: number,
  rampdownType: number,
  lowDelta: number,
  wind: number,
  isStorm: boolean,
  isCalm: boolean,
  hasEvent: boolean,
  eventType?: WeatherEvent,
  previousSystem?: WeatherSystem,
) => {
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
        : Downpour.None

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
      downpour === Downpour.None

    const partlyCloudy =
      flooredChangedWetness > 45 &&
      flooredChangedTemp > 50 &&
      downpour === Downpour.None

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
        stormType: StormType.Windstorm,
        windSpeed: windStormSpeed,
      }

    case isStorm && !lowWetness && isAboveFreezing:
      return {
        windSpeed,
        stormType: StormType.Rainstorm,
      }

    case isStorm && !lowWetness && !isAboveFreezing:
      return {
        windSpeed,
        stormType: StormType.Snowstorm,
      }

    default:
      return {
        windSpeed,
        stormType: StormType.None,
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
      return Downpour.Drizzle

    case isAboveFreezing && mediumWetness && isTeeShirtWeather:
      return Downpour.Showers

    case isAboveFreezing && mediumWetness && !isTeeShirtWeather:
      return Downpour.LightRain

    case isAboveFreezing && highWetness:
      return Downpour.Raining

    case !isAboveFreezing && lowWetness:
      return Downpour.LightSnow

    case !isAboveFreezing && mediumWetness:
      return Downpour.SnowShowers

    case !isAboveFreezing && highWetness:
      return Downpour.Snowing

    default:
      return Downpour.None
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
interface SupernaturalWeatherEvent extends SpecialWeatherEvent {
  applyEffects: (e: WeatherDay) => void
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

const supernaturalEvents: SupernaturalWeatherEvent[] = [
  {
    name: 'Flame',
    description: '',
    requirements: {},
    weight: 1,
    applyEffects: (e: WeatherDay) => {
      const t: Partial<WeatherEvent> = {}
      if (!e.hasEvent) {
        return
      }

      if (e.isStorm) {
        if (e.isRaining) {
          t.name = 'Fire Storm'
          t.description =
            'Fire storms are serious and random supernatural events that can happen during the middle of an otherwise normal storm.  The clouds will suddenly turn red and orange with black streaks and snow or rain will turn to sheets of flame that often explode when they strike the ground.  The fire storm portion of a storm will typically only last for a few minutes to an hour, and there is usually a few minutes of warning between the clouds changing color and the fire storm starting.  Anyone caught outside is likely to take severe fire damage, wooden structures or trees will sometimes catch fire and such an event can be devastating for a community.  They can cause wildfires, but usually any fires that are lit during the Fire Storm are extinguished when the storm system returns to normal.'
        } else {
          t.name = 'Blaze Winds'
          t.description =
            "Sometimes during powerful wind storms, the wind itself catches fire.  This is foretold by a sudden and sharp increase in temperature, which feels like opening an oven door or putting your face over a campfire.  When this happens, you'll usually only have a few minutes to seek shelter from the wind (ie: in the leeward side of buildings, hills, etc.).  When the wind catches fire, it will create huge sheets of flame five to ten feet wide and sometimes hundreds of feet long.  These sudden bursts of flame are very damaging to living beings and can set buildings and trees on fire, which is then aggravated by the powerful winds of the regular windstorm itself.  These usually cause wildfires, and an outbreak of Blaze Winds can devastate whole areas."
          e.temp += 40
        }
      } else {
        if (e.isRaining) {
          if (e.temp < 32) {
            t.name = 'Blaze Snow'
            t.description =
              "Blaze snow is a strange phenomenon where highly flammable snow falls from the sky. Any source of fire will cause this flammable snow to burn.  This creates a beautiful effect around torches, candles and other sources of flame as they seem to dance and grow brighter while it's snowing, but any accumulation of blaze snow can be very dangerous because bringing a source of fire close to it will cause whole areas to catch fire.  Blaze snow clouds have coal-black streaks in them, and the snow itself looks more oily than usual."
          } else {
            t.name = 'Ash Rain'
            t.description =
              "Ash Rain happens when too much magical fire comes in contact with normal rain clouds.  They continue to operate as clouds are expected to, but when it's time for them to rain, ash falls from them instead.  This is usually seen as a bad omen by the superstitious, and can cause serious problems: the ash makes it difficult to see while it's falling, it accumulates like snow but does not melt away and requires actual rain to wash it away, it makes it difficult to breathe and if you're out in it you can find yourself swiftly overheating."
            e.temp += 10
          }
        } else {
          if (e.wind > 10) {
            t.name = 'Dragon Winds'
            t.description =
              'Dragon winds are a serious danger in areas where magical weather is common.  They have picked up some amount of magical fire, and as such they bring unnaturally high temperatures.  They are very drying, and anyone breathing outside for more than a few minutes risks damage to their lungs, throat and eyes.  Dragon winds can also set small flammable objects on fire, such as candle wicks and loose papers, and powerful gusts have been known to light trees and even buildings on fire.'
            if (e.temp < 100) {
              e.temp = 100 + 25 * Math.random()
            } else {
              e.temp += 30
            }
          } else {
            t.name = 'Fire in the Sky'
            t.description =
              'Sometimes, on calm days with few clouds, wild magic can cause the sky itself to catch fire.  Innocent clouds are lit ablaze, small ones burn for several minutes and larger ones can burn for hours.  The temperature also becomes unnaturally hotter.'
            e.temp += 20
          }
        }
      }

      e.supernaturalEvent = t
    },
  },
  {
    name: 'Cold',
    description: '',
    requirements: {},
    weight: 1,
    applyEffects: (e: WeatherDay) => {
      if (!e.hasEvent) {
        const t: Partial<WeatherEvent> = {}
        e.isStorm
          ? e.isRaining
            ? e.temp < 32
              ? ((t.name = 'Elemental Snowstorm'),
                (t.description =
                  'An elemental snowstorm has all the regular characteristics of a snowstorm: large amounts of blowing snow, high winds, and bitter cold.  It also causes accumulations of snow to spontaneously animate as snow elementals (in d20, use a water elemental).  These mindless, animate, vaguely humanoid shaped masses of living snow wander the landscape, senseless and angry and destructive.  Snow from an Elemental Snowstorm can spontaneously come to life even several days after the storm has passed.'))
              : ((t.name = 'Spiked Hail'),
                (t.description =
                  'As a rainstorm passes through an area of arcane cold, regular rain can turn into a dangerous substance called Spiked Hail.  Raindrops mix with arcane winds and bunch together quickly, forming large, spiked balls of ice resembling the head of a morningstar.  These spiked balls fall to the ground with tremendous force, badly damaging wooden structures, trees, and anyone unlucky enough to be caught out in it.  Spiked hail moves quickly, usually only hitting any given area for a few minutes of time, but it leaves a wide swathe of destruction in its wake.'))
            : ((t.name = 'Dire Wind'),
              (t.description =
                'Frigid Dire Winds are a phenomenon much feared in regions where supernatural weather is common.  High winds mix with magical cold and as they blow, they cause thick layers of ice to form on whatever they touch.  This layer of ice forms at a rate of 1/8 of an inch every five minutes, quickly covering trees, roads, and buildings.  Living creatures trapped in a Dire Wind must keep moving to continually break off the forming ice or risk becoming frozen solid and unable to move.  The Dire Wind itself lasts anywhere from a few minutes to a few hours, but if it occurs during cold windstorms its effects can linger for days or even months until the affected surfaces melt.'),
              (e.temp -= 10))
          : e.isRaining
          ? e.temp < 32
            ? ((t.name = 'Freeze Snow'),
              (t.description =
                'When snow clouds on the horizon look more blue than grey, the experienced know that Freeze Snow is coming.  When these blueish flakes land, they emit a quick pulse of arcane cold.  When landing on plants, buildings, and ground this causes instant frost that can be treacherous to walk on, it will turn the surface of water to (thin) ice, and can cause frostbite if it lands on an animal or insect.  Freeze Snow is typically limited to the center of a cloud, so the worst of it usually passes within a few minutes to an hour, but multiple clouds can carry the problem so short bursts of it would be expected all day.'),
              (e.temp -= 10))
            : ((t.name = 'Blade Rain'),
              (t.description =
                'When rain passes through an area of magical cold, it can turn to Blade Rain.  The droplets stretch out as they freeze, creating long, thin icicles that fall from the sky with a vengeance.  Blade rain can destroy trees, ruin roofs and cause minor injuries to living things.'))
          : e.wind > 10
          ? ((t.name = 'Ice Winds'),
            (t.description =
              'When arcane cold mixes with blowing winds, dangerous Ice Winds are created.  These cold winds have the property of being able to randomly freeze water (and other easily frozen liquids) they come across.  This turns rivers and lakes to sheets of ice, even in the middle of summer, and can even cause breath clouds to freeze, fall to the ground and shatter.  They can be devastating to local ecosystems if they occur during an otherwise warm time of year.  Ice winds are typically localized to a small area, only a few miles wide at best.'),
            (e.temp -= 10))
          : ((t.name = 'Freeze Patches'),
            (t.description =
              'On an otherwise calm day, when fine weather has mixed with dangerous magical cold, Freeze Patches can be created.  These areas of intense cold, usually -25 or colder, are small but dangerous.  Unprotected animals caught in these areas can quickly be afflicted by frostbite, especially in otherwise warm weather when they would be sweating, and plants and water can freeze solid.  A freeze patch is typically only a few dozen feet in size and invisible, detectable only through the damage they do.')),
          (e.supernaturalEvent = t)
      }
    },
  },
  {
    name: 'Intelligence',
    description: '',
    requirements: {},
    weight: 1,
    applyEffects: (e: WeatherDay) => {
      if (!e.hasEvent) {
        const t: Partial<WeatherEvent> = {}
        e.isStorm
          ? e.isRaining
            ? e.temp < 32
              ? ((t.name = 'Sly Snow'),
                (t.description =
                  "Sly Snow is magically intelligent snow that seeks to cause as much havoc as it can.  It blows into large drifts in front of people's doors, it gathers on tree limbs until just the right time to fall onto unsuspecting victims, and it is magically capable of going down the back of your jacket.  Sly Snow brings with it all the misery of a usual snowstorm, with biting cold, heavy winds, and significant accumulation of snow, but is also actively trying to harm, injure and annoy anyone caught out in it."))
              : ((t.name = 'Sapient Storm'),
                (t.description =
                  'A Sapient Storm is a rainstorm with a literal vengeance.  Stirred by strange magics and driven by unknown motives, this storm will often seek to harm those it passes across.  It has all the wind, rain, and lightning of a regular storm but also possesses the odd desire to use them against people, often making it much more destructive than regular storms.  A Sapient Storm will typically only last a few hours before turning back into a regular storm, and can occasionally be reasoned with.'))
            : ((t.name = 'Witty Winds'),
              (t.description =
                'Some winds tell jokes.  Witty Winds are magically animated windstorms, full of sound and fury but really they just want to be loved.  These winds will tell jokes, craft elaborate stories, and otherwise try to influence those caught within them.  Unfortunately, they are still destructive windstorms capable of knocking down trees and damaging structures, so listeners beware.'),
              (e.wind += 15))
          : e.isRaining
          ? e.temp < 32
            ? ((t.name = 'Sentient Snow'),
              (t.description =
                'Sentient snow is heralded by fuzzy pink clouds that look more like cotton candy than water vapor.  When their purplish snow falls to the ground, any animal that eats it instantly gains surprising intelligence.  They can suddenly speak and scheme just as well, perhaps better, than any humanoid or goblin-kin.  The effect usually lasts only a few hours, but some rare animals have been known to become permanently sentient after eating this snow.  Humanoids and other already-sentient creatures can gain a modest improvement to their own intellect by eating this snow, and some have tried to bottle it to sell the effect but when the snow melts its magic wears off, making it difficult to create a viable product.'))
            : ((t.name = 'Talking Rain'),
              (t.description =
                'When Talking Rain falls, secrets will be revealed.  The clouds above start to glow a strange green and when the green water that falls from them gets on the surface of a plant, that plant begins to talk.  While they mostly sing or gossip with each other, a savvy person with an agenda can use this strange phenomenon to their benefit, because the plants hold many secrets.'))
          : e.wind > 10
          ? ((t.name = 'Walking Wind'),
            (t.description =
              'When a Walking Wind blows through, even rangers and druids can be afraid.  When this magical wind touches plants, they start to exhibit distinctly animal properties.  Trees uproot themselves and begin roaming in search of fresh meat, ferns crawl along the ground as hungry scavengers, and bushes start to hop around.  Plants affected by a walking wind only stay this way while the wind is blowing, and these winds are short-lived, lasting only a few minutes to a few hours.'))
          : ((t.name = 'Conversational Clouds'),
            (t.description =
              "Some clouds can talk, or so it is said.  When the right kind of magic burbles up on a beautiful and calm day, Conversational Clouds are sometimes the result.  The talkative clouds might be far away but their magical speech can reach many miles, including all the way to the ground.  They often talk about their day or other unimportant matters, but can occasionally be persuaded to speak about things they've seen.  Since clouds travel far, the information they bring can be from strange and faraway lands.")),
          (e.supernaturalEvent = t)
      }
    },
  },
  {
    name: 'Fey',
    description: '',
    requirements: {},
    weight: 1,
    applyEffects: (e: WeatherDay) => {
      if (!e.hasEvent) {
        const t: Partial<WeatherEvent> = {}
        e.isStorm
          ? e.isRaining
            ? e.temp < 32
              ? ((t.name = 'Fairy Snow'),
                (t.description =
                  "When Fairy Snow falls, it's best to brew a little tea, make some cakes, and leave them at your door to appease the fey visitors.  Fairy Snow forms when fey magic mixes with a snowstorm.  Snowflakes start to glom together and spontaneously create mischievous fairies, who run amok and cause all sorts of havoc for the unfortunate people caught in their path.  These fairies will play pranks that range from annoying, like freezing pots of stew or piling snow up in front of doorways, to dangerous like summoning vicious dire animals in strange places (eg: the pantry, the closet, your pants).  Fairies created by Fairy Snow generally live for the life of the snowstorm only, and can usually be mollified by offerings of refreshment and sweets, but ensure you have enough or jealous fairies will make your life even worse."))
              : ((t.name = 'Giant Growth Rainstorm'),
                (t.description =
                  'Giant Growth Rainstorms are a weather system much prayed for by those who have heard of them.  When fey magic mixes with a powerful weather system, dark green rain falls.  Any plants that the rain lands on suddenly start to grow enormous: grasses become as tall as trees, bushes become massive, and trees tower high in the sky.  Importantly, fruits and other edible parts of plants become so large that a single plum could feed an entire village for days.  While this is a boon for farmers and garden-growers, it can be make things very difficult for travelers and trade.  Plants that have grown giant will typically retain their size for a few months before slowly returning to normal.'))
            : ((t.name = 'Morphstorm'),
              (t.description =
                "A Morphstorm is a strange phenomenon that occurs when fey magic mixes with a powerful windstorm.  It still carries all the normal dangers of a windstorm (falling tree limbs and trees, damage to structures) but also has a chance to transform parts of any people caught out in it without shelter.  This transformation will usually affect only a single body part (usually a head, sometimes legs) and turns a creature's body part into the same body part from a different animal.  People with ass's heads tend to be the most common, but dogs can end up with cow heads, squirrels with octopus legs, and so forth.  The effect lasts only as long as the windstorm does, and strong windstorms usually die down after a few hours, though some can linger for hours or days."))
          : e.isRaining
          ? e.temp < 32
            ? ((t.name = 'Clairvoyant Snow'),
              (t.description =
                'When fey magic mixes with falling snow, it can create an effect known as Clairvoyant Snow.  These snow clouds sparkle and glitter completely unlike other clouds, and any intelligent thing that the snow lands on is likely to start having visions of the future.  These visions are scattered and chaotic, usually little more than a brief glimpse or half-heard sound, but with concentration some magically-inclined individuals can sit out in the middle of the blowing snow and receive full visions of events to come.'))
            : ((t.name = 'Verdant Rain'),
              (t.description =
                'When regular rain mixes with heavy concentrations of fey magic, Verdant Rain can be the result.  These leafy green clouds create green rain, and when this rain strikes the ground, it immediately causes thick tangles of plants to grow.  Grasses, weeds, underbrush, bushes, ferns and even trees sprout immediately where the rain lands.  This can be a blessing in desolate areas of tundra or desert, but can make forests or jungles almost impassable.  A Verdant Rain last only a few minutes to a few hours, falling only from one or two clouds in a weather system, but the vegetation that sprouts is real and will live a full and normal life as long as it landed somewhere it could normally grow.'))
          : e.wind > 10
          ? ((t.name = 'Mischievous Winds'),
            (t.description =
              'Mischievous Winds happen on blustery days, when fey magic mixes with the blowing air currents.  Mischievous Winds seem to seek to make life harder: they untie knots, unlock locks and randomly move unattended items to new locations.  If you stand very still, an activity that is likely to cause your pants to fall down in such a wind, you might be able to hear the distant sound of giggling.  No scholar has ever been able to determine if Mischievous Wind is truly sentient or merely a strangely annoying magical effect.'))
          : ((t.name = 'Smiling Sun, Gossamer Wings'),
            (t.description =
              'On days when fey magic hangs heavy in the still air, the sun can smile down on the land and grant those lucky enough to feel its warmth brief use of gossamer, fairy-like wings.  These wings sprout instantly without damaging the recipient or their belongings, and with careful concentration they can be used to fly, although most creatures who have never flown before may find it difficult and clumsy to do so.  People who have seen a Smiling Sun report that the strangest part of the experience is seeing squirrels and deer flying through the air on majestic insect wings.'),
            (e.temp += 5)),
          (e.supernaturalEvent = t)
      }
    },
  },
  {
    name: 'Teleport',
    description: '',
    requirements: {},
    weight: 1,
    applyEffects: (e: WeatherDay) => {
      if (!e.hasEvent) {
        const t: Partial<WeatherEvent> = {}
        e.isStorm
          ? e.isRaining
            ? e.temp < 32
              ? ((t.name = 'Seven-League Snow'),
                (t.description =
                  "Seven-League Snow is a deceptively dangerous condition that can happen when teleportation magic mixes up with a powerful snowstorm.  This snow glows a faint golden color and has an enticing floral scent to it.  Any creature that eats it suddenly finds themselves able to move seven-leagues (about 24 miles) in a single step.  This effect can be disorienting and often gets the imbiber lost or in trouble because it wears off quickly (a minute or two), however savvy users can use it to travel great distances in a brief time.  It also brings some danger in that animals and monsters that eat the snow can suddenly appear in locations where they're not expected.  Seven-League Snow often moves as a single cloud in a larger snowstorm and so leaves a distinct path through a landscape.  If the snow is not eaten within an hour of falling, its magical properties fade."))
              : ((t.name = 'Portal Storm'),
                (t.description =
                  'During heavy rain storms charged with teleportation magic, Portal Storms can occur.  These strange and dangerous events cause puddles and streams on the ground to become portals to other places, times, and dimensions.  Any place that water gathers becomes a potential location where a portal can form.  The unlucky or unwise can fall into these portals and be lost in these disparate dimensions.  Portal Storms can also bring unwelcome guests, as dangerous creatures from far away magical lands can cross through.  A Portal Storm will typically only last a few minutes to an hour, even if the rainstorm itself lasts longer.'))
            : ((t.name = 'Phasing Windstorm'),
              (t.description =
                'A Phasing Windstorm is a much more dangerous version of a regular windstorm.  Powerful gusts of wind can fell trees and break branches, but because of the teleportation magic infused within the storm, any debris whipped up by the storm becomes partially incorporeal: it can travel through other trees, buildings and even the ground, but upon striking a living being it will become solid again.  Temperature effects from the storm are also magnified, as the wind passes through clothes and walls without stopping, becoming much more likely to freeze or exhaust anyone caught in it.  Sheltering underground or within the protection of a force effect (magical armor, force shields, etc.) will protect from these effects.'))
          : e.isRaining
          ? e.temp < 32
            ? ((t.name = 'Blink Snow'),
              (t.description =
                "Blink Snow happens when teleportation magic mingles with blowing snow, creating silvery snow that grants anyone it falls on strange powers.  They seem to be in many places at once, flickering to different positions in the space of around five feet at a rate of several times per second.  This makes combat especially interesting, but even friendly interactions become difficult when you can't figure out the exact location of the other person."))
            : ((t.name = 'Timesplice Rain'),
              (t.description =
                "When teleportation magic mixes with rain, it can create a strange effect where those caught up in the rain can skip around in time.  Those caught out in Timesplice Rain can be transported several minutes or several hours into the future, disappearing immediately from where they're standing and then reappearing at the new time.  For them, no time seems to have passed at all.  Timesplice Rain usually only lasts a few minutes during a rainfall but can be very disconcerting for anyone affected."))
          : e.wind > 10
          ? ((t.name = 'Quickening Wind'),
            (t.description =
              'A Quickening Wind is a strange phenomenon that happens when winds become charged with teleportation magic.  Those moving around find that regular walking or running suddenly becomes instantaneous movement from one location to another, moving up to forty five feet at a time without actually using your legs.  A Quickening Wind will typically only last a few hours.'))
          : ((t.name = 'Haste Mist'),
            (t.description =
              'On calm days when teleportation magic fills the air, Haste Mist can accumulate near the ground.  These areas of golden mist can be up to a few hundred feet wide and form in the early morning, but usually burn away by noon.  Anyone who breathes in the air starts to move faster, as much as twice as fast as they regularly can, and the effect persists for several minutes after leaving an area of Haste Mist.')),
          (e.supernaturalEvent = t)
      }
    },
  },
  {
    name: 'Heavy',
    description: '',
    requirements: {},
    weight: 1,
    applyEffects: (e: WeatherDay) => {
      if (!e.hasEvent) {
        const t: Partial<WeatherEvent> = {}
        e.isStorm
          ? e.isRaining
            ? e.temp < 32
              ? ((t.name = 'Stone Snow'),
                (t.description =
                  'Stone Snow happens when gravitational magic mixes with a powerful snowstorm, resulting in a devastating magical phenomenon.  The snow looks mostly like regular snow, although it no longer sparkles like real snow, but when it lands on the ground it turns out to have the consistency, and weight, of stone.  Trees and buildings are easily crushed under this weight, as are unwary living beings.  Stone Snow is typically localized to a small area within the larger snowstorm and passes quickly, usually in a few minutes to an hour, but can leave behind a path of destruction: flattened trees, smashed buildings, and crushed wildlife.  The magical effect wears off several minutes after the Stone Snow has fallen, but by then the damage has usually been done.'))
              : ((t.name = 'Heavy Rain'),
                (t.description =
                  'Heavy Rain happens when gravitationally charged magic comes in contact with a rainstorm.  These clouds are a dense, dark black, and the rain that falls from them is a similarly unnerving color.  The droplets strike with notable force, causing even more damage to trees and structures than a regular rainstorm, and they cling to whatever they land on, collecting and weighing them down.  A living creature caught in Heavy Rain can become immobile from the weight, or even knocked to the ground and unable to get up, resulting in unfortunate drownings.  Heavy Rain clouds travel quickly, meaning that any given area will only experience a few minutes to an hour of the phenomenon before it passes, and regular water washes away the Heavy water.  Heavy Rain leaves a swathe of destruction in its wake: a path of drowned animals and broken trees.'))
            : ((t.name = 'Catapult Wind'),
              (t.description =
                'Catapult Wind happens when gravitational magic mixes with a windstorm, creating a dangerous situation that can devastate a region.  Any debris kicked up by the storm (birds, tree branches, dust) becomes much heavier than normal, turning into dangerous projectiles that can wreck walls, smash windows, destroy roofs, and grievously harm living beings caught in the way.  Savvy weather watchers can use this to their advantage, as even just throwing a handful of gravel into the air can create a fast-moving cloud of dangerous projectiles.'))
          : e.isRaining
          ? e.temp < 32
            ? ((t.name = 'Breaker Snow'),
              (t.description =
                'Breaker Snow happens when gravitationally charged magic meets a snow cloud.  These blackish clouds unleash snow that is streaked through with black lines, and which is much heavier than regular snow.  It easily breaks tree limbs, knocks over trees, and collapses roofs.  Anyone unlucky enough to be caught sleeping when Breaker Snow moves through can find themselves buried underneath the heavy snow and trapped for hours, possibly even suffocated.  Breaker Snow passes through quickly, lasting only a few hours in each area, and the enchantment on the fallen snow wears off after a few minutes to an hour.'))
            : ((t.name = 'Hard Rain'),
              (t.description =
                'When gravitational magic mixes with light rain, it becomes a strange phenomenon called Hard Rain.  These rain drops are still visibly like water, but they strike with the force of hail.  Hard Rain will tear through thatch roofs, break tree limbs, and can cause minor damage to living things.  Hard Rain clouds move fast and any given patch of land usually only finds itself affected by them for a half hour or so.'))
          : e.wind > 10
          ? ((t.name = 'Sinking Wind'),
            (t.description =
              'When a Sinking Wind blows, sailors become afraid.  Gravitational magic mixes with natural air currents and makes everything it touches much denser: flying creatures find themselves unable to fly, swimming creatures find it very difficult to remain on the surface, and boats can find themselves pushed under the unnaturally heavy waves.'))
          : ((t.name = 'Lazy Sun'),
            (t.description =
              "Some days, when gravitational magic hangs thick in the air, the sun becomes lazy and droopy.  It hangs low in the sky, becoming visibly much larger, and the day grows hotter.  Everything caught in this field of magic finds itself becoming lazier: they yawn a lot more, it's hard to summon the energy to move around and any exercise is much more likely to be fatiguing.  If you can control this reaction and muscle through it, this is the perfect time to sneak past normally hungry predators and monsters, but care must be taken because physical attacks become much stronger while under the effect of a Lazy Sun."),
            (e.temp += 15)),
          (e.supernaturalEvent = t)
      }
    },
  },
  {
    name: 'Lightness',
    description: '',
    requirements: {},
    weight: 1,
    applyEffects: (e: WeatherDay) => {
      if (!e.hasEvent) {
        const t: Partial<WeatherEvent> = {}
        e.isStorm
          ? e.isRaining
            ? e.temp < 32
              ? ((t.name = 'Suspended Snow'),
                (t.description =
                  "When inverse gravitational magic mixes with a snowstorm, Suspended Snow can be the result.  This lighter-than-air snow falls from the sky as usual but as it gets closer to the ground it becomes lighter and lighter until it stops falling and simply hangs there.  The snow can become trapped several inches from the ground or dozens of feet, depending on how heavy it was in the first place, and this weather can create a temporarily very beautiful effect.  However, when the Suspended Snow's magic wears off after a few hours, the snow all immediately falls to the ground.  This heavy dump of the white stuff can much more easily break trees or bury unsuspecting creatures."))
              : ((t.name = 'Backward Rain'),
                (t.description =
                  'Backward Rain happens when a rainstorm encounters inverted gravitational magic.  The rain becomes lighter than air and instead of falling to the ground, falls upward off of the ground.  Puddles start to dry up and rivers and lakes lose some water during this effect, but since it passes within a few hours during what is otherwise a traditional rainstorm it usually does not cause abnormal water levels.  It can alleviate flooding or other problems that have happened due to recent, excessive rain.'))
            : ((t.name = 'Mixing Wind'),
              (t.description =
                'A Mixing Wind will literally mix up the landscape.  This windstorm has become charged with inverted gravitational magic and will easily pick up anything it encounters by making it much much lighter: trees, buildings, boulders, everything will get picked up by the storm and blown wherever the wind goes.  This can move entire towns and forests to new locations, and is often very disorienting for any creature caught in its grasp.  Damage is usually limited to trees and structures when this happens, if a person in a Mixing Wind gets hit by a boulder they will actually be fine because, during the windstorm, the boulder weighs little more than a puppy.  A Mixing Wind can last for a few minutes or a few hours, but the effects of it on a region can last for years.'))
          : e.isRaining
          ? e.temp < 32
            ? ((t.name = 'Bounce Snow'),
              (t.description =
                'Inverse gravitational magic has infused this strange, violet snow such that when you are in contact with it you find yourself able to jump much higher and farther than you ever have in your life.  As long as some Bounce Snow is touching you, you can leap and bounce with unnatural distance, sometimes thirty or more feet in one stride.  The violet clouds that produce this strange snow last only a few hours, and the magic fades from the snow on the ground a few hours after that.'))
            : ((t.name = "Traveler's Rain"),
              (t.description =
                "When a Traveler's Rain falls, inverted gravitational magic infuses the violet water and causes anything it coats to become instantly lighter.  This allows anyone trying to pick up, move, or otherwise physically affect the items to be able to do so much more easily.  A regular person can lift a boulder that's been rained on by Traveler's Rain!  This allows travelers to go much further distances without getting tired while they're under the influence of the Rain, but can have many other strange and unexpected effects too.  Traveler's Rain typically lasts for a few hours, or even several days.  Once it dries or is washed away by regular rain, the effect ends."))
          : e.wind > 10
          ? ((t.name = 'Flying Wind'),
            (t.description =
              "When a Flying Wind blows, strange gravitational magic mixes with blowing winds to create a fun but potentially dangerous effect.  Any creature touched by the wind instantly becomes much lighter and able to be blown about by the wind like a leaf.  This can be entertaining, but around treacherous terrain can also be very dangerous.  Mooring individuals with ropes is highly encouraged, though not always possible.  A Flying Wind will typically last for a few hours before fading into regular wind, and those savvy enough can use it to travel great distances, as long as they're going the same way as the wind blows and are willing to accept some danger."))
          : ((t.name = 'Excited Sun'),
            (t.description =
              'When inverted gravitational magic hangs in the air but there is little wind to disperse it, it can create areas where the sun seems to dance and jump with lightness and joy.  Creatures experiencing this phenomenon find themselves to be much happier and more full of energy than they usually are, they can run faster and jump higher and perform feats of athleticism that they otherwise could not.  Fighting is much harder under an Excited Sun, as physical attacks do not hit nearly as hard.')),
          (e.supernaturalEvent = t)
      }
    },
  },
  {
    name: 'Quiet',
    description: '',
    requirements: {},
    weight: 1,
    applyEffects: (e: WeatherDay) => {
      if (!e.hasEvent) {
        const t: Partial<WeatherEvent> = {}
        e.isStorm
          ? e.isRaining
            ? e.temp < 32
              ? ((t.name = 'Muting Snow'),
                (t.description =
                  "Anyone unfortunate enough to consume muting snow becomes entirely silent: their footsteps don't make noise, their weapons don't make noise, and they cannot talk.  This can be very beneficial if they are trying to sneak somewhere, but is more often inconvenient or even dangerous.  The effects of Muting Snow can remain for hours, and the snow itself maintains its magical properties for several days."))
              : ((t.name = 'Sneaky Storm'),
                (t.description =
                  'Sneaky Storms happen quickly and can be quite dangerous.  Although they have all the power and fury of regular rainstorms (high wind, lots of rain, and the potential to fell trees and flood rivers) but it makes no noise.  No howling winds, no falling raindrops, even the rivers and streams and waterfalls fall silent during such a storm.  The magical portion of the storm usually only lasts a few hours, while the storm itself may rage for days.  Sneaky Storms can cause the unwary to underestimate its dangers and take risks they would not otherwise.'))
            : ((t.name = 'Voiceless Storm'),
              (t.description =
                "When a Voiceless Storm rolls through, all commerce and spellcasting stops.  This powerful windstorm has been infused with silencing magic and as it blows through an area, everything goes quiet, even the wind itself.  It can still be felt and its effects, like broken trees and damaged structures, are clear but there is no noise.  People caught in these dangerous storms can't speak to communicate with one another and spellcasters who might normally use magic to calm the might of the weather find themselves unable to do so."))
          : e.isRaining
          ? e.temp < 32
            ? ((t.name = 'Silent Snow'),
              (t.description =
                'When Silent Snow falls, the world becomes blanketed in quiet.  Echoes are muted, voices are muffled, and even the sounds of battle fade almost to nothing.  Footsteps on the snow, in particular, are completely silent and thieves often take advantage of this magical weather to perform nefarious deeds.  The downside is that spellcasting and communicating through voice become much harder during Silent Snow.  Those who look keenly can see that Silent Snow does not sparkle in the light like regular snow, and when that sparkle comes back (usually after a few hours) the sound returns.'))
            : ((t.name = 'Musical Rain'),
              (t.description =
                'When rain mixes with sound-based magic, it can sometimes take on a life of its own.  As this rain falls, it lands with tinkly musical notes and swelling choral crescendos instead of the usual sound of rain on ground.  The music it makes is beautiful and haunting, never truly resolving but simply rising and falling in an endless virtuoso performance.'))
          : e.wind > 10
          ? ((t.name = 'Breath-Stealing Wind'),
            (t.description =
              'Spellcasters know to fear a breath-stealing wind.  This breezy weather system has been combined with silencing magic in order to create a strange effect where gusts of wind actually make those they pass across quieter.  The stronger the gust, the quieter the person (or animal or other source of noise).  Savvy thieves and assassins can learn to read this wind and take advantage of it to hide their activities, but unlucky spellcasters find themselves unable to finish their verbal magic at the most inopportune times.'))
          : ((t.name = 'The World Holds its Breath'),
            (t.description =
              'When The World Holds its Breath, silencing magic gathers in pockets low to the ground where it creates spaces that are completely soundless.  Anyone entering these areas finds that their footsteps grow quiet, their clothing stops making noise and they can no longer speak.  These patches of silence are eerie and can even be crippling to spellcasters who rely on verbal cues to cast.  Each patch is usually a few hundred feet in diameter, roughly circular or conforming to natural land forms.  The magic in the affected areas usually wears off after a few hours, though sometimes it can linger for days.')),
          (e.supernaturalEvent = t)
      }
    },
  },
  {
    name: 'Eldritch',
    description: '',
    requirements: {},
    weight: 1,
    applyEffects: (e: WeatherDay) => {
      if (!e.hasEvent) {
        const t: Partial<WeatherEvent> = {}
        e.isStorm
          ? e.isRaining
            ? e.temp < 32
              ? ((t.name = 'Melting Snowstorm'),
                (t.description =
                  "A Melting Snowstorm is a horrifying phenomenon indeed, when chaos magic mixes with a snowstorm.  Plants and structures are affected as normal by the snow and wind and cold, but any creatures caught out in the snow find that as the snow falls on them they start to change shape.  Their bodies begin to melt into blobby puddles, held together by skin but without any internal structure.  They grow new eyes and mouths and the longer they stay in this form the more they find themselves able to create pseudopods with their horridly melted bodies.  Clothing offers some protection from this effect, though it really only slows it instead of stopping it, but fortunately once the magic wears off the creatures (usually) return to their original form and shape.  Melted creatures are often very hostile to the world around them, lashing out because they don't understand what's happening to them, and will often try to tear each other apart in fear (damage caused to a Melted being does persist after the effect wears off).  A Melting Snowstorm is usually a small pocket within a larger storm that passes quickly over the land, depositing the Melting Snow before moving on, and the magic fades from this snow a few hours after it has landed."))
              : ((t.name = 'Tentacle Rain'),
                (t.description =
                  "Tentacle Rain starts out looking like Verdant Rain: it's greenish and where it lands, plants seem to start to sprout from the ground.  Something is clearly wrong, though, because the greenish color is sickly and weird and the plants that start to grow are red and purple and white, not green.  The plants grow quickly and soon it's clear that the rain has actually planted strange and weird growths: tentacles as big as trees grow where the rain has landed, eyestalks bloom like flowers, and squelching viscera rise like bushes.  These strange plants can be hostile to creatures near them, lashing out with mindless hunger to try and batter and bludgeon living creature.  Worse, these things even grow on living creatures where the rain has landed, giving them strange tentacles and other weird growths.  The Tentacle Rain passes through an area usually after a few hours, but the growths it creates remain until they die off (usually of hunger after a few days, but ones that are capable of feeding themselves enough meat can last for weeks).  After they die off, these weird growths end up rotting on the ground, spawning weird parasites and scavengers from inside their otherworldly corpses, so the aftermath of a Tentacle Rain can be quite horrifying."))
            : ((t.name = 'Voices of Madness'),
              (t.description =
                "It starts with whispers: dark and unnatural, coming from just beyond the edge of your vision and crawling in through your ears.  They don't speak any language you understand but they always tantalize with a suggestion of meaning.  Soon they become louder and more frightening: howls and screams, shouting and cajoling, all in a language you can just barely not understand.  The words sound familiar but you can't make any sense of them.  Then it gets louder still, screaming directly in your ear while the wind whips about, breaking trees and buildings and minds.  Voices of Madness happen when chaos magic mixes with a powerful windstorm, and can drive anyone caught out in it mad.  The weak-willed find themselves doing strange things: clawing at their skin, curling up into a ball and rocking, or even striking out violently at anyone nearby.  This temporary madness goes away when the magic fades, which usually happens within a few hours of the phenomenon starting."))
          : e.isRaining
          ? e.temp < 32
            ? ((t.name = 'Snow From Beyond'),
              (t.description =
                'Snow From Beyond has been infused with chaos magic.  At first it may seem like normal snow, but as you get closer to it, it starts to change colors and twist before your eyes, changing the landscape simply by being on it.  Plants and non-intelligent animals can easily be transformed by this snow, growing strange tentacles or turning into amorphous blobs, and routes that travelers once knew may become dangerous and twisted, looping in on themselves and taking people to strange places they never intended to go.  These effects usually wear off a few hours after a cloud affected by Snow From Beyond leaves an area.'))
            : ((t.name = 'Hallucinatory Rain'),
              (t.description =
                'Hallucinatory Rain happens when a regular rain cloud has become infused with chaos magic.  As the rain falls, anyone caught out in it starts seeing... things.  Strange creatures standing in the distance, weird whispers just behind their ear, horrifying and twisted monsters skulking about in the underbrush or the canopy.  Even their companions seem to warp and change: growing extra eyes and fangs, or having their bodies twist and twizzle into themselves.  These effects can be terrifying and make a person doubt everything they thought they knew about the world, but they are all merely illusions (or are they?).'))
          : e.wind > 10
          ? ((t.name = 'Monument Wind'),
            (t.description =
              "Monument Wind is a strange phenomenon indeed.  When chaos magic mixes with a breezy day, a strange sound like off-key singing or the whispering of a thousand voices can be heard just off in the distance.  Non-intelligent creatures (and some weak-willed sentients) find themselves compelled to create monuments to the otherworldy beings they hear.  This usually involves the construction of small cairns from gravel or twigs by ground-dwelling animals and weird charms hanging from trees by birds, but some animals can work together to erect massive structures like clay obelisks or huge, weird writing on the ground.  These things that they create are real and physical and so may stay for many weeks or years after they're constructed, even when the Monument Wind has stopped."))
          : ((t.name = 'Chaos Skies'),
            (t.description =
              'When eldritch magic lingers, the sky starts to do strange things.  Clouds twist and turn into strange and disturbing shapes, the sky itself changes to odd or even frightening colors and people caught out in it find themselves starting to hallucinate.  Unintelligent animals even start to trasnform, with their limbs being replaced by tentacles and strange hooks and other horrifying changes.  When the Chaotic Skies effect passes, usually after a few hours, the transformed animals return to normal.')),
          (e.supernaturalEvent = t)
      }
    },
  },
  {
    name: 'Necromantic',
    description: '',
    requirements: {},
    weight: 1,
    applyEffects: (e: WeatherDay) => {
      if (!e.hasEvent) {
        const t: Partial<WeatherEvent> = {}
        e.isStorm
          ? e.isRaining
            ? e.temp < 32
              ? ((t.name = 'Abomination Snow'),
                (t.description =
                  'Abomination Snow is a much-feared weather phenomenon that is whispered about in dark and frightened stories.  Snow infused with necromantic energies comes on in a fury, accompanied by biting winds and dark clouds, but as the snow falls on corpses or grave sites it causes those dead things to undergo a horrifying transformation.  The corpses start to clump together, binding to one another through magical means, and creating truly horrible amalgamations of the dead.  These things tend to be large, as big as giants in some cases, and furiously hungry to consume more people to add to their horrible bodies.  The effect lasts as long as the snowstorm does, and can be very deadly for anyone caught in it- which makes it worse by adding more corpses to the Abominations.'))
              : ((t.name = 'Life-Stealing Rain'),
                (t.description =
                  'When a powerful rain storm is infused with necromantic magic, it becomes Life-Stealing Rain.  This rain is a pale and ghostly blue in color, and whatever it touches starts to wither and die.  Trees become desiccated and dry, their bark flaking off, and any plants which have not lost their leaves start to lose them in copious amounts.  Animals become thin and emaciated, seeming to starve and age right before the eyes, and even structures can find themselves aging quickly, crumbling in places and rotting in others.  Each raindrop that falls on something can carry this horrible power, and the best protection against Life-Stealing Rain is to stay out of it by sheltering in a building (which may rot away around you) or a natural formation like a cave.  Life-Stealing Rain typically lasts only for a few hours in any given area before the winds cause it to move elsewhere, although the rainstorm that it was part of may still be going on.'))
            : ((t.name = 'Winds of Death'),
              (t.description =
                'When a powerful windstorm mixes with necromantic magic, it starts to howl with evil intent.  These winds now are not only capable of destroying trees and buildings, but they carry with them runic shouts of destruction for life itself.  Anyone hearing the winds finds themselves buffeted by magical energy, and the weak-willed or sickly can be struck dead instantly by these sounds.  Those killed by the winds soon rise as horrible undead creatures, adding even more danger to the situation as these creatures seek to destroy the living.  The winds themselves only last for a little while, minutes at a time before blowing into a new area, but the undead it creates persist until destroyed.'))
          : e.isRaining
          ? e.temp < 32
            ? ((t.name = 'Zombie Snow'),
              (t.description =
                "When Zombie Snow falls, there is often no warning that people's lives are about to get very bad.  This snow charged with necromantic magic does not look any different from regular precipitation, but as it lands on corpses or grave sites the necromantic magic contained within it animates these dead things temporarily.  Zombies burst forth from graves, skeletons walk out of tombs, and fresh kills become hungry ghouls and ghasts.  These new undead are driven by an insatiable hunger for destruction and seek out living creatures to kill.  These creatures are given life by the snow, and when the weather system passes they return to their previous state of actual deadness.  In the meantime, though, they can wreak havoc on a community or ecosystem."))
            : ((t.name = "Dead Love's Rain"),
              (t.description =
                "Dead Love's Rain happens when rain clouds pass through an area of intense necromantic magic, charging them with energies that can reach into the world beyond.  Each raindrop appears to have a tiny, perfect image of a skull in it and puddles that form seem to be teeming with spectral and ghostly images.  Anyone who imbibes this water finds themselves temporarily blinded (not technically blind, they're just now looking into the spirit plane which is dark and featureless), but in exchange they can speak into the spirit world.  This allows them to attempt to speak to things there, including dead loved ones.  To successfully contact a specific entity they need to know something of the land of the dead, and it is easy to acccidentally begin speaking to powerful, potentially evil creatures that dwell there.  The effects of the water wear off after a few minutes, and any puddles infused with this energy quickly revert to normal water after the weather system is gone."))
          : e.wind > 10
          ? ((t.name = 'Ghost Winds'),
            (t.description =
              'When necromantic magic is stirred up by blowing winds, strange things start to happen.  The wild howls with a ghostly whine and the magical energies reach deep into the spirit world and pull forth all manner of horrible apparitions: ghosts and banshees and phantasms and worse come screaming through the veil between worlds, angry at having their rest disturbed and ready to seek vengeance.  Ghost Winds typically last for a few hours at a time, and any non-corporeal undead summoned by the wind will usually be laid to rest once the wind stops.'))
          : ((t.name = 'Bells of the Afterlife'),
            (t.description =
              'On calm days, when necromantic magic runs wild and infuses the very air itself, the Bells of the Afterlife can be heard.  These ghostly chimes sound like they are far off in the distance and slightly off-key, but if you stand still and listen to them long enough you find yourself being lulled into a disquieted sleep.  The sleepers fall where they were standing but suffer from strange and horrible nightmares, and as long as they are asleep a ghost is pulled from the netherworld to wander the land instead.  Waking the sleeper or waiting for the magic to wear off are the best ways to dispel these ghosts back where they came from.')),
          (e.supernaturalEvent = t)
      }
    },
  },
  {
    name: 'Friction',
    description: '',
    requirements: {},
    weight: 1,
    applyEffects: (e: WeatherDay) => {
      if (!e.hasEvent) {
        const t: Partial<WeatherEvent> = {}
        e.isStorm
          ? e.isRaining
            ? e.temp < 32
              ? ((t.name = 'Trapping Snow'),
                (t.description =
                  'Trapping Snow is a dangerous phenomenon which happens when friction magic mixes with a powerful snowstorm.  The snow that falls from these clouds is orangey in color and becomes nearly impossible to brush off.  Worse, anything that touches it can become stuck fast, requiring a feat of strength to pull apart.  This sticky snow accumulates differently than regular snow, making large piles and easily burying unlucky trees and buildings that might have survived a regular snowstorm.  The clouds bearing this strange snow usually turn back into regular snowstorm clouds within a few hours, and the magic which infuses the snow wears off a few hours after that.'))
              : ((t.name = 'Grease Rain'),
                (t.description =
                  'Grease Rain happens when negative frictional magic mixes with a powerful rainstorm, creating orange droplets that are the single greatest lubricant known.  These drops make everything they touch extremely slippery: walking on ground wet with the stuff is like walking on ice, trying to pick up or manipulate objects is even worse, and things that were supposed to be locked or tied up have a way of opening on their own.  The clouds which bear this strange rain typically last for a few hours, and the effects wear off a few hours after that.'))
            : ((t.name = 'Sticky Winds'),
              (t.description =
                'When friction magic mixes with a windstorm, the result is strange.  Everything touched by these winds becomes very sticky indeed, grabbing onto anything that it in turn touches and causing it to stick fast.  This effect lasts as long as the Sticky Winds are blowing, which is typically only for a few minutes to an hour, and effectively immobilizes anything caught out in the storm.'))
          : e.isRaining
          ? e.temp < 32
            ? ((t.name = 'Stick Snow'),
              (t.description =
                'Stick Snow is snow charged with frictional magic.  This snow causes anything it touches to become very very sticky.  This makes surfaces coated in Stick Snow easy to climb or even hang from a roof if you throw the snow up onto an overhanging surface.  Attempts at grappling or wrestling with a Stick Snow covered target become much easier.  The clouds pass quickly, spending no more than a few minutes in an area, and the effect wears off after a few hours'))
            : ((t.name = 'Slip Rain'),
              (t.description =
                'Slip Rain happens when negatively charged friction magic meets with a rain cloud.  The precipitation that results is slightly red in color, and causes any surface it comes in contact with to become instantly very slippery, like ice.  This can be fun or treacherous depending on your attitude toward the situation.  The Slip Rain remains until it evaporates away or is washed away by regular rain.'))
          : e.wind > 10
          ? ((t.name = 'Unlocking Winds'),
            (t.description =
              "When a breezy day mixes with negative friction magic, everything starts to become very slippery.  It's hard to hold onto anything, as if your hands were covered in grease, and worse this effect applies to tied ropes, jars, and locks (and anything similar), often untying or opening them just from the force of the wind."))
          : ((t.name = 'Gummy Mist'),
            (t.description =
              "When frictional magic seeps into an area where there isn't a lot of wind, it becomes a strange orange-ish mist.  This mist causes things within it to greatly increase their friction, becoming very sticky.  Walking becomes a weird struggle, hair starts to do crazy things and it becomes almost impossible to slide surfaces across one another (which makes, for example, drawing swords or pulling things out of bags almost impossible).  The areas of mist typically range in size from a few dozen to a few hundred feet in size and there may be many of them in an area.  They usually evaporate away by the middle of the afternoon.")),
          (e.supernaturalEvent = t)
      }
    },
  },
  {
    name: 'Annoyance',
    description: '',
    requirements: {},
    weight: 1,
    applyEffects: (e: WeatherDay) => {
      if (!e.hasEvent) {
        const t: Partial<WeatherEvent> = {}
        e.isStorm
          ? e.isRaining
            ? e.temp < 32
              ? ((t.name = 'Witty Snow'),
                (t.description =
                  "When particularly annoying magic mixes with a snowstorm, the effect is dangerous and obnoxious.  Each snowflake that falls finds itself desperately wanting to tell a (bad) joke that it just learned, being snow and never having known a joke before.  It will repeat this joke often and loudly to ensure that everyone can appreciate it.  As thousands upon thousands of snowflakes all try to tell jokes, their voices overlap and create an annoying cacophony of sound and bad taste.  This makes it difficult to concentrate and to hear people you're taking to, but can be a boon for anyone with an eye for underhanded deeds who does not want to be heard.  The clouds carrying this annoying snow tend to move quickly through the storm, and the magical effect wears off after several hours."))
              : ((t.name = 'Cowbell Rain'),
                (t.description =
                  'When a powerful rainstorm mixes with annoying magic, the result is Cowbell Rain.  Each droplet that strikes the ground sounds like the ringing of a cowbell.  As thousands of droplets all make this sound, the noise can drive anyone crazy, although it does provide good cover for clandestine deeds that rely on not being heard to succeed.'))
            : ((t.name = 'Hello Hello Hello'),
              (t.description =
                'This windstorm is greeting you: Hello Hello Hello hello hello hello.  Over and over.  The sound comes from all directions at random and inoportune times, and at least half the time it seems to also be saying a name.  Your name.  Although you mostly get used to it after a while, it can still be unnerving and distracting to hear someone saying hello specifically to you every few seconds.'))
          : e.isRaining
          ? e.temp < 32
            ? ((t.name = 'Inquisitve Snow'),
              (t.description =
                "Inquisitive Snow has an endless amount of questions: what are you doing?  why?  why does he look like that?  why don't you have a bigger pack?  why doesn't your pack have a certain kind of tie?  why would someone make a tie like that when this other one is better?  why is your nose so big?  why are your feet so weird? and so forth.  The snow constantly asks questions, sometimes not even waiting for an answer, sometimes simply repeating your name over and over.  Inquisitive Snow is not necessarily dangerous, but it can disrupt activities requiring concentration.  It usually lasts for a few hours but can be all day, too."))
            : ((t.name = 'Off-Key Rain'),
              (t.description =
                'Off-Key Rain is particularly annoying: it lands on the ground with the sound of musical notes and singing voices, but they are all clashing and out of tune with one another.  The cacophony is not necessarily dangerous but can disrupt tasks which require focus such as casting spells or doing taxes.'))
          : e.wind > 10
          ? ((t.name = 'Screaming Wind'),
            (t.description =
              'Screaming Wind is wind that literally screams: AaaaaaAAAaaaaAAaaahh! ... Ah! Ah! Ah! .. AaaaAAh!  Ah! (and so on).  Usually not dangerous, the sound gets annoying very quickly, particularly because the wind usually varies the noises.  Sometimes there can be long minutes without any sound, and then there can be a half hour of straight screaming, which can also disrupt tasks that need concentration such as spellcasting or math.  Screaming Winds typically last for a few hours to an entire day.'))
          : ((t.name = 'Wildly Fluctuating Temperature'),
            (t.description =
              "Wildly Fluctuating Temperature is a strange weather phenomenon that defies explanation.  First, it is just cold enough that you want to put on a coat.  Then, when you put that coat on, it becomes so hot that wearing a coat is uncomfortable.  It seems to change based on your personal discomfort levels, and if it isn't too hot or too cold it will get hotter or colder until it provokes a reaction.  This weather can be dangerous when you're ignoring it, because that will cause it to more wildly change its temperature to try and get your attention so that you put on or take off some clothing.")),
          (e.supernaturalEvent = t)
      }
    },
  },
  {
    name: 'Shadow',
    description: '',
    requirements: {},
    weight: 1,
    applyEffects: (e: WeatherDay) => {
      if (!e.hasEvent) {
        const t: Partial<WeatherEvent> = {}
        e.isStorm
          ? e.isRaining
            ? e.temp < 32
              ? ((t.name = 'Diseased Snow'),
                (t.description =
                  'This black and red snow is filled with evil shadow magic and brings extra danger.  In addition to the normal dangers of a snowstorm, such as falling trees and bitter cold, anyone who eats this unnatural snow finds that it corrupts their very soul.  Evil thoughts come more easily to them, divine and holy shrines will repel them and they will find themselves much more likely to hurt others.  This effect can last for days after the snow is eaten.'))
              : ((t.name = 'Wounding Rain'),
                (t.description =
                  'This dark red rain comes from clouds filled with evil shadow magic, and can be quite devastating when it falls.  Wounding Rain causes wounds to anything it touches, the more of it which falls on something, the worse the wounds will be.  This includes cuts and bruises as well as broken bones and worse, and anyone who stays out in a Wounding Rain becomes increasingly likely to end up dead.'))
            : ((t.name = 'Winds of Corruption'),
              (t.description =
                "When evil shadow magic mixes with a powerful windstorm, Winds of Corruption are the result.  These winds fill people's lungs with evil magic, so that when they breathe out they start speaking the words to dark and evil incantations.  This causes random evil spells to suddenly start being cast, the worst of which can be summons of Devils, Demons, and other powerful evil entities.  The more people there are in an area, the more frequent and powerful these spells become, regardless of the power of the individual people."))
          : e.isRaining
          ? e.temp < 32
            ? ((t.name = 'Wicked Snow'),
              (t.description =
                'When evil, shadow magic mixes with snow, it creates a much-feared phenomenon called Wicked Snow.  When these dark grey snowflakes land on anyone with pure, positive thoughts in their mind they lash out with painful bursts of negative magic.  Only those with wicked and evil intentions in their hearts can walk safely out in Wicked Snow, and the only safety is to seek shelter.  Wicked Snow typically lasts for a few hours but has been known to fall for as long as a day.'))
            : ((t.name = 'Falling Shadows'),
              (t.description =
                'When a rainy day mixes with magic from the shadow realm, Falling Shadows is the result.  This rain is not wet, rather it is dark, like shadows are actually falling from the sky.  These shadows pool with other shadows and make them larger and larger, and cause the day to get darker and darker as it goes.  Creatures with darkvision or alternate methods of seeing are usually fine, but many others find themselves in complete and utter, impenetrable darkness after a few hours.  Adding more light (ie: lighting more torches) can help, but only temporarily as more and more shadows accumulate.  This strange weather usually only lasts half a day or so, but can go longer.'))
          : e.wind > 10
          ? ((t.name = 'Corrupting Wind'),
            (t.description =
              'When the air is shot through with streaks of black and red and the wind speaks of evil deeds in your ear, a Corrupting Wind is blowing.  Filled with evil shadow magic, this wind can sap the power from holy places and turn sites of evil acts into shrines to evil gods.  Worse, the weak-willed can find themselves influenced by this wind, and start thinking evil thoughts like rape, murder, and burglary would be good ideas.  Even the strong-willed can find themselves being less generous and less nice while Corrupting Winds blow.'))
          : ((t.name = 'Darklight Sun'),
            (t.description =
              "When evil shadow magic permeates the air and doesn't get dispersed by winds, it can create a phenomenon where the sun itself seems to disappear, fading out until it casts no light at all.  These areas of darkness can be pierced by torches, fires and other magical lights but for the unwary it can create very dangerous traveling situations.")),
          (e.supernaturalEvent = t)
      }
    },
  },
  {
    name: 'Righteous',
    description: '',
    requirements: {},
    weight: 1,
    applyEffects: (e: WeatherDay) => {
      if (!e.hasEvent) {
        const t: Partial<WeatherEvent> = {}
        e.isStorm
          ? e.isRaining
            ? e.temp < 32
              ? ((t.name = 'Curing Snowstorm'),
                (t.description =
                  'A Curing Snowstorm is a boon to those who are suffering from illness and disease.  This bright, golden snow is filled with holy magic and when eaten it will cure most disease (bacteria, viruses, parasites, and even magical disease).  The snow retains its magic for only a few hours, but people who are lucky enough to imbibe it remain cured.'))
              : ((t.name = 'Healing Storm'),
                (t.description =
                  'Although rainstorms can be dangerous events that bring flooding and downed trees, when they mix with holy magic they become Healing Storms.  The water from these storms can fix wounds or broken bones and repair damage to plants and buildings.  These storms are much appreciated for the relief they bring to the injured.'))
            : ((t.name = 'Winds of Purification'),
              (t.description =
                'When a powerful windstorm mixes with righteous magic, the winds blow golden and strong and have the power to destroy undead abominations.  Undead creatures have the magic that binds them ripped apart by these windstorms and often simply crumble to dust during the storm.  Evil and necromantic magic also becomes very difficult to cast.'))
          : e.isRaining
          ? e.temp < 32
            ? ((t.name = 'Smiting Snow'),
              (t.description =
                'Evil everywhere must beware Smiting Snow.  When righteous magic mixes with blowing snow, it creates shining and golden flakes that can strike down evildoers.  Anyone with ill-intent in their hearts finds themselves suddenly bombarded by painful bursts of holy energy whenever these snowflakes land on them while they are thinking of doing evil.'))
            : ((t.name = 'Bright Rain'),
              (t.description =
                'When holy magic mixes with falling rain, it creates drops of water that glow brightly and create glorious puddles of light.  This light banishes shadows and can be collected to provide illumination in dark places, and because it is infused with holy energy it can do damage to evil creatures that are harmed by sunlight.  The Bright Rain usually falls for a few hours at a time before turning back to regular rain, and any water infused with the magic becomes regular water within a few hours after that.'))
          : e.wind > 10
          ? ((t.name = 'Purifying Winds'),
            (t.description =
              "When the wind sparkles with golden light, it is said to be a Purifying Wind.  Charged with holy magic, it can make holy shrines more powerful and can create divine shrines in places where acts of great goodness have happened.  It even saps the power from shrines to evil deities and can purify areas of otherwise powerful evil.  Better still, people affected by a Purifying Wind will start to have good and pure thoughts.  Those who would do evil start to think it's a bad idea, and those who might normally be selfish or casually cruel find themselves helping their neighbors and even strangers instead."))
          : ((t.name = 'Daybright Moon'),
            (t.description =
              'When righteous magic collects and does not get broken up by wind, it can create a phenomenon where the night lights up nearly as bright as day.  This light is warm and comforting and can make travel possible when it would otherwise be very dangerous.')),
          (e.supernaturalEvent = t)
      }
    },
  },
  {
    name: 'Metallic',
    description: '',
    requirements: {},
    weight: 1,
    applyEffects: (e: WeatherDay) => {
      if (!e.hasEvent) {
        const t: Partial<WeatherEvent> = {}
        e.isStorm
          ? e.isRaining
            ? e.temp < 32
              ? ((t.name = 'Granite Snow'),
                (t.description =
                  "When a dangerous, blowing, and cold snowstorm mixes with earth magic it can create a dangerous condition known as Granite Snow.  When this happens, snowflakes turn into bits of gravel as they fall from the sky and land as a dangerous storm of grit and stone.  They act very much like hail, in that they can damage or destroy trees and buildings, and minorly harm living creatures, but they are much harder to clean up because they don't melt in warm weather or wash away easily.  Granite Snow usually passes through an area over a period of a day or so, and can drop several inches of gravel into a town or ecosystem."))
              : ((t.name = 'Storm of Swords'),
                (t.description =
                  'When earth magic mixes with a powerful rainstorm, it can create a deadly effect known as a Storm of Swords.  The earth magic swirls and mixes high in the atmosphere, merging rain droplets together into large, sharp bars of metal that very much resemble swords.  Once they get large enough, these magically created swords hurtle toward the ground with the same force and deadliness of a real sword falling from the atmosphere.  The part of the storm charged with this magic typically moves quickly through an area, but the damage it leaves behind can be immense.'))
            : ((t.name = 'Midas Wind'),
              (t.description =
                "Midas Wind is a particularly dangerous kind of windstorm which happens when earth magic mixes with a windy weather system.  The wind becomes charged with magic such that when it blows across a surface, it forms a thin layer of gold on that surface.  If the surface doesn't move, the layer grows thicker and thicker at a rate of about half an inch per hour.  Midas Winds pass through very quickly, but in their wake they leave many (dead or dying) golden plants, and even humans and animals can be encased in a lethal shell of gold if they don't get out of the wind fast enough."))
          : e.isRaining
          ? e.temp < 32
            ? ((t.name = 'Gold Snow'),
              (t.description =
                "Gold Snow is widely considered to be a boon, although it can become dangerous in some situations.  When earth magic mixes with snow clouds, instead of creating regular snow they create tiny flakes of gold that fall from the sky.  These flakes are actual, real and pure gold and while they don't individually weigh very much, anyone who has the presence of mind can pick up piles of the stuff.  This can be dangerous because gold is heavy and can destroy roofs and trees, and also has the potential to ruin local economies with a sudden influx of wealth."))
            : ((t.name = 'Silver Rain'),
              (t.description =
                'Silver Rain is both dangerous and profitable.  Powerful earth magic mixes with a weather system and turns rain droplets into little pellets of actual silver.  These strike with the force of hail, or even harder, enough to injure creatures and break structures and trees, and they can clog up waterways and wells.  However, they are pure and solid silver and can be collected and sold for good coin, which can be a boon to the poor but also a curse for a region if it makes everyone too rich.'))
          : e.wind > 10
          ? ((t.name = 'Wandering Rock Winds'),
            (t.description =
              'When Wandering Rock Winds blow, all manner of rocks start to migrate from their normal location.  Gravel, small rocks, even boulders start to move in the direction of the wind, rolling or wiggling along.  While most of the time this is a mere curiosity, the mass movement of heavy rock can sometimes trigger slides or other very hazardous conditions.'))
          : ((t.name = 'Growing Mountains'),
            (t.description =
              'When powerful earth magic settles and there is no wind around to disperse it, it can create a phenomenon colloquially called Growing Mountains.  The earth magic forms misty patches on the ground, some small and some large, and starts to coalesce into actual dirt and rock.  Within a matter of minutes, a noticeable hill can be created and after several hours these hills can be very tall indeed.  The magic usually only lasts a day or less but can create low-lying mountain ranges where there were none before, or sometimes simply one big and tall mountain on an otherwise flat plain.')),
          (e.supernaturalEvent = t)
      }
    },
  },
  {
    name: 'Plague',
    description: '',
    requirements: {},
    weight: 1,
    applyEffects: (e: WeatherDay) => {
      if (!e.hasEvent) {
        const t: Partial<WeatherEvent> = {}
        e.isStorm
          ? e.isRaining
            ? e.temp < 32
              ? ((t.name = 'Egg-Laden Snow'),
                (t.description =
                  'Sometimes, when a powerful winter storm meets a pocket of plague magic, it creates a horrific weather system called Egg-Laden Snow.  The snowflakes which fall from this system look superficially like regular snow, but they can be seen to twitch and writhe when observed up close.  When they land on a living thing (plant, animal, etc.) the eggs have a natural urge to try and burrow deep into bark and stems and flesh, causing extreme pain when they succeed.  It gets worse, however.  The eggs burrow as deep inside as they can go, and then hatch into thousands or millions of small insects which eat their way out of the host.  Although hardy creatures usually survive this process, people who have been caught out for too long in Egg-Laden Snow have been known to die from it.'))
              : ((t.name = 'Rain of Spores'),
                (t.description =
                  "When dangerous plague magic mixes with a rainstorm, it creates a strange weather condition called a Rain of Spores.  When raindrops land on something (ground, living creatures, plants) they instantly spawn a collection of fungi and mold.  Within minutes, an area can be entirely blanketed in thick, fuzzy carpets of mold and covered in growing mushrooms of all sorts.  Some of these fungi are poisonous, but the real danger becomes the spores that they give off once the storm has passed, filling the air with a thick miasma that can easily choke breathing creatures.  The storm passes relatively swiftly, but the mushrooms and molds are real and physical and will survive as long as they can find suitable nutrients and don't get cleared away by people or animals."))
            : ((t.name = 'Blight Wind'),
              (t.description =
                "Blight Wind is a horrifying windstorm that can be talked about for generations after it happens.  Plague magic mixes with a powerful windstorm and creates this monstrosity.  As the wind blows, any living thing caught out in it finds that it causes painful blisters, boils, and welts to rise on their exposed skin (bark or stems in the case of plants).  The longer something is caught out in a Blight Wind, the more debilitating this effect becomes.  Blight Winds mercifully pass through an area quickly, but they leave behind them scars that can last for lifetimes, and many years longer than that in people's memories.  Trees that saw a Blight Wind even a hundred years ago may still bear the scars of that wind."))
          : e.isRaining
          ? e.temp < 32
            ? ((t.name = 'Maggot Snow'),
              (t.description =
                "Maggot Snow is a horrible weather phenomenon which occurs when plague magic mixes with snow clouds.  The clouds turn a sickly yellow color and start to squirm and wriggle in the air, and instead of snow falling from them, it's maggots.  These nearly senseless creatures mostly die on impact with the ground, but as the accumulation of maggots grows the top layers are mostly spared and can crawl about.  These maggots are particularly hungry and seek any kind of flesh to feast on, making them dangerous if you're caught out in a Maggot Snow system without any high ground to flee to."))
            : ((t.name = 'Rain of Pus'),
              (t.description =
                'Rain of Pus is a disgusting weather system which occurs when plague magic mixes with regular rain clouds.  These clouds turn the color of infected wounds, sickly shades of red and purple and green that are stomach-churning to look at, and a thick white liquid falls from them.  This pus is disgusting but also highly infectious, and living creatures caught out in it can find themselves contracting all sorts of nasty diseases from it, especially if it gets into a wound or touches a mucous membrane (nose, inside of mouth, etc.).  Pus clouds tend to pass quickly over an area, dropping their horrible issue and moving on after minutes or hours.  The pus itself remains until it is washed away by other rain or dries up in the sun, which means it can also infect waterways downstream from the main weather system.'))
          : e.wind > 10
          ? ((t.name = 'Foul Breeze'),
            (t.description =
              'A Foul Breeze is a blustery, windy weather system filled with plague magic.  It is not as powerful as some plague-charged weather systems, but the air becomes a thick and foul yellow that smells terrible and blocks sight.  This miasma can cause breathing problems for those susceptible and makes it impossible to track anything by smell.  Being out in the Foul Winds too long can also cause headaches, nausea, and other minor ailments that are not necessarily debilitating but are certainly annoying and can be dangerous when traveling or fighting.'))
          : ((t.name = 'Toenail Sprouts'),
            (t.description =
              "Toenail Sprouts at first do not seem like such a bad thing, although they are disgusting.  When plague magic hangs heavy in the air and isn't dispersed by weather, it can infect the ground and the plants.  Toenail Sprouts start in the morning as small, yellowish buds all along the outside of plants (grasses, trees, etc.).  They look awful but not harmful.  As the day goes on, they bloom into what looks very much like human-sized toenail clippings.  These toenails are thick and vary in color from weirdly yellow to disturbingly green and red.  Any exposed skin, and especially open wounds, which touches these sprouts becomes exposed to an infectious fungus that can severely slow down healing, in addition to being very itchy.")),
          (e.supernaturalEvent = t)
      }
    },
  },
  {
    name: 'Invisibility',
    description: '',
    requirements: {},
    weight: 1,
    applyEffects: (e: WeatherDay) => {
      if (!e.hasEvent) {
        const t: Partial<WeatherEvent> = {}
        e.isStorm
          ? e.isRaining
            ? e.temp < 32
              ? ((t.name = 'Invisible Snowstorm'),
                (t.description =
                  'An Invisible Snowstorm is a snowstorm charged with invisibility magic.  It has all the usual effects of a snowstorm (cold, wind, lots of blowing snow) but you cannot see it: the clouds are invisible and the snow that falls is invisible.  This can make them treacherous because it looks like a beautiful, sunny day even though it is actually a raging, dangerous snowstorm.  Drifts are particularly perilous because they can be deep enough to swallow up a human but totally invisible.  The effect wears off several hours after falling, but the storm itself can last for a day or more.'))
              : ((t.name = 'Rain of Disappearance'),
                (t.description =
                  'Rain of Disappearance is a particularly disturbing weather phenomenon that can make a normal rainstorm quite dangerous.  These storm clouds become infused with invisibility magic, and so do the winds, so that anything they touch except the ground itself becomes invisible.  Creatures, plants, buildings, even rocks and boulders disappear as they become wet with the rain and battered by the winds.  This can cause the entire world to become a mostly featureless expanse of ground, hiding everything from sight.  This is especially dangerous as the rain and wind can still cause damage, but moving about becomes very perilous as everyone becomes essentially blind.  A Rain of Disappearance usually only lasts a few hours before fading back into a regular rainstorm, and the effects dissipate almost immediately after the enchanted clouds move on.'))
            : ((t.name = 'Invisible Debris Storm'),
              (t.description =
                'When a windstorm mixes with invisibility magic, an Invisible Debris Storm occurs.  As the winds whip about and rip off tree limbs and unsecured bits of things from roofs, everything that is picked up by the storm becomes invisible (until it is no longer flying through the air).  This means that falling trees limbs, flying rocks, and the like are all invisible and therefore more dangerous than usual.  Invisible Debris Storms are also usually windier and more powerful than a regular wind storm, causing even more havoc.'),
              (e.wind += 10))
          : e.isRaining
          ? e.temp < 32
            ? ((t.name = "Thieves' Snow"),
              (t.description =
                "Thieves' Snow falls with a slightly greyish tint and a mischievous sparkle to it, subtly but noticeably different from regular snow.  This snow is charged with invisibility magic and anyone who eats enough of it (about a cup) becomes invisible.  This invisibility remains for several minutes up to half an hour, as long as the imbiber doesn't do anything too vigorous (such as attacking with a weapon or casting a spell).  The snow retains this magic for several days or until melted or otherwise washed away."))
            : ((t.name = 'Things-Go-Missing Rain'),
              (t.description =
                "When Things-Go-Missing Rain falls, things go missing.  This rain is charged with random invisibility magic, and anything touched by it can suddenly become invisible.  Not everything touched by this rain goes invisible, and it won't affect something huge like the ground, but trees and buildings and altars and people have been known to disappear in areas where it falls.  The effect lasts for a few minutes or a few hours, seemingly as random as the things that go missing in the first place.  For large things, buildings and people and so forth, this is usually just an inconvenience but small things like keys and weapons can easily be misplaced or forgotten once they've become invisible."))
          : e.wind > 10
          ? ((t.name = "The Emperor's New Wind"),
            (t.description =
              "The Emperor's New Wind is a weather system that can be hilarious but oftens cause strife in civilized societies.  The winds on these days are infused with invisibility magic and any protective covering they blow across becomes invisible.  This means people's armor and clothes, as well as animal's fur, and also things like doors or window shutters.  The things remain, they are simply invisible.  This causes people to look naked, animals to look shaved, and the secrets hidden inside houses to be revealed.  Each gust of wind usually only lasts a few moments, so the effect comes and goes wildly throughout the day as the wind rises and ebbs."))
          : ((t.name = 'Holes in the World'),
            (t.description =
              "Holes in the World is a weather phenomenon that is more distressing than dangerous, although it can be dangerous too.  When latent invisibility magic hangs in the air and is not dispersed by winds, it creates patches of ground that are infused with it.  Within these patches, everything but the ground itself becomes invisible: creatures, trees, buildings, stuff, grasses, everything.  This makes it seem as if there have suddenly been huge holes punched in the world with only bare ground remaining, but everything inside the patches is still there, it just can't be seen.  These patches usually start to disperse as the sun rises in the sky and don't often linger for more than a day.")),
          (e.supernaturalEvent = t)
      }
    },
  },
  {
    name: 'Food',
    description: '',
    requirements: {},
    weight: 1,
    applyEffects: (e: WeatherDay) => {
      if (!e.hasEvent) {
        const t: Partial<WeatherEvent> = {}
        e.isStorm
          ? e.isRaining
            ? e.temp < 32
              ? ((t.name = 'Cheesestorm'),
                (t.description =
                  'When a snowstorm mixes with powerful food magic, a Cheesestorm in the result.  As the snow falls it turns to cheese, usually grated flakes of perfectly aged Parmesan.  This cheese can clog gutters and waterways, although during snowstorms those are usually full anyway, and is entirely real so it can be collected for later snacking if you are so inclined.  A Cheesestorm usually turns back into a regular snowstorm within a few hours as the magic dissipates.  The cheese is heavier than snow, and so more likely to destroy buildings and trees, and when the weather starts to warm it can become moldy and biohazardous.'))
              : ((t.name = 'Winestorm'),
                (t.description =
                  'When food magic mixes with a powerful rainstorm, a Winestorm is the result.  The rain itself turns to wine as it falls, becoming bright red in color and intoxicating to drink.  This storm carries all the usual dangers of a rainstorm (flooding, breaking tree limbs, destroying roofs) but also has the tendency to cause most things caught out in it to become drunk, leading to shenanigans that would not normally happen out in a regular rainstorm.  Also unlike a regular rainstorm, people will usually go out and frolic in it, increasing the drunkenness and danger.  A Winestorm can last up to a day, and the wine it creates is entirely real and does not go away after the magic ends.'))
            : ((t.name = 'Winds of Plenty'),
              (t.description =
                "Winds of Plenty are a regular windstorm infused with food magic.  They can be a blessing or a curse depending on how long they last.  As Winds of Plenty blow across stored or prepared food, that food starts to multiply.  The food will 'double' after five or so minutes, becoming a perfect copy of itself.  The longer this effect lasts, the more food that will result.  These winds only last a few minutes up to half an hour, but can be a boon to those starving, or dangerous to storage areas that are already close to full and which can burst under pressure."))
          : e.isRaining
          ? e.temp < 32
            ? ((t.name = 'Powdered Sugar Snow'),
              (t.description =
                'When food magic mixes up with a system of snowy weather, Powdered Sugar Snow is the result.  From a distance it looks like snow but when you get close to it and start to feel it and taste it, it is clearly powdered sugar.  Powdered Sugar Snow is usually less heavy and dense than regular snow, but can cause other problems such as coughing or sneezing fits when the powdered sugar gets inhaled, and it makes everything unpleasantly sticky.  The weather system can pass over in hours but the powdered sugar is real and remains until it is washed away or otherwise removed.'))
            : ((t.name = 'Meatballs from Heaven'),
              (t.description =
                'When food magic is infused into a rainy weather system, Meatballs from Heaven can be the result.  The raindrops themselves turn into meatballs and fall, sometimes accompanied by sauce or noodles as well.  These meatballs are cooked and safe to eat, but can cause quite a mess, can be damaging to structures (especially those with flat roofs), and can clog up waterways and gutter systems easily.  The weather system which spawns these meatballs usually passes in a few hours, but the meat remains until it is cleared away naturally.'))
          : e.wind > 10
          ? ((t.name = 'Something Smells Good'),
            (t.description =
              'When patches of latent food magic mix with a windy weather system, the breezes themselves start to take on the scent of delicious home cooking.  Something Smells Good is literally that: the wind smells tasty and delicious, but the source of the scent can never be found.  For some this is a pleasant effect, but for others it can be distracting or drive them to madness.'))
          : ((t.name = 'Blooming Bread'),
            (t.description =
              "When food magic lingers in the air and isn't cleared away by winds, Blooming Bread is the result.  Starting in the morning, loaves of bread and muffins and other baked goods start to rise up from the ground, like blooming flowers.  These baked goods grow larger and more delicious looking as the day goes on, until they reach their 'correct' size in the early afternoon.  The food is entirely real and safe to eat (although you should probably cut off the outside, since it often grows out of dirt).  The bloom typically only lasts for a few hours, but the bread it creates is real and must be dealt with like normal baked goods covering the ground.")),
          (e.supernaturalEvent = t)
      }
    },
  },
]

export class GenerateWeather {
  constructor(
    private days: number,
    private t = [],
    private climate: number,
    private wetness: number,
    private supernaturalFrequency: number,
    private s: string,
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

  Render() {
    // let t = 1
    //   let n = null
    //   let debug = true
    // if (debug) {
    //   'Base Vals \r\n',
    //     'Days: ' + days + '\r\n',
    //     'Temp: ' + climate + '\r\n',
    //     'Wetness: ' + wetness + '\r\n\r\n',
    //     ' -- Winter --\r\n'
    //   for (d = 0; d < r.length; d++) {
    //     t / this.days >= 0.25 &&
    //       !writtenSpring &&
    //       ('-- Spring --\r\n', (writtenSpring = !0)),
    //       t / days >= 0.5 &&
    //         !writtenSummer &&
    //         ('-- Summer --\r\n', (writtenSummer = !0)),
    //       t / days >= 0.75 &&
    //         !writtenFall &&
    //         ('-- Fall --\r\n', (writtenFall = !0))
    //     const s = r[d].days
    //     'System: ' + d.toString() + ' Days: ' + r[d].duration.toString(),
    //       r[d].storm && ' Storm',
    //       r[d].event && ' !Event!',
    //       r[d].calm && ' Calm',
    //       '\r\n',
    //       'Temp: ' +
    //         r[d].temp.toString() +
    //         ' Wetness: ' +
    //         r[d].wetness.toString() +
    //         ' Wind: ' +
    //         r[d].wind.toString(),
    //       '\r\n'
    //     for (m = 0; m < s.length; m++) {
    //       const o = s[m]
    //       'Day ' + m.toString() + ': ' + Math.floor(o.temp).toString() + ' ',
    //         o.raining && rainingIcon,
    //         o.temp < 32 && coldIcon,
    //         t++
    //     }
    //     ;('\r\n----------\r\n')
    //   }
    // }
  }
  GetDayStrings() {
    // for (var t = !1, a = !1, i = !1, n = 1, s = [], o = 0; o < r.length; o++)
    //   for (let l = 0; l < r[o].duration; l++) {
    //     if (n <= this.days) {
    //       let h = ''
    //       1 === n && s.push(' -- Winter Begins --\r\n\r\n'),
    //         n / this.days >= 0.25 &&
    //           !t &&
    //           (s.push('-- Spring Begins --\r\n\r\n'), (t = !0)),
    //         n / this.days >= 0.5 &&
    //           !a &&
    //           (s.push('-- Summer Begins --\r\n\r\n'), (a = !0)),
    //         n / this.days >= 0.75 &&
    //           !i &&
    //           (s.push('-- Fall Begins --\r\n\r\n'), (i = !0)),
    //         (h += 'Day ' + n + ': '),
    //         (h += r[o].days[l].Render()),
    //         s.push(h)
    //     }
    //     n++
    //   }
    // return s
  }

  GetDayData() {
    // let t = !1,
    //   a = !1,
    //   i = !1,
    //   n = 1,
    //   s = []
    // s.push([
    //   'Day,',
    //   'High,',
    //   'Low,',
    //   'Wind,',
    //   'Weather,',
    //   'Notes,',
    //   'Special',
    // ])
    // for (let o = 0; o < r.length; o++)
    //   for (let l = 0; l < r[o].duration; l++) {
    //     if (n <= days) {
    //       const h = [],
    //         d = r[o].days[l]
    //       h.push('Day ' + n.toString() + ','),
    //         h.push(d.GetHighString() + ','),
    //         h.push(d.GetLowString() + ','),
    //         h.push(d.GetWindString() + ','),
    //         h.push(d.precipDesc + ',')
    //       let c = ''
    //       1 === n && (c += ' -- Winter Begins --\r\n\r\n'),
    //         n / days >= 0.25 &&
    //           !t &&
    //           ((c += ' -- Spring Begins --\r\n\r\n'), (t = !0)),
    //         n / days >= 0.5 &&
    //           !a &&
    //           ((c += ' -- Summer Begins --\r\n\r\n'), (a = !0)),
    //         n / days >= 0.75 &&
    //           !i &&
    //           ((c += ' -- Fall Begins --\r\n\r\n'), (i = !0)),
    //         h.push(c + ',')
    //       const u = '"' + d.GetSpecialString() + '"'
    //       h.push(u), s.push(h)
    //     }
    //     n++
    //   }
    // return s
  }
}
