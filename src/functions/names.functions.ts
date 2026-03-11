export const rollGender = (roll: number): 'male' | 'female' => {
  return roll > 3 ? 'female' : 'male'
}
