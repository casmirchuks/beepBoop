import React, {FunctionComponent, useState } from 'react'
import {  FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../components/color';


const HomePage: FunctionComponent = () => {

  const [words, setWords] = useState<string[]>([]); // Initialize an empty array of words
  let listViewRef: any;

  for (let i = 1; i <= 1000; i++) {
    if (i % 100 === 0 && words.length > 0) {
       words.push('beep boop');
    } else if (i % 20 === 0 && words.length > 0) {
      words.push('boop');
    } else if (i % 5 === 0 && words.length > 0) {
      words.push('beep');
    } else {
      words.push(i.toString());
    }   
 }

  // Render a single word item in the list
  const renderWord = ({ item }: { item: string }) => {
    return (
        <Text style={styles.itemStyle}>{item}.</Text>
    );
  };

  // item separator
  const ItemSeparatorView = () => {
    return (
      <View style={styles.separator}   />
    )
  }

  const TopButtonHandler = () => {
    listViewRef.scrollToOffset({animated: true, offset: 0})
  }

  const EndButtonHandler = () => {
    listViewRef.scrollToEnd({animated: true})
  }

  return (
    <SafeAreaView style={{flex: 1, marginBottom: 100}}>
        <FlatList
          data={words}
          renderItem={renderWord}
          ItemSeparatorComponent={ItemSeparatorView}
          ref={(ref) => {
            listViewRef = ref;
          }}
        />
        <TouchableOpacity 
          style={[styles.buttonStyle, styles.shadow, {right: 25, top: 6}]}
          onPress={EndButtonHandler}
          >
          <Text style={styles.text}>Go End</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.buttonStyle, styles.shadow, {right: 25, bottom: 30}]}
          onPress={TopButtonHandler}
          >
          <Text style={styles.text}>Go Top</Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    itemStyle: {
      padding: 20,
      fontSize: 19,
    },
    separator: {
      height: 1,
      width: '100%',
      backgroundColor: colors.graydark,
    },
    text: {
      fontSize: 20,
      color: colors.white
    },
    buttonStyle: {
      position: 'absolute',
      alignItems: 'center',
      width: 100,
      height: 50,
      justifyContent: 'center',
      backgroundColor: colors.primary,
      borderRadius: 10,
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
  

  
export default HomePage