import {StyleSheet, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import React, {useState, useEffect} from 'react';

const ChangeBackground = ({navigation}) => {
  const [bgColor, setBgColor] = useState('#f0f0f0');

  function changeBgColor() {
    let color = '#' + Math.random().toString(16).slice(2, 8);
    setBgColor(color);
    socket.emit('changeBgColor', color);
  }

  useEffect(() => {
    socket.on('changeBgColor', color => {
      setBgColor(color);
    });
  }, []);

  return (
    <SafeAreaView style={[styles.screen, {backgroundColor: bgColor}]}>
      <TouchableOpacity onPress={changeBgColor}>
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
    marginTop: 5,
  },
  btnTxt: {
    fontSize: 20,
  },
});
