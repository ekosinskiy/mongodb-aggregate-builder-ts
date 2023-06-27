# Demo for Facet

### Example of code

```typescript
import {AggregateBuilder, andExpr} from 'mongodb-aggregate-builder';

const aggBuilder = new AggregateBuilder();
const aggCategorizedByTagsBuilder = new AggregateBuilder();

aggCategorizedByTagsBuilder.unwind('$tags').sortByCount('$tags');

aggBuilder.facet({
    "categorizedByTags": aggCategorizedByTagsBuilder.build()
});
console.log(JSON.stringify(aggBuilder.build(), null, 2));
```

### Result

```json
[
  {
    "$facet": {
      "categorizedByTags": [
        {
          "$unwind": "$tags"
        },
        {
          "$sortByCount": "$tags"
        }
      ]
    }
  }
]
```
