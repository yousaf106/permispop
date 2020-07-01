import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  FlatList,
  Dimensions,
} from 'react-native';
import {colors, margins, paddings} from '../../globals/styles';
import {RFValue} from 'react-native-responsive-fontsize';
import DisputesData from '../../data/DisputesData';
import DrawerHeader from "../../components/DrawerHeader";


const {width, height} = Dimensions.get('window');

export default class Disputes extends Component {

  render() {
    return (
      <View style={styles.container}>
        <DrawerHeader title={'Disputes'} callBack={() => {this.props.navigation.openDrawer()}}/>

        <View style={styles.disputesTitleView}>
          <Text style={styles.disputesTitleName}>Dispute</Text>
          <Text style={styles.disputesTitleName}>Date</Text>
          <Text style={styles.disputesTitleName}>Dispute From</Text>
        </View>

        <ScrollView>
          <View style={styles.disputesListParentView}>
            <FlatList data={DisputesData} renderItem={({item, index}) => {
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
                      <Text style={styles.disputeText}>{item.dispute}</Text>
                      <Text style={styles.dateText}>{item.date}</Text>
                      <View style={styles.disputeFromView}>
                        <Text style={styles.disputeFromText}>{item.disputeFrom}</Text>
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
  disputeFromText: {
    color: '#FFFFFF',
    fontSize: RFValue('16')
  },
  disputeFromView: {
    backgroundColor: '#149E7A',
    paddingHorizontal: width * 0.04,
    paddingVertical: width * 0.02,
    borderRadius: 10
  },
  dateText: {
    fontSize: RFValue('16')
  },
  disputeText: {
    width: width * 0.22,
    fontSize: RFValue('16')
  },
  disputesListParentView: {
    justifyContent: 'center',
    width: width,
    padding: width * 0.05,
  },
  disputesTitleName: {
    fontWeight: '700'
  },
  disputesTitleView: {
    flexDirection: 'row',
    marginTop: width * 0.07,
    justifyContent: 'space-around',
    width: width * 0.95
  },
  titleTexts: {
    fontWeight: '700',
    marginTop: width * 0.05,
    fontSize: RFValue('25')
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
