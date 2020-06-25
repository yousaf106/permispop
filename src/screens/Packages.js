import React, {Component} from 'react';
import {View, StyleSheet, ScrollView, Text, TouchableOpacity, FlatList, Dimensions} from 'react-native';
import {colors, margins, paddings} from '../globals/styles';
import Form from '../components/FormInput';
import CalandarInput from '../components/CalendarInput';
import Dropdown from '../components/DropdownInput';
import UploadAvatar from '../components/UploadAvatar';
import FormLabel from '../components/FormLabel';
import UploadButton from '../components/UploadButton';
import {RFValue} from 'react-native-responsive-fontsize';
import CheckBoxInput from '../components/CheckBoxInput';
import FormButton from '../components/FormButton';
import Toast from 'react-native-simple-toast';
import PackagesData from '../data/PackagesData';
import LinearGradieant from 'react-native-linear-gradient';


const {width, height} = Dimensions.get('window');

export default class Packages extends Component {

  state = {
    packageType: '',
    packagePrice: 0
  }

  render() {
    return (
      <View style={styles.container}>

          <Text style={styles.titlePackage}>Select a Suitable Package</Text>
          <FlatList style={{width: width}} contentContainerStyle={{alignItems: 'center', justifyContent: 'center'}} data={PackagesData} renderItem={({item, index}) => {
            return (
              <TouchableOpacity onPress={() => {
                this.setState({packageType: item.type, packagePrice: item.price}, () => {
                  console.warn(this.state);
                });
              }}>
                <LinearGradieant colors={['rgba(29,155,99,1)', 'rgba(131,183,76,0.6)']} style={styles.lgView}>
                  <View>
                    <Text style={styles.packageTypeText}>{item.type}</Text>
                  </View>
                  <View
                    style={styles.packagePriceView}>
                    <Text style={styles.packagePriceText}>€ {item.price}</Text>
                  </View>
                </LinearGradieant>
              </TouchableOpacity>
            )
          }}/>
          <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('navigationDrawer');
          }}>
            <Text>Drawer Home</Text>
          </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingStart: paddings.horizontalPadding,
    paddingEnd: paddings.horizontalPadding,
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'

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
  }


});
