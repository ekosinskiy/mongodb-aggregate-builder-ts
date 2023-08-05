const responseBuilder = (fieldName: string, newFieldName: string, typeConversion: string): any => {
    if (newFieldName === '') {
        newFieldName = fieldName;
    }
    typeConversion = `$${typeConversion}`;
    return {
        [newFieldName]: {
            [typeConversion]: `$${fieldName}`
        }
    };
}

/**
 * @param fieldName
 * @param newFieldName
 */
export const toString = (fieldName: string, newFieldName = '') => {
    return responseBuilder(fieldName, newFieldName, 'toString');
}

/**
 * @param fieldName
 * @param newFieldName
 */
export const toObjectId = (fieldName: string, newFieldName = '') => {
    return responseBuilder(fieldName, newFieldName, 'toObjectId');
}

/**
 * @param fieldName
 * @param newFieldName
 */
export const toBool = (fieldName: string, newFieldName = '') => {
    return responseBuilder(fieldName, newFieldName, 'toBool');
}

/**
 * @param fieldName
 * @param newFieldName
 */
export const toDate = (fieldName: string, newFieldName = '') => {
    return responseBuilder(fieldName, newFieldName, 'toDate');
}

/**
 * @param fieldName
 * @param newFieldName
 */
export const toDecimal = (fieldName: string, newFieldName = '') => {
    return responseBuilder(fieldName, newFieldName, 'toDecimal');
}

/**
 * @param fieldName
 * @param newFieldName
 */
export const toDouble = (fieldName: string, newFieldName = '') => {
    return responseBuilder(fieldName, newFieldName, 'toDouble');
}

/**
 * @param fieldName
 * @param newFieldName
 */
export const toInt = (fieldName: string, newFieldName = '') => {
    return responseBuilder(fieldName, newFieldName, 'toInt');
}

/**
 * @param fieldName
 * @param newFieldName
 */
export const toLong = (fieldName: string, newFieldName = '') => {
    return responseBuilder(fieldName, newFieldName, 'toLong');
}

/**
 * @param fieldName
 * @param newFieldName
 */
export const toLower = (fieldName: string, newFieldName = '') => {
    return responseBuilder(fieldName, newFieldName, 'toLower');
}

/**
 * @param fieldName
 * @param newFieldName
 */
export const toUpper = (fieldName: string, newFieldName = '') => {
    return responseBuilder(fieldName, newFieldName, 'toUpper');
}
