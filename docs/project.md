# Demo for Project

### Example of code

```typescript
import {AggregateBuilder} from 'mongodb-aggregate-builder';

const aggBuilder = new AggregateBuilder();
aggBuilder.project({
    "data": 0,
    "password": 0
});
console.log(JSON.stringify(aggBuilder.build(), null, 2));
```

### Result

```json
[
    {
        "$project": {
            "data": 0,
            "password": 0
        }
    }
]
```
