export interface MatchableItem {
    [key: string]: any;
}

/**
 * Filters an array of objects based on a partial, case-insensitive match of a specified property.
 * @template T
 * @param {string} input - The search string to match against.
 * @param {T[]} list - The array of objects to search through.
 * @param {keyof T} searchProp - The property of the objects to search in.
 * @returns {T[]} A new array containing all objects where the specified property partially matches the input string.
 * @example
 * const carBrands = [
 *     { brand: 'BMW', value: 'bmw' },
 *     { brand: 'Alfa Romeo', value: 'alfa-romeo' },
 *     { brand: 'Mercedes-Benz', value: 'mercedes' },
 *     { brand: 'Toyota', value: 'toyota' },
 * ];
 *
 * const result = partialMatch('rome', carBrands, 'brand');
 * // Returns: [{ brand: 'Alfa Romeo', value: 'alfa-romeo' }]
 */
export const partialMatch = <T extends MatchableItem>(
    input: string,
    list: T[], 
    searchProp: keyof T
): T[] => {
    if (!input) return [...list];
    const lowercaseInput = input.toLowerCase();
    return list.filter((item) => 
        String(item[searchProp]).toLowerCase().includes(lowercaseInput)
    );
};

/**
 * Combines two arrays of objects into a single array, removing duplicates based on a specified key.
 * @template T
 * @param {T[]} list1 - The first array of objects to merge.
 * @param {T[]} list2 - The second array of objects to merge.
 * @param {keyof T} uniqueKey - The key to use for identifying unique objects.
 * @returns {T[]} A new array containing the merged and uniqued objects from both input lists.
 * @example
 * const list1 = [
 *     { key: 'apple', value: '' },
 *     { key: 'banana', value: '' },
 * ];
 * const list2 = [
 *     { key: 'apple', value: 'apple' },
 *     { key: 'date', value: 'date' },
 * ];
 * const result = mergeTwoListsAsUnique(list1, list2, 'key');
 * // Returns: [
 * //     { key: 'apple', value: 'apple' },
 * //     { key: 'banana', value: '' },
 * //     { key: 'date', value: 'date' }
 * // ]
 */
export function mergeTwoListsAsUnique<T>(list1: T[], list2: T[], uniqueKey: keyof T): T[] {
    const mergedMap = new Map<any, T>();

    // Process list1
    for (const item of list1) {
        mergedMap.set(item[uniqueKey], item);
    }

    // Process list2, overwriting any duplicate keys from list1
    for (const item of list2) {
        mergedMap.set(item[uniqueKey], item);
    }

    return Array.from(mergedMap.values());
}

/**
 * Sorts an array of objects by a specified property.
 * @template T
 * @param {T[]} list - The array to sort.
 * @param {keyof T} property - The property to sort by.
 * @param {boolean} [isAscending=true] - Whether to sort in ascending order.
 * @returns {T[]} A new sorted array.
 * @example
 * const users = [
 *     { name: 'Charlie', age: 30 },
 *     { name: 'Alice', age: 25 },
 *     { name: 'Bob', age: 35 }
 * ];
 * const sorted = sortListByProperty(users, 'name');
 * // Returns: [
 * //     { name: 'Alice', age: 25 },
 * //     { name: 'Bob', age: 35 },
 * //     { name: 'Charlie', age: 30 }
 * // ]
 */
export const sortListByProperty = <T>(
    list: T[], 
    property: keyof T, 
    isAscending = true
): T[] => {
    return [...list].sort((a, b) => {
        if (a[property] < b[property]) return isAscending ? -1 : 1;
        if (a[property] > b[property]) return isAscending ? 1 : -1;
        return 0;
    });
};
