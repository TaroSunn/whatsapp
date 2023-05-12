import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import ContactListItem from '../components/ContactListItem';
import chats from './../../assets/data/chats.json'
const ContactsScreen = () => {
    return (
        <FlatList 
          data={chats}
          renderItem={({item}) => <ContactListItem user={item.user} 
          style={styles.list}/>}
        />
    );
}

const styles = StyleSheet.create({})

export default ContactsScreen;
