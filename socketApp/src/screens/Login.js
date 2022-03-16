import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {setUserToken, setUserInfo} from '../@redux/app/actions';
import {showAlert} from '../helpers';
import {apiUrl} from '../apis';

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function login() {
    if (email != '' || password != '') {
      var data = JSON.stringify({
        email: email,
        password: password,
      });
      var config = {
        method: 'post',
        url: `${apiUrl}:3000/api/users/login`,
        headers: {
          'Content-Type': 'application/json',
        },
        data: data,
      };
      axios(config)
        .then(function (response) {
          if (response.data.token) {
            dispatch(setUserToken(response.data.token));
            dispatch(setUserInfo(response.data.user));
            showAlert('Login Successful');
          } else {
            showAlert('Login Failed', response.data.message);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      showAlert('Login Failed', 'Please fill the blanks!');
    }
  }

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.titleView}>
          <Text style={styles.titleTxt}>C H A T T E R S</Text>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputTxt}
              placeholder="email"
              onChangeText={text => setEmail(text)}
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputTxt}
              placeholder="password"
              onChangeText={text => setPassword(text)}
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>
        </View>
        <TouchableOpacity onPress={login} style={styles.loginBtnContainer}>
          <View style={styles.loginBtnView}>
            <Text style={styles.loginBtnTxt}>LOGIN</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Register')}
          style={styles.registerBtnContainer}>
          <View style={styles.registerBtnView}>
            <Text style={styles.accountBtnTxt}>Don't account? </Text>
            <Text style={styles.registerBtnTxt}>Register</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {},
  titleView: {
    marginBottom: 5,
    marginLeft: 2,
  },
  titleTxt: {
    fontSize: 22,
    color: 'black',
  },
  inputContainer: {},
  inputView: {
    width: 300,
    height: 50,
    backgroundColor: 'white',
    borderWidth: 2,
    paddingLeft: 15,
    borderRadius: 5,
    marginTop: 10,
  },
  inputTxt: {
    color: 'black',
    fontSize: 14,
  },
  loginBtnContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  loginBtnView: {
    backgroundColor: 'white',
    borderRadius: 5,
    width: 90,
    height: 30,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginBtnTxt: {
    color: 'black',
    fontSize: 15,
    fontWeight: '600',
  },
  registerBtnContainer: {
    alignItems: 'center',
    marginTop: 8,
  },
  registerBtnView: {
    flexDirection: 'row',
  },
  accountBtnTxt: {
    fontSize: 13,
  },
  registerBtnTxt: {
    color: 'black',
    fontSize: 13,
    fontStyle: 'italic',
    textDecorationLine: 'underline',
  },
});
