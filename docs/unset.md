# Demo for Unset

### Example of code

```typescript
import {AggregateBuilder} from 'mongodb-aggregate-builder';

const aggBuilder = new AggregateBuilder();
aggBuilder.unset(["_id", "password"]);
console.log(JSON.stringify(aggBuilder.build(), null, 2));
```

### Result

```json
[
    {
        "$unset": [
        "_id",
        "password"
        ]
    }
]
```
