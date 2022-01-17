import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import StartScreen from './Screen/StartScreen'
import Signin from './Screen/Signin';
import Signup from './Screen/Signup';
import Dashboard from './Screen/Dashboard';
const Stack = createStackNavigator()
export default function App() {

  return (
    <NavigationContainer>
        <Stack.Navigator
          initialRouteName="StartScreen"
          screenOptions={{
            headerShown: false,
          }}
          >
        
          <Stack.Screen name="StartScreen" component={StartScreen} />  
          <Stack.Screen name="Signin" component={Signin} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          {/* <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="TabNav" component={TabNav} /> */}
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});
