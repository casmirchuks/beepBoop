import React, { FunctionComponent, useState, useEffect}from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../components/color';
import {DataService} from '../services/DataService';
import { Person } from '../services/DataService';
import { Contact } from '../services/DataService';

const Display: FunctionComponent = () => {
  const [person, setPerson] = useState<Person>();
  const [contact, setContact] = useState<Contact>();
  const [dataLoaded, setDataLoaded] = useState(false);

  async function fetchData() {
    const personData = await DataService.getPerson();
    const contactData = await DataService.getContact();
    setPerson(personData);
    setContact(contactData);
    // setDataLoaded(true);
    // if(Object.keys(personData).length === 0 || Object.keys(contactData).length === 0) {
    //   setDataLoaded(false);
    // } else if (Object.keys(personData).length > 0 && Object.keys(contactData).length > 0){
    //   setDataLoaded(true);
    // } else {
    //   setDataLoaded(false);
    // }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const getInfo = () => {
    setDataLoaded(false);
    fetchData();
  };

  if (!dataLoaded) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Loading data...</Text>
      </View>
    );
  }

    
  return (
    <View style={styles.container}>
    <Text style={styles.text}>Name: {person?.name} {person?.surname}</Text>
    <Text style={styles.text}>Email: {contact?.email}</Text>
    <Text style={styles.text}>Cell No.: {contact?.cell_no}</Text>
    <TouchableOpacity onPress={getInfo} style={[styles.buttonStyle, styles.shadow]}>
      <Text style={styles.buttonTextStyle}>
        Get Info
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