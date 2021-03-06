/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import type {Node} from 'react';
import {StatusBar, PermissionsAndroid, Platform} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import Router from './src/navigation/Root';

import Amplify from 'aws-amplify'
import config from './src/aws-exports'

Amplify.configure(config)

const App: () => Node = () => {
    const androidPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    title: 'Uber App App location Permission',
                    message:
                        'Uber App App needs access to your location ' +
                        'so you can take awesome rides.',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                },
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log('You can use the location');
            } else {
                console.log('location permission denied');
            }
        } catch (err) {
            console.warn(err);
        }
    };

    useEffect(() => {
        if (Platform.OS === 'android') {
            androidPermission();
        } else {
            //IOS
            Geolocation.requestAuthorization();
        }
    }, []);
    return (
        <>
            <StatusBar barStyle="dark-content"/>
            <Router/>
        </>
    );
};

export default App
