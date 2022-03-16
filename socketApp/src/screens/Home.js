import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';

const Home = ({navigation}) => {
  const [rooms, setRooms] = useState([
    {
      id: 1,
      roomName: 'Chat Room 1',
    },
    {
      id: 2,
      roomName: 'Chat Room 2',
    },
    {
      id: 3,
      roomName: 'Chat Room 3',
    },
    {
      id: 4,
      roomName: 'Chat Room 4',
    },
    {
      id: 5,
      roomName: 'Chat Room 5',
    },
    {
      id: 6,
      roomName: 'Chat Room 6',
    },
    {
      id: 7,
      roomName: 'Chat Room 7',
    },
    {
      id: 8,
      roomName: 'Chat Room 8',
    },
  ]);
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <TouchableOpacity>
          <View style={styles.generalRoomView}>
            <Text>General Chat Room</Text>
          </View>
        </TouchableOpacity>
        <ScrollView>
          {rooms.map((item, index) => (
            <View key={index}>
              <TouchableOpacity>
                <View>
                  <Text>{item.roomName}</Text>
                </View>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
