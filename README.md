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

- [x] Bucket
- [x] BucketAuto
- [x] Densify
- [x] Documents
- [x] Facet
- [x] Match
- [x] Group
- [x] Lookup
- [x] Unwind
- [x] Project
- [x] AddFields
- [x] ReplaceRoot
- [x] Sort
- [x] Limit
- [x] Skip
- [x] Count

## Implemented expressions

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

## Custom helpers

- [x] hideField - using for projection to hide fields, generate data structure such as
```json
  {
      "FIELD_NAME": 0
  }
  ```
- [x] showField - - using for projection to show fields, generate data structure such as
```json
  {
      "FIELD_NAME": 1
  }
  ```
- [x] mergeObjects

## Usage


```typescript
import {AggregateBuilder, andExpr, SortDirection, toString} from 'mongodb-aggregate-builder';

const aggBuilder = new AggregateBuilder();
aggBuilder
    .match(andExpr([{name: 'John'}, {age: {$gt: 18}}]))
    .addFields(toString('age', 'stringAge'))
    .sort({age: SortDirection.ASC_TEXT}).skip(10).limit(5);

console.log(JSON.stringify(aggBuilder.build(), null, 2));
```

### Result

```json
[
  {
    "$match": {
      "$and": [
        {
          "name": "John"
        },
        {
          "age": {
            "$gt": 18
          }
        }
      ]
    }
  },
  {
    "$addFields": {
      "stringAge": {
        "$toString": "$age"
      }
    }
  }
]

```

## License

[MIT](LICENSE)
