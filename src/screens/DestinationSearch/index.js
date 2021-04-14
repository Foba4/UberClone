import React, {useState, useEffect} from 'react';
import {View, TextInput, SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
    DescriptionRow,
    GooglePlaceData,
    GooglePlacesAutocomplete,
} from 'react-native-google-places-autocomplete';

import PlaceRow from './PlaceRow';
import styles from './styles';


const homePlace = {
    description: 'Home',
    geometry: {location: {lat: 48.8152937, lng: 2.4597668}},
};
const workPlace = {
    description: 'Work',
    geometry: {location: {lat: 48.8496818, lng: 2.2940881}},
};


const DestinationSearch = props => {
    const [originPlace, setOriginPlace] = useState(null);
    const [destinationPlace, setDestinationPlace] = useState(null);
    navigator.geolocation = require('@react-native-community/geolocation');

    const checkNavigation = () => {
        console.warn('useEffect is called');
        if (originPlace && destinationPlace) {
            console.warn('Redirect to result');
            navigation.navigate('SearchResults',
                {
                    originPlace,
                    destinationPlace
                });
        }
    };
    const navigation = useNavigation();

    useEffect(() => {
        checkNavigation();
    }, [originPlace, destinationPlace]);

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <GooglePlacesAutocomplete
                    placeholder='From'
                    onPress={(data, details = null) => {
                        setOriginPlace({data, details});
                    }}
                    enablePoweredByContainer={false}
                    suppressDefaultStyles
                    currentLocation={true}
                    currentLocationLabel='Current location'
                    styles={
                        {
                            textInput: styles.textInput,
                            container: styles.autocompleteContainer,
                            listView: styles.listView,
                            separator: styles.separator,
                        }
                    }
                    fetchDetails
                    query={{
                        key: 'API_KEY',
                        language: 'en',
                    }}
                    renderRow={(data: GooglePlaceData) => <PlaceRow data={data}/>}
                    rendrerDescription={(data: DescriptionRow) => data.description || data.vicinity}
                    predefinedPlaces={[homePlace, workPlace]}
                />

                <GooglePlacesAutocomplete
                    placeholder='Where to ?'
                    onPress={(data, details = null) => {
                        setDestinationPlace({data, details});
                    }}
                    enablePoweredByContainer={false}
                    suppressDefaultStyles
                    currentLocation={true}
                    currentLocationLabel='Current location'
                    styles={
                        {
                            textInput: styles.textInput,
                            container: {
                                ...styles.autocompleteContainer,
                                top: 55,
                            },
                            separator: styles.separator,
                        }
                    }
                    fetchDetails
                    query={{
                        key: 'API_KEY',
                        language: 'en',
                    }}
                    renderRow={(data: GooglePlaceData) => <PlaceRow data={data}/>}
                />

                {/* Circle near from Origin input*/}
                <View style={styles.circle}>

                </View>
                {/* Line between dots */}
                <View style={styles.line}>

                </View>
                {/* Square near from Destination input*/}
                <View style={styles.square}>

                </View>
            </View>
        </SafeAreaView>
    );
};
export default DestinationSearch;
