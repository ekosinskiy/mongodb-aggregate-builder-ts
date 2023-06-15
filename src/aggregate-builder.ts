import {SortDirection, SortExpression} from './types/sort-expression';

export class AggregateBuilder {

    private aggregate: any[] = [];


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
        this.aggregate.push(lookupData);
        return this;
    }

    public unwind(path: string, preserveNullAndEmptyArrays = false) {
        this.aggregate.push({
            $unwind: {
                path,
                preserveNullAndEmptyArrays
            }
        });
        return this;
    }

    public project(fields: any) {
        this.aggregate.push({
           $project: fields
        });
        return this;
    }

    public addFields(fields: any) {
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
     * Return prepared aggregate
     */
    public build() {
        return this.aggregate;
    }
}
