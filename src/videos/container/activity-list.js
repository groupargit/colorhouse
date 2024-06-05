import * as React from 'react';
import {FlatList} from 'react-native';
import Layout from '../components/activity-list-layout';

const ActivityList = props => {
  props;

  // renderItem = ({item}) => {
  //   return (
  //     <Activity
  //       {...item}
  //       onPress={() => {
  //         viewActivity(item);
  //       }}
  //     />
  //   );
  // };

  return (
    <Layout title="Actividades recientes">
      <FlatList
      //keyExtractor={keyExtractor}
      //data={props.course}
      // ListEmptyComponent={renderEmpty}
      // ItemSeparatorComponent={itemSeparator}
      //renderItem={renderItem}
      />
    </Layout>
  );
};

export default ActivityList;
