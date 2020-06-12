import React, {Component} from 'react';
//import react in our code.

import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Alert,
  Text,
} from 'react-native';
import { paddings, margins, colors } from '../globals/styles';

export default Fab = ({callback,source}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={callback}
      style={styles.TouchableOpacityStyle}
    >
      <Image
        //We are making FAB using TouchableOpacity with an image
        //We are using online image here
        source={source}
        //You can use you project image Example below
        //source={require('./images/float-add-icon.png')}
        style={styles.FloatingButtonStyle}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create ({
  TouchableOpacityStyle: {
    width: 45,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    right: paddings.horizontalPadding,
    top: margins.verticalSpace,
    backgroundColor:colors.primary,
    borderRadius:45/2,
    alignSelf:'flex-end',
  },

  FloatingButtonStyle: {
    resizeMode: 'contain',
    width: 30,
    height: 30,
    //backgroundColor:'black'
  },
});
