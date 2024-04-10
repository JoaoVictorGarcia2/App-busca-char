import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Main from './pages/main';
import Login from './pages/login';
import Cadastro from './pages/cadastro';
import User from './pages/user';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen
            name="login"
            component={Login}
            options={{
              title: 'LOGIN',
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#00FF00',
              },
              headerTitleStyle: {
                fontWeight: 'bold',
                color: 'black',
              },
            }}
          />
          <Stack.Screen
            name="cadastro"
            component={Cadastro}
            options={{
              title: 'CADASTRO',
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#00FF00',
              },
              headerTitleStyle: {
                fontWeight: 'bold',
                color: 'black',
              },
            }}
          />
        <Stack.Screen
          name="main"
          component={Main}
          options={{
            title: 'Rick-Morty View',
            headerTitleAlign: 'center',
            headerLeft: null,
            headerStyle: {
              backgroundColor: '#00FF00',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
              color: 'black',
            },
          }}
        />
        <Stack.Screen
          name="user"
          component={User}
          options={{
            title: 'Perfil do Usúario',
            headerTitleAlign: 'center',
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#00FF00',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
              color: 'black',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
