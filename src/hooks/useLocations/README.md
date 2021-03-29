# useLocations

A hook for returning a list of locations

##### Import

```js
import { useLocations } from '/hooks';
```

##### Usage

```jsx
const { locations, loading, error } = useLocations(searchParam);
```

##### Required params

| Name          | Type     | Description                              |
| ------------- | -------- | ---------------------------------------- |
| `searchParam` | `string` | A string value of the name of a location |

##### Returned values

| Name        | Type         | Description                                                |
| ----------- | ------------ | ---------------------------------------------------------- |
| `locations` | `Location[]` | A list of location objects                                 |
| `loading`   | `boolean`    | Whether the request is waiting for a response from the API |
| `error`     | `Error`      | An error returned by the API                               |

```
class Location {
    id: number;
    name: string;
    latitude?: number;
    longitude?: number;
}
```
