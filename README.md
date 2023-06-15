# MongoDB Aggregate Builder

This library developed on Typescript.

The MongoDB Aggregate Builder is a powerful tool designed 
to simplify the process of creating and managing aggregate rules 
in an object-oriented programming paradigm. An aggregate rule is a rule 
that operates on a collection of objects or entities rather 
than individual ones, allowing for efficient and cohesive processing of data.


This library provides a comprehensive set of features and 
abstractions to define and manipulate aggregate rules. 
It encourages encapsulation, modularization, and reusability, 
promoting clean and maintainable code. With this library, 
developers can easily create, compose, and apply aggregate 
rules in their applications without the need for extensive 
boilerplate code.


In summary, the MongoDB Aggregate Builder empowers developers to
design, manage, and apply aggregate rules in an object-oriented 
programming style. It promotes code reuse, extensibility, and 
maintainability, making it an invaluable tool for applications 
that deal with complex rule-based operations on collections of 
objects or entities.

## Install

Run next command

```shell
npm i mongodb-aggregate-builder
```

## Implemented rules

- [x] Match
- [x] Group
- [x] Lookup
- [x] Unwind
- [x] Project
- [x] AddFields
- [x] ReplaceRoot

And type convertors, such as:

- [x] toObjectId
- [x] toBool
- [x] toDate
- [x] toNumber
- [x] toString
- [x] toLong
- [x] toDouble
- [x] toDecimal
- [x] toInt
- [x] toLower
- [x] toUpper

## Usage

```typescript
import {AggregateBuilder} from '../src/aggregate-builder';
import {andExpr} from '../src/helpers/expressions';
import {toString} from '../src/helpers/transform-to';

const aggregateBuilder = new AggregateBuilder();
aggregateBuilder
    .match(andExpr([{name: 'John'}, {age: {$gt: 18}}]))
    .addFields(toString('age', 'stringAge'));

console.log(JSON.stringify(aggregateBuilder.build(), null, 2));
```


## License

[MIT](LICENSE)
