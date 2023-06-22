# Demo for UnionWith

### Example of code

```typescript
import {AggregateBuilder} from 'mongodb-aggregate-builder';

const aggBuilder = new AggregateBuilder();
const aggPipelineBuilder = new AggregateBuilder();
aggPipelineBuilder.match({name: 'John'});

aggBuilder.unionWith("items", aggPipelineBuilder.build());
console.log(JSON.stringify(aggBuilder.build(), null, 2));
```

### Result

```json
[
  {
    "$unionWith": {
      "coll": "items",
      "pipeline": [
        {
          "$match": {
            "name": "John"
          }
        }
      ]
    }
  }
]
```
