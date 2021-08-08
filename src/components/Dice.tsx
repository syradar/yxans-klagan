import React from 'react'
import { DiceSides } from '../models/dice.model'

interface DiceProps {
  sides?: DiceSides
  value: number
}

export const DiceDisplay = ({ sides, value }: DiceProps) => {
  sides = 6

  return (
    <>
      <div>{sides}</div>
      <div>{value}</div>
    </>
  )
}

export default DiceDisplay
