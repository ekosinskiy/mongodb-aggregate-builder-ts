# Demo for Merge

### Example of code

```typescript
import {AggregateBuilder, WhenMatched} from 'mongodb-aggregate-builder';

const aggBuilder = new AggregateBuilder();
aggBuilder.merge(
    "updated_collection",
    "_id",
    WhenMatched.REPLACE,
    WhenNotMatched.INSERT
);
console.log(JSON.stringify(aggBuilder.build(), null, 2));
```

### Result

```json
[
    {
        "$merge": {
            "into": "updated_collection",
            "on": "_id",
            "whenMatched": "replace",
            "whenNotMatched": "insert"
        }
    }
]
```
