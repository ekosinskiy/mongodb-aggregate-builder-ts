# Demo for Count

### Example of code

```typescript
import {AggregateBuilder} from 'mongodb-aggregate-builder';

const aggBuilder = new AggregateBuilder();
aggBuilder.count("itemCount");
console.log(JSON.stringify(aggBuilder.build(), null, 2));
```

### Result

```json
[
  {
    "$count": "itemCount"
  }
]
```
