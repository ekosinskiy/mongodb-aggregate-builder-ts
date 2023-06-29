# Demo for Match

### Example of code

```typescript
import {AggregateBuilder, andExpr} from 'mongodb-aggregate-builder';

const aggBuilder = new AggregateBuilder();
aggBuilder.match(andExpr([
    {cnt: 10}
]));
console.log(JSON.stringify(aggBuilder.build(), null, 2));
```

### Result

```json
[
  {
    "$match": {
      "$and": [
        {
          "cnt": 10
        }
      ]
    }
  }
]
```
