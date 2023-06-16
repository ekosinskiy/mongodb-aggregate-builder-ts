import {AggregateBuilder} from '../../../src';

describe('AggregateBuilder', () => {
    describe('lookup', () => {
        it('should add a $lookup stage to the aggregation pipeline', () => {
            const builder = new AggregateBuilder();
            const pipeline = builder
                .lookup('orders', 'userId', '_id', 'user', [])
                .build();

            expect(pipeline).toEqual([
                {
                    $lookup: {
                        from: 'orders',
                        localField: 'userId',
                        foreignField: '_id',
                        as: 'user',
                    },
                },
            ]);
        });

        it('should add a $lookup stage with pipeline to the aggregation pipeline', () => {
            const builder = new AggregateBuilder();
            const pipeline = builder
                .lookup(
                    'orders',
                    'userId',
                    '_id',
                    'user',
                    [
                        {
                            $match: { status: 'completed' },
                        },
                        {
                            $project: { _id: 1, total: 1 },
                        },
                    ]
                )
                .build();

            expect(pipeline).toEqual([
                {
                    $lookup: {
                        from: 'orders',
                        localField: 'userId',
                        foreignField: '_id',
                        as: 'user',
                        pipeline: [
                            {
                                $match: { status: 'completed' },
                            },
                            {
                                $project: { _id: 1, total: 1 },
                            },
                        ],
                    },
                },
            ]);
        });
    });
});
