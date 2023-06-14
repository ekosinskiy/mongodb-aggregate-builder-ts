export const mergeObjects = (fieldList: any[]) => {
    const convertedFieldList = fieldList.map((field: any) => {
        return typeof field === 'string' ? `$${field}` : field;
    });
    return {
        $mergeObjects: convertedFieldList
    };
}
