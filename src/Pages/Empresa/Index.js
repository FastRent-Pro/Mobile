import React, { Component } from "react";

import { LoginButtom } from "../../../Components/LoginButton";
import { TextButtom } from "../../../Components/TextButtom";
import {
  Container,
  ContainerUp,
  ContainerDown,
  LogoImage,
  MainText,
  CadastroInput,
  SecondaryText,
  InputView,
} from "./Styles";

export default class Empresa extends Component {
  render() {
    return (
      <Container>
        <ContainerUp>
          <LogoImage />
        </ContainerUp>

        <ContainerDown>
          <MainText>Complete o Cadastro da Sua Empresa</MainText>
          <CadastroInput placeholder="Nome da Empresa" />
          <CadastroInput placeholder="E-mail para Contato" />
          <CadastroInput placeholder="CNPJ" />
          <SecondaryText>
            Deixe seu recado que entraremos em conato.{" "}
          </SecondaryText>
          <InputView></InputView>
          <LoginButtom>
            <TextButtom>Enviar</TextButtom>
          </LoginButtom>
        </ContainerDown>
      </Container>
    );
  }
}
