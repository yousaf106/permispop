import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  Modal,
  TouchableHighlight,
  Image,
  TouchableOpacity,
} from 'react-native';
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
import Store from '../../../stores';
import CalendarInput from '../../../components/CalendarInput';
import MediumButton from '../../../components/MediumButton';
import Fab from '../../../components/FloatingActionButton';
import Card from '../../../components/FormEditCard';
import SubHeading from '../../../components/SubHeading';
import {
  isDatePast,
  isDateFuture,
  toDate,
  getCurrentDate,
} from '../../../globals/functions';

class DataModel {
  dataModel = {
    dateOfRegistrationText: getCurrentDate (),
    showDateOfRegistrationError: false,
    brandText: '',
    showBrandError: false,
    modelText: '',
    showModelError: false,
    gerBoxSelectedValue: '',
    gaerBoxSelectedIndex: 0,
    energySelectedValue: '',
    energySelectedIndex: 0,
    colorText: '',
    showColorError: false,
    imageUri: '',
    showImageUriError: false,
    registrationUri: '',
    showRegistrationUriError: false,
    insurerText: '',
    showInsurerError: false,
    policeNumberText: '',
    showPoliceNumberError: false,
    startDate: getCurrentDate (),
    showStartDateError: false,
    endDate: getCurrentDate (),
    showEndDateError: false,
    greenCardUri: '',
    showGreenCardUriError: false,
    technicalControlDate: getCurrentDate (),
    showTechnicalControlDateError: false,
    technicalControlEndDate: getCurrentDate (),
    showTechnicalControlEndDateError: false,
    ctUri: '',
    showCtUriError: false,
  };
}

export default class Details extends Component {
  constructor (props) {
    super (props);

    this.state = {
      modalIndex: 0,
      addClicked: false,
      gearboxValues: ['Manual', 'Auto'],
      energyValues: ['Diesel', 'Petrol', 'Hybrid', 'Electric', 'GPL', 'Other'],
      showModal: false,
      vehicles: null,
      cards: [],
      modalData: [],
    };
  }

  componentDidMount = async () => {
    const {orderStore} = Store;

    if (orderStore.school.vehicle.vehicle != null) {
      await this.setState ({vehicles: orderStore.school.vehicle.vehicle});
    }
  };

