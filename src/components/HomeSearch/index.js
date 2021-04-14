import React from 'react';
import {View, Text, Pressable} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import {useNavigation} from '@react-navigation/native'

import styles from './styles';

const HomeSearch = props => {
    const navigation = useNavigation();
    const goToSearch  = () => {
        navigation.navigate('DestinationSearch')
    }
    return (
        <View >

            {/* Input box */}
            <Pressable onPress = {goToSearch} style = {styles.inputBox}>
                <Text style = {styles.inputText}>Where to ?</Text>
                <View style = {styles.timeContainer}>
                    <AntDesign name = {'clockcircle'} size = {16} color = {'#fff'}/>
                    <Text>Now</Text>
                    <MaterialIcons name = {'keyboard-arrow-down'} size = {16} />
                </View>

            </Pressable>

            {/* Previous destination */}
            <View style = {styles.row} >
                <View style = {styles.iconContainer} >
                    <AntDesign name  = {'clockcircle'} size  = {16} color = {'#fff'} />
                </View>
                <Text style = {styles.destinationText}>Spin NightClub</Text>
            </View>

            {/* HOme destination */}
            <View style = {styles.row} >
                <View style = {[styles.iconContainer, {backgroundColor: '#249cf1'}]} >
                    <Entypo name  = {'home'} size  = {20 } color = {'#fff'} />
                </View>
                <Text style = {styles.destinationText}>Spin NightClub</Text>
            </View>
        </View>
    );
};
export default HomeSearch;
