import React from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';

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

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
});

export default CustomBackground;