import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import React from 'react';
import {View, StyleSheet} from 'react-native';
import ChatScreen from '../screens/ChatScreen';
import ContactsScreen from '../screens/ContactsScreen';
import MainTabNavigator from './MainTabNavigator';

const Stack = createNativeStackNavigator()

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator  screenOptions={{
                headerStyle: {backgroundColor: 'whitesmoke'}
            }}>
                <Stack.Screen name='Home' component={MainTabNavigator} options={{headerShown: false}}/>
                <Stack.Screen 
                    name='Chat'
                    component={ChatScreen}
                />
                <Stack.Screen 
                    name='Contacts'
                    component={ContactsScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({})

export default Navigation;
