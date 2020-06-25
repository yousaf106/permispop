import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Dimensions, ImageBackground, Image} from 'react-native';
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
      <View style={{flex: 1 }}>

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


        <View style={styles.lgView}>




          <TouchableOpacity onPress={() => {
            this.setState({active: 'profile'});
            this.props.navigation.navigate('Profile');

          }}>
            <ElevatedView
              elevation={this.state.active === 'profile' ? 200 : 0}
              style={{
              backgroundColor: this.state.active === "profile" ? "#FFFFFF" : 'rgba(0, 0, 0, 0.2)',
              paddingVertical: this.state.active === "profile" ? 23 : 20,
              paddingHorizontal: this.state.active === "profile" ? 14 : 14,
              width: this.state.active === 'profile' ? width * 0.7 : width * 0.679,
              borderBottomWidth: this.state.active !== 'history' ? 1 : 0,
              borderBottomColor: '#FFFFFF'
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
            // this.props.navigation.navigate('Notifications');
          }}
          >
            <ElevatedView
              elevation={this.state.active === 'history' ? 200 : 0}
              style={{
              backgroundColor: this.state.active === "history" ? "#FFFFFF" : 'rgba(0, 0, 0, 0.2)',
              paddingVertical: this.state.active === "history" ? 23 : 20,
              paddingHorizontal: this.state.active === "history" ? 14 : 14,
              width: this.state.active === 'history' ? width * 0.7 : width * 0.679,
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
              paddingVertical: this.state.active === "bookings" ? 23 : 20,
              paddingHorizontal: this.state.active === "bookings" ? 14 : 14,
              width: this.state.active === 'bookings' ? width * 0.7 : width * 0.679,
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
            // this.props.navigation.navigate('Notifications');
          }}
          >
            <ElevatedView
              elevation={this.state.active === 'pending requests' ? 200 : 0}
              style={{
              backgroundColor: this.state.active === "pending requests" ? "#FFFFFF" : 'rgba(0, 0, 0, 0.2)',
              paddingVertical: this.state.active === "pending requests" ? 23 : 20,
              paddingHorizontal: this.state.active === "pending requests" ? 14 : 14,
              width: this.state.active === 'pending requests' ? width * 0.7 : width * 0.679,
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
              paddingVertical: this.state.active === "find an instructor" ? 23 : 20,
              paddingHorizontal: this.state.active === "find an instructor" ? 14 : 14,
              width: this.state.active === 'find an instructor' ? width * 0.7 :width * 0.679,
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
            // this.props.navigation.navigate('Notifications');
          }}
          >
            <ElevatedView
              elevation={this.state.active === 'find instructor on map' ? 200 : 0}
              style={{
              backgroundColor: this.state.active === "find instructor on map" ? "#FFFFFF" : 'rgba(0, 0, 0, 0.2)',
              paddingVertical: this.state.active === "find instructor on map" ? 23 : 20,
              paddingHorizontal: this.state.active === "find instructor on map" ? 14 : 14,
              width: this.state.active === 'find instructor on map' ? width * 0.7 : width * 0.679,
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
                paddingVertical: this.state.active === "disputes" ? 23 : 20,
                paddingHorizontal: this.state.active === "disputes" ? 14 : 14,
                width: this.state.active === 'disputes' ? width * 0.7 : width * 0.679,
                borderBottomWidth: this.state.active !== 'history' ? 1 : 0,
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
                paddingVertical: this.state.active === "pendingrequests" ? 23 : 20,
                paddingHorizontal: this.state.active === "pendingrequests" ? 14 : 14,
                width: this.state.active === 'pendingrequests' ? width * 0.7 : width * 0.679,
                borderBottomWidth: this.state.active !== 'history' ? 1 : 0,
                borderBottomColor: '#FFFFFF'
              }}>

              <Text style={{
                color: this.state.active === "pendingrequests" ? '#000000' : '#FFFFFF',
                fontSize: RFValue(25),
                fontWeight: this.state.active === 'pendingrequests' ? '600' : '500'
              }}>Pending Requests</Text>
            </ElevatedView>
          </TouchableOpacity>


        </View>
        </ImageBackground>
      </View>
    )
  }
}

const styles = {
  lgView: {
    // backgroundColor: '#149E7A',
    padding: 0,
    alignItems: 'center',
    // elevation: 7,

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
