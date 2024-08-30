import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import SplashScreen from './src/screens/SplashScreen';
import ProductScreen from './src/screens/ProductScreen';
import {Provider} from 'react-redux';
import Store from './src/redux/Store';
import ListScreen from './src/screens/CartScreen';
import LoginScreen from './src/screens/Login';
import AuthScreen from './src/screens/Auth';
import OTPScreen from './src/screens/OTP';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Auth"
            component={AuthScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="OTP"
            component={OTPScreen}
            options={{headerShown: true}}
          />

          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ProductScreen"
            component={ProductScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="CartScreen"
            component={ListScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
        {/* <LoginScreen /> */}
      </NavigationContainer>
    </Provider>
  );
}
