# Demo for Project with showFields


Using for projection to show fields


### Example of code

```typescript
import {AggregateBuilder} from 'mongodb-aggregate-builder';

const aggBuilder = new AggregateBuilder();
aggBuilder.project(showFields('data', 'password'));
console.log(JSON.stringify(aggBuilder.build(), null, 2));
```

### Result

```json
[
    {
        "$project": {
            "data": 1,
            "password": 1
        }
    }
]
```
