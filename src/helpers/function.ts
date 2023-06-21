export const functionOperation = (args: string [], body: any) => {
    return {
        $function: {
            body,
            args,
            lang: 'js'
        }
    };
}

export const func = (args: string [], body: any) => {
    return functionOperation(args, body);
}
