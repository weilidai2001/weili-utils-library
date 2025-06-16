import { excludePrimitives, partition } from './list-of-primitives';

describe('partition', () => {
    it('splits an array of numbers into even and odd', () => {
        const [evens, odds] = partition([1, 2, 3, 4, 5, 6], (n) => n % 2 === 0);
        expect(evens).toEqual([2, 4, 6]);
        expect(odds).toEqual([1, 3, 5]);
    });

    it('splits an array of strings based on length', () => {
        const [long, short] = partition(['a', 'ab', 'abc', 'abcd'], (str) => str.length > 2);
        expect(long).toEqual(['abc', 'abcd']);
        expect(short).toEqual(['a', 'ab']);
    });

    it('returns all items in the first array if all match predicate', () => {
        const [truthy, falsy] = partition([true, 1, 'yes'], Boolean);
        expect(truthy).toEqual([true, 1, 'yes']);
        expect(falsy).toEqual([]);
    });

    it('returns all items in the second array if none match predicate', () => {
        const [truthy, falsy] = partition([0, '', false, null], Boolean);
        expect(truthy).toEqual([]);
        expect(falsy).toEqual([0, '', false, null]);
    });

    it('handles empty arrays', () => {
        const [pass, fail] = partition([], () => true);
        expect(pass).toEqual([]);
        expect(fail).toEqual([]);
    });

    it('works with custom objects', () => {
        const items = [
            { id: 1, active: true },
            { id: 2, active: false },
            { id: 3, active: true },
        ];
        const [active, inactive] = partition(items, (item) => item.active);
        expect(active).toEqual([
            { id: 1, active: true },
            { id: 3, active: true },
        ]);
        expect(inactive).toEqual([{ id: 2, active: false }]);
    });
});

describe('excludePrimitives', () => {
    it('excludes numbers correctly', () => {
        const result = excludePrimitives([1, 2, 3, 4, 5], [2, 4]);
        expect(result).toEqual([1, 3, 5]);
    });

    it('excludes strings correctly', () => {
        const result = excludePrimitives(['apple', 'banana', 'cherry'], ['banana']);
        expect(result).toEqual(['apple', 'cherry']);
    });

    it('returns original array when exclude list is empty', () => {
        const result = excludePrimitives([1, 2, 3], []);
        expect(result).toEqual([1, 2, 3]);
    });

    it('returns empty array when all items are excluded', () => {
        const result = excludePrimitives(['a', 'b'], ['a', 'b']);
        expect(result).toEqual([]);
    });

    it('handles empty input array', () => {
        const result = excludePrimitives([], [1, 2, 3]);
        expect(result).toEqual([]);
    });

    it('excludes booleans correctly', () => {
        const result = excludePrimitives([true, false, true], [true]);
        expect(result).toEqual([false]);
    });

    it('excludes mixed primitive types', () => {
        const result = excludePrimitives([1, 'a', true, false], ['a', false]);
        expect(result).toEqual([1, true]);
    });

    it('handles duplicates in input array', () => {
        const result = excludePrimitives([1, 2, 2, 3, 4], [2]);
        expect(result).toEqual([1, 3, 4]);
    });

    it('ignores duplicates in exclude list', () => {
        const result = excludePrimitives(['a', 'b', 'c'], ['b', 'b']);
        expect(result).toEqual(['a', 'c']);
    });
});
