import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import {useNavigation} from '@react-navigation/native';
import {useAuth0} from 'react-native-auth0';

const Login = state => {
  const {authorize, clearSession, user, getCredentials} = useAuth0();
  const onLogin = async () => {
    setLoading(true);
    await authorize({}, {});
    const credentials = await getCredentials();
    onLogout();
    state.userReducer;
    login(credentials?.accessToken);
  };
  const loggedIn = user !== undefined && user !== null;
  const onLogout = async () => {
    await clearSession({}, {});
  };
  const [loading, setLoading] = useState();
  const navigation = useNavigation();
  function login(accessToken) {
    //Login exitoso
    if (accessToken) {
      setLoading(false);
      navigation.navigate('NavigationTab');
    } else {
      setLoading(false);
      Alert.alert('Error al iniciar sesión');
    }
  }
  return (
    <ImageBackground
      source={require('../../../assets/background.png')}
      style={styles.image}>
      <SafeAreaView style={styles.container}>
        <Image
          source={require('../../../assets/GrouparLogo.png')}
          style={styles.logo}
        />
        <Image
          source={require('../../../assets/GrouparText.png')}
          style={styles.logoliteral}
        />
        <View>
          <TouchableOpacity
            onPress={loggedIn ? onLogout : onLogin}
            style={styles.button}>
            {loading ? (
              <Spinner
                visible={true}
                textContent={'Loading...'}
                textStyle={styles.spinnerTextStyle}
              />
            ) : (
              <Text style={styles.buttonLabel}>Ingresar a Casa Color :)</Text>
            )}
          </TouchableOpacity>
        </View>
        <Text style={styles.textByGroupar}>By Groupar</Text>
      </SafeAreaView>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  textByGroupar: {
    flex: 1,
    justifyContent: 'flex-end',
    marginTop: 50,
    fontSize: 18,
  },
  logo: {
    height: 80,
    resizeMode: 'contain',
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  spinnerTextStyle: {
    color: '#FFF',
  },
  logoliteral: {
    height: 25,
    marginBottom: 20,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  input: {
    marginBottom: 10,
    marginTop: 5,
    width: 350,
    height: 60,
    paddingHorizontal: 10,
    borderRadius: 5,
    fontSize: 18,
    backgroundColor: '#838383',
    color: 'white',
  },
  button: {
    backgroundColor: '#99c84a',
    borderRadius: 5,
    marginTop: 20,
  },
  buttonLabel: {
    color: 'white',
    padding: 10,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default Login;
