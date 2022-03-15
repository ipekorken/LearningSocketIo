import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';

const Login = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <View style={styles.inputView}>
            <TextInput style={styles.inputTxt} placeholder="email" />
          </View>
          <View style={styles.inputView}>
            <TextInput style={styles.inputTxt} placeholder="password" />
          </View>
        </View>
        <TouchableOpacity style={styles.loginBtnContainer}>
          <View style={styles.loginBtnView}>
            <Text style={styles.loginBtnTxt}>Login</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.registerBtnContainer}>
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
  inputContainer: {},
  inputView: {
    width: 300,
    height: 50,
    backgroundColor: 'white',
    borderWidth: 1.5,
    paddingLeft: 15,
    borderRadius: 5,
  },
  inputTxt: {
    color: 'black',
    fontSize: 14,
  },
  loginBtnContainer: {},
  loginBtnView: {},
  loginBtnTxt: {},
  registerBtnContainer: {},
  registerBtnView: {
    flexDirection: 'row',
  },
  accountBtnTxt: {
    fontSize: 12,
  },
  registerBtnTxt: {
    color: 'black',
    fontSize: 12,
    fontStyle: 'italic',
    textDecorationLine: 'underline',
  },
});
