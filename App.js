import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./src/Pages/Home/Index";
import Cadastro from "./src/Pages/Cadastro/Index";
import Login from "./src/Pages/Login/Index";
import TipoCliente from "./src/Pages/TipoCliente/Index";
import Empresa from "./src/Pages/Empresa/Index";
import Receber from "./src/Pages/Receber/Index";
import Seguro from "./src/Pages/Seguro/Index";
import Usuario from "./src/Pages/Usuario/Index";
import InfoCarros from "./src/Pages/InfoCarros/Index";
import SobreVeiculo from "./src/Pages/SobreVeiculo/Index";

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
        <Stack.Screen name="Receber" component={Receber} />
        <Stack.Screen name="InfoCarros" component={InfoCarros} />
        <Stack.Screen name="Seguro" component={Seguro} />
        <Stack.Screen name="SobreVeiculo" component={SobreVeiculo} />
        <Stack.Screen name="Usuario" component={Usuario} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
