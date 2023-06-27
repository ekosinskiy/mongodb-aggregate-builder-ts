# Demo for Bucket Auto

### Example of code

```typescript
import {AggregateBuilder, Granularity} from 'mongodb-aggregate-builder';

const aggBuilder = new AggregateBuilder();

aggBuilder.bucketAuto("$_id", 5, null, Granularity.R20);
console.log(JSON.stringify(aggBuilder.build(), null, 2));
```

### Result

```json
[
  {
    "$bucketAuto": {
      "groupBy": "$_id",
      "buckets": 5,
      "granularity": "R20"
    }
  }
]
```
