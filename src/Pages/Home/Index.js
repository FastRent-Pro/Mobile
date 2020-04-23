import React, { Component } from "react";

import {
  Container,
  ContainerDown,
  ContainerUp,
  CarImage,
  DownBall,
  UpBall,
  ContainerUp_one,
  ContainerUp_two,
  LogoImage,
} from "./Styles";

import { CadastroButtom } from "../../../Components/CadastroButtom";
import { LoginButtom } from "../../../Components/LoginButton";
import { TextButtom } from "../../../Components/TextButtom";

export default class Home extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <ContainerUp>
          <ContainerUp_one>
            <UpBall />
            <LogoImage />
          </ContainerUp_one>
          <ContainerUp_two>
            <DownBall />
          </ContainerUp_two>
        </ContainerUp>
        <ContainerDown>
          <CarImage />
          <CadastroButtom onPress={() => navigate("Cadastro")}>
            <TextButtom>Cadastrar</TextButtom>
          </CadastroButtom>
          <LoginButtom onPress={() => navigate("Login")}>
            <TextButtom>Login</TextButtom>
          </LoginButtom>
        </ContainerDown>
      </Container>
    );
  }
}
