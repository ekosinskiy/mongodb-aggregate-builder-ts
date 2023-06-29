# Demo for ReplaceRoot/ReplaceWith with mergeObjects

### Example of code

```typescript
import {AggregateBuilder} from 'mongodb-aggregate-builder';

const aggBuilder = new AggregateBuilder();
aggBuilder.replaceRoot(mergeObjects('$$ROOT', '$items'));
console.log(JSON.stringify(aggBuilder.build(), null, 2));

```

### Result

```json
[
  {
    "$replaceRoot": {
      "newRoot": {
        "$mergeObjects": [
          "$$ROOT",
          "$items"
        ]
      }
    }
  }
]
```
