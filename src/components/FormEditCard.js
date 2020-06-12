import React, {Component} from 'react';
//import react in our code.

import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Alert,
  Text,
} from 'react-native';
import ElevatedView from 'react-native-elevated-view';
import {margins, colors} from '../globals/styles';
import {RFValue} from 'react-native-responsive-fontsize';

export default (FormEditCard = ({
  onEditClick = null,
  onDeleteClick = null,
  title,
}) => {
  return (
    <ElevatedView elevation={5} style={styles.stayElevated}>
      <Text style={styles.titleText}>{title}</Text>
      <View style={styles.buttonRow}>

        <TouchableOpacity
          onPress={onEditClick}
          style={styles.editButtonContainer}
        >
          <Image
            style={styles.icon}
            source={require ('../../res/images/edit.png')}
          />
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={onDeleteClick}
          style={styles.deleteButtonContainer}
        >
          <Image
            style={styles.icon}
            source={require ('../../res/images/cross.png')}
          />
          <Text style={styles.buttonText}>Delete</Text>

        </TouchableOpacity>
      </View>
    </ElevatedView>
  );
});

const styles = StyleSheet.create ({
  stayElevated: {
    width: '99%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: 'white',
    margin: 1,
    marginTop: margins.verticalSpace + margins.verticalSpace,
    alignItems: 'center',
  },
  titleText: {
    color: 'black',
    fontSize: RFValue (15),
    flex: 1,
  },
  editButtonContainer: {
    height: 30,
    paddingStart: 10,
    paddingEnd: 10,
    flexDirection: 'row',
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginEnd: 3,
  },
  deleteButtonContainer: {
    height: 30,
    paddingStart: 10,
    paddingEnd: 10,
    flexDirection: 'row',
    backgroundColor: colors.red,
    alignItems: 'center',
    justifyContent: 'center',
    marginStart: 3,
  },
  icon: {
    width: 10,
    height: 10,
    resizeMode: 'contain',
  },
  buttonRow: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
  },

  buttonText: {
    color: 'white',
    fontSize: RFValue (13),
    marginStart: 5,
  },
});
