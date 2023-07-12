import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import RegistrodeRutas from "./screens/registrodeRutas";
import InicioScreen from "./screens/inicio";

const Stack = createStackNavigator();

function App(){
    return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName="inicio" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Principal" component={InicioScreen} />
        <Stack.Screen name="Rutas" component={RegistrodeRutas} />
      </Stack.Navigator>
    </NavigationContainer>
    );
  }

export default App;