# Demo for Match

### Example of code

```typescript
import {AggregateBuilder} from 'mongodb-aggregate-builder';


const aggBuilder = new AggregateBuilder();
aggBuilder.group({
    "_id": "$_id",
    "data": {
        "$first": "$$ROOT.items"
    },
    "userData": {
        "$first": "$$ROOT.doc"
    }
});
console.log(JSON.stringify(aggBuilder.build(), null, 2));
```

### Result

```json
[
    {
        "$group": {
            "_id": "$_id",
            "data": {
                "$first": "$$ROOT.items"
            },
            "userData": {
                "$first": "$$ROOT.doc"
            }
        }
    }
]
```
