const setFieldStatus = (fields: string[], status: number) => {
    const convertedFields: any = {};
    fields.forEach((field: string) => {
        convertedFields[field] = status;
    });
    return convertedFields;
}

export const hideFields = (fields: string[]) => {
    return setFieldStatus(fields, 0);
}

export const showFields = (fields: string[]) => {
    return setFieldStatus(fields, 1);
}
