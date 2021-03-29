import React from 'react';
import { Location } from '../../types';
import Link from 'next/link';
import { Grid, Card, Image, Button } from './component.styles';
import { H2Element } from '../heading';

type LocationGridProps = {
    locations: Location[];
};

export const LocationGrid = ({ locations }: LocationGridProps): JSX.Element => {
    return (
        <Grid>
            {locations.map((location, index) => {
                return (
                    <Card key={index}>
                        <H2Element weight="SEMIBOLD">{location.name}</H2Element>
                        <Image src="/svg/pin.svg" alt={location.name} />
                        <Link href={`/location/${location.id}`}>
                            <Button>View Location</Button>
                        </Link>
                    </Card>
                );
            })}
        </Grid>
    );
};

export default LocationGrid;
