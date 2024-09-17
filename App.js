import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen'; // Adjust path as necessary
import SignUpScreen from './screens/SignUpScreen';
import LoginScreen from './screens/LoginScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ headerShown: false }} // Hide the header if needed
        />
          <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          //options={{ headerShown: false }} // Hide the header if needed
        />
         <Stack.Screen 
          name="SignUP" 
          component={SignUpScreen} 
          //options={{ headerShown: false }} // Hide the header if needed
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
