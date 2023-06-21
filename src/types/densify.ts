export type UnitType = "millisecond" | "second" | "minute" | "hour" | "day" | "week" | "month" | "quarter" | "year";
export type DensifyBoundsType = "full" | "partition" | any[];

export interface DensifyInterface {
    field: string;
    partitionByFields?: string[];
    range: {
        bounds: DensifyBoundsType,
        step: number,
        unit?: UnitType
    };
}
