import React, { Component } from "react";

import { LogoImage } from "../../../Components/Logo";

import {
  Container,
  ContainerUp,
  ContainerDown,
  TextQuestion,
  FirstOptionCard,
  SecondOptionCard,
  ThirdOptionCard,
  FirstText,
  CarOneOp,
  SecondText,
  CarSecOp,
} from "./Styles";

export default class TipoCliente extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <ContainerUp>
          <LogoImage />
        </ContainerUp>

        <ContainerDown>
          <TextQuestion>Com o FastRent você deseja:</TextQuestion>

          <FirstOptionCard>
            <FirstText>Alugar os Melhores Carros</FirstText>
            <CarOneOp />
          </FirstOptionCard>
          <SecondOptionCard>
            <SecondText>
              Anunciar Meu Carro e Receber{"\n"}as Melhores Ofertas
            </SecondText>
            <CarSecOp />
          </SecondOptionCard>
          <ThirdOptionCard onPress={() => navigate("Empresa")}>
            <SecondText>
              Como Empresa, Desejo{"\n"}Cadastrar meus veículos{"\n"}ou Contatar
              para Parcerias
            </SecondText>
            <CarSecOp />
          </ThirdOptionCard>
        </ContainerDown>
      </Container>
    );
  }
}