  render () {
    return (
      <View>
        <View style={styles.addFormButtonRow}>

          <FormHeading heading="Vehicles" />

          {this.state.cards.length < 5
            ? <Fab
                callback={() => {
                  if (this.state.addClicked) {
                    this.setState ({
                      vehicles: null,
                      addClicked: !this.state.addClicked,
                    });
                    return;
                  }

                  let vechileClone = new DataModel ();
                  if (this.state.addClicked) {
                    vechileClone = {};
                  } else {
                    const model = new DataModel ();
                    vechileClone = model.dataModel;
                  }
                  this.setState ({
                    vehicles: vechileClone,
                    addClicked: !this.state.addClicked,
                  });
                }}
                source={
                  !this.state.addClicked
                    ? require ('../../../../res/images/plus.png')
                    : require ('../../../../res/images/minus.png')
                }
              />
            : <View />}
        </View>

        <SubHeading label={'Maximum 5 Vehicles can be added'} />

        {this.state.cards.map ((item, index) => {
          return (
            <Card
              onEditClick={() => {
                const cardClone = [...this.state.cards];

                this.setState ({
                  modalData: cardClone[index],
                  showModal: true,
                  modalIndex: index,
                });
                // var dataModel = new DataModel ();
                // const clone = [...this.state.vehicles];
                // clone.push (dataModel.dataModel);
                // this.setState ({vehicles: clone});
              }}
              onDeleteClick={() => {
                const cardClone = [...this.state.cards];
                cardClone.splice (index, 1);

                this.setState ({cards: cardClone});
              }}
              title={item.brandText + ' ' + item.modelText}
            />
          );
        })}

        {this.state.vehicles != null
          ? <View>

              <FormHeading heading="Vehicle Details" />

              <FormLabel label="Date of the 1st Registration" />
              <CalendarInput
                date={this.state.vehicles.dateOfRegistrationText}
                callback={date => {
                  if (isDateFuture (date)) {
                    const clone = this.state.vehicles;
                    clone.showDateOfRegistrationError = true;
                    this.setState ({vehicles: clone});
                  } else {
                    const clone = this.state.vehicles;
                    clone.showDateOfRegistrationError = false;
                    this.setState ({vehicles: clone});
                  }
                  const clone = this.state.vehicles;
                  clone.dateOfRegistrationText = date;
                  this.setState ({vehicles: clone});
                }}
                showError={this.state.vehicles.showDateOfRegistrationError}
                errorText="Expiration Date Cannot Be From Future"
              />

              <View style={styles.verticalSpace} />
              <FormLabel label="" />
              <Form
                value={this.state.vehicles.brandText}
                callback={text => {
                  const clone = this.state.vehicles;
                  clone.brandText = text;
                  this.setState ({vehicles: clone});
                  if (text.length === 0) {
                    clone.showBrandError = true;
                    this.setState ({vehicles: clone});
                  } else {
                    clone.showBrandError = false;

                    this.setState ({vehicles: clone});
                  }
                }}
                onFocus={isRequired => {
                  if (this.state.vehicles.brandText.length === 0) {
                    const clone = this.state.vehicles;
                    clone.showBrandError = true;
                    this.setState ({vehicles: clone});
                  } else {
                    const clone = this.state.vehicles;
                    clone.showBrandError = false;

                    this.setState ({vehicles: clone});
                  }
                }}
                showError={this.state.vehicles.showBrandError}
                errorText={'Brand Should Not Be Empty'}
                placeholder={"Enter Brand"}
              />

              <FormLabel label="Upload Image" />
              <UploadButton
                showError={this.state.vehicles.showImageUriError}
                errorText="You must upload image"
                onUriReceived={uri => {
                  const clone = this.state.vehicles;
                  if (uri != null && uri != undefined && uri.length != 0) {
                    clone.imageUri = uri;
                    clone.showImageUriError = false;
                    this.setState ({vehicles: clone});
                  } else {
                    clone.imageUri = '';
                    clone.showImageUriError = true;
                    this.setState ({vehicles: clone});
                  }
                }}
              />

              <FormLabel label="" />
              <Form
                value={this.state.vehicles.modelText}
                callback={text => {
                  const clone = this.state.vehicles;
                  clone.modelText = text;
                  this.setState ({vehicles: clone});
                  if (text.length === 0) {
                    clone.showModelError = true;
                    this.setState ({vehicles: clone});
                  } else {
                    clone.showModelError = false;

                    this.setState ({vehicles: clone});
                  }
                }}
                onFocus={isRequired => {
                  if (this.state.vehicles.modelText.length === 0) {
                    const clone = this.state.vehicles;
                    clone.showModelError = true;
                    this.setState ({vehicles: clone});
                  } else {
                    const clone = this.state.vehicles;
                    clone.showModelError = false;

                    this.setState ({vehicles: clone});
                  }
                }}
                showError={this.state.vehicles.showModelError}
                errorText={'Model Should Not Be Empty'}
                placeholder={"Enter Model"}
              />

              <FormLabel label="Gearbox" />

              <Dropdown
                values={this.state.gearboxValues}
                selectedValue={this.state.vehicles.gerBoxSelectedValue}
                callback={(itemValue, itemIndex) => {
                  const clone = this.state.vehicles;
                  clone.gerBoxSelectedValue = itemValue;
                  clone.gaerBoxSelectedIndex = itemIndex;
                  this.setState ({
                    vehicles: clone,
                  });
                }}
              />

              <FormLabel label="Upload Vehicle Registration Certificate" />
              <UploadButton
                showError={this.state.vehicles.showRegistrationUriError}
                errorText="You must upload image"
                onUriReceived={uri => {
                  const clone = this.state.vehicles;
                  if (uri != null && uri != undefined && uri.length != 0) {
                    clone.registrationUri = uri;
                    clone.showRegistrationUriError = false;
                    this.setState ({vehicles: clone});
                  } else {
                    clone.registrationUri = '';
                    clone.showRegistrationUriError = true;
                    this.setState ({vehicles: clone});
                  }
                }}
              />

              <FormLabel label="" />
              <Form
                value={this.state.vehicles.colorText}
                callback={text => {
                  const clone = this.state.vehicles;
                  clone.colorText = text;
                  this.setState ({vehicles: clone});
                  if (text.length === 0) {
                    clone.showColorError = true;
                    this.setState ({vehicles: clone});
                  } else {
                    clone.showColorError = false;

                    this.setState ({vehicles: clone});
                  }
                }}
                onFocus={isRequired => {
                  if (this.state.vehicles.colorText.length === 0) {
                    const clone = this.state.vehicles;
                    clone.showColorError = true;
                    this.setState ({vehicles: clone});
                  } else {
                    const clone = this.state.vehicles;
                    clone.showColorError = false;

                    this.setState ({vehicles: clone});
                  }
                }}
                showError={this.state.vehicles.showColorError}
                errorText={'Colors Should Not Be Empty'}
                placeholder={"Enter Color"}
              />

              <FormLabel label="Energy" />

              <Dropdown
                values={this.state.energyValues}
                selectedValue={this.state.vehicles.energySelectedValue}
                callback={(itemValue, itemIndex) => {
                  const clone = this.state.vehicles;
                  clone.energySelectedValue = itemValue;
                  clone.energySelectedIndex = itemIndex;
                  this.setState ({
                    vehicles: clone,
                  });
                }}
              />

              <FormHeading heading="Vehicle Insurance" />

              <FormLabel label="" />
              <Form
                value={this.state.vehicles.insurerText}
                callback={text => {
                  const clone = this.state.vehicles;
                  clone.insurerText = text;
                  this.setState ({vehicles: clone});
                  if (text.length === 0) {
                    clone.showInsurerError = true;
                    this.setState ({vehicles: clone});
                  } else {
                    clone.showInsurerError = false;

                    this.setState ({vehicles: clone});
                  }
                }}
                onFocus={isRequired => {
                  if (this.state.vehicles.insurerText.length === 0) {
                    const clone = this.state.vehicles;
                    clone.showInsurerError = true;
                    this.setState ({vehicles: clone});
                  } else {
                    const clone = this.state.vehicles;
                    clone.showInsurerError = false;

                    this.setState ({vehicles: clone});
                  }
                }}
                showError={this.state.vehicles.showInsurerError}
                errorText={'Insurer Should Not Be Empty'}
                placeholder={"Enter Insurer"}
              />

              <FormLabel label="" />
              <Form
                value={this.state.vehicles.policeNumberText}
                callback={text => {
                  const clone = this.state.vehicles;
                  clone.policeNumberText = text;
                  this.setState ({vehicles: clone});
                  if (text.length === 0) {
                    clone.showPoliceNumberError = true;
                    this.setState ({vehicles: clone});
                  } else {
                    clone.showPoliceNumberError = false;

                    this.setState ({vehicles: clone});
                  }
                }}
                formType="numeric"
                onFocus={isRequired => {
                  if (this.state.vehicles.policeNumberText.length === 0) {
                    const clone = this.state.vehicles;
                    clone.showPoliceNumberError = true;
                    this.setState ({vehicles: clone});
                  } else {
                    const clone = this.state.vehicles;
                    clone.showPoliceNumberError = false;

                    this.setState ({vehicles: clone});
                  }
                }}
                showError={this.state.vehicles.showPoliceNumberError}
                errorText={'Police Number Should Not Be Empty'}
                placeholder={"Enter Police Number"}
              />

              <FormLabel label="Upload Scanned Green Card" />
              <UploadButton
                showError={this.state.vehicles.showGreenCardUriError}
                errorText="You must upload image"
                onUriReceived={uri => {
                  const clone = this.state.vehicles;
                  if (uri != null && uri != undefined && uri.length != 0) {
                    clone.greenCardUri = uri;
                    clone.showGreenCardUriError = false;
                    this.setState ({vehicles: clone});
                  } else {
                    clone.greenCardUri = '';
                    clone.showGreenCardUriError = true;
                    this.setState ({vehicles: clone});
                  }
                }}
              />

              <View style={styles.verticalSpace} />

              <FormLabel label="Start Date" />
              <CalendarInput
                date={this.state.vehicles.startDate}
                callback={date => {
                  if (isDateFuture (date)) {
                    const clone = this.state.vehicles;
                    clone.showStartDateError = true;
                    this.setState ({vehicles: clone});
                  } else {
                    const clone = this.state.vehicles;
                    clone.showStartDateError = false;
                    this.setState ({vehicles: clone});
                  }
                  const clone = this.state.vehicles;
                  clone.startDate = date;
                  this.setState ({vehicles: clone});
                }}
                showError={this.state.vehicles.showStartDateError}
                errorText="Date Cannot Be From Future"
              />

              <View style={styles.verticalSpace} />

              <FormLabel label="End Date" />
              <CalendarInput
                date={this.state.vehicles.endDate}
                callback={date => {
                  if (isDatePast (date)) {
                    const clone = this.state.vehicles;
                    clone.showEndDateError = true;
                    this.setState ({vehicles: clone});
                  } else {
                    const clone = this.state.vehicles;
                    clone.showEndDateError = false;
                    this.setState ({vehicles: clone});
                  }
                  const clone = this.state.vehicles;
                  clone.endDate = date;
                  this.setState ({vehicles: clone});
                }}
                showError={this.state.vehicles.showEndDateError}
                errorText="Date Cannot Be From Past"
              />

              <View style={styles.verticalSpace} />

              <FormHeading heading="Technical Control" />

              <FormLabel label="Date of Technical Control" />
              <CalendarInput
                date={this.state.vehicles.technicalControlDate}
                callback={date => {
                  if (isDateFuture (date)) {
                    const clone = this.state.vehicles;
                    clone.showTechnicalControlDateError = true;
                    this.setState ({vehicles: clone});
                  } else {
                    const clone = this.state.vehicles;
                    clone.showTechnicalControlDateError = false;
                    this.setState ({vehicles: clone});
                  }
                  const clone = this.state.vehicles;
                  clone.technicalControlDate = date;
                  this.setState ({vehicles: clone});
                }}
                showError={this.state.vehicles.showTechnicalControlDateError}
                errorText="Date Cannot Be From Future"
              />

              <View style={styles.verticalSpace} />

              <FormLabel label="End Date" />
              <CalendarInput
                date={this.state.vehicles.technicalControlEndDate}
                callback={date => {
                  if (isDatePast (date)) {
                    const clone = this.state.vehicles;
                    clone.showTechnicalControlEndDateError = true;
                    this.setState ({vehicles: clone});
                  } else {
                    const clone = this.state.vehicles;
                    clone.showTechnicalControlEndDateError = false;
                    this.setState ({vehicles: clone});
                  }
                  const clone = this.state.vehicles;
                  clone.technicalControlEndDate = date;
                  this.setState ({vehicles: clone});
                }}
                showError={this.state.vehicles.showTechnicalControlEndDateError}
                errorText="Date Cannot Be From Past"
              />
              <View style={styles.verticalSpace} />
              <FormLabel label="Scan and upload your CT" />
              <UploadButton
                showError={this.state.vehicles.showCtUriError}
                errorText="You must upload image"
                onUriReceived={uri => {
                  const clone = this.state.vehicles;
                  if (uri != null && uri != undefined && uri.length != 0) {
                    clone.ctUri = uri;
                    clone.showCtUriError = false;
                    this.setState ({vehicles: clone});
                  } else {
                    clone.ctUri = '';
                    clone.showCtUriError = true;
                    this.setState ({vehicles: clone});
                  }
                }}
              />
              <View style={styles.addButtonRow}>
                <MediumButton
                  label="Add"
                  callback={async () => {
                    await this.checkForEmptyFields ();
                    const clear = await this.areAllFieldsClear ();
                    if (clear) {
                      const vehiclesClone = this.state.vehicles;
                      const cardClone = this.state.cards;

                      if (vehiclesClone != null) {
                        cardClone.push (vehiclesClone);
                        // const model = new DataModel ();
                        // vehiclesClone.push (model.dataModel);
                        await this.setState ({
                          cards: cardClone,
                          vehicles: null,
                          addClicked: !this.state.addClicked,
                        });
                      }
                    }
                  }}
                />
              </View>
            </View>
          : null}

        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.showModal}
          onRequestClose={() => {
            Alert.alert ('Modal has been closed.');
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              {this.state.modalData.length != 0
                ? this.renderModalView ()
                : null}
            </View>
          </View>
        </Modal>

        <View style={styles.buttonRow}>
          <MediumButton
            label="Back"
            showIconLeft={true}
            leftIcon={require ('../../../../res/images/back.png')}
            callback={() => {
              this.props.onClickPrevious ();
            }}
          />
          <MediumButton
            label="Next"
            showIconRight={true}
            rightIcon={require ('../../../../res/images/forward.png')}
            callback={async () => {
              if (this.state.cards != null && this.state.cards.length > 0)
                this.props.onClickNext ();
              else Toast.show ('You Must Register A Vehicle');
            }}
          />

        </View>

      </View>
    );
  }

  checkForModalEmptyFields = () => {
    if (this.state.modalData.brandText.length === 0) {
      const copy = this.state.modalData;
      copy.showBrandError = true;
      this.setState ({modalData: copy});
    } else {
      const copy = this.state.modalData;
      copy.showBrandError = false;
      this.setState ({modalData: copy});
    }

    if (this.state.modalData.imageUri.length === 0) {
      const copy = this.state.modalData;
      copy.showImageUriError = true;
      this.setState ({modalData: copy});
    } else {
      const copy = this.state.modalData;
      copy.showImageUriError = false;
      this.setState ({modalData: copy});
    }

    if (this.state.modalData.modelText.length === 0) {
      const copy = this.state.modalData;
      copy.showModelError = true;
      this.setState ({modalData: copy});
    } else {
      const copy = this.state.modalData;
      copy.showModelError = false;
      this.setState ({modalData: copy});
    }

    if (this.state.modalData.registrationUri.length === 0) {
      const copy = this.state.modalData;
      copy.showRegistrationUriError = true;
      this.setState ({modalData: copy});
    } else {
      const copy = this.state.modalData;
      copy.showRegistrationUriError = false;
      this.setState ({modalData: copy});
    }

    if (this.state.modalData.colorText.length === 0) {
      const copy = this.state.modalData;
      copy.showColorError = true;
      this.setState ({modalData: copy});
    } else {
      const copy = this.state.modalData;
      copy.showColorError = false;
      this.setState ({modalData: copy});
    }

    if (this.state.modalData.insurerText.length === 0) {
      const copy = this.state.modalData;
      copy.showInsurerError = true;
      this.setState ({modalData: copy});
    } else {
      const copy = this.state.modalData;
      copy.showInsurerError = false;
      this.setState ({modalData: copy});
    }

    if (this.state.modalData.policeNumberText.length === 0) {
      const copy = this.state.modalData;
      copy.showPoliceNumberError = true;
      this.setState ({modalData: copy});
    } else {
      const copy = this.state.modalData;
      copy.showPoliceNumberError = false;
      this.setState ({modalData: copy});
    }

    if (this.state.modalData.greenCardUri.length === 0) {
      const copy = this.state.modalData;
      copy.showGreenCardUriError = true;
      this.setState ({modalData: copy});
    } else {
      const copy = this.state.modalData;
      copy.showGreenCardUriError = false;
      this.setState ({modalData: copy});
    }

    if (this.state.modalData.ctUri.length === 0) {
      const copy = this.state.modalData;
      copy.showCtUriError = true;
      this.setState ({modalData: copy});
    } else {
      const copy = this.state.modalData;
      copy.showCtUriError = false;
      this.setState ({modalData: copy});
    }
  };

  areAllModalFieldsClear = () => {
    const {orderStore} = Store;

    orderStore.school.vehicle.modal = this.state.modalData;
    if (
      !this.state.modalData.showBrandError &&
      !this.state.modalData.showImageUriError &&
      !this.state.modalData.showModelError &&
      !this.state.modalData.showDateOfRegistrationError &&
      !this.state.modalData.showRegistrationUriError &&
      !this.state.modalData.showColorError &&
      !this.state.modalData.showInsurerError &&
      !this.state.modalData.showPoliceNumberError &&
      !this.state.modalData.showGreenCardUriError &&
      !this.state.modalData.showCtUriError
    ) {
      Toast.show ('You May Proceed (Debud Text)');
      return true;
    } else Toast.show ('Fill all the required fields (Debud Text)');

    return false;
  };

  checkForEmptyFields = () => {
    if (this.state.vehicles.brandText.length === 0) {
      const copy = this.state.vehicles;
      copy.showBrandError = true;
      this.setState ({vehicles: copy});
    } else {
      const copy = this.state.vehicles;
      copy.showBrandError = false;
      this.setState ({vehicles: copy});
    }

    if (this.state.vehicles.imageUri.length === 0) {
      const copy = this.state.vehicles;
      copy.showImageUriError = true;
      this.setState ({vehicles: copy});
    } else {
      const copy = this.state.vehicles;
      copy.showImageUriError = false;
      this.setState ({vehicles: copy});
    }

    if (this.state.vehicles.modelText.length === 0) {
      const copy = this.state.vehicles;
      copy.showModelError = true;
      this.setState ({vehicles: copy});
    } else {
      const copy = this.state.vehicles;
      copy.showModelError = false;
      this.setState ({vehicles: copy});
    }

    if (this.state.vehicles.registrationUri.length === 0) {
      const copy = this.state.vehicles;
      copy.showRegistrationUriError = true;
      this.setState ({vehicles: copy});
    } else {
      const copy = this.state.vehicles;
      copy.showRegistrationUriError = false;
      this.setState ({vehicles: copy});
    }

    if (this.state.vehicles.colorText.length === 0) {
      const copy = this.state.vehicles;
      copy.showColorError = true;
      this.setState ({vehicles: copy});
    } else {
      const copy = this.state.vehicles;
      copy.showColorError = false;
      this.setState ({vehicles: copy});
    }

    if (this.state.vehicles.insurerText.length === 0) {
      const copy = this.state.vehicles;
      copy.showInsurerError = true;
      this.setState ({vehicles: copy});
    } else {
      const copy = this.state.vehicles;
      copy.showInsurerError = false;
      this.setState ({vehicles: copy});
    }

    if (this.state.vehicles.policeNumberText.length === 0) {
      const copy = this.state.vehicles;
      copy.showPoliceNumberError = true;
      this.setState ({vehicles: copy});
    } else {
      const copy = this.state.vehicles;
      copy.showPoliceNumberError = false;
      this.setState ({vehicles: copy});
    }

    if (this.state.vehicles.greenCardUri.length === 0) {
      const copy = this.state.vehicles;
      copy.showGreenCardUriError = true;
      this.setState ({vehicles: copy});
    } else {
      const copy = this.state.vehicles;
      copy.showGreenCardUriError = false;
      this.setState ({vehicles: copy});
    }

    if (this.state.vehicles.ctUri.length === 0) {
      const copy = this.state.vehicles;
      copy.showCtUriError = true;
      this.setState ({vehicles: copy});
    } else {
      const copy = this.state.vehicles;
      copy.showCtUriError = false;
      this.setState ({vehicles: copy});
    }
  };

  areAllFieldsClear = () => {
    const {orderStore} = Store;
    // orderStore.school.insurance.insurerText = this.state.insurerText;
    // orderStore.school.insurance.policeNumberText = this.state.policeNumberText;
    // orderStore.school.insurance.insuranceExpirationDate = this.state.insuranceExpirationDate;
    // orderStore.school.insurance.rcUri = this.state.rcUri;
    orderStore.school.vehicle.vehicle = this.state.vehicles;
    if (
      !this.state.vehicles.showBrandError &&
      !this.state.vehicles.showImageUriError &&
      !this.state.vehicles.showModelError &&
      !this.state.vehicles.showDateOfRegistrationError &&
      !this.state.vehicles.showRegistrationUriError &&
      !this.state.vehicles.showColorError &&
      !this.state.vehicles.showInsurerError &&
      !this.state.vehicles.showPoliceNumberError &&
      !this.state.vehicles.showGreenCardUriError &&
      !this.state.vehicles.showCtUriError
    ) {
      // console.warn('\n'+this.state.vehicles.showBrandError+'\n');
      // console.warn(this.state.vehicles.showImageUriError+'\n');
      // console.warn(this.state.vehicles.showModelError+'\n');
      // console.warn(this.state.vehicles.showDateOfRegistrationError+'\n');
      // console.warn(this.state.vehicles.showRegistrationUriError+'\n');
      // console.warn(+'\n');
      // console.warn(+'\n');
      // console.warn(+'\n');
      // console.warn(+'\n');
      // console.warn(+'\n');
      Toast.show ('You May Proceed (Debud Text)');
      return true;
    } else Toast.show ('Fill all the required fields (Debud Text)');

    return false;
  };

  renderModalView = (index = 0) => {
    return (
      <ScrollView>
        <View>

          <View style={styles.modalCrossRow}>
            <TouchableOpacity
              onPress={() => this.setState ({showModal: false})}
            >
              <Image
                style={styles.modalImage}
                source={require ('../../../../res/images/cross.png')}
              />
            </TouchableOpacity>

          </View>

          <View>

            <FormHeading heading="Vehicle Details" />

            <FormLabel label="Date of the 1st Registration" />
            <CalendarInput
              date={this.state.modalData.dateOfRegistrationText}
              callback={date => {
                if (isDateFuture (date)) {
                  const clone = this.state.modalData;
                  clone.showDateOfRegistrationError = true;
                  this.setState ({modalData: clone});
                } else {
                  const clone = this.state.modalData;
                  clone.showDateOfRegistrationError = false;
                  this.setState ({modalData: clone});
                }
                const clone = this.state.modalData;
                clone.dateOfRegistrationText = date;
                this.setState ({modalData: clone});
              }}
              showError={this.state.modalData.showDateOfRegistrationError}
              errorText="Expiration Date Cannot Be From Future"
            />

            <View style={styles.verticalSpace} />
            <FormLabel label="Brand" />
            <Form
              value={this.state.modalData.brandText}
              callback={text => {
                const clone = this.state.modalData;
                clone.brandText = text;
                this.setState ({modalData: clone});
                if (text.length === 0) {
                  clone.showBrandError = true;
                  this.setState ({modalData: clone});
                } else {
                  clone.showBrandError = false;

                  this.setState ({modalData: clone});
                }
              }}
              onFocus={isRequired => {
                if (this.state.modalData.brandText.length === 0) {
                  const clone = this.state.modalData;
                  clone.showBrandError = true;
                  this.setState ({modalData: clone});
                } else {
                  const clone = this.state.modalData;
                  clone.showBrandError = false;

                  this.setState ({modalData: clone});
                }
              }}
              showError={this.state.modalData.showBrandError}
              errorText={'Brand Should Not Be Empty'}
            />

            <FormLabel label="Upload Image" />
            <UploadButton
              showError={this.state.modalData.showImageUriError}
              errorText="You must upload image"
              onUriReceived={uri => {
                const clone = this.state.modalData;
                if (uri != null && uri != undefined && uri.length != 0) {
                  clone.imageUri = uri;
                  clone.showImageUriError = false;
                  this.setState ({modalData: clone});
                } else {
                  clone.imageUri = '';
                  clone.showImageUriError = true;
                  this.setState ({modalData: clone});
                }
              }}
            />

            <FormLabel label="Model" />
            <Form
              value={this.state.modalData.modelText}
              callback={text => {
                const clone = this.state.modalData;
                clone.modelText = text;
                this.setState ({modalData: clone});
                if (text.length === 0) {
                  clone.showModelError = true;
                  this.setState ({modalData: clone});
                } else {
                  clone.showModelError = false;

                  this.setState ({modalData: clone});
                }
              }}
              onFocus={isRequired => {
                if (this.state.modalData.modelText.length === 0) {
                  const clone = this.state.modalData;
                  clone.showModelError = true;
                  this.setState ({modalData: clone});
                } else {
                  const clone = this.state.modalData;
                  clone.showModelError = false;

                  this.setState ({modalData: clone});
                }
              }}
              showError={this.state.modalData.showModelError}
              errorText={'Model Should Not Be Empty'}
            />

            <FormLabel label="Gearbox" />

            <Dropdown
              values={this.state.gearboxValues}
              selectedValue={this.state.modalData.gerBoxSelectedValue}
              callback={(itemValue, itemIndex) => {
                const clone = this.state.modalData;
                clone.gerBoxSelectedValue = itemValue;
                clone.gaerBoxSelectedIndex = itemIndex;
                this.setState ({
                  modalData: clone,
                });
              }}
            />

            <FormLabel label="Upload Vehicle Registration Certificate" />
            <UploadButton
              showError={this.state.modalData.showRegistrationUriError}
              errorText="You must upload image"
              onUriReceived={uri => {
                const clone = this.state.modalData;
                if (uri != null && uri != undefined && uri.length != 0) {
                  clone.registrationUri = uri;
                  clone.showRegistrationUriError = false;
                  this.setState ({modalData: clone});
                } else {
                  clone.registrationUri = '';
                  clone.showRegistrationUriError = true;
                  this.setState ({modalData: clone});
                }
              }}
            />

            <FormLabel label="Color" />
            <Form
              value={this.state.modalData.colorText}
              callback={text => {
                const clone = this.state.modalData;
                clone.colorText = text;
                this.setState ({modalData: clone});
                if (text.length === 0) {
                  clone.showColorError = true;
                  this.setState ({modalData: clone});
                } else {
                  clone.showColorError = false;

                  this.setState ({modalData: clone});
                }
              }}
              onFocus={isRequired => {
                if (this.state.modalData.colorText.length === 0) {
                  const clone = this.state.modalData;
                  clone.showColorError = true;
                  this.setState ({modalData: clone});
                } else {
                  const clone = this.state.modalData;
                  clone.showColorError = false;

                  this.setState ({modalData: clone});
                }
              }}
              showError={this.state.modalData.showColorError}
              errorText={'Colors Should Not Be Empty'}
            />

            <FormLabel label="Energy" />

            <Dropdown
              values={this.state.energyValues}
              selectedValue={this.state.modalData.energySelectedValue}
              callback={(itemValue, itemIndex) => {
                const clone = this.state.modalData;
                clone.energySelectedValue = itemValue;
                clone.energySelectedIndex = itemIndex;
                this.setState ({
                  modalData: clone,
                });
              }}
            />

            <FormHeading heading="Vehicle Insurance" />

            <FormLabel label="Insurer" />
            <Form
              value={this.state.modalData.insurerText}
              callback={text => {
                const clone = this.state.modalData;
                clone.insurerText = text;
                this.setState ({modalData: clone});
                if (text.length === 0) {
                  clone.showInsurerError = true;
                  this.setState ({modalData: clone});
                } else {
                  clone.showInsurerError = false;

                  this.setState ({modalData: clone});
                }
              }}
              onFocus={isRequired => {
                if (this.state.modalData.insurerText.length === 0) {
                  const clone = this.state.modalData;
                  clone.showInsurerError = true;
                  this.setState ({modalData: clone});
                } else {
                  const clone = this.state.modalData;
                  clone.showInsurerError = false;

                  this.setState ({modalData: clone});
                }
              }}
              showError={this.state.modalData.showInsurerError}
              errorText={'Insurer Should Not Be Empty'}
            />

            <FormLabel label="Police Number" />
            <Form
              value={this.state.modalData.policeNumberText}
              callback={text => {
                const clone = this.state.modalData;
                clone.policeNumberText = text;
                this.setState ({modalData: clone});
                if (text.length === 0) {
                  clone.showPoliceNumberError = true;
                  this.setState ({modalData: clone});
                } else {
                  clone.showPoliceNumberError = false;

                  this.setState ({modalData: clone});
                }
              }}
              formType="numeric"
              onFocus={isRequired => {
                if (this.state.modalData.policeNumberText.length === 0) {
                  const clone = this.state.modalData;
                  clone.showPoliceNumberError = true;
                  this.setState ({modalData: clone});
                } else {
                  const clone = this.state.modalData;
                  clone.showPoliceNumberError = false;

                  this.setState ({modalData: clone});
                }
              }}
              showError={this.state.modalData.showPoliceNumberError}
              errorText={'Police Number Should Not Be Empty'}
            />

            <FormLabel label="Upload Scanned Green Card" />
            <UploadButton
              showError={this.state.modalData.showGreenCardUriError}
              errorText="You must upload image"
              onUriReceived={uri => {
                const clone = this.state.modalData;
                if (uri != null && uri != undefined && uri.length != 0) {
                  clone.greenCardUri = uri;
                  clone.showGreenCardUriError = false;
                  this.setState ({modalData: clone});
                } else {
                  clone.greenCardUri = '';
                  clone.showGreenCardUriError = true;
                  this.setState ({modalData: clone});
                }
              }}
            />

            <View style={styles.verticalSpace} />

            <FormLabel label="Start Date" />
            <CalendarInput
              date={this.state.modalData.startDate}
              callback={date => {
                if (isDateFuture (date)) {
                  const clone = this.state.modalData;
                  clone.showStartDateError = true;
                  this.setState ({modalData: clone});
                } else {
                  const clone = this.state.modalData;
                  clone.showStartDateError = false;
                  this.setState ({modalData: clone});
                }
                const clone = this.state.modalData;
                clone.startDate = date;
                this.setState ({modalData: clone});
              }}
              showError={this.state.modalData.showStartDateError}
              errorText="Date Cannot Be From Future"
            />

            <View style={styles.verticalSpace} />

            <FormLabel label="End Date" />
            <CalendarInput
              date={this.state.modalData.endDate}
              callback={date => {
                if (isDatePast (date)) {
                  const clone = this.state.modalData;
                  clone.showEndDateError = true;
                  this.setState ({modalData: clone});
                } else {
                  const clone = this.state.modalData;
                  clone.showEndDateError = false;
                  this.setState ({modalData: clone});
                }
                const clone = this.state.modalData;
                clone.endDate = date;
                this.setState ({modalData: clone});
              }}
              showError={this.state.modalData.showEndDateError}
              errorText="Date Cannot Be From Past"
            />

            <View style={styles.verticalSpace} />

            <FormHeading heading="Technical Control" />

            <FormLabel label="Date of Technical Control" />
            <CalendarInput
              date={this.state.modalData.technicalControlDate}
              callback={date => {
                if (isDateFuture (date)) {
                  const clone = this.state.modalData;
                  clone.showTechnicalControlDateError = true;
                  this.setState ({modalData: clone});
                } else {
                  const clone = this.state.modalData;
                  clone.showTechnicalControlDateError = false;
                  this.setState ({modalData: clone});
                }
                const clone = this.state.modalData;
                clone.technicalControlDate = date;
                this.setState ({modalData: clone});
              }}
              showError={this.state.modalData.showTechnicalControlDateError}
              errorText="Date Cannot Be From Future"
            />

            <View style={styles.verticalSpace} />

            <FormLabel label="End Date" />
            <CalendarInput
              date={this.state.modalData.technicalControlEndDate}
              callback={date => {
                if (isDatePast (date)) {
                  const clone = this.state.modalData;
                  clone.showTechnicalControlEndDateError = true;
                  this.setState ({modalData: clone});
                } else {
                  const clone = this.state.modalData;
                  clone.showTechnicalControlEndDateError = false;
                  this.setState ({modalData: clone});
                }
                const clone = this.state.modalData;
                clone.technicalControlEndDate = date;
                this.setState ({modalData: clone});
              }}
              showError={this.state.modalData.showTechnicalControlEndDateError}
              errorText="Date Cannot Be From Past"
            />
            <View style={styles.verticalSpace} />
            <FormLabel label="Scan and upload your CT" />
            <UploadButton
              showError={this.state.modalData.showCtUriError}
              errorText="You must upload image"
              onUriReceived={uri => {
                const clone = this.state.modalData;
                if (uri != null && uri != undefined && uri.length != 0) {
                  clone.ctUri = uri;
                  clone.showCtUriError = false;
                  this.setState ({modalData: clone});
                } else {
                  clone.ctUri = '';
                  clone.showCtUriError = true;
                  this.setState ({modalData: clone});
                }
              }}
            />
            <View style={styles.addButtonRow}>
              <MediumButton
                label="Close"
                callback={() => this.setState ({showModal: false})}
              />
              <MediumButton
                label="Confrim"
                callback={async () => {
                  await this.checkForModalEmptyFields ();
                  const clear = await this.areAllModalFieldsClear ();
                  if (clear) {
                    const cardClone = [...this.state.cards];
                    cardClone[this.state.modalIndex] = this.state.modalData;
                    this.setState ({cards: cardClone});
                  }
                }}
              />
            </View>

          </View>

        </View>
      </ScrollView>
    );
  };
}

const styles = StyleSheet.create ({
  verticalSpace: {
    marginTop: margins.verticalSpace,
  },
  addButtonRow: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-end',
  },
  modalView: {
    backgroundColor: 'white',
    padding: 35,
    width: '95%',
    alignItems: 'center',
    shadowColor: '#000',
    alignSelf: 'center',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  modalCrossRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  modalImage: {
    width: 15,
    height: 15,
    tintColor: 'black',
    resizeMode: 'center',
  },
  buttonRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  addFormButtonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
  },
});
