# Demo for Skip

### Example of code

```typescript
import {AggregateBuilder} from 'mongodb-aggregate-builder';

const aggBuilder = new AggregateBuilder();
aggBuilder.skip(10);
console.log(JSON.stringify(aggBuilder.build(), null, 2));
```

### Result

```json
[
    {
        "$skip": 10
    }
]
```
