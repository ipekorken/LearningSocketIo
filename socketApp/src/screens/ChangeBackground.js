import {
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
  View,
  StatusBar,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {socket} from '../../socket';
import {useDispatch, useSelector} from 'react-redux';
import {setBgColor} from '../@redux/app/actions';

const ChangeBackground = ({navigation}) => {
  const dispatch = useDispatch();
  const bgColor = useSelector(state => state.app.bgColor);

  function changeBgColor() {
    let color = '#' + Math.random().toString(16).slice(2, 8);
    dispatch(setBgColor(color));
    socket.emit('changeBgColor', color);
  }

  useEffect(() => {
    changeBgColor();
    socket.on('changeBgColor', color => {
      dispatch(setBgColor(color));
    });
  }, []);

  return (
    <SafeAreaView style={[styles.screen, {backgroundColor: bgColor}]}>
      <StatusBar backgroundColor={bgColor} />
      <View style={styles.colorBoxContainer}>
        <View
          style={[
            styles.colorBoxSubContainer,
            {backgroundColor: bgColor},
          ]}></View>
        <View style={styles.colorBoxTxtView}>
          <Text style={styles.colorBoxTxt}>{bgColor}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.btnTouch} onPress={changeBgColor}>
        <Text style={styles.btnTxt}>Change Background</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btnTouch}
        onPress={() => navigation.navigate('UserCount')}>
        <Text style={styles.btnTxt}>Go to User Count</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btnTouch}
        onPress={() => navigation.navigate('Chat')}>
        <Text style={styles.btnTxt}>Go to Chat</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ChangeBackground;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTouch: {
    marginTop: 8,
    backgroundColor: '#f0f0f0',
    width: 200,
    height: 40,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
  },
  btnTxt: {
    fontSize: 13,
    color: 'black',
  },
  colorBoxContainer: {
    backgroundColor: '#f0f0f0',
    width: 120,
    height: 40,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  colorBoxSubContainer: {
    width: 20,
    height: 20,
    borderRadius: 2,
    marginRight: 10,
    borderWidth: 2,
    borderColor: 'black',
  },
  colorBoxTxtView: {},
  colorBoxTxt: {
    fontSize: 15,
    fontWeight: '600',
    color: 'black',
  },
});
