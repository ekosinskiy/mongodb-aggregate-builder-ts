import {AggregateBuilder} from '../src/aggregate-builder';
import {andExpr} from '../src/helpers/expressions';
import {toString} from '../src/helpers/transform-to';

const aggregateBuilder = new AggregateBuilder();
aggregateBuilder
    .match(andExpr([{name: 'John'}, {age: {$gt: 18}}]))
    .addFields(toString('age', 'stringAge'));

console.log(JSON.stringify(aggregateBuilder.build(), null, 2));
