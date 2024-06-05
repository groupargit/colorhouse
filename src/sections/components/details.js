import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  FlatList,
  Text,
  Image,
} from 'react-native';
import Empty from '../../../src/components/Empty';
import Separator from '../../components/vertical-separator';
const tempImg = [
  'https://images.pexels.com/photos/2170/creative-desk-pens-school.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/1053687/pexels-photo-1053687.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/632470/pexels-photo-632470.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/247819/pexels-photo-247819.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/256520/pexels-photo-256520.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/159497/school-notebook-binders-notepad-159497.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/167682/pexels-photo-167682.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/265076/pexels-photo-265076.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/298660/pexels-photo-298660.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/256517/pexels-photo-256517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/2170/creative-desk-pens-school.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/1053687/pexels-photo-1053687.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/632470/pexels-photo-632470.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/247819/pexels-photo-247819.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/256520/pexels-photo-256520.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/159497/school-notebook-binders-notepad-159497.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/167682/pexels-photo-167682.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/265076/pexels-photo-265076.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/298660/pexels-photo-298660.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/256517/pexels-photo-256517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/632470/pexels-photo-632470.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
];

function Details(props) {
  console.log('props..detail ', props.route.params);
  const [secctions] = useState([]);
  //   const {codeAcademicCharge} = props.route.params.item;

  /* Fetchin data from api */
  //   async function getActivities(code) {
  //     await fetch(
  //       `https://api-gcp.sige-edu.com:8000/api/secctions/secction/byacademicharge/${code}`,
  //       {
  //         method: 'GET',
  //         headers: {
  //           Accept: 'application/json',
  //           'Content-Type': 'application/json',
  //         },
  //       },
  //     )
  //       .then(response => response.json())
  //       .then(data => {
  //         setSecctions(data);
  //       })
  //       .catch(error => {
  //         console.log(error);
  //       })
  //       .finally(() => {});
  //   }

  //   useEffect(() => {
  //     getActivities(codeAcademicCharge);
  //   }, []);
  console.log('secctions', secctions);
  let keyExtractor = 1;
  //   let keyExtractor = item => item.codeSecction.toString();
  let renderEmpty = () => <Empty text="No hay sugerencias"></Empty>;
  let itemSeparator = () => <Separator />;
  let renderItem = ({item}) => {
    item;
    return (
      <View>
        <Text style={styles.buttonLabel}>details</Text>
      </View>
      // <ProductDetail
      //   {...item}
      //   onPress={() => {
      //     viewSubject(item);
      //   }}
      // />
    );
  };

  return (
    <ScrollView>
      <View>
        <FlatList
          keyExtractor={keyExtractor}
          data={secctions}
          ListEmptyComponent={renderEmpty}
          ItemSeparatorComponent={itemSeparator}
          renderItem={renderItem}
        />
      </View>
      <View style={styles.top}>
        <Text>{props.route.params.item.name}</Text>
      </View>
      <View style={styles.bottom}>
        <View style={styles.details}>
          <Image
            style={styles.cover}
            source={{
              uri: tempImg[Math.floor(Math.random() * 20)],
            }}
          />
          <Text style={styles.description}>
            {props.route.params.item.description}
          </Text>
        </View>
      </View>
      <View style={styles.trailer}>
        {/* <WebView source={{html: makeHTML(props.yt_trailer_code)}} /> */}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {},
  trailer: {
    height: 200,
    marginBottom: 10,
  },
  details: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  cover: {
    width: 125,
    height: 190,
  },
  title: {
    color: '#44546b',
    fontSize: 18,
    fontWeight: 'bold',
  },
  top: {
    borderBottomWidth: 1,
    borderBottomColor: '#eaeaea',
    padding: 20,
    backgroundColor: 'white',
  },
  bottom: {
    padding: 20,
    flex: 1,
  },
  description: {
    fontSize: 15,
    lineHeight: 22.5,
    color: '#4c4c4c',
    marginLeft: 10,
    flex: 1,
  },
});

export default Details;
