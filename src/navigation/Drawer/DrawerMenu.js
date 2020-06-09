import React from 'react';
import {View, Text, TouchableOpacity ,StyleSheet} from 'react-native';

export default ({navigation})=>(<TouchableOpacity
onPress = {()=>{
     navigation.navigate('Notifications');
}}
><Text>asdfs</Text></TouchableOpacity>);

const styles = StyleSheet.create({});