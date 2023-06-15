export enum SortDirection {
    ASC = 1,
    DESC = -1,
    ASC_TEXT = 'asc',
    DESC_TEXT = 'desc',
    TEXT_SCORE = 'textScore'
}


export interface SortExpression {
    [key: string]: 1 | -1 | 'asc' | 'desc' | 'textScore';
}
