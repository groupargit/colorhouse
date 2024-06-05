import React, {Fragment} from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import Store from '../../../store';
import Header from '../../sections/components/header-copy2';
import AsignaturaList from '../../videos/container/asignatura-list';
import ActivityList from '../../videos/container/activity-list';
import {useNavigation} from '@react-navigation/native';
import {useAuth0} from 'react-native-auth0';

const Home = state => {
  state;
  const {clearSession} = useAuth0();
  const navigation = useNavigation();
  const handleClose = () => {
    clearSession();
    Store.userReducer;
    navigation.navigate('Login');
  };
  return (
    <Fragment>
      <Header>
        <Text style={styles.buttonLabel}>Home</Text>
        <TouchableOpacity onPress={handleClose} style={styles.button}>
          <Text style={styles.buttonLabel}>Cerrar Sesión</Text>
        </TouchableOpacity>
      </Header>
      <AsignaturaList />
      <ActivityList />
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

export default Home;
