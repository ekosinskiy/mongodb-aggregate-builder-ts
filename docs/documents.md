# Demo for Documents

### Example of code

```typescript
import {AggregateBuilder} from 'mongodb-aggregate-builder';


const aggBuilder = new AggregateBuilder();
aggBuilder.documents([ { x: 10 }, { x: 2 }, { x: 5 } ]);
console.log(JSON.stringify(aggBuilder.build(), null, 2));
```

### Result

```json
[
    {
        "$documents": [
            {"x": 10},
            {"x": 2},
            {"x": 5}
        ]
    }
]
```
