import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./src/Pages/Home/Index";
import Cadastro from "./src/Pages/Cadastro/Index";
import Login from "./src/Pages/Login/Index";
import TipoCliente from "./src/Pages/TipoCliente/Index";
import Empresa from "./src/Pages/Empresa/Index";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="TipoCliente" component={TipoCliente} />
        <Stack.Screen name="Empresa" component={Empresa} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
