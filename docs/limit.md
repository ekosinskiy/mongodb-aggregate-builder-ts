# Demo for Limit

### Example of code

```typescript
import {AggregateBuilder} from 'mongodb-aggregate-builder';

const aggBuilder = new AggregateBuilder();
aggBuilder.limit(10);
console.log(JSON.stringify(aggBuilder.build(), null, 2));
```

### Result

```json
[
    {
        "$limit": 10
    }
]
```
