# Demo for Fill

### Example of code

```typescript
import {AggregateBuilder} from 'mongodb-aggregate-builder';

const aggBuilder = new AggregateBuilder();
aggBuilder.fill({
    sortBy: { date: 1 },
    partitionBy: { "restaurant": "$restaurant" },
    output: { "score": { method: "locf" }}
});
console.log(JSON.stringify(aggBuilder.build(), null, 2));
```

### Result

```json
[
    {
        "$fill": {
            "sortBy": {
                "date": 1
            },
            "partitionBy": {
                "restaurant": "$restaurant"
            },
            "output": {
                "score": {
                "method": "locf"
                }
            }
        }
    }
]
```
