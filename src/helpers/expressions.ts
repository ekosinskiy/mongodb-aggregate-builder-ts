const makeExpression = (expresions: any[], operator: string) => {
    return {
        [`$${operator}`]: expresions
    };
}

export const orExpr = (expresions: any[]) => {
    return makeExpression(expresions, 'or');
}

export const andExpr = (expresions: any[]) => {
    return makeExpression(expresions, 'and');
}
