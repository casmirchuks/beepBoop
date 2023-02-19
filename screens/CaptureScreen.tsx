import React, { FunctionComponent, useState } from 'react'
import {  StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { colors } from '../components/color';
import { personData, contactData, updateData } from '../redux/data';
import { useAppDispatch } from '../redux/hook';
import { Data, DataService } from '../services/DataService';

const CaptureScreen:FunctionComponent = () => {

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [cell_no, setCell_no] = useState('');

  const dispatch = useAppDispatch()

  const saveInfo = async () => {
    const newData: Data = {
      person: { name: name, surname: surname },
      contact: { email: email, cell_no: cell_no },
      loading: false
    };
    
    dispatch(personData(newData.person))
    dispatch(contactData(newData.contact))
    dispatch(updateData(newData))
    setName('');
    setSurname('');
    setEmail('');
    setCell_no('');
    await DataService.updateData(newData);
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TextInput
        placeholder='Enter name'
        placeholderTextColor={colors.graydark}
        style={styles.textInputStyle}
        onChangeText={setName}
        value={name}
      />
      <TextInput
        placeholder='Enter surname'
        placeholderTextColor={colors.graydark}
        style={styles.textInputStyle}
        onChangeText={setSurname}
        value={surname}
      />
      <TextInput
        placeholder='Enter email'
        placeholderTextColor={colors.graydark}
        style={styles.textInputStyle}
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        placeholder='Enter cell_no'
        placeholderTextColor={colors.graydark}
        style={styles.textInputStyle}
        onChangeText={setCell_no}
        value={cell_no}
      />
      <TouchableOpacity 
        onPress={() => {saveInfo()}} 
        style={[styles.buttonStyle, styles.shadow]}
        >
        <Text style={styles.buttonTextStyle}>
          Save Info
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  textInputStyle: {
    marginTop: 5,
    textAlign: 'center',
    fontSize: 22,
    height: 60,
    width: '90%',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: colors.secondary,
  },
  buttonStyle: {
    fontSize: 16,
    backgroundColor: colors.primary,
    padding: 10,
    marginTop: 20,
    minWidth: 250,
    borderRadius: 10,
    height: 60,
    justifyContent: 'center',
  },
  buttonTextStyle: {
    padding: 5,
    color: 'white',
    textAlign: 'center',
    fontSize: 22,
  },
  shadow: {
    shadowColor: colors.secondary,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5
  }
})
export default CaptureScreen