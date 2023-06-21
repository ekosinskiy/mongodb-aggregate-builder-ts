# Demo for Densify

### Example of code


```typescript
import {AggregateBuilder, andExpr, SortDirection, toString} from 'mongodb-aggregate-builder';

const aggBuilder = new AggregateBuilder();
aggBuilder.densify({
    field: "age",
    partitionByFields: ["name"],
    range: {
        bounds: DensifyBoundsType.MIN_MAX,
        step: 10,
        unit: UnitType.YEAR
    }
});
console.log(JSON.stringify(aggBuilder.build(), null, 2));

```

### Result

```json
[
    {
        "$densify": {
            "field": "age",
            "partitionByFields": ["name"],
            "range": {
                "bounds": "minMax",
                "step": 10,
                "unit": "year"
            }
        }
    }
]
```
