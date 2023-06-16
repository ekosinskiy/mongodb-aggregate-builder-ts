import {AggregateBuilder} from '../../../src';

describe('AggregateBuilder', () => {
    describe('bucket', () => {
        it('should add a $bucket stage to the aggregation pipeline', () => {
            const builder = new AggregateBuilder();
            const pipeline = builder
                .bucket('price', [0, 100, 200], 'Other', 'count')
                .build();

            expect(pipeline).toEqual([
                {
                    $bucket: {
                        groupBy: 'price',
                        boundaries: [0, 100, 200],
                        default: 'Other',
                        output: 'count',
                    },
                },
            ]);
        });
    });
});
