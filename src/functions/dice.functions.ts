/**
 * Can be used for any roll
 */
export const countSuccesses = (roll: number): number =>
  roll < 6 ? 0 : Math.floor(roll / 2) - 2

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#Getting_a_random_integer_between_two_values_inclusive
export function getRandomInt(min = 1, max = 6) {
  min = Math.ceil(min)
  max = Math.floor(max)

  //The maximum is inclusive and the minimum is inclusive
  return Math.floor(Math.random() * (max - min + 1)) + min
}
