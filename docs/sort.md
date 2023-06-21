# Demo for Sort

### Example of code

```typescript
import {AggregateBuilder} from 'mongodb-aggregate-builder';
import {SortDirection} from './sort-expression';

const aggBuilder = new AggregateBuilder();
aggBuilder.sort({age: SortDirection.ASC});
console.log(JSON.stringify(aggBuilder.build(), null, 2));
```

### Result

```json
[
    {
        "$sort": {
            "age": 1
        }
    }
]
```
