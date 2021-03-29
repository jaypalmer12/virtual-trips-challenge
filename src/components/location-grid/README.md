# Location Grid

A grid component for displaying a list of locations

##### Import

```js
import { LocationGrid } from '/components';
```

##### Usage

```jsx
<LocationGrid locations={locations} />
```

##### Required props

| Name        | Type         | Description                |
| ----------- | ------------ | -------------------------- |
| `locations` | `Location[]` | A list of location objects |

##### Types

```
class Location {
    id: number;
    name: string;
    latitude?: number;
    longitude?: number;
}
```
