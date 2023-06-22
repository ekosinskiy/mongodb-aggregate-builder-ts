import {
    BucketAutoInterface,
    DensifyInterface,
    IntoType,
    MergeInterface,
    OnType,
    WhenMatched, WhenMatchedType, WhenNotMatched,
    WhenNotMatchedType,
    SortDirection,
    SortExpression, BasicKeyValueInterface, UnitType
} from './types';
import {ChangeStreamInterface} from '@/types/change-stream';
import {FacetInterface} from '@/types/facet';
import {FillInterface} from '@/types/fill';

export class AggregateBuilder {

    private aggregate: any[] = [];

    /**
     * @param groupBy
     * @param boundaries
     * @param defaultValue
     * @param output
     */
    public bucket(groupBy: string, boundaries: number[], defaultValue: string, output: any) {
        this.aggregate.push({
            $bucket: {
                groupBy,
                boundaries,
                default: defaultValue,
                output
            }
        });
        return this;
    }

    /**
     * @param groupBy
     * @param buckets
     * @param output
     * @param granularity
     */
    public bucketAuto(groupBy: string, buckets: number, output: any = {}, granularity = '') {
        const bucketData: BucketAutoInterface = {
            groupBy,
            buckets
        };

        if (Object.keys(output).length > 0) {
            bucketData['output'] = output;
        }

        if (granularity) {
            bucketData['granularity'] = granularity;
        }

        this.aggregate.push({
            $bucketAuto: bucketData
        });
        return this;
    }

    /**
     * @param allChangesForCluster
     * @param fullDocument
     * @param fullDocumentBeforeChange
     * @param resumeAfter
     * @param showExpandedEvents
     * @param startAfter
     * @param startAtOperationTime
     */
    public changeStream(
        allChangesForCluster: boolean,
        fullDocument: string,
        fullDocumentBeforeChange: string,
        resumeAfter: number,
        showExpandedEvents: boolean,
        startAfter: any,
        startAtOperationTime: any) {

        const changeStreamData: ChangeStreamInterface = {};

        // TODO implement this later

        this.aggregate.push({
            $changeStream: changeStreamData
        });

        return this;
    }

    /**
     * @param documentsExpression
     */
    public documents(documentsExpression: any[]) {
        this.aggregate.push({
            $documents: documentsExpression
        });
        return this;
    }

    /**
     * @param facet
     */
    public facet(facet: FacetInterface) {
        this.aggregate.push({
            $facet: facet
        });
        return this;
    }

    /**
     * @param densifyData
     */
    public densify(densifyData: DensifyInterface) {
        this.aggregate.push({
            $densify: densifyData
        });
        return this;
    }

    /**
     * @param fillData
     */
    public fill(fillData: FillInterface) {
        this.aggregate.push({
            $fill: fillData
        });
        return this;
    }

    /**
     * @param from
     * @param startWith
     * @param connectFromField
     * @param connectToField
     * @param as
     * @param maxDepth
     * @param depthField
     * @param restrictSearchWithMatch
     */
    public graphLookup(
        from: string,
        startWith: any,
        connectFromField: string,
        connectToField: string,
        as: string,
        maxDepth = 0,
        depthField = '',
        restrictSearchWithMatch = {}) {
        const graphLookupData: any = {
            from,
            startWith,
            connectFromField,
            connectToField,
            as,
        };

        if (maxDepth < 0) {
            throw new Error('Max depth must be greater than 0');
        } else if (maxDepth > 0) {
            graphLookupData['maxDepth'] = maxDepth;
        }
        if (depthField) {
            graphLookupData['depthField'] = depthField;
        }
        if (Object.keys(restrictSearchWithMatch).length > 0) {
            graphLookupData['restrictSearchWithMatch'] = restrictSearchWithMatch;
        }


        this.aggregate.push({
            $graphLookup: graphLookupData
        });
        return this;
    }

    /**
     * @param from
     * @param localField
     * @param foreignField
     * @param as
     * @param pipeline
     */
    public lookup(from: string, localField: string, foreignField: string, as: string, pipeline: any[] = []) {
        const lookupData: any = {
            from,
            localField,
            foreignField,
            as
        };
        if (pipeline.length > 0) {
            lookupData['pipeline'] = pipeline;
        }
        this.aggregate.push({
            $lookup: lookupData
        });
        return this;
    }

    /**
     * @param into
     * @param on
     * @param letVariables
     * @param whenMatched
     * @param whenNotMatched
     */
    public merge(into: IntoType, on: OnType = '', letVariables: any = null, whenMatched: WhenMatchedType = WhenMatched.MERGE, whenNotMatched: WhenNotMatchedType = WhenNotMatched.INSERT) {
        const mergeData: MergeInterface = {
            into
        };
        if (on) {
            mergeData['on'] = on;
        }
        if (letVariables) {
            mergeData['let'] = letVariables;
        }
        if (whenMatched) {
            mergeData['whenMatched'] = whenMatched;
        }
        if (whenNotMatched) {
            mergeData['whenNotMatched'] = whenNotMatched;
        }
        this.aggregate.push({
           $merge: mergeData
        });
        return this;
    }

