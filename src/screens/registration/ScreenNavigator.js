import React, {Component} from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import {margins, paddings} from '../../globals/styles';
import RadioInput from '../../components/RadioInput';
import StudentForm from './StudentForm';
import InstructorForm from './instructorForm/StepManager';
import SchoolForm from './drivingSchoolForm/StepManager';
export default class ScreenNavigator extends Component {
  constructor (props) {
    super (props);
    this.state = {
        selectedRadioIndex:0,
    };
  }


  render () {
    return (
      <View style={styles.container}>
          <View style = {{width:'100%',flexDirection:'row',justifyContent:'center'}}>
            <RadioInput
                values={[
                  {label: 'Studend', value: 0},
                  {label: 'Instructor', value: 1},
                  {label: 'Driving School', value: 2},
                ]}
                formHorizontal={true}
                callback={value => {
                    this.setState({selectedRadioIndex:value});
                }}
                labelHorizontal ={false}
              />
      </View>
      {this.state.selectedRadioIndex === 0 ?
        <StudentForm/>  
    :<View/>}
      {this.state.selectedRadioIndex === 1 ?
        <InstructorForm/>  
    :<View/>}
    
    {this.state.selectedRadioIndex === 2 ?
        <SchoolForm/>  
    :<View/>}
    
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
  },
  verticalSpace: {
    marginTop: margins.verticalSpace,
  },

});
