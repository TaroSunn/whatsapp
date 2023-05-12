import React from 'react';
import { StyleSheet, FlatList} from 'react-native';
import ChatListItem from '../components/ChatListItem';
import chats from './../../assets/data/chats.json'

const ChatsScreen = () => {
    return (
        <FlatList 
          data={chats}
          renderItem={({item}) => <ChatListItem chat={item} 
          style={styles.list}/>}
        />
    );
}

const styles = StyleSheet.create({
  list: {
    backgroundColor: 'white'
  }
})

export default ChatsScreen;
