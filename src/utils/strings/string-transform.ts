/**
 * Converts all underscores in a string to dashes.
 *
 * @param input - The input string, or null/undefined.
 * @returns The string with all underscores replaced by dashes. Returns an empty string if input is null/undefined/empty.
 * @example
 * ```typescript
 * convertUnderscoresToDashes('a_b_c'); // 'a-b-c'
 * convertUnderscoresToDashes(null); // ''
 * ```
 */
export const convertUnderscoresToDashes = (input: string | null | undefined): string => {
    if (!input) {
        return '';
    }
    return input.replace(/_/g, '-');
};

/**
 * Converts all spaces in a string to dashes.
 *
 * @param input - The input string, or null/undefined.
 * @returns The string with all spaces replaced by dashes. Returns an empty string if input is null/undefined.
 * @example
 * ```typescript
 * convertSpacesToDashes('a b c'); // 'a-b-c'
 * convertSpacesToDashes(undefined); // ''
 * ```
 */
export const convertSpacesToDashes = (input: string | null | undefined): string => {
    if (input === null || input === undefined) {
        return '';
    }
    return input.replace(/ /g, '-');
};

/**
 * Converts the first letter of each word in a string to uppercase (title case).
 *
 * @param text - The string to convert.
 * @returns The title-cased string. If input is null/undefined/empty, returns an empty string.
 * @example
 * ```typescript
 * toTitleCase('hello world'); // 'Hello World'
 * toTitleCase('javaScript is fun'); // 'JavaScript Is Fun'
 * ```
 */
export const toTitleCase = (text: string | null | undefined): string => {
    if (!text) {
        return '';
    }
    return text.replace(/(^\w{1})|(\s{1}\w{1})/g, (match) => match.toUpperCase());
};