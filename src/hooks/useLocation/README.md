# useLocation

A hook for returning a single locations data

##### Import

```js
import { useLocation } from '/hooks';
```

##### Usage

```jsx
const { location, loading, error } = useLocation(locationId);
```

##### Required params

| Name         | Type     | Description                 |
| ------------ | -------- | --------------------------- |
| `locationId` | `number` | An id number for a location |

##### Returned values

| Name       | Type       | Description                                                |
| ---------- | ---------- | ---------------------------------------------------------- |
| `location` | `Location` | A location object with coordinate data                     |
| `loading`  | `boolean`  | Whether the request is waiting for a response from the API |
| `error`    | `Error`    | An error returned by the API                               |

```
class Location {
    id: number;
    name: string;
    latitude?: number;
    longitude?: number;
}
```
