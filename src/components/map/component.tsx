import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

type MapProps = {
    coordinates: {
        lat: number;
        lng: number;
    };
};

export const Map = ({ coordinates }: MapProps) => {
    const mapStyles = {
        height: '500px',
        width: '100%'
    };

    return (
        <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}>
            <GoogleMap mapContainerStyle={mapStyles} zoom={15} center={coordinates}>
                <Marker position={coordinates} />
            </GoogleMap>
        </LoadScript>
    );
};
