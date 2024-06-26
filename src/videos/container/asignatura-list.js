import React, {useState} from 'react';
import {FlatList} from 'react-native';
import Layout from '../components/asignatura-list-layout';
import Empty from '../components/empty';
import Separator from '../../videos/components/vertical-separator';
import Asignatura from '../components/asignatura';
import {useNavigation} from '@react-navigation/native';

const AsignaturaList = props => {
  console.log('Props AsignaturaList:', props);
  const navigation = useNavigation();
  const [subject] = useState([]);

  const keyExtractor = item => item.codeAcademicCharge.toString();
  const renderEmpty = () => <Empty text="No hay sugerencias" />;
  const itemSeparator = () => <Separator />;

  // const getSubject = useCallback(codeStudent => {
  //   fetch(`https://api.escuelajs.co/api/v1/categories`, {
  //     method: 'GET',
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //     },
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       setSubject(data);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }, []);

  // const loginSuccess = useCallback(async () => {
  //   const dataUser = await AsyncStorage.getItem('userLogin');
  //   if (dataUser) {
  //     getSubject(JSON.parse(dataUser).student.codeStudent);
  //   }
  // }, [getSubject]);

  // useEffect(() => {
  //   loginSuccess();
  // }, [loginSuccess]);

  const viewSubject = item => {
    navigation.navigate('Actividad', {item: item});
  };

  const renderItem = ({item}) => {
    return (
      <Asignatura
        {...item}
        onPress={() => {
          viewSubject(item);
        }}
      />
    );
  };

  return (
    <Layout>
      <FlatList
        keyExtractor={keyExtractor}
        data={subject}
        ListEmptyComponent={renderEmpty}
        ItemSeparatorComponent={itemSeparator}
        renderItem={renderItem}
      />
    </Layout>
  );
};

export default AsignaturaList;

// import React, {Fragment, useState, useEffect} from 'react';
// import {FlatList, Text, View} from 'react-native';
// import Layout from '../components/asignatura-list-layout';
// import Empty from '../components/empty';
// import AsyncStorage from '@react-native-community/async-storage';
// import Separator from '../../videos/components/vertical-separator';
// import Asignatura from '../components/asignatura';
// import {useNavigation} from '@react-navigation/native';

// const AsignaturaList = props => {
//   const navigation = useNavigation();
//   const [user, setUser] = useState(null);
//   const keyExtractor = item => item.codeAcademicCharge.toString();
//   const renderEmpty = () => <Empty text="No hay sugerencias"></Empty>;
//   const itemSeparator = () => <Separator />;
//   const [subject, setSubject] = useState([]);
//   async function loginSuccess() {
//     const dataUser = await AsyncStorage.getItem('userLogin');
//     getSubject(JSON.parse(dataUser).student.codeStudent);
//   }
//   const getSubject = codeStudent => {
//     fetch(`https://api.escuelajs.co/api/v1/categories`, {
//       method: 'GET',
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//       },
//     })
//       .then(response => response.json())
//       .then(data => {
//         setSubject(data);
//       })
//       .catch(error => {
//         console.log(error);
//       })
//       .finally(() => {});
//   };
//   // useEffect(() => {
//   //   loginSuccess();
//   // }, []);
//   viewSubject = item => {
//     navigation.navigate('Actividad', {item: item});
//   };
//   // renderItem = ({item}) => {
//   //   return (
//   //     <Asignatura
//   //       {...item}
//   //       onPress={() => {
//   //         viewSubject(item);
//   //       }}
//   //     />
//   //   );
//   // };
//   renderItem = ({item}) => {
//     return (
//       <Layout>
//         <FlatList
//           keyExtractor={keyExtractor}
//           data={subject}
//           ListEmptyComponent={renderEmpty}
//           ItemSeparatorComponent={itemSeparator}
//           renderItem={renderItem}
//         />
//       </Layout>
//     );
//   };
// };

// export default AsignaturaList;
