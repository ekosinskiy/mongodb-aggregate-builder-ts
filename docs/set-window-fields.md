# Demo for Fill

### Example of code

```typescript
import {AggregateBuilder} from 'mongodb-aggregate-builder';

const aggBuilder = new AggregateBuilder();
const output = {
    cumulativeQuantityForState: {
        $sum: "$quantity",
        window: {
            documents: [ "unbounded", "current" ]
        }
    }
};

aggBuilder.setWindowFields(
    output,
    "$state",
    { orderDate: 1 }
);
console.log(JSON.stringify(aggBuilder.build(), null, 2));
```

### Result

```json
[
    {
        "$setWindowFields": {
            "sortBy": {
                "orderDate": 1
            },
            "partitionBy": "$state",
            "output": {
                "cumulativeQuantityForState": {
                    "$sum": "$quantity",
                    "window": {
                        "documents": [
                            "unbounded",
                            "current"
                        ]
                    }
                }
            }
        }
    }
]
```
