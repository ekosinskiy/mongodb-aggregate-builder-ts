import {andExpr, orExpr} from '../../src';

describe('orExpr', () => {
    test('should return the correct expression object with the "or" operator', () => {
        const expressions = [1, 2, 3];
        const result = orExpr(expressions);
        expect(result).toEqual({ $or: [1, 2, 3] });
    });
});

describe('andExpr', () => {
    test('should return the correct expression object with the "and" operator', () => {
        const expressions = [4, 5, 6];
        const result = andExpr(expressions);
        expect(result).toEqual({ $and: [4, 5, 6] });
    });
});
