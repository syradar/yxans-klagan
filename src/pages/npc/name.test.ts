import { capitalize } from '../../functions/utils.functions'
import {
  getNameTypeAndFirstName,
  getRandomAilanderName,
  getRandomAlderlanderName,
  getRandomAsleneName,
  NameList,
} from './name'
import { describe, it, expect } from 'vitest'

describe('name functions', () => {
  const testChooseFunc = <T>(arr: readonly T[]): T => arr[0]

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

  describe('getNameTypeAndFirstName', () => {
    it('should return the correct type', () => {
      const femaleName = 'FEMALE_NAME'
      const maleName = 'MALE_NAME'
      const nl: NameList = {
        Female: {
          probabilites: [{ value: 'FirstName', weight: 1 }],
          rawNames: [femaleName],
        },
        Male: {
          probabilites: [{ value: 'FirstName', weight: 1 }],
          rawNames: [maleName],
        },
      }
      const expected = {
        value: 'FirstName',
        firstName: femaleName,
      }
      const result = getNameTypeAndFirstName('Female', nl)

      expect(result).toEqual(expected)
    })
  })

  describe('getRandomAilanderName', () => {
    const femaleName = 'FEMALE_NAME'
    const maleName = 'MALE_NAME'
    const familyName = 'FAMILY'
    const of = 'names:of'

    const nl: NameList = {
      Female: {
        probabilites: [{ value: 'FirstName', weight: 1 }],
        rawNames: [femaleName],
      },
      family: [familyName],
      Male: {
        probabilites: [{ value: 'FirstName', weight: 1 }],
        rawNames: [maleName],
      },
    }

    const getName = (nl: NameList) =>
      getRandomAilanderName('Female', 'es', nl, testChooseFunc)

    it('should return family names', () => {
      const familyNl: NameList = {
        ...nl,
        Female: {
          probabilites: [{ value: 'FamilyName', weight: 1 }],
          rawNames: [femaleName],
        },
      }
      const expected = [femaleName, familyName]

      const result = getName(familyNl)

      expect(result).toEqual(expected)
    })

    it('should return home names', () => {
      const homeNl: NameList = {
        ...nl,
        Female: {
          probabilites: [{ value: 'HomeName', weight: 1 }],
          rawNames: [femaleName],
        },
      }
      const villageName = 'Amber Acres'
      const expected = [femaleName, of, villageName]

      const result = getName(homeNl)

      expect(result).toEqual(expected)
    })

    it('should return firstnames', () => {
      const homeNl: NameList = {
        ...nl,
        Female: {
          probabilites: [{ value: 'FirstName', weight: 1 }],
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
    const of = 'names:of'

    const nl: NameList = {
      Female: {
        probabilites: [{ value: 'FirstName', weight: 1 }],
        rawNames: [femaleName],
      },
      family: [familyName],
      Male: {
        probabilites: [{ value: 'FirstName', weight: 1 }],
        rawNames: [maleName],
      },
    }

    const getName = (nl: NameList) =>
      getRandomAlderlanderName('Female', 'es', nl, testChooseFunc)

    it('should return family names', () => {
      const familyNl: NameList = {
        ...nl,
        Female: {
          probabilites: [{ value: 'FamilyName', weight: 1 }],
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
          probabilites: [{ value: 'FamilyName', weight: 1 }],
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
          probabilites: [{ value: 'FamilyName', weight: 1 }],
          rawNames: [femaleName],
        },
        family: undefined,
      }
      const expected = [femaleName]

      const result = getName(familyNl)

      expect(result).toEqual(expected)
    })

    it('should return home names', () => {
      const homeNl: NameList = {
        ...nl,
        Female: {
          probabilites: [{ value: 'HomeName', weight: 1 }],
          rawNames: [femaleName],
        },
      }
      const villageName = 'Amber Acres'
      const expected = [femaleName, of, villageName]

      const result = getName(homeNl)

      expect(result).toEqual(expected)
    })

    it('should return firstnames', () => {
      const homeNl: NameList = {
        ...nl,
        Female: {
          probabilites: [{ value: 'FirstName', weight: 1 }],
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
    const the = 'names:the'

    const nl: NameList = {
      Female: {
        probabilites: [{ value: 'FirstName', weight: 1 }],
        rawNames: [femaleName],
      },
      nickName: [nickName],
      Male: {
        probabilites: [{ value: 'FirstName', weight: 1 }],
        rawNames: [maleName],
      },
    }

    const getName = (nl: NameList) =>
      getRandomAsleneName('Female', 'es', nl, testChooseFunc)

    it('should return nick names', () => {
      const familyNl: NameList = {
        ...nl,
        Female: {
          probabilites: [{ value: 'NickName', weight: 1 }],
          rawNames: [femaleName],
        },
      }
      const expected = [femaleName, the, nickName]

      const result = getName(familyNl)

      expect(result).toEqual(expected)
    })

    it('should return first name if nicknames is undefined', () => {
      const familyNl: NameList = {
        ...nl,
        Female: {
          probabilites: [{ value: 'NickName', weight: 1 }],
          rawNames: [femaleName],
        },
        nickName: undefined,
      }
      const expected = [femaleName]

      const result = getName(familyNl)

      expect(result).toEqual(expected)
    })

    it('should return first name if nicknames is empty', () => {
      const familyNl: NameList = {
        ...nl,
        Female: {
          probabilites: [{ value: 'NickName', weight: 1 }],
          rawNames: [femaleName],
        },
        nickName: [],
      }
      const expected = [femaleName]

      const result = getName(familyNl)

      expect(result).toEqual(expected)
    })

    it('should return firstnames', () => {
      const homeNl: NameList = {
        ...nl,
        Female: {
          probabilites: [{ value: 'FirstName', weight: 1 }],
          rawNames: [femaleName],
        },
      }

      const expected = [femaleName]

      const result = getName(homeNl)

      expect(result).toEqual(expected)
    })
  })
})
