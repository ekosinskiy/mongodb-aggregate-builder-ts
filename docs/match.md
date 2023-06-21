# Demo for Match

### Example of code

```typescript
import {AggregateBuilder} from 'mongodb-aggregate-builder';
import {andExpr} from './expressions';

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
