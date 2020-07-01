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
import DatePicker from 'react-native-datepicker';
import {colors, margins, paddings} from '../../globals/styles';
import {RFValue} from 'react-native-responsive-fontsize';
import MyLearningData from '../../data/MyLearningData';
import DrawerHeader from "../../components/DrawerHeader";

const {width, height} = Dimensions.get('window');

export default class MyLearning extends Component {

  state = {
    date: 0
  };


  render() {
    return (
      <View style={styles.container}>
        <DrawerHeader title={'My Learning'} callBack={() => {
          this.props.navigation.openDrawer()
        }}/>


        <View style={styles.filterButtonParentView}>
          <TouchableOpacity>
            <View style={styles.filterButtonView}>
              <Text style={styles.filterButtonText}>I-Master</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.filterButtonView}>
              <Text style={styles.filterButtonText}>II-Apprehend</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.filterButtonView}>
              <Text style={styles.filterButtonText}>III-Driving</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.filterButtonView}>
              <Text style={styles.filterButtonText}>IV-Practice</Text>
            </View>
          </TouchableOpacity>
        </View>


        <View style={styles.requestTitleParentView}>
          <View style={{width: width * 0.2}}>
            <Text style={styles.requestTitleText}>Acquired</Text>
          </View>
          <View style={{width: width * 0.2}}>
            <Text style={styles.requestTitleText}>Wording</Text>
          </View>
          <View style={{width: width * 0.2}}>
            <Text style={styles.requestTitleText}>Comments</Text>
          </View>

        </View>

        <ScrollView>
          <View style={styles.requestParentView}>


            <FlatList data={MyLearningData} renderItem={({item, index}) => {

              return (
                <View>
                  {

                    <View style={{
                      flexDirection: 'row',
                      padding: 10,
                      backgroundColor: index % 2 === 0 ? '#F0F0F2' : '#FFFFFF',
                      borderWidth: 1,
                      borderColor: '#F0F0F2',
                      justifyContent: 'space-around',
                      alignItems: 'center'
                    }}>
                      <View style={{width: width * 0.2,  flexDirection: 'row', justifyContent: 'space-around'}}>
                        {/*<Text style={{flexShrink: 1}}>{item.acquired}</Text>*/}
                        <View style={{backgroundColor: item.acquired === 'red' ? 'red' : 'transparent', width: width*0.04, height: width*0.04, borderRadius: 20, borderWidth: 3, borderColor: 'red'}}/>
                        <View style={{backgroundColor: item.acquired === 'yellow' ? 'yellow' : 'transparent', width: width*0.04, height: width*0.04, borderRadius: 20, borderWidth: 3, borderColor: 'yellow'}}/>
                        <View style={{backgroundColor: item.acquired === 'green' ? 'green' : 'transparent', width: width*0.04, height: width*0.04, borderRadius: 20, borderWidth: 3, borderColor: 'green'}}/>
                      </View>
                      <View style={{width: width * 0.2}}>
                        <Text style={{flexShrink: 1}}>{item.wording}</Text>
                      </View>
                      <View style={{width: width * 0.2, justifyContent: 'center', alignItems: 'center'}}>
                        <Image source={require('../../../res/images/comment.png')} style={{resizeMode: 'contain', width: width*0.05, height:width*0.05}}/>
                      </View>

                    </View>
                  }
                </View>
              );
              // }
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
  requestParentView: {
    justifyContent: 'center',
    width: width,
    padding: width * 0.05,
  },
  requestTitleText: {
    fontWeight: '700'
  },
  requestTitleParentView: {
    flexDirection: 'row',
    marginTop: width * 0.07,
    justifyContent: 'space-around',
    width: width * 0.95,
    paddingHorizontal: width * 0.05,
  },
  filterButtonParentView: {
    width: width*0.95,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',


  },
  filterButtonText: {
    color: '#FFFFFF',
    fontSize: RFValue('10')
  },
  filterButtonView: {
    backgroundColor: '#149E7A',
    paddingHorizontal: width * 0.04,
    paddingVertical: width * 0.02,
    borderRadius: 10,
    width: width * 0.23,
    alignItems: 'center',
    elevation: 2,
    marginTop: width*0.1,
    justifyContent: 'center',
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
  },
  titleOfPageText: {
    fontWeight: '700',
    marginTop: width * 0.05,
    fontSize: RFValue('25')
  },
  datePickerView: {
    flexDirection: 'row',
    width: width * 0.9,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: width * 0.05
  }


});
