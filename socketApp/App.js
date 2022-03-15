import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {AuthNavigation, Navigation} from './src/routes';

const App = () => {
  return (
    <NavigationContainer>
      <AuthNavigation />
    </NavigationContainer>
  );
};

export default App;
