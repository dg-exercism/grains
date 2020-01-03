//
// This is only a SKELETON file for the 'Grains' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
import BigInt from "./lib/big-integer";

export const square = (integer) => {
  if (integer < 1 || integer > 64) {
    throw new Error('square must be between 1 and 64')
  } else {
    return integer === 1 ? '1' : String(BigInt(2).pow(integer - 1))
  }
};

export const total = () => {
  let squaresTotal = BigInt(16).pow(16);
  let answer = squaresTotal.value.map((val, i) => i === 0 ? val - 1 : val).reverse().join('')
  return String(answer)
};
