import AsyncStorage from '@react-native-async-storage/async-storage';

export interface Person {
  name: string ;
  surname: string;
};

export interface Contact {
  email: string ;
  cell_no: string ;
};

export interface Data  {
  person: Person;
  contact: Contact;
  loading: boolean
};

// default data
export const defaultData: Data = {
  person: { name: 'Michael', surname: 'Baker' },
  contact: { email: 'michael@test.com', cell_no: '0825558364' },
  loading: false
};

// gets data from the asyncStorage
const getData = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key)
    if(value !== null) {
      // value previously stored
      return JSON.parse(value);
    }
  } catch(e) {
    // error reading value
    return null;
  }
}

// store data in the asyncStorage
const storeData = async (key: string, value: any) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem(key, jsonValue)
    return jsonValue
  } catch (e) {
    // saving error
    console.log(e);
    return e;
  }
}

export const DataService = {
  getPerson: async (): Promise<Person>  => {
    const data = await getData('person');
    if (data) {
      return data;
    }
    // If data does not exist in async storage, create it with default data
    try {
      await storeData('person', defaultData.person);
    } catch (error) {
      console.log(error);
    }
    return defaultData.person;
  },

  getContact: async (): Promise<Contact> => {
    const data = await getData('contact');
    if (data) {
      return data;
    }
    // If data does not exist in async storage, create it with default data
    try {
      await storeData('contact', defaultData.contact);
    } catch (error) {
      console.log(error);
      
    }
    return defaultData.contact;
  },

  updateData: async (data: Data) => {
    try {
      await storeData('person', data.person);
      await storeData('contact', data.contact);
    } catch (error) {
      console.log(error); 
    }
  },
  

}

