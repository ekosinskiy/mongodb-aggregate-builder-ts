

export const dateToString = (dateField: string, format = '%Y-%m-%dT%H:%M:%S.%LZ', timezone = '', onNull: any = ''): any => {
    const dateExpression: any = {
        $dateToString: {
            format,
            date: dateField
        }
    };

    if (timezone) {
        dateExpression.$dateToString.timezone = timezone;
    }

    if (onNull) {
        dateExpression.$dateToString.onNull = onNull;
    }

    return dateExpression;
}
