# Demo for Lookup

### Example of code

```typescript
import {AggregateBuilder} from 'mongodb-aggregate-builder';

const aggBuilder = new AggregateBuilder();
aggBuilder.lookup("collection_two", "coll_id", "child_id", "items", [{ $match: {cnt: 10}}])
console.log(JSON.stringify(aggBuilder.build(), null, 2));
```

### Result

```json
[
    {
        "$lookup": {
        "from": "collection_two",
        "localField": "coll_id",
        "foreignField": "child_id",
        "as": "items",
        "pipeline": [
            {
                "$match": {
                    "cnt": 10
                }
            }
        ]
        }
    }
]
```
