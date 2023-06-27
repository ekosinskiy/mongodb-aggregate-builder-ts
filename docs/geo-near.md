# Demo for GeoNear

### Example of code

```typescript
import {AggregateBuilder} from 'mongodb-aggregate-builder';


const aggBuilder = new AggregateBuilder();
aggBuilder.geoNear({
    near: {
        type: 'Point',
        coordinates: [ -73.99279, 40.719296 ]
    },
    distanceField: 'dist.calculated',
    maxDistance: 2,
    query: { type: 'public' },
    includeLocs: 'dist.location',
    num: 5,
    spherical: true
});
console.log(JSON.stringify(aggBuilder.build(), null, 2));
```

### Result

```json
[
    {
        "$geoNear": {
            "near": {
                "type": "Point",
                "coordinates": [
                -73.99279,
                40.719296
                ]
            },
            "distanceField": "dist.calculated",
            "maxDistance": 2,
            "query": {
                "type": "public"
            },
            "includeLocs": "dist.location",
            "num": 5,
            "spherical": true
        }
    }
]
```
