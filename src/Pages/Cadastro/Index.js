import React, { Component } from "react";
import { KeyboardAvoidingView } from "react-native";

import { TextButtom, TextButtomBlack } from "../../../Components/TextButtom";

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
    return (
      <Container>
        <ContainerUp></ContainerUp>

        <ContainerDown>
          <TextCadastro>Cadastro</TextCadastro>
          <CadastroInput placeholder="Email"></CadastroInput>
          <CadastroInput placeholder="Senha"></CadastroInput>
          <CadastroInput placeholder="Confirmar Senha"></CadastroInput>
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
