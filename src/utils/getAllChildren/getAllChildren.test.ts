import { getAllChildren } from './getAllChildren';

describe('getAllChildren', () => {
  test('should not parse the second object', () => {
    const result = getAllChildren('1', { 1: ['1.1', '1.2'], 2: ['2.1', '2.2'] });

    expect(result).toEqual(['1', '1.1', '1.2']);
  });
  test('should dive into object children', () => {
    const result = getAllChildren('1', { 1: ['1.1', '1.2'], 1.1: ['1.1.1', '1.1.2'] });

    expect(result).toEqual(['1', '1.1', '1.1.1', '1.1.2', '1.2']);
  });
});
