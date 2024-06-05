import React, {Fragment} from 'react';
import ProductList from '../../sections/container/ProductList';

const Home = props => {
  props;
  return (
    <Fragment>
      {/* <Header>
        <TouchableOpacity onPress={handleClose} style={styles.button}>
          <Text style={styles.buttonLabel}>Cerrar Sesión</Text>
        </TouchableOpacity>
      </Header> */}
      <ProductList />
    </Fragment>
  );
};
// const styles = StyleSheet.create({
//   button: {
//     backgroundColor: '#e350a8',
//     borderRadius: 5,
//   },
//   txtusername: {
//     backgroundColor: '#99c84a',
//     borderRadius: 5,
//     color: 'white',
//     padding: 5,
//     fontSize: 15,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   buttonLabel: {
//     color: 'white',
//     padding: 5,
//     fontSize: 14,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
// });

export default Home;
