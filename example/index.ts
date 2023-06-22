import {AggregateBuilder} from '../src/aggregate-builder';
import {andExpr} from '../src/helpers/expressions';
import {toString} from '../src/helpers/transform-to';
import {SortDirection} from '../src/types/sort-expression';
import {dateToString, hideFields} from '../src';

const aggregateBuilder = new AggregateBuilder();
aggregateBuilder
    .match(andExpr([{name: 'John'}, {age: {$gt: 18}}]))
    .addFields(toString('age', 'stringAge'))
    .sort({age: SortDirection.ASC_TEXT}).skip(10).limit(5);

console.log(JSON.stringify(aggregateBuilder.build(), null, 2));

const aggBuilder1 = new AggregateBuilder();
const aggBuilder2 = new AggregateBuilder();
const aggBuilder3 = new AggregateBuilder();
const aggBuilderMain = new AggregateBuilder();

aggBuilder1.project(hideFields(['password']));
aggBuilder2.match({
    name: 'John'
});
aggBuilder3.group({
   _id: dateToString('$createdAt', '%Y-%m-%d')
});

aggBuilderMain.match({
    age: {
        $gt: 18
    }
});

const result = aggBuilderMain.mergeAggregation([
    aggBuilder1.build(),
    aggBuilder2.build(),
    aggBuilder3.build()
]);

aggBuilderMain.mergeAggregationWithCurrent([
    aggBuilder1.build(),
    aggBuilder2.build(),
    aggBuilder3.build()
]);

console.log("Merged rules", JSON.stringify(result, null, 2));
console.log("Merged with current state", JSON.stringify(aggBuilderMain.build(), null, 2));
