import { expect, test } from 'vitest';
import { describe } from 'node:test';
import { sum, addArray } from '../../src/helpers/sum.helper';

describe('add functions', () => {
  test('adds 1 + 2 to equal 3', () => {
    // Preparación
    const a = 1;
    const b = 2;

    // Estímulo
    const result = sum(a, b);

    // Comportamiento esperado
    expect(result).toBe(a + b);
  });
});

describe('addAray function', () => {
  test('shuold return 0 if the array is empty'),
    () => {
      const numberArray = [];

      const result = addArray(numberArray);

      expect(result).toBe(0);
    };

  test('shuold return the proper value of the addArray function'),
    () => {
      const numberArray = [5, 10, 25];

      const result = addArray(numberArray);

      expect(result).toBe(40);
    };
});