    /**
     * @param db
     * @param collection
     */
    public out(db: string, collection: string) {
        this.aggregate.push({
            $out: {
                db,
                coll: collection
            }
        });
        return this;
    }

    /**
     * @param size
     */
    public sample(size: number) {
        if (size < 1) {
            throw new Error('Size must be greater than 0');
        }
        this.aggregate.push({
            $sample: {
                size
            }
        });
        return this;
    }

    /**
     * @param output
     * @param partitionBy
     * @param sortBy
     * @param window
     * @param documents
     * @param range
     * @param unit
     */
    public setWindowFields(
        output: any,
        partitionBy: string = '',
        sortBy: any = null,
        window: any = null,
        documents: any = null,
        range: any = null,
        unit: UnitType | null = null
    ) {
        const setWindowFieldsData: any = {
            output
        };
        if (partitionBy) {
            setWindowFieldsData['partitionBy'] = partitionBy;
        }
        if (sortBy) {
            setWindowFieldsData['sortBy'] = sortBy;
        }
        if (window) {
            setWindowFieldsData['window'] = window;
        }
        if (documents) {
            setWindowFieldsData['documents'] = documents;
        }
        if (range) {
            setWindowFieldsData['range'] = range;
        }
        if (unit) {
            setWindowFieldsData['unit'] = unit;
        }
        this.aggregate.push({
            $setWindowFields: setWindowFieldsData
        });
        return this;
    }

    // public unionWith(collections: UnionWithInterface[]) {
    //
    // }

    public unwind(path: string, preserveNullAndEmptyArrays = false) {
        this.aggregate.push({
            $unwind: {
                path,
                preserveNullAndEmptyArrays
            }
        });
        return this;
    }

    /**
     * @param fields
     */
    public unset(fields: string[]) {
        this.aggregate.push({
            $unset: fields
        });
        return this;
    }

    public project(fields: any) {
        this.aggregate.push({
            $project: fields
        });
        return this;
    }

    public addFields(fields: BasicKeyValueInterface) {
        this.aggregate.push({
            $addFields: fields
        });
        return this;
    }

    /**
     *
     * @param newRoot
     */
    public replaceRoot(newRoot: any) {
        this.aggregate.push({
            $replaceRoot: {
                newRoot
            }
        });
        return this;
    }

    /**
     * @param query
     */
    public match(query: any) {
        this.aggregate.push({
            $match: query
        });
        return this;
    }

    /**
     * @param fields
     */
    public group(fields: any) {
        this.aggregate.push({
            $group: fields
        });
        return this;
    }

    /**
     * @param skipValue
     */
    public skip(skipValue: number) {
        this.aggregate.push({
            $skip: skipValue
        });
        return this;
    }

    /**
     * @param limit
     */
    public limit(limit: number) {
        this.aggregate.push({
            $limit: limit
        });
        return this;
    }

    /**
     * @param sort
     */
    public sort(sort: SortExpression) {
        const sortRules: any = {};
        Object.keys(sort).forEach(key => {
            if (sort[key] === SortDirection.TEXT_SCORE) {
                sortRules[key] = {$meta: SortDirection.TEXT_SCORE};
            } else if (sort[key] === SortDirection.ASC_TEXT || sort[key] === SortDirection.ASC) {
                sortRules[key] = SortDirection.ASC;
            } else if (sort[key] === SortDirection.DESC_TEXT || sort[key] === SortDirection.DESC) {
                sortRules[key] = SortDirection.DESC;
            }
        });
        this.aggregate.push({
            $sort: sortRules
        });
        return this;
    }

    /**
     * @param countName
     */
    public count(countName: string) {
        this.aggregate.push({
            $count: countName
        });
        return this;
    }


    /**
     * Merge several part of aggregation in one
     * @param aggregate
     */
    public mergeAggregation(aggregate: any[]): any[] {
        let mergedRules: any[] = [];
        for (const rule of aggregate) {
            mergedRules = [...mergedRules, ...rule];
        }
        return mergedRules;
    }


    /**
     * Merge several part of aggregation in one with current state
     * @param aggregate
     */
    public mergeAggregationWithCurrent(aggregate: any[]) {
        for (const rule of aggregate) {
            this.aggregate = [...this.aggregate, ...rule];
        }
        return this;
    }

    /**
     * Return prepared aggregate
     */
    public build() {
        return this.aggregate;
    }
}
