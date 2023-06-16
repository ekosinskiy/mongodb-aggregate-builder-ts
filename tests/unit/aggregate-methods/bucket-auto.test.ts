import {AggregateBuilder} from '../../../src';

describe('AggregateBuilder', () => {
    describe('bucketAuto', () => {
        it('should add a $bucketAuto stage to the aggregation pipeline', () => {
            const builder = new AggregateBuilder();
            const pipeline = builder
                .bucketAuto('price', 5, { count: { $gt: 0 } }, '1-5')
                .build();

            expect(pipeline).toEqual([
                {
                    $bucketAuto: {
                        groupBy: 'price',
                        buckets: 5,
                        output: { count: { $gt: 0 } },
                        granularity: '1-5',
                    },
                },
            ]);
        });
    });
});
