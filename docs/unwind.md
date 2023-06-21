# Demo for Unwind

### Example of code

```typescript
import {AggregateBuilder} from 'mongodb-aggregate-builder';

const aggBuilder = new AggregateBuilder();
aggBuilder.unwind('data', true);
console.log(JSON.stringify(aggBuilder.build(), null, 2));
```

### Result

```json
[
    {
        "$unwind": {
            "path": "$data",
            "preserveNullAndEmptyArrays": true
        }
    }
]
```
