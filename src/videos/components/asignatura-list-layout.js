import React from 'react';
import {Text, StyleSheet, ImageBackground, View, Image} from 'react-native';

import Carousel from 'react-native-intro-carousel';
const image = require('../../../assets/GrouparLogo.png');

function AsignaturaListLayout(props) {
  return (
    <ImageBackground
      source={require('../../../assets/background.png')}
      style={styles.container}>
      {/* <Text style={styles.title}>{props.title}</Text> */}
      {props.children}
      <View>
        <Text style={styles.title}> Bienvenido a Groupar</Text>
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
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: '#4c4c4c',
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  item: {
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

export default AsignaturaListLayout;
