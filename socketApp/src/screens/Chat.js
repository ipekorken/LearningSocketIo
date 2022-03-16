import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {List} from 'react-native-paper';
import {useSelector} from 'react-redux';

const Chat = ({navigation}) => {
  const bgColor = useSelector(state => state.app.bgColor);
  const [messages, setMessages] = useState([
    {
      id: 1,
      txt: 'asdasdsadasdasdasdasdsa',
    },
    {
      id: 2,
      txt: 'asdasdsadasdasdasdasdsa',
    },
    {
      id: 3,
      txt: 'asdasdsadasdasdasdasdsa',
    },
    {
      id: 4,
      txt: 'asdasdsadasdasdasdasdsa',
    },
    {
      id: 5,
      txt: 'asdasdsadasdasdasdasdsa',
    },
    {
      id: 6,
      txt: 'asdasdsadasdasdasdasdsa',
    },
    {
      id: 7,
      txt: 'asdasdsadasdasdasdasdsa',
    },
  ]);
  const [chatUsers, setChatUsers] = useState([
    {
      id: 1,
      user: 'Ali',
      isAdmin: true,
    },
    {
      id: 2,
      user: 'Kerem',
      isAdmin: false,
    },
    {
      id: 3,
      user: 'Fatma',
      isAdmin: false,
    },
    {
      id: 4,
      user: 'Ahmet',
      isAdmin: false,
    },
    {
      id: 5,
      user: 'Ayşe',
      isAdmin: true,
    },
  ]);
  const [inputMsg, setInputMsg] = useState('');
  const [expanded, setExpanded] = useState(false);
  function handleExpanded() {
    setExpanded(!expanded);
  }
  return (
    <SafeAreaView style={[styles.screen, {backgroundColor: bgColor}]}>
      <View style={styles.container}>
        <View style={styles.membersContainer}>
          <List.Accordion
            title="Group Members"
            titleStyle={{
              color: 'black',
              fontSize: 15,
            }}
            expanded={expanded}
            onPress={handleExpanded}>
            {chatUsers.map((item, index) => (
              <View style={{backgroundColor: '#f0f0f0'}} key={index}>
                <List.Item
                  title={item.user}
                  style={{
                    borderTopWidth: 1,
                    width: 240,
                  }}
                />
                {item.isAdmin ? (
                  <View style={styles.userItemView}>
                    <Text style={[styles.userItemTxt, {color: 'red'}]}>
                      Admin
                    </Text>
                  </View>
                ) : (
                  <View style={styles.userItemView}>
                    <Text style={[styles.userItemTxt, {color: 'black'}]}>
                      Member
                    </Text>
                  </View>
                )}
              </View>
            ))}
          </List.Accordion>
        </View>
        <View style={styles.msgContainer}>
          <ScrollView>
            {messages.map((item, index) => (
              <View key={index}>
                <View style={styles.msgView}>
                  <Text style={styles.msgTxt}>{item.txt}</Text>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
        <View style={styles.sendContainer}>
          <View style={styles.sendInputView}>
            <TextInput
              placeholder="Mesajınızı girin..."
              style={styles.sendInputTxt}
              onChangeText={text => setInputMsg(text)}
              //autoCapitalize="none"
              autoCorrect={false}
            />
          </View>
          <View
            style={{
              flexDirection: 'column',
            }}>
            <TouchableOpacity>
              <View style={styles.sendBtnView}>
                <Text style={styles.sendBtnTxt}>Send</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.pop()}
              style={{marginTop: 5}}>
              <View style={styles.sendBtnView}>
                <Text style={styles.sendBtnTxt}>Back</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Chat;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {},
  msgContainer: {
    backgroundColor: '#f9f9f9',
    width: 310,
    height: '70%',
    borderWidth: 1.5,
    marginBottom: 20,
    padding: 10,
    marginTop: 80,
  },
  msgView: {
    width: '50%',
    backgroundColor: 'lightgrey',
    padding: 5,
    borderRadius: 10,
    marginBottom: 10,
    marginLeft: 10,
  },
  msgTxt: {
    color: 'black',
  },
  sendContainer: {
    flexDirection: 'row',
  },
  sendInputView: {
    borderWidth: 1.5,
    height: 50,
    marginRight: 10,
    width: 250,
    backgroundColor: '#f0f0f0',
  },
  sendInputTxt: {
    paddingLeft: 10,
  },
  sendBtnView: {
    borderWidth: 1.5,
    height: 22,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  sendBtnTxt: {
    color: 'black',
    fontSize: 15,
    fontWeight: '600',
  },
  membersContainer: {
    position: 'absolute',
    zIndex: 99,
    width: 310,
    borderWidth: 1.5,
  },
  userItemView: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 50,
    marginLeft: 240,
    borderTopWidth: 1,
    paddingLeft: 10,
  },
  userItemTxt: {
    fontStyle: 'italic',
    fontSize: 10,
  },
});
