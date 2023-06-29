# Demo for Project with hideFields


Using for projection to hide fields


### Example of code

```typescript
import {AggregateBuilder} from 'mongodb-aggregate-builder';

const aggBuilder = new AggregateBuilder();
aggBuilder.project(hideFields('data', 'password'));
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
