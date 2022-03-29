import React, { useEffect } from 'react'
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Login from './src/screens/Login'
import Home from './src/screens/Home'
import UsuarioList from './src/screens/Usuarios/UsuarioList'
import UsuarioEdit from './src/screens/Usuarios/UsuarioEdit'
import { NavigationContainer } from '@react-navigation/native'
import { DrawerComponent } from './src/components/DrawerComponent';

const Drawer = createDrawerNavigator();

export default function App() {

  const screensOptions = {
    headerTitleAlign: 'center',
    headerBackTitleVisible: false,
    headerStyle: { backgroundColor: '#1a75c9', height: 90 },
    headerTitleStyle: { color: '#fff', fontSize: 20 },
    backBehavior: 'history',
    drawerHideStatusBarOnOpen: false,
    drawerStatusBarAnimation: 'fade'
  }
  return (

    <NavigationContainer >
      <Drawer.Navigator
        drawerContent={props => <DrawerComponent {...props} />}
        initialRouteName="UsuarioList"
        screenOptions={screensOptions}
        backBehavior='history'
      >
        <Drawer.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false, gestureEnabled: false, swipeEnabled: false }} />
        <Drawer.Screen name="Home" component={Home} options={{ title: 'Home' }} />
        <Drawer.Screen name="UsuarioList" component={UsuarioList} options={{ title: 'Lista de Usuarios' }} />
        <Drawer.Screen name="UsuarioEdit" component={UsuarioEdit} options={{ title: 'Usuario' }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}