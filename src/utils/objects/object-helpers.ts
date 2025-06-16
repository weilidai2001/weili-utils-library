/**
 * Checks if the given object has no own enumerable properties.
 *
 * @param obj - The object to check for emptiness.
 * @returns `true` if the object has no own enumerable properties, otherwise `false`.
 *
 * @example
 * ```typescript
 * isObjectEmpty({}); // true
 * isObjectEmpty({ a: 1 }); // false
 * ```
 */
export const isObjectEmpty = (obj: Record<string | number, any>): boolean =>
    !Object.keys(obj).length;

/**
 * Compares two objects and returns an object with properties that are either:
 * - Absent in `from` but present in `to`
 * - Different between `from` and `to`
 * - Absent in `to` but present in `from`
 *
 * @param from - The initial object to compare.
 * @param to - The updated object to compare.
 * @returns An object containing only the properties that differ in `to` compared to `from`.
 *
 * @example
 * ```typescript
 * diff({ a: 1, b: 2 }, { a: 1, b: 3, c: 4 });
 * // Returns: { b: 3, c: 4 }
 *
 * diff({ a: 1, b: 2 }, { a: 1 });
 * // Returns: { b: undefined }
 * ```
 */
export const diff = (from: Record<string, any>, to: Record<string, any>): Record<string, any> => {
    const result: Record<string, any> = {};

    Object.keys({ ...from, ...to }).forEach((key) => {
        if (from[key] !== to[key]) {
            result[key] = to[key];
        }
    });

    return result;
};

/**
 * Returns a new object with all properties that have falsy values removed.
 * Falsy values are: false, 0, '', null, undefined, and NaN.
 *
 * @param obj - The object to filter.
 * @returns A new object with only truthy values.
 *
 * @example
 * ```typescript
 * removeFalsyProperties({ a: 0, b: 1, c: '', d: 'hello', e: false });
 * // Returns: { b: 1, d: 'hello' }
 * ```
 */
export const removeFalsyProperties = (obj: Record<string, any>): Record<string, any> => {
    // Create a new object to store the filtered properties
    const filteredObject: Record<string, any> = {};

    // Use Object.entries to iterate over the key-value pairs
    Object.entries(obj).forEach(([key, value]) => {
        // If the value is truthy, add it to the filtered object
        if (value) {
            filteredObject[key] = value;
        }
    });

    return filteredObject;
};
