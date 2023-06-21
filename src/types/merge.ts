export enum WhenNotMatched {
    INSERT = 'insert',
    DELETE = 'delete',
    SKIP = 'skip'
}

export enum WhenMatched {
    REPLACE = 'replace',
    KEEP_EXISTING = 'keepExisting',
    MERGE = 'merge',
    FAIL = 'fail',
    PIPELINE = 'pipeline'
}

export type WhenNotMatchedType = 'insert' | 'delete' | 'skip';
export type WhenMatchedType = 'replace' | 'keepExisting' | 'merge' | 'fail' | 'pipeline';
export type IntoType = string | { db: string, coll: string };
export type OnType = string | string[];

export interface MergeInterface {
    into: IntoType;
    on?: OnType;
    let?: any;
    whenMatched?: WhenMatchedType;
    whenNotMatched?: WhenNotMatchedType;
}
