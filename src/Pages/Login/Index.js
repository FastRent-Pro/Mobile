import React, { Component } from "react";
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
  LeftText,
} from "./Styles";

export default class Login extends Component {
  render() {
    return (
      <Container>
        <ContainerUp>
          <LogoImage />
        </ContainerUp>

        <ContainerDown>
          <ScrollView>
          <TextCadastro>Login</TextCadastro>
          <CadastroInput placeholder="Email"></CadastroInput>
          <CadastroInput placeholder="Senha"></CadastroInput>
          <LeftText>Esqueceu a senha?</LeftText>
          <LoginButtom>
            <TextButtom>Entrar</TextButtom>
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
