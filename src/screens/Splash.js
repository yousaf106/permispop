import React, {Component} from 'react';
import {StyleSheet, View, Image, ActivityIndicator} from 'react-native';
import {colors} from '../globals/styles';
import {restartNavigationStack} from '../../src/navigation/Helpers';
export default class Splash extends Component {
  constructor (props) {
    super (props);
  }

  componentDidMount () {
    setTimeout (() => {
      restartNavigationStack(this.props,'Login');
    }, 5000);
  }

  render () {
    return (
      <View style={styles.container}>
        <Image source={require ('../../res/images/logo.png')} />
        <ActivityIndicator
          size="large"
          color={colors.primary}
          style={styles.indicator}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create ({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  image: {
    width: 150,
    height: 90,
    resizeMode: 'center',
  },
  indicator: {
    marginTop: 15,
  },
});
