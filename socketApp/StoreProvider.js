import 'react-native-gesture-handler';
import {Provider as PaperProvider} from 'react-native-paper';
import React from 'react';
import {Provider} from 'react-redux';
import App from './App';
import store from './src/@redux/store';

const StoreProvider = () => (
  <Provider store={store}>
    <PaperProvider>
      <App />
    </PaperProvider>
  </Provider>
);

export default StoreProvider;
