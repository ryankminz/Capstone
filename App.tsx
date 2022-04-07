
import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, ImageBackground } from 'react-native';
import PreLoginNavigator from './src/Components/Navigation';
import BottomTabs from './src/Components/BottomTabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
//@ts-ignore
import Background from './src/Images/Background.png';
import AuthNavigation from './src/Components/AuthNavigation';



export default function App() {

  return (
    <SafeAreaView style={styles.root}>
      <AuthNavigation />
    </SafeAreaView>
  )

}


const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  background: {
    width: '100%',
    height: '100%'
  }
});