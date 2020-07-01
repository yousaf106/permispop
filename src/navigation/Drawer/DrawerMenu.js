import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Dimensions, ImageBackground, Image, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {RFValue} from 'react-native-responsive-fontsize';
import ElevatedView from 'react-native-elevated-view'

const {width, height} = Dimensions.get('window');


class DrawerMenu extends Component {
  state = {
    active: 'profile'
  }

  render() {
    return (
      <View style={{flex: 1}}>

        <ImageBackground source={require('../../../res/images/login_bg.jpg')} style={{
          // width: width * 0.69,
          height: height,
          // paddingVertical: 0,
          alignItems: 'center',
          backgroundColor: 'black',
          // paddingTop: width * 0.1,
          resizeMode: 'cover',
          elevation: 20,
          opacity: 0.9,

        }}>


        <ScrollView style={styles.lgView} contentContainerStyle={{alignItems: 'center'}}>




          <TouchableOpacity onPress={() => {
            this.setState({active: 'profile'});
            this.props.navigation.navigate('Profile');

          }}>
            <ElevatedView
              elevation={this.state.active === 'profile' ? 200 : 0}
              style={{
              backgroundColor: this.state.active === "profile" ? "#FFFFFF" : 'rgba(0, 0, 0, 0.2)',
              paddingVertical: this.state.active === "profile" ? 18 : 16,
              paddingHorizontal: this.state.active === "profile" ? 14 : 14,
              width: this.state.active === 'profile' ? width * 0.679 : width * 0.679,
              borderBottomWidth: this.state.active !== 'history' ? 1 : 0,
              borderBottomColor: '#FFFFFF',
              borderTopWidth: 1,
              borderTopColor: '#FFFFFF'
            }}>

              <Text style={{
                color: this.state.active === "profile" ? '#000000' : '#FFFFFF',
                fontSize: RFValue(25),
                fontWeight: this.state.active === 'profile' ? '600' : '500'
              }}>Profile</Text>
            </ElevatedView>
          </TouchableOpacity>


          <TouchableOpacity onPress={() => {
            this.setState({active: 'history'});
            this.props.navigation.navigate('History');
          }}
          >
            <ElevatedView
              elevation={this.state.active === 'history' ? 200 : 0}
              style={{
              backgroundColor: this.state.active === "history" ? "#FFFFFF" : 'rgba(0, 0, 0, 0.2)',
              paddingVertical: this.state.active === "history" ? 18 : 16,
              paddingHorizontal: this.state.active === "history" ? 14 : 14,
              width: this.state.active === 'history' ? width * 0.679 : width * 0.679,
              borderBottomWidth: this.state.active !== 'bookings' ? 1 : 0,
              borderBottomColor: '#FFFFFF'
            }}>
              <Text style={{
                color: this.state.active === "history" ? '#000000' : '#FFFFFF',
                fontSize: RFValue(25),
                fontWeight: this.state.active === 'history' ? '600' : '500'
              }}>History</Text>
            </ElevatedView>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {
            this.setState({active: 'bookings'});
            // this.props.navigation.navigate('Notifications');
          }}
          >
            <ElevatedView
              elevation={this.state.active === 'bookings' ? 200 : 0}
              style={{
              backgroundColor: this.state.active === "bookings" ? "#FFFFFF" : 'rgba(0, 0, 0, 0.2)',
              paddingVertical: this.state.active === "bookings" ? 18 : 16,
              paddingHorizontal: this.state.active === "bookings" ? 14 : 14,
              width: this.state.active === 'bookings' ? width * 0.679 : width * 0.679,
              borderBottomWidth: this.state.active !== 'pending requests' ? 1 : 0,
              borderBottomColor: '#FFFFFF'
            }}>
              <Text style={{
                color: this.state.active === "bookings" ? '#000000' : '#FFFFFF',
                fontSize: RFValue(25),
                fontWeight: this.state.active === 'bookings' ? '600' : '500'
              }}>Bookings</Text>
            </ElevatedView>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {
            this.setState({active: 'pending requests'});
            this.props.navigation.navigate('PendingRequests');
          }}
          >
            <ElevatedView
              elevation={this.state.active === 'pending requests' ? 200 : 0}
              style={{
              backgroundColor: this.state.active === "pending requests" ? "#FFFFFF" : 'rgba(0, 0, 0, 0.2)',
              paddingVertical: this.state.active === "pending requests" ? 18 : 16,
              paddingHorizontal: this.state.active === "pending requests" ? 14 : 14,
              width: this.state.active === 'pending requests' ? width * 0.679 : width * 0.679,
              borderBottomWidth: this.state.active !== 'find an instructor' ? 1 : 0,
              borderBottomColor: '#FFFFFF'
            }}>
              <Text style={{
                color: this.state.active === "pending requests" ? '#000000' : '#FFFFFF',
                fontSize: RFValue(25),
                fontWeight: this.state.active === 'pending requests' ? '600' : '500'
              }}>Pending Requests</Text>
            </ElevatedView>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {
            this.setState({active: 'find an instructor'});
            this.props.navigation.navigate('FindAnInstructor');
          }}
          >
            <ElevatedView
              elevation={this.state.active === 'find an instructor' ? 200 : 0}
              style={{
              backgroundColor: this.state.active === "find an instructor" ? "#FFFFFF" : 'rgba(0, 0, 0, 0.2)',
              paddingVertical: this.state.active === "find an instructor" ? 18 : 16,
              paddingHorizontal: this.state.active === "find an instructor" ? 14 : 14,
              width: this.state.active === 'find an instructor' ? width * 0.679 :width * 0.679,
              borderBottomWidth: this.state.active !== 'find instructor on map' ? 1 : 0,
              borderBottomColor: '#FFFFFF'
            }}>
              <Text style={{
                color: this.state.active === "find an instructor" ? '#000000' : '#FFFFFF',
                fontSize: RFValue(25),
                fontWeight: this.state.active === 'find an instructor' ? '600' : '500'
              }}>Find An Instructor</Text>
            </ElevatedView>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {
            this.setState({active: 'find instructor on map'});
            this.props.navigation.navigate('FindInstructorOnMap');
          }}
          >
            <ElevatedView
              elevation={this.state.active === 'find instructor on map' ? 200 : 0}
              style={{
              backgroundColor: this.state.active === "find instructor on map" ? "#FFFFFF" : 'rgba(0, 0, 0, 0.2)',
              paddingVertical: this.state.active === "find instructor on map" ? 18 : 16,
              paddingHorizontal: this.state.active === "find instructor on map" ? 14 : 14,
              width: this.state.active === 'find instructor on map' ? width * 0.679 : width * 0.679,
              borderBottomWidth: 1,
              borderBottomColor: '#FFFFFF'
            }}>
              <Text style={{
                color: this.state.active === "find instructor on map" ? '#000000' : '#FFFFFF',
                fontSize: RFValue(25),
                fontWeight: this.state.active === 'find instructor on map' ? '600' : '500'
              }}>Find Instructor On Map</Text>
            </ElevatedView>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {
            this.setState({active: 'disputes'});
            this.props.navigation.navigate('Disputes');

          }}>
            <ElevatedView
              elevation={this.state.active === 'disputes' ? 200 : 0}
              style={{
                backgroundColor: this.state.active === "disputes" ? "#FFFFFF" : 'rgba(0, 0, 0, 0.2)',
                paddingVertical: this.state.active === "disputes" ? 18 : 16,
                paddingHorizontal: this.state.active === "disputes" ? 14 : 14,
                width: this.state.active === 'disputes' ? width * 0.679 : width * 0.679,
                borderBottomWidth: this.state.active !== 'disputes' ? 1 : 0,
                borderBottomColor: '#FFFFFF'
              }}>

              <Text style={{
                color: this.state.active === "disputes" ? '#000000' : '#FFFFFF',
                fontSize: RFValue(25),
                fontWeight: this.state.active === 'disputes' ? '600' : '500'
              }}>Disputes</Text>
            </ElevatedView>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {
            this.setState({active: 'pendingrequests'});
            this.props.navigation.navigate('PendingRequests');

          }}>
            <ElevatedView
              elevation={this.state.active === 'pendingrequests' ? 200 : 0}
              style={{
                backgroundColor: this.state.active === "pendingrequests" ? "#FFFFFF" : 'rgba(0, 0, 0, 0.2)',
                paddingVertical: this.state.active === "pendingrequests" ? 18 : 16,
                paddingHorizontal: this.state.active === "pendingrequests" ? 14 : 14,
                width: this.state.active === 'pendingrequests' ? width * 0.679 : width * 0.679,
                borderBottomWidth: this.state.active !== 'pendingrequests' ? 1 : 0,
                borderBottomColor: '#FFFFFF'
              }}>

              <Text style={{
                color: this.state.active === "pendingrequests" ? '#000000' : '#FFFFFF',
                fontSize: RFValue(25),
                fontWeight: this.state.active === 'pendingrequests' ? '600' : '500'
              }}>Pending Requests</Text>
            </ElevatedView>
          </TouchableOpacity>

            <TouchableOpacity onPress={() => {
              this.setState({active: 'mylearning'});
              this.props.navigation.navigate('MyLearning');

            }}>
              <ElevatedView
                elevation={this.state.active === 'mylearning' ? 200 : 0}
                style={{
                  backgroundColor: this.state.active === "mylearning" ? "#FFFFFF" : 'rgba(0, 0, 0, 0.2)',
                  paddingVertical: this.state.active === "mylearning" ? 18 : 16,
                  paddingHorizontal: this.state.active === "mylearning" ? 14 : 14,
                  width: this.state.active === 'mylearning' ? width * 0.679 : width * 0.679,
                  borderBottomWidth: this.state.active !== 'mylearning' ? 1 : 0,
                  borderBottomColor: '#FFFFFF'
                }}>

                <Text style={{
                  color: this.state.active === "mylearning" ? '#000000' : '#FFFFFF',
                  fontSize: RFValue(25),
                  fontWeight: this.state.active === 'mylearning' ? '600' : '500'
                }}>My Learning</Text>
              </ElevatedView>
            </TouchableOpacity>


          {/*<TouchableOpacity onPress={() => {*/}
          {/*  this.setState({active: 'findinstructoronmap'});*/}
          {/*  this.props.navigation.navigate('FindInstructorOnMap');*/}

          {/*}}>*/}
          {/*  <ElevatedView*/}
          {/*    elevation={this.state.active === 'findinstructoronmap' ? 200 : 0}*/}
          {/*    style={{*/}
          {/*      backgroundColor: this.state.active === "findinstructoronmap" ? "#FFFFFF" : 'rgba(0, 0, 0, 0.2)',*/}
          {/*      paddingVertical: this.state.active === "findinstructoronmap" ? 18 : 16,*/}
          {/*      paddingHorizontal: this.state.active === "findinstructoronmap" ? 14 : 14,*/}
          {/*      width: this.state.active === 'findinstructoronmap' ? width * 0.679 : width * 0.679,*/}
          {/*      borderBottomWidth: this.state.active !== 'findinstructoronmap' ? 1 : 0,*/}
          {/*      borderBottomColor: '#FFFFFF'*/}
          {/*    }}>*/}

          {/*    <Text style={{*/}
          {/*      color: this.state.active === "findinstructoronmap" ? '#000000' : '#FFFFFF',*/}
          {/*      fontSize: RFValue(25),*/}
          {/*      fontWeight: this.state.active === 'findinstructoronmap' ? '600' : '500'*/}
          {/*    }}>My Learning</Text>*/}
          {/*  </ElevatedView>*/}
          {/*</TouchableOpacity>*/}


        </ScrollView>
        </ImageBackground>
      </View>
    )
  }
}

const styles = {
  lgView: {
    // backgroundColor: '#149E7A',
    padding: 0,

    // elevation: 7,
    marginTop: width*0.06

  },
  stayElevated: {
    width:  width * 0.7 ,
    height:  width * 0.1 ,
    backgroundColor: 'white',
  }

}
//StyleSheet.create({});
//
// export default class DrawerMenu extends Component {
//   render() {
//     return(
//       <DrawerMenus/>
//     )
//   }
// }

export default DrawerMenu
