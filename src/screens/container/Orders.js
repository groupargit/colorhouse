import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {Fragment} from 'react';
import Header from '../../sections/components/header-copy2';
import {useNavigation} from '@react-navigation/native';
import Store from '../../../store';

const Orders = props => {
  props;
  const navigation = useNavigation();
  const handleClose = () => {
    Store.remove({
      key: 'userLogin',
    });
    navigation.navigate('Login');
  };
  return (
    <Fragment>
      <Header>
        <Text style={styles.buttonLabel}>Orders</Text>
        <TouchableOpacity onPress={handleClose} style={styles.button}>
          <Text style={styles.buttonLabel}>Cerrar Sesión</Text>
        </TouchableOpacity>
      </Header>
    </Fragment>
  );
};

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

export default Orders;
