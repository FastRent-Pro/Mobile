import React, { Component } from "react";
import { KeyboardAvoidingView } from "react-native";

import { TextButtom, TextButtomBlack } from "../../../Components/TextButtom";
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
            <TextButtomBlack>Conecte com o Google</TextButtomBlack>
          </GoogleButtom>
        </ContainerDown>
      </Container>
    );
  }
}
