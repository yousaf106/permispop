import React, {Component} from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import {margins, paddings} from '../../../globals/styles';
import Form from '../../../components/FormInput';
import CalandarInput from '../../../components/CalendarInput';
import UploadAvatar from '../../../components/UploadAvatar';
import FormLabel from '../../../components/FormLabel';
import UploadButton from '../../../components/UploadButton';
import {RFValue} from 'react-native-responsive-fontsize';
import CheckBoxInput from '../../../components/CheckBoxInput';
import FormButton from '../../../components/MediumButton';
import FormHeading from '../../../components/FormHeading';
import Toast from 'react-native-simple-toast';
import {
  isDatePast,
  isDateFuture,
  toDate,
  getCurrentDate,
} from '../../../globals/functions';
import Store from '../../../stores';

export default class Details extends Component {
  componentDidMount = () => {
    let {orderStore} = Store;

    this.setState ({
      numberText: orderStore.school.details.numberText,
      liceneseObtained: orderStore.school.details.liceneseObtained,
      dateOfApproval: orderStore.school.details.dateOfApproval,
      issuingAuthorityText: orderStore.school.details.issuingAuthorityText,
      certificationUri: orderStore.school.details.certificationUri,
      serialNumberText: orderStore.school.details.serialNumberText,
      kblsUri: orderStore.school.details.kblsUri,
    });
  };

  constructor (props) {
    super (props);
    this.state = {
      dateOfApproval: '',
      showApprovalDateError: false,

      numberText: '',
      showNumberError: '',

      issuingAuthorityText: '',
      showIssuingAuthorityError: false,

      serialNumberText: '',
      showSerialError: false,

      kblsUri: '',
      certificationUri: '',
      showCertificationError: false,
      showKblsUriError: false,
    };
  }

  checkForEmptyFields = () => {
    if (this.state.numberText.length === 0)
      this.setState ({showNumberError: true});
    else this.setState ({showNumberError: false});

    if (this.state.certificationUri.length === 0)
      this.setState ({showCertificationError: true});
    else this.setState ({showCertificationError: false});
    if (this.state.kblsUri.length === 0)
      this.setState ({showKblsUriError: true});
    else this.setState ({showKblsUriError: false});

    if (this.state.issuingAuthorityText.length === 0)
      this.setState ({showIssuingAuthorityError: true});
    else this.setState ({showIssuingAuthorityError: false});

    if (this.state.serialNumberText.length === 0)
      this.setState ({showSerialError: true});
    else this.setState ({showSerialError: false});
  };

  areAllFieldsClear = () => {
    let {orderStore} = Store;
    orderStore.school.details.numberText = this.state.numberText;
    orderStore.school.details.liceneseObtained = this.state.liceneseObtained;
    orderStore.school.details.dateOfApproval = this.state.dateOfApproval;
    orderStore.school.details.issuingAuthorityText = this.state.issuingAuthorityText;
    orderStore.school.details.certificationUri = this.state.certificationUri;
    orderStore.school.details.serialNumberText = this.state.serialNumberText;
    orderStore.school.details.kblsUri = this.state.kblsUri;

    if (
      !this.state.showNumberError &&
      !this.state.showBackError &&
      !this.state.showIssuingAuthorityError &&
      !this.state.showSerialError &&
      !this.state.showApprovalDateError &&
      !this.state.showCertificationError
    ) {
      Toast.show ('You May Proceed (Debud Text)');
      return true;
    } else Toast.show ('Fill all the required fields (Debud Text)');

    return false;
  };

  render () {
    return (
      <View>

        <FormHeading heading="Approval" />

        <FormLabel label="" />

        <Form
          value={this.state.numberText}
          formType={'numeric'}
          callback={text => {
            this.setState ({numberText: text});
            if (text.length === 0) {
              this.setState ({showNumberError: true});
            } else this.setState ({showNumberError: false});
          }}
          onFocus={isRequired => {
            if (this.state.numberText.length === 0)
              this.setState ({showNumberError: true});
          }}
          showError={this.state.showNumberError}
          errorText={'Number Should Not Be Empty'}
          placeholder={"Enter Number"}
        />

        <FormLabel label="" />

        <Form
          value={this.state.issuingAuthorityText}
          callback={text => {
            this.setState ({issuingAuthorityText: text});
            if (text.length === 0) {
              this.setState ({showIssuingAuthorityError: true});
            } else this.setState ({showIssuingAuthorityError: false});
          }}
          onFocus={isRequired => {
            if (this.state.issuingAuthorityText.length === 0)
              this.setState ({showIssuingAuthorityError: true});
          }}
          showError={this.state.showIssuingAuthorityError}
          errorText={'Issuing Authority Must Not Be Emply'}
          placeholder={"Enter Issuing Authority"}
        />

        <FormLabel label="Upload your certification" />
        <UploadButton
          showError={this.state.showCertificationError}
          errorText="You must upload image"
          onUriReceived={uri => {
            if (uri != null && uri != undefined && uri.length != 0)
              this.setState ({
                certificationUri: uri,
                showCertificationError: false,
              });
            else
              this.setState ({
                certificationUri: '',
                showCertificationError: true,
              });
          }}
        />

        <FormLabel label="Date of Approval" />

        <CalandarInput
          date={this.state.dateOfApproval}
          callback={date => {
            this.setState ({dateOfApproval: date});

            if (isDateFuture (date)) {
              this.setState ({showApprovalDateError: true});
            } else this.setState ({showApprovalDateError: false});
          }}
          showError={this.state.showApprovalDateError}
          errorText={'Date Cannot Be From Future'}
        />
        <View style={styles.verticalSpace} />

        <FormLabel label="" />

        <Form
          value={this.state.serialNumberText}
          formType={'numeric'}
          callback={text => {
            this.setState ({serialNumberText: text});
            if (text.length === 0) {
              this.setState ({showSerialError: true});
            } else this.setState ({showSerialError: false});
          }}
          onFocus={isRequired => {
            if (this.state.serialNumberText.length === 0)
              this.setState ({showSerialError: true});
          }}
          showError={this.state.showSerialError}
          errorText={'Serial Should Not Be Empty'}
          placeholder={"Enter Serial Number"}
        />

        <FormLabel label="Upload your kbls" />
        <UploadButton
          showError={this.state.showKblsUriError}
          errorText="You must upload image"
          onUriReceived={uri => {
            if (uri != null && uri != undefined && uri.length != 0)
              this.setState ({
                kblsUri: uri,
                showKblsUriError: false,
              });
            else
              this.setState ({
                kblsUri: '',
                showKblsUriError: true,
              });
          }}
        />

        <View style={styles.buttonRow}>
          <FormButton
            label="Back"
            showIconLeft={true}
            leftIcon={require ('../../../../res/images/back.png')}
            callback={() => {
              this.props.onClickPrevious ();
            }}
          />
          <FormButton
            label="Next"
            showIconRight={true}
            rightIcon={require ('../../../../res/images/forward.png')}
            callback={async () => {
              await this.checkForEmptyFields ();
              const clear = await this.areAllFieldsClear ();
              if (clear) this.props.onClickNext ();
            }}
          />

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  verticalSpace: {
    marginTop: margins.verticalSpace,
  },
  buttonRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
