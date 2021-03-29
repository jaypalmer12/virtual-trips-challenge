import React from 'react';
import { Loader } from '../../components';
import { Map } from '../../components';
import { PageProps, Location } from '../../types';

const LocationPage = ({ data: location }: PageProps): JSX.Element => {
    const { latitude, longitude } = location as Location;
    const coordinates = { lat: latitude, lng: longitude };
    return location ? <Map coordinates={coordinates} /> : <Loader />;
};

export const getServerSideProps = async (context): Promise<{ props?: PageProps; notFound?: boolean }> => {
    const queryUrl = `${process.env.NEXT_PUBLIC_API}locations/${context.params.locationId}`;
    const response = await fetch(queryUrl);
    const data: Location = await response.json();

    if (!response.ok) {
        return {
            notFound: true
        };
    }

    return {
        props: {
            pageTitle: `Location : ${data.name}`,
            pageHeading: data.name,
            data,
            returnHome: true
        }
    };
};

export default LocationPage;
