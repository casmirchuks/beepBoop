import React from 'react';
import {  SafeAreaView,  ScrollView,  StatusBar, StyleSheet, Text, View} from 'react-native';
import { colors } from './components/color';
import Navigation from './navigation';
import { Provider } from 'react-redux'
import {store} from './redux/store'; 

function App(): JSX.Element {
  return (
    <>
      <Provider store={store}>
        <SafeAreaView style={{ backgroundColor: colors.primary}}>
          <StatusBar/>
          <ScrollView>
            <View style={{
              backgroundColor: colors.primary,
              flex: 1, 
              justifyContent: 'center', 
              alignItems: 'center',
              padding: 5,
              }}>
              <Text style={style.headerTextStyle}>Beep Boop</Text>
            </View>
          </ScrollView>
        </SafeAreaView>
        <Navigation /> 
      </Provider>
    </>

  );
};

const style = StyleSheet.create ({
  headerTextStyle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold'
  }
})

export default App;
