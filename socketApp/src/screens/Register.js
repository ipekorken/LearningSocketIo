import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';

const Register = ({navigation}) => {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.titleView}>
          <Text style={styles.titleTxt}>R E G I S T E R</Text>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.inputView}>
            <TextInput style={styles.inputTxt} placeholder="name" />
          </View>
          <View style={styles.inputView}>
            <TextInput style={styles.inputTxt} placeholder="surname" />
          </View>
          <View style={styles.inputView}>
            <TextInput style={styles.inputTxt} placeholder="email" />
          </View>
          <View style={styles.inputView}>
            <TextInput style={styles.inputTxt} placeholder="password" />
          </View>
        </View>
        <TouchableOpacity style={styles.loginBtnContainer}>
          <View style={styles.loginBtnView}>
            <Text style={styles.loginBtnTxt}>CREATE ACCOUNT</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          style={styles.registerBtnContainer}>
          <View style={styles.registerBtnView}>
            <Text style={styles.accountBtnTxt}>Already have an account? </Text>
            <Text style={styles.registerBtnTxt}>Login</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Register;

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
    width: 160,
    height: 40,
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
