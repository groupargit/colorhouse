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
import Carousel from 'react-native-intro-carousel';
const image = require('../../../assets/GrouparLogo.png');

const Login = state => {
  const {authorize, clearSession, user, getCredentials} = useAuth0();
  const onLogin = async () => {
    setLoading(true);
    await authorize({}, {});
    const credentials = await getCredentials();
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
      createLog(user);
      setLoading(false);
      navigation.navigate('NavigationTab');
    } else {
      setLoading(false);
      Alert.alert('Error al iniciar sesión');
    }
  }

  // Consumo de API con fetch
  const createLog = async userActive => {
    try {
      const response = await fetch('http://192.168.32.3:8088/logger/', {
        // Use 'localhost' instead of '0.0.0.0'
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user: user,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('response object:', data);
      console.log('log', data);
    } catch (error) {
      console.error('SyntaxError===', error);
    }
  };
  // const createLog = async id => {
  //   fetch(`http://0.0.0.0:8088/logger/`, {
  //     method: 'POST',
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //     },
  //     body: user,
  //   })
  //     .then(response => response.json())
  //     .then(response => {
  //       console.log('response object:', response);
  //     })
  //     .then(data => {
  //       console.log('log', data);
  //     })
  //     .catch(error => {
  //       console.log('error===', error);
  //     })
  //     .finally(() => {});
  // };
  return (
    <ImageBackground
      source={require('../../../assets/background.png')}
      style={styles.image}>
      <SafeAreaView style={styles.container}>
        <Carousel
          data={[
            {
              key: '1',
              title: 'Apartamentos inteligentes',
              description: 'Optimiza tus espacios',
              image,
            },
            {
              key: '2',
              title: 'Good information here',
              description: 'Loren ipsum dolor sit amet',
              image,
              data: {
                rightImage: true,
              },
            },
            {
              key: '3',
              title: 'Awesome',
              description: 'Loren ipsum dolor sit amet',
              image,
            },
          ]}
          buttonsConfig={{
            disabled: true,
          }}
          paginationConfig={{
            bottomOffset: 8,
            dotIncreaseSize: 1,
            animated: true,
            dotSize: 10,
          }}
          renderItem={({item}) => (
            <View style={styles.item}>
              <View
                style={[
                  styles.itemContent,
                  {
                    backgroundColor: item.backgroundColor,
                  },
                ]}>
                {!item?.data?.rightImage && (
                  <Image source={item.image} style={styles.imageBanner} />
                )}
                <View style={styles.text}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.description}>{item.description}</Text>
                </View>
                {item?.data?.rightImage && (
                  <Image source={item.image} style={styles.imageBanner} />
                )}
              </View>
            </View>
          )}
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
        <Image
          source={require('../../../assets/GrouparLogo.png')}
          style={styles.logo}
        />
        <Text style={styles.textByGroupar}>By Groupar</Text>
      </SafeAreaView>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 100,
  },
  textByGroupar: {
    flex: 1,
    justifyContent: 'flex-end',
    marginTop: 2,
    fontSize: 14,
  },
  logo: {
    height: 35,
    resizeMode: 'contain',
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
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
  button: {
    backgroundColor: '#99c84a',
    borderRadius: 5,
    marginTop: 70,
  },
  buttonLabel: {
    color: 'white',
    padding: 10,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  item: {
    padding: 10,
    width: '100%',
    height: '100%',
  },
  itemContent: {
    borderRadius: 15,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    overflow: 'hidden',
  },
  imageBanner: {
    width: 120,
    height: 120,
  },
  text: {},
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 10,
  },
  description: {
    fontSize: 15,
    color: '#fff',
    marginLeft: 10,
  },
  imageBanner2: {
    width: '100%',
    height: '100%',
  },
  bannerContainer: {
    height: 220,
    marginTop: 300,
  },
});
export default Login;
