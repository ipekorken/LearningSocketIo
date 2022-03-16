import {Alert} from 'react-native';

const showAlert = (alertTitle, alertInfo, alertFunc) => {
  Alert.alert(alertTitle, alertInfo, [
    {
      text: 'OK',
      onPress: alertFunc,
    },
  ]);
};

export {showAlert};
