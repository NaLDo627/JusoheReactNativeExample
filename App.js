import React from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView } from 'react-native';
import MainController from './src/MainController'
import Logo from './src/components/Logo'

export default function App() {
  return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <Logo />
        <MainController />
      </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  imageHolder: {
    alignItems: 'center',
  }
});
