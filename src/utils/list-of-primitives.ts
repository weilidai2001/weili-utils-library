/**
 * Splits an array into two groups based on a predicate function.
 * The first group contains all items that pass the predicate (return true),
 * and the second group contains all items that fail (return false).
 *
 * @template T
 * @param {T[]} array - The array to partition.
 * @param {(value: T) => boolean} predicate - The function used to test each element.
 * @returns {[T[], T[]]} A tuple where the first array contains items that passed and the second contains items that failed.
 *
 * @example
 * const numbers = [1, 2, 3, 4, 5];
 *
 * const [evens, odds] = partition(numbers, n => n % 2 === 0);
 * console.log(evens); // Output: [2, 4]
 * console.log(odds);  // Output: [1, 3, 5]
 *
 * @description
 * The function iterates through the input array once, testing each item against the predicate,
 * and returns two separate arrays without modifying the original array.
 */
export const partition = <T>(array: T[], predicate: (value: T) => boolean): [T[], T[]] => {
    const pass: T[] = [];
    const fail: T[] = [];

    for (const item of array) {
        if (predicate(item)) {
            pass.push(item);
        } else {
            fail.push(item);
        }
    }

    return [pass, fail];
};

/**
 * Excludes items from a primitive array (like number[], string[], boolean[]) based on another array.
 *
 * @template T
 * @param {T[]} listA - The original list to filter.
 * @param {T[]} listB - The list of items to exclude.
 * @returns {T[]} A new array with items from listA that are not present in listB.
 *
 * @example
 * const listA = [1, 2, 3, 4];
 * const listB = [2, 4];
 *
 * const result = excludePrimitives(listA, listB);
 * console.log(result);
 * // Output: [1, 3]
 *
 * @example
 * const fruits = ['apple', 'banana', 'cherry'];
 * const excluded = ['banana'];
 *
 * const result2 = excludePrimitives(fruits, excluded);
 * console.log(result2);
 * // Output: ['apple', 'cherry']
 *
 * @description
 * This function is specifically for lists of primitive types.
 * It creates a new array and does not mutate the original arrays.
 */
export const excludePrimitives = <T>(listA: T[], listB: T[]): T[] => {
    const setB = new Set(listB);
    return listA.filter((item) => !setB.has(item));
};
