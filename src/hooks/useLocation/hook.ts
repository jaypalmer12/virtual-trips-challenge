import useSWR from 'swr';
import { fetcher } from '../../helpers';

type LocationsResponse = {
    location: Location;
    loading: boolean;
    error: Error;
};

export const useLocation = (locationId: string): LocationsResponse => {
    const queryUrl = `${process.env.NEXT_PUBLIC_API}locations/${locationId}`;
    const { data, error } = useSWR(queryUrl, fetcher);

    return {
        location: data,
        loading: !error && !data,
        error
    };
};

export default useLocation;
