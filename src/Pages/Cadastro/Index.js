import React, { Component } from "react";
import { KeyboardAvoidingView } from "react-native";
import { ScrollView } from "react-native";

import { TextButtom, TextButtomGrey } from "../../../Components/TextButtom";
import { LogoImage } from "../../../Components/Logo";

import {
  Container,
  ContainerUp,
  ContainerDown,
  TextCadastro,
  CadastroInput,
  LoginButtom,
  FacebookButtom,
  GoogleButtom,
  FacebookLogo,
  GoogleLogo,
} from "./Styles";

export default class Cadastro extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <ContainerUp>
          <LogoImage />
        </ContainerUp>
        <ContainerDown>
          <ScrollView>
          <TextCadastro>Cadastro</TextCadastro>
          <CadastroInput placeholder="Email"></CadastroInput>
          <CadastroInput placeholder="Senha"></CadastroInput>
          <CadastroInput placeholder="Confirmar Senha"></CadastroInput>
          <LoginButtom onPress={() => navigate("TipoCliente")}>
            <TextButtom>Cadastrar</TextButtom>
          </LoginButtom>
          <FacebookButtom>
            <FacebookLogo />
            <TextButtom>Conecte com o Facebook</TextButtom>
          </FacebookButtom>
          <GoogleButtom>
            <GoogleLogo />
            <TextButtomGrey>Conecte com o Google</TextButtomGrey>
          </GoogleButtom>
          </ScrollView>
        </ContainerDown>
      </Container>
    );
  }
}
