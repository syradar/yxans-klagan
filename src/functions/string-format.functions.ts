export const pad =
  (filler: string) =>
  (amount: number) =>
  (n: number): string =>
    n.toString().padStart(amount, filler)

export const padZero = pad('0')
export const padZero2 = padZero(2)
export const padZero4 = padZero(4)
