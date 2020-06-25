import React, {Component} from 'react';
import {View, StyleSheet, ScrollView, Text, TouchableOpacity, FlatList, Dimensions, Image, ImageBackground} from 'react-native';
import {colors, margins, paddings} from '../../globals/styles';
import {RFValue} from 'react-native-responsive-fontsize';
import {Rating} from 'react-native-ratings';




const {width, height} = Dimensions.get('window');

export default class Profile extends Component {

  state = {
    packageType: '',
    packagePrice: 0,
    starCount: 4,
    name: 'Irtaza',
    email: 'irtazahussain@test.com',
    phone: '112233121512 '
  }

  ratingCompleted(rating) {
    console.log("Rating is: " + rating)
  }


  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../../../res/images/login_bg.jpg')} style={styles.imageBackground}>
          <Image source={
                  require('../../../res/images/default_avatar.png')}
                  style={styles.profileImage}/>
        </ImageBackground>

        <ScrollView>
        <View>


          <View style={styles.ratingView}>
            <Rating
              showRating
              onFinishRating={this.ratingCompleted}
              style={styles.rating}
            />
          </View>
          <View style={styles.nameEmailNumberContainer}>
            <Text style={styles.nameEmailNumberTitleText}>Name</Text>
            <Text style={styles.nameEmailNumberText}>{this.state.name}</Text>

          </View>
          <View style={styles.nameEmailNumberContainer}>
            <Text style={styles.nameEmailNumberTitleText}>E-Mail</Text>
            <Text style={styles.nameEmailNumberText}>{this.state.email}</Text>

          </View>
          <View style={styles.nameEmailNumberContainer}>
            <Text style={styles.nameEmailNumberTitleText}>Phone#</Text>
            <Text style={styles.nameEmailNumberText}>{this.state.phone}</Text>

          </View>

        </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    alignItems: 'center'
  },
  nameEmailNumberText: {
    fontSize: RFValue('25')
  },
  nameEmailNumberTitleText: {
    fontSize: RFValue('20'),
    color: '#C1C1C1',
    marginTop: width*0.08
  },
  nameEmailNumberContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#B8B8B8',
    width: width * 0.8,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: width*0.05
  },
  ratingView: {
    borderBottomWidth: 1,
    borderBottomColor: '#B8B8B8',
    width: width * 0.8,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: width*0.05
  },
  rating: {
    paddingVertical: 10
  },
  profileImage: {
    resizeMode: 'contain',
    width: width * 0.25,
    height: width * 0.25,
    borderRadius: 40
  },
  imageBackground: {
    width: width,
    paddingVertical: 10,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingTop: width * 0.1,
    resizeMode: 'cover',
    elevation: 20
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
