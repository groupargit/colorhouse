import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './src/reducers';

//const middleware = //...

const store = configureStore({
  reducer: rootReducer,
  //middleware
});

export default store;
