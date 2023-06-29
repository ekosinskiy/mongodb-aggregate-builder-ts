# Demo for Set

### Example of code

```typescript
import {AggregateBuilder, toString} from 'mongodb-aggregate-builder';

const aggBuilder = new AggregateBuilder();
aggBuilder.set({
    ...toString('age', 'stringAge'),
    value: 123
});
console.log(JSON.stringify(aggBuilder.build(), null, 2));

```

### Result

```json
[
    {
        "$set": {
            "stringAge": {
                "$toString": "$age"
            },
            "value": 123
        }
    }
]
```
