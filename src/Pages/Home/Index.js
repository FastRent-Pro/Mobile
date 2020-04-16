import React, { Component } from "react";

import { Container, ContainerDown, ContainerUp, CarImage } from "./Styles";

import { CadastroButtom } from "../../../Components/CadastroButtom";
import { LoginButtom } from "../../../Components/LoginButton";
import { TextButtom } from "../../../Components/TextButtom";

export default class Home extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <ContainerUp></ContainerUp>
        <ContainerDown>
          <CarImage />
          <CadastroButtom onPress={() => navigate("Cadastro")}>
            <TextButtom>Cadastrar</TextButtom>
          </CadastroButtom>
          <LoginButtom>
            <TextButtom>Login</TextButtom>
          </LoginButtom>
        </ContainerDown>
      </Container>
    );
  }
}
