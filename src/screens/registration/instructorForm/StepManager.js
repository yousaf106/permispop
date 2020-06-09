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
import {margins, paddings} from '../../../globals/styles';
const labels = ['Identity', 'Details', 'Insaurance', 'Vechicle', 'Done'];
import {RFValue} from 'react-native-responsive-fontsize';

const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#fe7013',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: '#fe7013',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#fe7013',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#fe7013',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: '#fe7013',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#999999',
  labelSize: 13,
  currentStepLabelColor: '#fe7013',
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
              />
            : <View />}
          {this.state.currentPosition === 2
            ? <Insurance
                onClickNext={() => {
                  this.setState ({currentPosition: 3});
                }}
              />
            : <View />}

          {this.state.currentPosition === 3 ? <Vehicle /> : <View />}
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
