import {Text, View, StyleSheet} from 'react-native';
import React, {Component} from 'react';

export default class More extends Component {
  render() {
    return (
      <View>
        <Text style={styles.buttonLabel}>more</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#e350a8',
    borderRadius: 5,
  },
  txtusername: {
    backgroundColor: '#99c84a',
    borderRadius: 5,
    color: 'white',
    padding: 5,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonLabel: {
    color: 'black',
    padding: 5,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
