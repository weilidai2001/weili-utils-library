import { convertUnderscoresToDashes, convertSpacesToDashes, toTitleCase } from './string-transform';

describe('string-transform', () => {
    describe('convertUnderscoresToDashes', () => {
        it('should convert all underscores to dashes in a string', () => {
            const input = 'asdfab_asdfasdf_asdfsdf';
            const expected = 'asdfab-asdfasdf-asdfsdf';
            const result = convertUnderscoresToDashes(input);
            expect(result).toBe(expected);
        });

        it('should handle strings with no underscores', () => {
            expect(convertUnderscoresToDashes('hello')).toBe('hello');
        });

        it('should handle empty strings', () => {
            expect(convertUnderscoresToDashes('')).toBe('');
        });

        it('should handle multiple consecutive underscores', () => {
            expect(convertUnderscoresToDashes('hello__world___test')).toBe('hello--world---test');
        });

        it('should return empty string when input is null', () => {
            expect(convertUnderscoresToDashes(null)).toBe('');
        });

        it('should return empty string when input is undefined', () => {
            expect(convertUnderscoresToDashes(undefined)).toBe('');
        });
    });

    describe('convertSpacesToDashes', () => {
        it('should convert all spaces to underscores in a string', () => {
            const input = 'hello world this is a test';
            const expected = 'hello-world-this-is-a-test';
            const result = convertSpacesToDashes(input);
            expect(result).toBe(expected);
        });

        it('should handle strings with no spaces', () => {
            expect(convertSpacesToDashes('helloworld')).toBe('helloworld');
        });

        it('should handle empty strings', () => {
            expect(convertSpacesToDashes('')).toBe('');
        });

        it('should handle multiple consecutive spaces', () => {
            expect(convertSpacesToDashes('hello  world   test')).toBe('hello--world---test');
        });

        it('should return empty string when input is null', () => {
            expect(convertSpacesToDashes(null)).toBe('');
        });

        it('should return empty string when input is undefined', () => {
            expect(convertSpacesToDashes(undefined)).toBe('');
        });
    });

    describe('toTitleCase', () => {
        it('should capitalize the first letter of each word', () => {
            expect(toTitleCase('hello world')).toBe('Hello World');
            expect(toTitleCase('javaScript is fun')).toBe('JavaScript Is Fun');
        });

        it('should handle single-word strings', () => {
            expect(toTitleCase('typescript')).toBe('Typescript');
        });

        it('should handle empty strings', () => {
            expect(toTitleCase('')).toBe('');
        });

        it('should handle null input', () => {
            expect(toTitleCase(null)).toBe('');
        });

        it('should handle undefined input', () => {
            expect(toTitleCase(undefined)).toBe('');
        });

        it('should handle strings with multiple spaces', () => {
            expect(toTitleCase('hello   world')).toBe('Hello   World');
        });

        it('should not change already title-cased strings', () => {
            expect(toTitleCase('Hello World')).toBe('Hello World');
        });
    });
}
);
