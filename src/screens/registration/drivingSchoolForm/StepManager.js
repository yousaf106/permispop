import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedbackBase,
} from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import Identity from './Identity';
import Details from './Details';
import Insurance from './Insurance';
import Vehicle from './Vehicle';
import Manager from './Manager';
import {margins, paddings, colors} from '../../../globals/styles';
const labels = ['Identity', 'Details', 'Insaurance', 'Manager', 'Vechicle'];
import {RFValue} from 'react-native-responsive-fontsize';

const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: colors.primarybold,
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: colors.primary,
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: colors.primary,
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: colors.primarybold,
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: '#000000',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: colors.primarylight,
  labelColor: colors.primarybold,
  labelSize: 13,
  currentStepLabelColor: colors.primary,
};

export default class StepManager extends Component {
  constructor (props) {
    super (props);
    this.state = {
      currentPosition: 0,
    };
  }

  render () {
    return (
      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 20}}
        >
          <View style={styles.verticalSpace} />
          <StepIndicator
            customStyles={customStyles}
            currentPosition={this.state.currentPosition}
            labels={labels}
            onPress={this.onPageChange}
          />
          {this.state.currentPosition === 0
            ? <Identity
                onPressSubmit={() => {
                  this.setState ({currentPosition: 1});
                }}
              />
            : <View />}
          {this.state.currentPosition === 1
            ? <Details
                onClickNext={() => {
                  this.setState ({currentPosition: 2});
                }}
                onClickPrevious={() => {
                  console.warn ('previous clicked');
                  this.setState ({currentPosition: 0});
                }}
              />
            : <View />}
          {this.state.currentPosition === 2
            ? <Insurance
                onClickNext={() => {
                  this.setState ({currentPosition: 3});
                }}
                onClickPrevious={() => {
                  this.setState ({currentPosition: 1});
                }}
              />
            : <View />}

          {this.state.currentPosition === 3
            ? <Manager
                onClickNext={() => {
                  this.setState ({currentPosition: 4});
                }}
                onClickPrevious={() => {
                  this.setState ({currentPosition: 2});
                }}
              />
            : <View />}
          {this.state.currentPosition === 4 ? <Vehicle /> : <View />}

        </ScrollView>

      </View>
    );
  }
  onPageChange = position => {
    this.setState ({currentPosition: position});
  };
}

const styles = StyleSheet.create ({
  container: {
    paddingStart: paddings.horizontalPadding,
    paddingEnd: paddings.horizontalPadding,
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
  },
  verticalSpace: {
    marginTop: margins.verticalSpace,
  },
  redText: {
    color: 'red',
    fontSize: RFValue (14),
  },
});
