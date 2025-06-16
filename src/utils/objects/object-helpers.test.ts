import { diff, removeFalsyProperties } from './object-helpers';

describe('diff', () => {
    it('should return an empty object when both objects are identical', () => {
        const from = { a: 1, b: 2, c: 3 };
        const to = { a: 1, b: 2, c: 3 };
        expect(diff(from, to)).toEqual({});
    });

    it('should return only the properties in `to` that are different from `from`', () => {
        const from = { a: 1, b: 2, c: 3 };
        const to = { a: 1, b: 4, c: 3 };
        expect(diff(from, to)).toEqual({ b: 4 });
    });

    it('should include properties in `to` that are absent in `from`', () => {
        const from = { a: 1, b: 2 };
        const to = { a: 1, b: 2, c: 3 };
        expect(diff(from, to)).toEqual({ c: 3 });
    });

    it('should include properties in `from` that are absent in `to`', () => {
        const from = { a: 1, b: 2, c: 3 };
        const to = { a: 1, b: 2 };
        expect(diff(from, to)).toEqual({ c: undefined });
    });

    it('should handle cases with nested objects by returning only changed references', () => {
        const from = { a: 1, b: { x: 10, y: 20 }, c: 3 };
        const to = { a: 1, b: { x: 10, y: 25 }, c: 3 };
        expect(diff(from, to)).toEqual({ b: { x: 10, y: 25 } });
    });

    it('should handle empty `from` object by returning all properties in `to`', () => {
        const from = {};
        const to = { a: 1, b: 2 };
        expect(diff(from, to)).toEqual({ a: 1, b: 2 });
    });

    it('should handle empty `to` object by returning all properties in `from` with undefined values', () => {
        const from = { a: 1, b: 2 };
        const to = {};
        expect(diff(from, to)).toEqual({ a: undefined, b: undefined });
    });
});

describe('removeFalsyProperties', () => {
    it('removes falsy properties from the sample data', () => {
        const input = {
            featured_filter: false,
            q: '',
            search_location: 'united kingdom',
            search_category: 'cars',
            urgent_filter: false,
            sort: 'price_lowest_first',
            search_scope: false,
            photos_filter: false,
            seller_type: '',
            vehicle_body_type: '',
            vehicle_doors: '3',
        };

        const expected = {
            search_location: 'united kingdom',
            search_category: 'cars',
            sort: 'price_lowest_first',
            vehicle_doors: '3',
        };

        expect(removeFalsyProperties(input)).toEqual(expected);
    });

    it('returns an empty object if all properties are falsy', () => {
        const input = {
            featured_filter: false,
            q: '',
            urgent_filter: false,
            search_scope: false,
            photos_filter: false,
            seller_type: '',
            vehicle_body_type: '',
        };

        expect(removeFalsyProperties(input)).toEqual({});
    });

    it('returns the same object if no properties are falsy', () => {
        const input = {
            search_location: 'united kingdom',
            search_category: 'cars',
            sort: 'price_lowest_first',
            vehicle_doors: '3',
        };

        expect(removeFalsyProperties(input)).toEqual(input);
    });

    it('handles an empty object', () => {
        const input = {};

        expect(removeFalsyProperties(input)).toEqual({});
    });

    it('ignores inherited properties', () => {
        const prototype = {
            protoProperty: null,
        };

        const input = Object.create(prototype);
        Object.assign(input, {
            search_location: 'united kingdom',
            search_category: 'cars',
            featured_filter: false,
            q: '',
        });

        const expected = {
            search_location: 'united kingdom',
            search_category: 'cars',
        };

        expect(removeFalsyProperties(input)).toEqual(expected);
    });

    it('removes undefined, null, empty string, and false values', () => {
        const input = {
            a: undefined,
            b: null,
            c: '',
            d: false,
            e: 0,
            f: 'valid',
            g: true,
        };
        const result = removeFalsyProperties(input);
        expect(result).toEqual({
            f: 'valid',
            g: true,
        });
    });

    it('returns the same object if all values are valid', () => {
        const input = {
            x: 123,
            y: 'abc',
            z: true,
        };
        const result = removeFalsyProperties(input);
        expect(result).toEqual(input);
    });

    it('returns empty object if all values are invalid', () => {
        const input = {
            a: undefined,
            b: null,
            c: '',
            d: false,
        };
        const result = removeFalsyProperties(input);
        expect(result).toEqual({});
    });

    it('works with empty input object', () => {
        const result = removeFalsyProperties({});
        expect(result).toEqual({});
    });
});
