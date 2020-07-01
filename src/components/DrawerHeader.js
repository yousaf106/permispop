import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, Dimensions} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

const {width} = Dimensions.get('window');

export default class  DrawerHeader extends Component{
  render(){
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.props.callBack}>
          <Image source={require('../../res/images/hamburger.png')} style={styles.drawerButton}/>
        </TouchableOpacity>
        <Text style={styles.headerTitleText}>{this.props.title}</Text>
        <Image source={require('../../res/images/hamburger.png')} style={styles.transparentView}/>

      </View>
    );
  }
}


const styles = StyleSheet.create ({
  container: {
    backgroundColor: "#149E7A",
    width: width,
    height: width*0.2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: width*0.05,
    paddingTop: width*0.05
  },
  drawerButton: {
    resizeMode: 'contain',
    height: width*0.1,
    width: width*0.1,
    tintColor: '#FFFFFF'
  },
  headerTitleText:{
    fontSize: RFValue('25'),
    fontWeight: '700',
    color: '#FFFFFF'
  },
  transparentView: {
    resizeMode: 'contain',
    height: width*0.1,
    width: width*0.1,
    tintColor: 'transparent'
  }
});
