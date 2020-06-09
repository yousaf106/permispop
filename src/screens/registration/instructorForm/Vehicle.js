import React, {Component} from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import {margins, paddings} from '../../../globals/styles';
import Form from '../../../components/FormInput';
import CalandarInput from '../../../components/CalendarInput';
import Dropdown from '../../../components/DropdownInput';
import UploadAvatar from '../../../components/UploadAvatar';
import FormLabel from '../../../components/FormLabel';
import UploadButton from '../../../components/UploadButton';
import {RFValue} from 'react-native-responsive-fontsize';
import CheckBoxInput from '../../../components/CheckBoxInput';
import FormButton from '../../../components/FormButton';
import FormHeading from '../../../components/FormHeading';
import Toast from 'react-native-simple-toast';
import Store from '../../../stores'
export default class Details extends Component {
  constructor (props) {
    super (props);
    this.state = {
      agreed: false,
    };
  }


  componentDidMount = ()=>{
    const {orderStore} = Store;
    this.setState({agreed:orderStore.instructor.vehicle.agreed})
  }

  render () {
    return (
      <View>

        <FormLabel label="Terms & Conditions Applied" />
        <CheckBoxInput
          label="I Agreed, and I certify on my honour that the above information is true and correct to the best of my knowledge and belief and that I have verified its contents."
          callback={isChecked => {
            this.setState ({agreed: !this.state.agreed});
          }}
          isChecked={this.state.agreed}
        />

        <FormButton
          label="Submit"
          showIcon={true}
          callback={() => {
            
            const {orderStore} = Store;
            orderStore.instructor.vehicle.agreed = this.state.agreed;
            if(!this.state.agreed)
              Toast.show('You Must Agree To Terms & Conditions')
          }}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create ({
  verticalSpace: {
    marginTop: margins.verticalSpace,
  },
});
