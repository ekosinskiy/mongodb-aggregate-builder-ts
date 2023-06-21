export const floor = (field: string) => {
    return {
        $floor: field
    };
}
