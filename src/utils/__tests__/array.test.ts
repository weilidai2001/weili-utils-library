import { partialMatch, mergeTwoListsAsUnique, sortListByProperty } from '../array';

describe('Array Utilities', () => {
    describe('partialMatch', () => {
        const items = [
            { id: 1, name: 'Apple', category: 'fruit' },
            { id: 2, name: 'Banana', category: 'fruit' },
            { id: 3, name: 'Carrot', category: 'vegetable' },
            { id: 4, name: 'apple pie', category: 'dessert' },
        ];

        it('should return items with matching property (case-insensitive)', () => {
            const result = partialMatch('app', items, 'name');
            expect(result).toHaveLength(2);
            expect(result).toEqual(expect.arrayContaining([
                expect.objectContaining({ id: 1 }),
                expect.objectContaining({ id: 4 })
            ]));
        });

        it('should return empty array when no matches found', () => {
            const result = partialMatch('xyz', items, 'name');
            expect(result).toEqual([]);
        });

        it('should return all items when search string is empty', () => {
            const result = partialMatch('', items, 'name');
            expect(result).toHaveLength(items.length);
        });
    });


    describe('mergeTwoListsAsUnique', () => {
        it('should merge two arrays and remove duplicates based on key', () => {
            const list1 = [
                { id: 1, name: 'Apple' },
                { id: 2, name: 'Banana' }
            ];
            const list2 = [
                { id: 2, name: 'Banana Updated' },
                { id: 3, name: 'Carrot' }
            ];

            const result = mergeTwoListsAsUnique(list1, list2, 'id');
            expect(result).toHaveLength(3);
            expect(result).toEqual([
                { id: 1, name: 'Apple' },
                { id: 2, name: 'Banana Updated' },
                { id: 3, name: 'Carrot' }
            ]);
        });

        it('should handle empty arrays', () => {
            const list1 = [{ id: 1, name: 'Apple' }];
            const emptyList: any[] = [];
            
            expect(mergeTwoListsAsUnique(list1, emptyList, 'id')).toEqual(list1);
            expect(mergeTwoListsAsUnique(emptyList, list1, 'id')).toEqual(list1);
            expect(mergeTwoListsAsUnique(emptyList, emptyList, 'id')).toEqual([]);
        });
    });

    describe('sortListByProperty', () => {
        const items = [
            { id: 3, name: 'Charlie' },
            { id: 1, name: 'Alice' },
            { id: 2, name: 'Bob' }
        ];

        it('should sort array in ascending order by default', () => {
            const result = sortListByProperty(items, 'id');
            expect(result).toEqual([
                { id: 1, name: 'Alice' },
                { id: 2, name: 'Bob' },
                { id: 3, name: 'Charlie' }
            ]);
        });

        it('should sort array in descending order when specified', () => {
            const result = sortListByProperty(items, 'id', false);
            expect(result).toEqual([
                { id: 3, name: 'Charlie' },
                { id: 2, name: 'Bob' },
                { id: 1, name: 'Alice' }
            ]);
        });

        it('should sort by string property', () => {
            const result = sortListByProperty(items, 'name');
            expect(result[0].name).toBe('Alice');
            expect(result[1].name).toBe('Bob');
            expect(result[2].name).toBe('Charlie');
        });
    });
});
