import { villageNamesEn, villageNamesSv } from '../data/name.data'
import { Gender } from '../models/gender.model'
import { ValidLanguage } from '../models/language.model'
import { NameList, NameType } from '../models/name.model'
import {
  capitalize,
  formatVillageName,
  getNameTypeAndFirstName,
  getRandomAilanderName,
  getRandomAlderlanderName,
  getRandomAsleneName,
  getVillageNameList,
  getVillagePrefixAndSuffix,
} from './name.functions'

describe('name functions', () => {
  const testChooseFunc = <T>(arr: readonly T[]): T => arr[0]

  describe('getVillageNameList', () => {
    it('should return Swedish list for sv', () => {
      const lang = 'sv'
      const expected = villageNamesSv

      const result = getVillageNameList(lang)

      expect(result).toEqual(expected)
    })

    it('should return English list for en', () => {
      const lang = 'en'
      const expected = villageNamesEn

      const result = getVillageNameList(lang)

      expect(result).toEqual(expected)
    })

    it.each([null, undefined, 0.3, {}, []])(
      'should throw never error',
      (input) => {
        expect(() => getVillageNameList(input as ValidLanguage)).toThrowError()
      },
    )
  })

  describe('capitalize', () => {
    it('should return English names for en', () => {
      const lang = 'en'

      const expected: [string, string] = ['Amber', 'acres']

      const result = getVillagePrefixAndSuffix(lang, testChooseFunc)

      expect(result).toEqual(expected)
    })

    it('should return Swedish names for sv', () => {
      const lang = 'sv'

      const expected: [string, string] = ['Bärnsten', 'tunnland']

      const result = getVillagePrefixAndSuffix(lang, testChooseFunc)

      expect(result).toEqual(expected)
    })

    it('should return throw error for invalid input', () => {
      const lang = undefined

      expect(() =>
        getVillagePrefixAndSuffix(lang as unknown as ValidLanguage),
      ).toThrowError()
    })
  })

  describe('capitalize', () => {
    it.each([
      ['Alderlander', 'alderlander'],
      ['A', 'a'],
      ['', ''],
      [' ', ' '],
    ])('should return %s when given %s', (expected, input) => {
      const result = capitalize(input)

      expect(result).toEqual(expected)
    })
  })

  describe('formatVillageName', () => {
    it('should not put space between prefix and suffix', () => {
      const expected = 'Svartmåla'
      const result = formatVillageName(['Svart', 'måla'], 'sv')

      expect(result).toEqual(expected)
    })

    it('should put space between prefix and suffix, and title case', () => {
      const expected = 'Svart Måla'
      const result = formatVillageName(['Svart', 'måla'], 'en')

      expect(result).toEqual(expected)
    })
  })

  describe('getNameTypeAndFirstName', () => {
    it('should return the correct type', () => {
      const femaleName = 'FEMALE_NAME'
      const maleName = 'MALE_NAME'
      const nl: NameList = {
        Female: {
          probabilites: [{ type: NameType.FirstName, weight: 1 }],
          rawNames: [femaleName],
        },
        Male: {
          probabilites: [{ type: NameType.FirstName, weight: 1 }],
          rawNames: [maleName],
        },
      }
      const expected = {
        type: NameType.FirstName,
        firstName: femaleName,
      }
      const result = getNameTypeAndFirstName(Gender.Female, nl)

      expect(result).toEqual(expected)
    })
  })

  describe('getRandomAilanderName', () => {
    const femaleName = 'FEMALE_NAME'
    const maleName = 'MALE_NAME'
    const familyName = 'FAMILY'
    const of = 'OF'

    const nl: NameList = {
      Female: {
        probabilites: [{ type: NameType.FirstName, weight: 1 }],
        rawNames: [femaleName],
      },
      family: [familyName],
      Male: {
        probabilites: [{ type: NameType.FirstName, weight: 1 }],
        rawNames: [maleName],
      },
    }

    const getName = (nl: NameList) =>
      getRandomAilanderName(Gender.Female, 'en', nl, testChooseFunc)

    it('should return family names', () => {
      const familyNl = {
        ...nl,
        Female: {
          probabilites: [{ type: NameType.FamilyName, weight: 1 }],
          rawNames: [femaleName],
        },
      }
      const expected = [femaleName, familyName]

      const result = getName(familyNl)

      expect(result).toEqual(expected)
    })

    it('should return home names', () => {
      const homeNl = {
        ...nl,
        Female: {
          probabilites: [{ type: NameType.HomeName, weight: 1 }],
          rawNames: [femaleName],
        },
      }
      const villageName = 'Amber Acres'
      const expected = [femaleName, of, villageName]

      const result = getName(homeNl)

      expect(result).toEqual(expected)
    })

    it('should return firstnames', () => {
      const homeNl = {
        ...nl,
        Female: {
          probabilites: [{ type: NameType.FirstName, weight: 1 }],
          rawNames: [femaleName],
        },
      }

      const expected = [femaleName]

      const result = getName(homeNl)

      expect(result).toEqual(expected)
    })
  })

  describe('getRandomAlderlanderarName', () => {
    const femaleName = 'FEMALE_NAME'
    const maleName = 'MALE_NAME'
    const familyName = 'FAMILY'
    const of = 'OF'

    const nl: NameList = {
      Female: {
        probabilites: [{ type: NameType.FirstName, weight: 1 }],
        rawNames: [femaleName],
      },
      family: [familyName],
      Male: {
        probabilites: [{ type: NameType.FirstName, weight: 1 }],
        rawNames: [maleName],
      },
    }

    const getName = (nl: NameList) =>
      getRandomAlderlanderName(Gender.Female, 'en', nl, testChooseFunc)

    it('should return family names', () => {
      const familyNl: NameList = {
        ...nl,
        Female: {
          probabilites: [{ type: NameType.FamilyName, weight: 1 }],
          rawNames: [femaleName],
        },
      }
      const expected = [femaleName, familyName]

      const result = getName(familyNl)

      expect(result).toEqual(expected)
    })

    it('should return firstname if familynames is empty', () => {
      const familyNl: NameList = {
        ...nl,
        Female: {
          probabilites: [{ type: NameType.FamilyName, weight: 1 }],
          rawNames: [femaleName],
        },
        family: [],
      }
      const expected = [femaleName]

      const result = getName(familyNl)

      expect(result).toEqual(expected)
    })

    it('should return firstname if familynames is undefined', () => {
      const familyNl: NameList = {
        ...nl,
        Female: {
          probabilites: [{ type: NameType.FamilyName, weight: 1 }],
          rawNames: [femaleName],
        },
        family: undefined,
      }
      const expected = [femaleName]

      const result = getName(familyNl)

      expect(result).toEqual(expected)
    })

    it('should return home names', () => {
      const homeNl = {
        ...nl,
        Female: {
          probabilites: [{ type: NameType.HomeName, weight: 1 }],
          rawNames: [femaleName],
        },
      }
      const villageName = 'Amber Acres'
      const expected = [femaleName, of, villageName]

      const result = getName(homeNl)

      expect(result).toEqual(expected)
    })

    it('should return firstnames', () => {
      const homeNl = {
        ...nl,
        Female: {
          probabilites: [{ type: NameType.FirstName, weight: 1 }],
          rawNames: [femaleName],
        },
      }

      const expected = [femaleName]

      const result = getName(homeNl)

      expect(result).toEqual(expected)
    })
  })

  describe('getRandomAsleneName', () => {
    const femaleName = 'FEMALE_NAME'
    const maleName = 'MALE_NAME'
    const nickName = 'NICKNAME'
    const the = 'THE'

    const nl: NameList = {
      Female: {
        probabilites: [{ type: NameType.FirstName, weight: 1 }],
        rawNames: [femaleName],
      },
      nickName: [nickName],
      Male: {
        probabilites: [{ type: NameType.FirstName, weight: 1 }],
        rawNames: [maleName],
      },
    }

    const getName = (nl: NameList) =>
      getRandomAsleneName(Gender.Female, 'en', nl, testChooseFunc)

    it('should return nick names', () => {
      const familyNl = {
        ...nl,
        Female: {
          probabilites: [{ type: NameType.NickName, weight: 1 }],
          rawNames: [femaleName],
        },
      }
      const expected = [femaleName, the, nickName]

      const result = getName(familyNl)

      expect(result).toEqual(expected)
    })

    it('should return first name if nicknames is undefined', () => {
      const familyNl = {
        ...nl,
        Female: {
          probabilites: [{ type: NameType.NickName, weight: 1 }],
          rawNames: [femaleName],
        },
        nickName: undefined,
      }
      const expected = [femaleName]

      const result = getName(familyNl)

      expect(result).toEqual(expected)
    })

    it('should return first name if nicknames is empty', () => {
      const familyNl = {
        ...nl,
        Female: {
          probabilites: [{ type: NameType.NickName, weight: 1 }],
          rawNames: [femaleName],
        },
        nickName: [],
      }
      const expected = [femaleName]

      const result = getName(familyNl)

      expect(result).toEqual(expected)
    })

    it('should return firstnames', () => {
      const homeNl = {
        ...nl,
        Female: {
          probabilites: [{ type: NameType.FirstName, weight: 1 }],
          rawNames: [femaleName],
        },
      }

      const expected = [femaleName]

      const result = getName(homeNl)

      expect(result).toEqual(expected)
    })
  })
})
