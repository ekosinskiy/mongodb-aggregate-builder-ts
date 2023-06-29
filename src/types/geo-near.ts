export interface GeoNear {
    distanceField: string;
    distanceMultiplier?: number;
    includeLocs?: string;
    key?: string;
    maxDistance?: number;
    minDistance?: number;
    near: any;
    query?: object;
    spherical?: boolean;
}
