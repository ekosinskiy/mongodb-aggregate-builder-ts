# Demo for Out

### Example of code

```typescript
import {AggregateBuilder} from 'mongodb-aggregate-builder';

const aggBuilder = new AggregateBuilder();
aggBuilder.out('test', 'updated_collection');
console.log(JSON.stringify(aggBuilder.build(), null, 2));
```

### Result

```json
[
    {
        "$out": {
        "db": "test",
        "coll": "updated_collection"
        }
    }
]
```
