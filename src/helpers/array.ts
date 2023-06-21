const arrayOperation = (arrayVaribaleName: string, operation: string) => {
    return {
        [arrayVaribaleName]: {
            [operation]: `$${arrayVaribaleName}`
        }
    };
}

export const first = (arrayVaribaleName: string) => {
    return arrayOperation(arrayVaribaleName, '$first');
}

export const last = (arrayVaribaleName: string) => {
    return arrayOperation(arrayVaribaleName, '$last');
}

const arrayOperationN = (arrayVaribaleName: string, n: number, operation: string) => {
    return {
        [arrayVaribaleName]: {
            [operation]: {
                $size: `$${arrayVaribaleName}`
            }
        }
    };
}

export const firstN = (arrayVaribaleName: string, n: number) => {
    return arrayOperationN(arrayVaribaleName, n, '$firstN');
}

export const lastN = (arrayVaribaleName: string, n: number) => {
    return arrayOperationN(arrayVaribaleName, n, '$lastN');
}

export const concatArrays = (arrays: any[]) => {
    return {
        $concatArrays: arrays
    }
}
