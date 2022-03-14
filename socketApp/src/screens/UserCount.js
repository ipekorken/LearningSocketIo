import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {socket} from '../../socket';

const UserCount = ({navigation}) => {
  const [onlineUser, setOnlineUser] = useState(0);

  useEffect(() => {
    socket.on('onlineUsers', count => {
      setOnlineUser(count);
    });
    socket.on('remainingUsers', count => {
      setOnlineUser(count);
    });
  }, []);

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.titleTxt}>Online User: </Text>
        <Text style={styles.txt}>{onlineUser}</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('ChangeBackground')}>
        <Text style={styles.btnTxt}>Go to Change Background</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btnTouch}
        onPress={() => navigation.navigate('Chat')}>
        <Text style={styles.btnTxt}>Go to Chat</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default UserCount;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flexDirection: 'row',
  },
  titleTxt: {
    fontSize: 16,
    fontWeight: '700',
  },
  txt: {
    fontSize: 16,
  },
  btnTouch: {
    marginTop: 5,
  },
  btnTxt: {
    fontSize: 20,
  },
});
