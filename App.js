import * as React from 'react';
import Login from './src/screens/Login'
import Home from './src/screens/Home'
import UsuarioEdit from './src/screens/Usuarios/UsuarioEdit'
import UsuarioList from './src/screens/Usuarios/UsuarioList'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SafeAreaProvider } from 'react-native-safe-area-context';


const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <SafeAreaProvider>

      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="UsuarioList" component={UsuarioList} options={{ headerShown: false }} />
          <Stack.Screen name="UsuarioEdit" component={UsuarioEdit} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}