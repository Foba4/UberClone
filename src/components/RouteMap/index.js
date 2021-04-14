import React from 'react';
import {View, Image} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const RouteMap = ({origin, destination}) => {
    const GOOGLE_MAPS_APIKEY = 'AIzaSyCTMhjzOCHXYKHrJxxV8JlqJmsBFHAcdW0';

    const originLoc = {
        latitude: origin.details.geometry.location.lat,
        longitude: origin.details.geometry.location.lng,
    };

    const destinationLoc = {
        latitude: destination.details.geometry.location.lat,
        longitude: destination.details.geometry.location.lng,
    };

    console.log(originLoc);

    return (
        <MapView
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={{width: '100%', height: '100%'}}
            region={{
                latitude: 14.67713267038496,
                longitude: -17.436591932992133,
                latitudeDelta: 0.0222,
                longitudeDelta: 0.0121,
            }}
        >
            <MapViewDirections
                origin={originLoc}
                destination={destinationLoc}
                apikey={GOOGLE_MAPS_APIKEY}
                strokeWidth={5}
                strokeColor="hotpink"
            />
            <Marker
                coordinate={originLoc}
                title={'Origin'}
            />
            <Marker
                coordinate={destinationLoc}
                title={'Destination'}
            />
        </MapView>
    );
};
export default RouteMap;
