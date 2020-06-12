import React, {PureComponent} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {margins, paddings, colors} from '../globals/styles';
import {Avatar} from 'react-native-elements';
import {RFValue} from 'react-native-responsive-fontsize';
import ImagePicker from 'react-native-image-picker';

export default class UploadButton extends PureComponent {
  constructor (props) {
    super (props);
    this.state = {
      resourcePath: '',
      path: '',
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

    ImagePicker.showImagePicker (options, async res => {
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
        await this.setState ({
          resourcePath: source.uri,
          path: source.path,
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
        <TouchableOpacity
          onPress={this.selectFile}
          style={styles.buttonContainer}
        >
          <Text style={styles.buttonText}>

            {this.state.path.length != 0 ? this.state.path : 'Upload Image'}
          </Text>
        </TouchableOpacity>

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
    marginTop: margins.verticalSpace,
  },
  buttonContainer: {
    width: '100%',
    height: 50,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    paddingStart:5,
    paddingEnd:5,
    borderRadius:25,
  },
  buttonText: {
    fontSize: RFValue (15),
    color: 'white',
  },
  redText: {
    color: 'red',
    fontSize: RFValue (14),
    marginTop: margins.verticalSpace,
  },
});
