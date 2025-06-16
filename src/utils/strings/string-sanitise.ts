/**
 * Removes all non-alphanumeric characters (except spaces) from a string.
 *
 * @param value - The input string to sanitise. If undefined, returns undefined.
 * @returns The string with all non-alphanumeric characters removed, or undefined if input is undefined.
 * @example
 * ```typescript
 * sanitiseToOnlyAlphanumeric('hello! world? 123'); // 'hello world 123'
 * sanitiseToOnlyAlphanumeric('abc@#%$^'); // 'abc'
 * sanitiseToOnlyAlphanumeric(undefined); // undefined
 * ```
 */
export const sanitiseToOnlyAlphanumeric = (value: string | undefined): string | undefined => {
    return value?.replace(/[^a-zA-Z0-9 ]/g, '');
};
