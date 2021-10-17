import React from 'react'
import { DiceSides } from '../models/fbl-dice.model'

interface DiceProps {
  sides?: DiceSides
  value: number
}

export const DiceDisplay = ({ value }: DiceProps) => {
  return <>{value}</>
}
