import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../store/store'
import { RawMaterialType } from './resources'
import {
  fireplaceFunction,
  StrongholdFunction,
  strongholdFunctions,
  StrongholdFunctionType,
} from './strongholdFunctions'
import { Tool } from './tools'

// Define a type for the slice state
interface StrongholdState {
  hasBuildersTalent: boolean
  builtFunctions: StrongholdFunction[]
  availableFunctions: StrongholdFunction[]
  tools: Tool[]
  rawMaterials: { [Material in RawMaterialType]: number }
}

// Define the initial state using that type
const initialState: StrongholdState = {
  hasBuildersTalent: true,
  builtFunctions: [],
  availableFunctions: [fireplaceFunction],
  tools: ['saw', 'sledgehammer', 'hammer'],
  rawMaterials: {
    stone: 100000,
    wood: 100000,
    iron: 100000,
  },
}

export const strongholdSlice = createSlice({
  name: 'stronghold',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    build: (state, action: PayloadAction<StrongholdFunctionType>) => {
      const functionToBuild = state.availableFunctions.find(
        (strongholdFunction) => strongholdFunction.type === action.payload,
      )

      if (!functionToBuild) {
        return state
      }

      functionToBuild.rawMaterials.forEach((rawMaterial) => {
        state.rawMaterials[rawMaterial.type] -= rawMaterial.amount
      })

      state.builtFunctions.push(functionToBuild)

      state.availableFunctions = strongholdFunctions.filter(
        meetRequirementsPredicate(state),
      )

      return state
    },
  },
})

export const { build } = strongholdSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectStronghold = (state: RootState) => state
export const selectUnavailableStrongholdFunctions = (state: RootState) => {
  const hasReachedLimit = (strongholdFunction: StrongholdFunction) => {
    const builtFunction = state.stronghold.builtFunctions.find(
      (builtFunction) => builtFunction.type === strongholdFunction.type,
    )

    if (!builtFunction) {
      return false
    }

    return builtFunction.limit === undefined
      ? false
      : builtFunction.limit <=
          state.stronghold.builtFunctions.filter(
            (builtFunction) => builtFunction.type === strongholdFunction.type,
          ).length
  }

  return strongholdFunctions
    .filter(
      (strongholdFunction) =>
        !meetRequirementsPredicate(state.stronghold)(strongholdFunction),
    )
    .filter((strongholdFunction) => !hasReachedLimit(strongholdFunction))
}

export default strongholdSlice.reducer

const meetRequirementsPredicate =
  (state: StrongholdState) =>
  (strongholdFunction: StrongholdFunction): boolean => {
    const hasAllRequirements = strongholdFunction.requirements.every(
      (requirement) => {
        if (requirement === 'builderTalent') {
          return state.hasBuildersTalent
        }

        if (
          state.builtFunctions.find(
            (builtFunction) => builtFunction.type === requirement,
          )
        ) {
          return true
        }

        return false
      },
    )
    const hasAllRawMaterials = strongholdFunction.rawMaterials.every(
      (rawMaterial) =>
        state.rawMaterials[rawMaterial.type] >= rawMaterial.amount,
    )
    const hasAllTools = strongholdFunction.tools.every((tool) =>
      state.tools.includes(tool),
    )
    const hasNotReachedLimit = strongholdFunction.limit
      ? state.builtFunctions.reduce((acc, builtFunction) => {
          if (builtFunction.type === strongholdFunction.type) {
            return acc + 1
          }

          return acc
        }, 0) < strongholdFunction.limit
      : true

    return (
      hasAllRequirements &&
      hasAllRawMaterials &&
      hasAllTools &&
      hasNotReachedLimit
    )
  }
