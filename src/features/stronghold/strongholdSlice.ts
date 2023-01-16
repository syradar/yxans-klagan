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
  tools: ['saw', 'sledgehammer'],
  rawMaterials: {
    stone: 1000,
    wood: 1000,
    iron: 1000,
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

      state.availableFunctions = meetRequirements(state)

      return state
    },
  },
})

export const { build } = strongholdSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectStronghold = (state: RootState) => state

export default strongholdSlice.reducer

const meetRequirements = (state: StrongholdState): StrongholdFunction[] => {
  return strongholdFunctions.filter((strongholdFunction) => {
    return (
      strongholdFunction.requirements.every((requirement) => {
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
      }) &&
      strongholdFunction.rawMaterials.every((rawMaterial) => {
        return state.rawMaterials[rawMaterial.type] >= rawMaterial.amount
      }) &&
      strongholdFunction.tools.every((tool) => {
        return state.tools.includes(tool)
      }) &&
      strongholdFunction.limit &&
      state.builtFunctions.reduce((acc, builtFunction) => {
        if (builtFunction.type === strongholdFunction.type) {
          return acc + 1
        }

        return acc
      }, 0) < strongholdFunction.limit
    )
  })
}
