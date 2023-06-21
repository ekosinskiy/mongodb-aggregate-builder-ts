import {AggregateBuilder} from '../../../src';

describe('AggregateBuilder', () => {
    describe('graphLookup', () => {
        it('should add a $graphLookup stage to the aggregation pipeline', () => {
            const builder = new AggregateBuilder();
            const pipeline = builder
                .graphLookup(
                    'employees',
                    'employeeId',
                    '_id',
                    'reports',
                    'reports',
                    5,
                    'depth',
                    { isActive: true }
                )
                .build();

            expect(pipeline).toEqual([
                {
                    $graphLookup: {
                        from: 'employees',
                        startWith: 'employeeId',
                        connectFromField: '_id',
                        connectToField: 'reports',
                        as: 'reports',
                        maxDepth: 5,
                        depthField: 'depth',
                        restrictSearchWithMatch: { isActive: true },
                    },
                },
            ]);
        });

        it('should throw an error if maxDepth is less than 0', () => {
            const builder = new AggregateBuilder();

            expect(() =>
                builder.graphLookup(
                    'employees',
                    'employeeId',
                    '_id',
                    'reports',
                    'reports',
                    -1,
                    'depth',
                    { isActive: true }
                )
            ).toThrow('Max depth must be greater than 0');
        });
    });
});
