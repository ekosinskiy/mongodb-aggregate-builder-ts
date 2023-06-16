import {toBool, toDate, toDecimal, toDouble, toInt, toLong, toObject, toString} from '../../src';

describe('toString', () => {
    test('should return the correct response object for "toString" operation', () => {
        const fieldName = 'fieldName';
        const newFieldName = 'newFieldName';
        const result = toString(fieldName, newFieldName);
        const expected = {
            [newFieldName]: {
                $toString: `$${fieldName}`
            }
        };
        expect(result).toEqual(expected);
    });

    test('should return the correct response object for "toString" operation with default newFieldName', () => {
        const fieldName = 'fieldName';
        const result = toString(fieldName);
        const expected = {
            [fieldName]: {
                $toString: `$${fieldName}`
            }
        };
        expect(result).toEqual(expected);
    });
});

describe('toLong', () => {
    test('should return the correct response object for "toLong" operation', () => {
        const fieldName = 'fieldName';
        const newFieldName = 'newFieldName';
        const result = toLong(fieldName, newFieldName);
        const expected = {
            [newFieldName]: {
                $toLong: `$${fieldName}`
            }
        };
        expect(result).toEqual(expected);
    });

    test('should return the correct response object for "toLong" operation with default newFieldName', () => {
        const fieldName = 'fieldName';
        const result = toLong(fieldName);
        const expected = {
            [fieldName]: {
                $toLong: `$${fieldName}`
            }
        };
        expect(result).toEqual(expected);
    });
});

describe('toObject', () => {
    test('should return the correct response object for "toObject" operation', () => {
        const fieldName = 'fieldName';
        const newFieldName = 'newFieldName';
        const result = toObject(fieldName, newFieldName);
        const expected = {
            [newFieldName]: {
                $toObject: `$${fieldName}`
            }
        };
        expect(result).toEqual(expected);
    });

    test('should return the correct response object for "toObject" operation with default newFieldName', () => {
        const fieldName = 'fieldName';
        const result = toObject(fieldName);
        const expected = {
            [fieldName]: {
                $toObject: `$${fieldName}`
            }
        };
        expect(result).toEqual(expected);
    });
});

describe('toBool', () => {
    test('should return the correct response object for "toBool" operation', () => {
        const fieldName = 'fieldName';
        const newFieldName = 'newFieldName';
        const result = toBool(fieldName, newFieldName);
        const expected = {
            [newFieldName]: {
                $toBool: `$${fieldName}`
            }
        };
        expect(result).toEqual(expected);
    });

    test('should return the correct response object for "toBool" operation with default newFieldName', () => {
        const fieldName = 'fieldName';
        const result = toBool(fieldName);
        const expected = {
            [fieldName]: {
                $toBool: `$${fieldName}`
            }
        };
        expect(result).toEqual(expected);
    });
});

describe('toDate', () => {
    test('should return the correct response object for "toDate" operation', () => {
        const fieldName = 'fieldName';
        const newFieldName = 'newFieldName';
        const result = toDate(fieldName, newFieldName);
        const expected = {
            [newFieldName]: {
                $toDate: `$${fieldName}`
            }
        };
        expect(result).toEqual(expected);
    });

    test('should return the correct response object for "toDate" operation with default newFieldName', () => {
        const fieldName = 'fieldName';
        const result = toDate(fieldName);
        const expected = {
            [fieldName]: {
                $toDate: `$${fieldName}`
            }
        };
        expect(result).toEqual(expected);
    });
});

describe('toDecimal', () => {
    test('should return the correct response object for "toDecimal" operation', () => {
        const fieldName = 'fieldName';
        const newFieldName = 'newFieldName';
        const result = toDecimal(fieldName, newFieldName);
        const expected = {
            [newFieldName]: {
                $toDecimal: `$${fieldName}`
            }
        };
        expect(result).toEqual(expected);
    });

    test('should return the correct response object for "toDecimal" operation with default newFieldName', () => {
        const fieldName = 'fieldName';
        const result = toDecimal(fieldName);
        const expected = {
            [fieldName]: {
                $toDecimal: `$${fieldName}`
            }
        };
        expect(result).toEqual(expected);
    });
});

describe('toDouble', () => {
    test('should return the correct response object for "toDouble" operation', () => {
        const fieldName = 'fieldName';
        const newFieldName = 'newFieldName';
        const result = toDouble(fieldName, newFieldName);
        const expected = {
            [newFieldName]: {
                $toDouble: `$${fieldName}`
            }
        };
        expect(result).toEqual(expected);
    });

    test('should return the correct response object for "toDouble" operation with default newFieldName', () => {
        const fieldName = 'fieldName';
        const result = toDouble(fieldName);
        const expected = {
            [fieldName]: {
                $toDouble: `$${fieldName}`
            }
        };
        expect(result).toEqual(expected);
    });
});

describe('toInt', () => {
    test('should return the correct response object for "toInt" operation', () => {
        const fieldName = 'fieldName';
        const newFieldName = 'newFieldName';
        const result = toInt(fieldName, newFieldName);
        const expected = {
            [newFieldName]: {
                $toInt: `$${fieldName}`
            }
        };
        expect(result).toEqual(expected);
    });

    test('should return the correct response object for "toInt" operation with default newFieldName', () => {
        const fieldName = 'fieldName';
        const result = toInt(fieldName);
        const expected = {
            [fieldName]: {
                $toInt: `$${fieldName}`
            }
        };
        expect(result).toEqual(expected);
    });
});

