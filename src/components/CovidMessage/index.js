import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const CovidMessage = props => {
    return (
        <View style = {styles.container}>
            <Text style = {styles.title}>
                Travel only if necessary
            </Text>
            <Text style = {styles.text}>
                By default, IntelliJ IDEA starts the React Native bundler automatically when you invoke the run/debug
                configuration. If you have already started the bundler from outside IntelliJ IDEA, for example, from the
                command line, you can re-use it without stopping and restarting. Select your bundler in the Before
                Launch area and click
            </Text>
            <Text style = {styles.learMore}>
                Learn more
            </Text>
        </View>
    );
};
export default CovidMessage;
