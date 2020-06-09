import React, {PureComponent} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {margins, paddings} from '../globals/styles';
import {Avatar} from 'react-native-elements';
import {RFValue} from 'react-native-responsive-fontsize';
import ImagePicker from 'react-native-image-picker';

export default class UploadAvatar extends PureComponent {
  constructor (props) {
    super (props);
    this.state = {
      resourcePath: '',
    };
  }

  selectFile = () => {
    var options = {
      title: 'Select Image',

      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker (options, res => {
      console.log ('Response = ', res);

      if (res.didCancel) {
        console.log ('User cancelled image picker');
      } else if (res.error) {
        console.log ('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log ('User tapped custom button: ', res.customButton);
        alert (res.customButton);
      } else {
        let source = res;
        this.onPathReceived (source.uri);
        this.setState ({
          resourcePath: source.uri,
        });
      }
    });
  };

  onPathReceived = path => {
    this.props.onUriReceived (path);
  };

  render () {
    return (
      <View style={styles.container}>
        {/* <TouchableOpacity
     style = {{width:20,height:20,backgroundColor:'red'}}
     onPress = {this.selectFile}
     /> */}
        <Avatar
          size="large"
          rounded
          onPress={this.selectFile}
          source={
            this.state.resourcePath.length === 0
              ? require ('../../res/images/default_avatar.png')
              : {uri: this.state.resourcePath}
          }
        />
        <Text style={styles.uploadImageText}>
          Upload Image
        </Text>

        {this.props.showError
        ? <Text style={styles.redText}>{this.props.errorText}</Text>
        : <View />} 

      </View>
    );
  }
}
const styles = StyleSheet.create ({
  container: {
    width: '100%',
    alignItems: 'center',
    marginTop: margins.verticalSpace,
  },
  uploadImageText: {
    fontSize: RFValue (15),
    color: 'red',
    marginTop: margins.verticalSpace,
  },
   redText: {
    color: 'red',
    fontSize: RFValue (14),
    marginTop: margins.verticalSpace,
  },
});
