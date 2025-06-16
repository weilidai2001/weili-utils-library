import { sanitiseToOnlyAlphanumeric } from './string-sanitise';

describe('sanitiseToOnlyAlphanumeric', () => {
    it('should remove non-alphanumeric characters', () => {
        const input = 'Hello, World! &!@£!@£123.';
        const expected = 'Hello World 123';
        expect(sanitiseToOnlyAlphanumeric(input)).toBe(expected);
    });

    it('should return the same string if it contains only alphanumeric characters and spaces', () => {
        const input = 'Hello World 123';
        const expected = 'Hello World 123';
        expect(sanitiseToOnlyAlphanumeric(input)).toBe(expected);
    });

    it('should return an empty string if input contains only special characters', () => {
        const input = '!@#$%^&*()';
        const expected = '';
        expect(sanitiseToOnlyAlphanumeric(input)).toBe(expected);
    });

    it('should return undefined for undefined input', () => {
        const input = undefined;
        const expected = undefined;
        expect(sanitiseToOnlyAlphanumeric(input)).toBe(expected);
    });

    it('should return an empty string for an empty input', () => {
        const input = '';
        const expected = '';
        expect(sanitiseToOnlyAlphanumeric(input)).toBe(expected);
    });
});
