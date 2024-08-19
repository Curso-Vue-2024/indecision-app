import { expect, test } from 'vitest';
import { sum } from '../../src/helpers/sum.helper';

test('adds 1 + 2 to equal 3', () => {
  // Preparación
  const a = 1;
  const b = 2;

  // Estímulo
  const result = sum(a, b);

  // Comportamiento esperado
  expect(result).toBe(a + b);
});
