# Demo for Bucket

### Example of code

```typescript
import {AggregateBuilder, andExpr, SortDirection, toString} from 'mongodb-aggregate-builder';

const aggBuilder = new AggregateBuilder();
aggBuilder.bucket({
    groupBy: "$year_born",                        
    boundaries: [ 1840, 1850, 1860, 1870, 1880 ], 
    default: "Other",                             
    output: {                                     
        "count": { $sum: 1 },
        "artists" :
            {
                $push: {
                    "name": { $concat: [ "$first_name", " ", "$last_name"] },
                    "year_born": "$year_born"
                }
            }
    }
});
console.log(JSON.stringify(aggBuilder.build(), null, 2));
```

### Result

```json
[
    {
        "$bucket": {
            "groupBy": "$year_born",
            "boundaries": [
                1840,
                1850,
                1860,
                1870,
                1880
            ],
            "default": "Other",
            "output": {
                "count": {
                    "$sum": 1
                },
                "artists": {
                    "$push": {
                        "name": {
                            "$concat": [
                                "$first_name",
                                " ",
                                "$last_name"
                            ]
                        },
                        "year_born": "$year_born"
                    }
                }
            }
        }
    }
]
```
