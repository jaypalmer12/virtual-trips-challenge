import React from 'react';
import { useState } from 'react';
import { Loader, LocationGrid, SearchField } from '../components';
import { useLocations } from '../hooks';
import { PageProps } from '../types';
import styled from 'styled-components';

export const Text = styled.p`
    padding-top: 40px;
    font-size: 20px;
    font-weight: 500;
    text-align: center;
`;

const HomePage = (props: PageProps): JSX.Element => {
    const [searchParam, setSearchParam] = useState(null);
    const { locations, loading, error } = useLocations(searchParam);

    const getContent = () => {
        if (error) {
            return <Text>Sorry, we are unable to load your results at this time</Text>;
        }

        if (!searchParam || searchParam.length === 0) {
            return <Text>Type in the search box above to search find locations</Text>;
        }

        if (searchParam && searchParam.length && loading) {
            return <Loader />;
        }

        if (locations && locations.length) {
            return <LocationGrid locations={locations} />;
        } else {
            return <Text>Unfortunately we do not have this location</Text>;
        }
    };

    return (
        <>
            <form name="searchForm">
                <SearchField placeholder="Search for locations..." onChange={setSearchParam} />
            </form>
            {getContent()}
        </>
    );
};

export async function getStaticProps(context) {
    return {
        props: {
            pageTitle: 'Home',
            pageHeading: 'Home'
        }
    };
}

export default HomePage;
