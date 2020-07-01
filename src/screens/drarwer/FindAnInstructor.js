import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Image,
  ImageBackground,
} from 'react-native';
import {colors, margins, paddings} from '../../globals/styles';
import {RFValue} from 'react-native-responsive-fontsize';
import {Picker} from '@react-native-community/picker';
import findInstructorData from '../../data/findInstructorData'
import DrawerHeader from "../../components/DrawerHeader";


let gearBox = '';
let gender = '';
let range = 0;
let role = '';

const {width, height} = Dimensions.get('window');

export default class FindAnInstructor extends Component {

  state = {
    // gearBox: 'All',
    // gender: 'All',
    // range: 0,
    // role: 'All'
    gearBox: 'Manual',
    gender: 'Male',
    range: 0,
    role: 'Driving School'
  };

  render() {
    return (
      <View style={styles.container}>
        <DrawerHeader title={'Find an Instructor'} callBack={() => {this.props.navigation.openDrawer()}}/>
        <ScrollView>
          <View style={styles.parentView}>

            {/*GearBox*/}
            <View style={styles.selectorView}>
              <Text style={styles.filterText}>GearBox</Text>
              <View style={styles.filterPicker}>
                <Picker
                  selectedValue={gearBox}
                  style={styles.pickerView}
                  onValueChange={(itemValue, itemIndex) => {
                    gearBox = itemValue;
                    this.forceUpdate();
                  }
                  }>
                  <Picker.Item label="All" value="All"/>
                  <Picker.Item label="Automatic" value="Automatic"/>
                  <Picker.Item label="Manual" value="Manual"/>
                </Picker>
              </View>
            </View>

            {/*Gender*/}
            <View style={styles.selectorView}>
              <Text style={styles.filterText}>Gender</Text>
              <View style={styles.filterPicker}>
                <Picker
                  selectedValue={gender}
                  style={styles.pickerView}
                  onValueChange={(itemValue, itemIndex) => {
                    gender = itemValue;
                    this.forceUpdate();
                  }}>
                  <Picker.Item label="All" value="All"/>
                  <Picker.Item label="Male" value="Male"/>
                  <Picker.Item label="Female" value="Female"/>
                </Picker>
              </View>
            </View>

            {/*Range*/}
            <View style={styles.selectorView}>
              <Text style={styles.filterText}>Range</Text>
              <View style={styles.filterPicker}>
                <Picker
                  selectedValue={range}
                  style={styles.pickerView}
                  onValueChange={(itemValue, itemIndex) => {
                    range = itemValue;
                    this.forceUpdate();
                  }}>
                  <Picker.Item label="5" value={5}/>
                  <Picker.Item label="10" value={10}/>
                  <Picker.Item label="20" value={20}/>
                  <Picker.Item label="30" value={30}/>
                  <Picker.Item label="50" value={50}/>
                </Picker>
              </View>
            </View>

            <View style={styles.selectorView}>
              <Text style={styles.filterText}>Role</Text>
              <View style={styles.filterPicker}>
                <Picker
                  selectedValue={role}
                  style={styles.pickerView}
                  onValueChange={(itemValue, itemIndex) => {
                    role = itemValue;
                    this.forceUpdate();
                  }
                  }>
                  <Picker.Item label="All" value={"Role"}/>
                  <Picker.Item label="Driving School" value={"Driving School"}/>
                  <Picker.Item label="Instructor" value={"Instructor"}/>
                </Picker>
              </View>
            </View>
            <View style={styles.applyButtonView}>
              <TouchableOpacity onPress={() => {
                this.setState({
                  gearBox: gearBox,
                  gender: gender,
                  range: range,
                  role: role
                }, () => {
                  console.warn(this.state)
                })
              }}>
                <View style={styles.applyButton}>
                  <Text style={styles.applyButtonText}>Apply</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.instructorTitleView}>
              <Text style={styles.nameTitleText}>Name</Text>
              <Text style={styles.positionTitleText}>Position</Text>
            </View>
            <FlatList data={findInstructorData.filter(entry => {
              return entry.role === this.state.role && entry.gender === this.state.gender && entry.gearBox === this.state.gearBox
            })} renderItem={({item, index}) => {
              return (
                <View>
                  {
                    <View style={{
                      flexDirection: 'row',
                      padding: 10,
                      backgroundColor: index % 2 === 0 ? '#F0F0F2' : '#FFFFFF',
                      borderWidth: 1,
                      borderColor: '#F0F0F2'
                    }}>
                      <Text style={styles.instructorName}>{item.name}</Text>
                      <Text style={styles.instructorPosition}>{item.position}</Text>
                    </View>
                  }
                </View>
              );
            }}/>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // paddingStart: paddings.horizontalPadding,
    // paddingEnd: paddings.horizontalPadding,
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    alignItems: 'center'
  },
  instructorPosition: {
    fontSize: RFValue('15'),
    flexShrink: 1
  },
  instructorName: {
    width: width * 0.35,
    fontSize: RFValue('15')
  },
  positionTitleText: {
    fontWeight: '700'
  },
  nameTitleText: {
    width: width * 0.35,
    fontWeight: '700'
  },
  instructorTitleView: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  applyButtonText: {
    color: '#FFFFFF',
    fontSize: RFValue('20')
  },
  pickerView: {
    height: width * 0.1,
    width: width * 0.3,
    backgroundColor: 'transparent'
  },
  parentView: {
    justifyContent: 'center',
    width: width,
    padding: width * 0.05,
  },
  verticalSpace: {
    marginTop: margins.verticalSpace,
  },
  redText: {
    color: 'red',
    fontSize: RFValue(14),
  },

  containerImage: {
    width: '100%',
    // margin: 2,
    marginTop: margins.verticalSpace,
  },
  buttonContainer: {
    width: '100%',
    height: 50,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    paddingStart: 5,
    paddingEnd: 5,
    borderRadius: 25,
    elevation: 7
  },
  buttonText: {
    fontSize: RFValue(15),
    color: 'white',
  },
  redTextImage: {
    color: 'red',
    fontSize: RFValue(14),
    marginTop: margins.verticalSpace,
  },
  titlePackage: {
    fontSize: RFValue(30),
    marginVertical: 10
  },
  lgView: {
    backgroundColor: '#FFFFFF',
    marginVertical: 15,
    borderRadius: 20,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.7,
    height: width * 0.5,
    elevation: 7,
    position: 'relative'
  },
  packageTypeText: {
    color: "#FFFFFF",
    fontSize: RFValue(20),
    fontWeight: '700'
  },
  packagePriceView: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    padding: 10,
    borderRadius: 15,
    marginTop: 10,
    width: width * 0.6,
    height: width * 0.3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  packagePriceText: {
    fontSize: RFValue(20)
  },
  selectorView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    alignItems: 'center'
  },
  filterText: {
    fontSize: RFValue('20')
  },
  filterPicker: {
    borderWidth: 1,
    width: width * 0.38,
    borderColor: '#000000',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'green'
  },
  applyButton: {
    backgroundColor: '#149E7A',
    width: width * 0.25,
    height: width * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: width / 60,
    margin: 20
  },
  applyButtonView: {
    alignItems: 'center',
    marginTop: width * 0.05
  }


});
