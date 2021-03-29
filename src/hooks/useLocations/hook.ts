import useSWR from 'swr';
import { fetcher } from '../../helpers';
import { Location } from '../../types';

type LocationsResponse = {
    locations: Location[];
    loading: boolean;
    error: Error;
};

export const useLocations = (searchParam: string): LocationsResponse => {
    const queryUrl = `${process.env.NEXT_PUBLIC_API}locations?q=${searchParam}`;
    const { data, error } = useSWR(searchParam ? queryUrl : null, fetcher);

    return {
        locations: data,
        loading: !error && !data,
        error
    };
};

export default useLocations;
