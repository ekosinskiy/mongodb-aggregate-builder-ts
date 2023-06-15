import {AggregateBuilder} from '../src/aggregate-builder';
import {andExpr} from '../src/helpers/expressions';
import {toString} from '../src/helpers/transform-to';
import {SortDirection} from '../src/types/sort-expression';

const aggregateBuilder = new AggregateBuilder();
aggregateBuilder
    .match(andExpr([{name: 'John'}, {age: {$gt: 18}}]))
    .addFields(toString('age', 'stringAge'))
    .sort({age: SortDirection.ASC_TEXT}).skip(10).limit(5);

console.log(JSON.stringify(aggregateBuilder.build(), null, 2));
