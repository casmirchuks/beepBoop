import React, { FunctionComponent }from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { colors } from '../components/color';
import { updateData, personData, contactData, } from '../redux/data';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import { Data, DataService } from '../services/DataService';

const Display: FunctionComponent = () => {
  const {person, contact, loading} = useAppSelector((state) => state.data.value );
  const dispatch = useAppDispatch();

  const getInfoData = async () => {
    const personInfoData = await DataService.getPerson();
    const contactInfoData = await DataService.getContact();
    if (personInfoData.name.length > 0 && personInfoData.surname.length > 0){
      const storeData: Data = {
        person: { name: personInfoData.name, surname: personInfoData.surname },
        contact: { email: contactInfoData.email, cell_no: contactInfoData.cell_no },
        loading: false
      };
      dispatch(personData(personInfoData))
      dispatch(contactData(contactInfoData))
      dispatch(updateData(storeData))
    } else {
      const defaultData: Data = {
        person: { name: 'Michael', surname: 'Baker' },
        contact: { email: 'michael@test.com', cell_no: '0825558364' },
        loading: false
      };
      dispatch(updateData(defaultData));
    }
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <Text style={styles.text}>Loading data...</Text>
        <TouchableOpacity 
        onPress={() => {getInfoData()}} 
        style={[styles.buttonStyle, styles.shadow]}
        >
        <Text style={styles.buttonTextStyle}>
           Get Data
        </Text>
      </TouchableOpacity>
      </View>
    );
  }

    
  return (
    <View style={styles.container}>
    <Text style={styles.text}>Name: {person?.name} {person?.surname}</Text>
    <Text style={styles.text}>Email: {contact?.email}</Text>
    <Text style={styles.text}>Cell No.: {contact?.cell_no}</Text>
    <TouchableOpacity 
        onPress={() => {getInfoData()}} 
        style={[styles.buttonStyle, styles.shadow]}
        >
        <Text style={styles.buttonTextStyle}>
           Get Data
        </Text>
      </TouchableOpacity>
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
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
});

export default Display