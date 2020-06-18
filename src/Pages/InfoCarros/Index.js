import React, { Component } from "react";
import { ScrollView } from "react-native";
import { LogoImage } from "../../../Components/Logo";
import { TextButtom } from "../../../Components/TextButtom";

import {
  Container,
  ContainerUp,
  ContainerDown,
  UsuarioInput,
  FirstContainer,
  OtherInput,
  ContinuarButtom,
  ContainerZero,
} from "./Styles";


export default class InfoCarros extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <ContainerUp>
          <LogoImage />
        </ContainerUp>

        <ContainerDown>
          <ScrollView>
            <ContainerZero>
              <OtherInput placeholder="Marca do Carro"></OtherInput>
              <OtherInput placeholder="Ano do Modelo"></OtherInput>
            </ContainerZero>
            <FirstContainer>
              <OtherInput placeholder="Modelo"></OtherInput>
              <OtherInput placeholder="Cor"></OtherInput>
            </FirstContainer>
            <FirstContainer>
              <OtherInput placeholder="Placa do Carro"></OtherInput>
              <OtherInput placeholder="Quilometragem"></OtherInput>
            </FirstContainer>
            <UsuarioInput placeholder="Seguradora Atual"></UsuarioInput>
            <ContinuarButtom onPress={() => navigate("Seguro")}>
              <TextButtom>Continuar</TextButtom>
            </ContinuarButtom>
          </ScrollView>
        </ContainerDown>
      </Container>
    );
  }
}
