# Demo for Merge Aggregation

### Example of code

```typescript
import {AggregateBuilder, dateToString} from 'mongodb-aggregate-builder';

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
```

### Merged rules

```json
[
    {
        "$project": {
            "password": 0
        }
    },
    {
        "$match": {
            "name": "John"
        }
    },
    {
        "$group": {
            "_id": {
                "$dateToString": {
                    "format": "%Y-%m-%d",
                    "date": "$createdAt"
                }
            }
        }
    }
]

```

### Merged with current state

```json
[
  {
    "$match": {
      "age": {
        "$gt": 18
      }
    }
  },
  {
    "$project": {
      "password": 0
    }
  },
  {
    "$match": {
      "name": "John"
    }
  },
  {
    "$group": {
      "_id": {
        "$dateToString": {
          "format": "%Y-%m-%d",
          "date": "$createdAt"
        }
      }
    }
  }
]

```
