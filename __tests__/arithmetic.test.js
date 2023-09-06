import { isEven, sum } from "../arithmetic.js";

// test('return true for even numbers', () => {
//     expect(isEven(2)).toBe(true)
// })

// test('returns false for odd numbers', () => {
//     expect(isEven(3)).toBe(false)
// })

describe('testing the isEven function', () => {
    test('return true for even numbers', () => {
        expect(isEven(2)).toBe(true)
    })

    test('returns false for odd numbers', () => {
        expect(isEven(3)).toBe(false)
    })
})

describe('testing the sum function', () => {
    test('return sum of 1, 2 = 3', () => {
        expect(sum(1, 2)).toBe(3)
    })

    test('return 0 when 1 + (- 1)', () => {
        expect(sum(1, -1)).toBe(0)
    })
})