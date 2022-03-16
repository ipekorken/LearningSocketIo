import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {MainNavigation, AuthNavigation} from './';

const Navigation = () => {
  const userToken = useSelector(state => state.app.userToken);
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    if (userToken !== '') {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  }, []);

  return (
    <NavigationContainer>
      {isLogged ? <MainNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
};

export default Navigation;
