import React from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';
// import styles from './config/styles'

const CustomBackground = ({ children }) => {
  return (
    <ImageBackground
      source={require('../assets/mainbg-tall.png')}
      style={styles.backgroundImage}
    >
      {children}
    </ImageBackground>
  );
};


export default CustomBackground;

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        justifyContent: 'center',
        resizeMode: 'cover',
        // alignItems: 'center',
        width: '100%',
        height: '100%',
    },
});