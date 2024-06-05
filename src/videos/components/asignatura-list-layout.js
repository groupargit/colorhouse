import React from 'react';
import {Text, StyleSheet, ImageBackground} from 'react-native';

function AsignaturaListLayout(props) {
  return (
    <ImageBackground
      source={require('../../../assets/background.png')}
      style={styles.container}>
      {/* <Text style={styles.title}>{props.title}</Text> */}
      <Text style={styles.title}>Testtttcardd</Text>
      {props.children}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  title: {
    color: '#4c4c4c',
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
  },
});

export default AsignaturaListLayout;
