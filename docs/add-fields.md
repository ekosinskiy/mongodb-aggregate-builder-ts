# Demo for AddFields

### Example of code

```typescript
import {AggregateBuilder, toString} from 'mongodb-aggregate-builder';

const aggBuilder = new AggregateBuilder();
aggBuilder.addFields({
    ...toString('age', 'stringAge'),
    value: 123
});
console.log(JSON.stringify(aggBuilder.build(), null, 2));

```

### Result

```json
[
    {
        "$addFields": {
            "stringAge": {
                "$toString": "$age"
            },
            "value": 123
        }
    }
]
```
