# Demo for GraphLookup

### Example of code

```typescript
import {AggregateBuilder} from 'mongodb-aggregate-builder';

const aggBuilder = new AggregateBuilder();
aggBuilder.graphLookup({
    from: "employees",
    startWith: "$reportsTo",
    connectFromField: "reportsTo",
    connectToField: "name",
    as: "reportingHierarchy"
});
console.log(JSON.stringify(aggBuilder.build(), null, 2));
```

### Result

```json
[
    {
        "$graphLookup": {
            "from": "employees",
            "startWith": "$reportsTo",
            "connectFromField": "reportsTo",
            "connectToField": "name",
            "as": "reportingHierarchy"
        }
    }
]
```
