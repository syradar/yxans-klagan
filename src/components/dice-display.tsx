import { DiceSides } from '../models/fbl-dice.model'

type DiceProps = {
  sides?: DiceSides
  value: number
}
export const DiceDisplay = ({ value }: DiceProps) => {
  return <>{value}</>
}
