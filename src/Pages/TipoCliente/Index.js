import React, { Component } from "react";
import { ScrollView } from 'react-native';
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
          <ScrollView>
          <TextQuestion>Com o FastRent você deseja:</TextQuestion>

          <FirstOptionCard onPress={() => navigate("Usuario")}>
            <FirstText>Alugar os Melhores Carros</FirstText>
            <CarOneOp />
          </FirstOptionCard>
          <SecondOptionCard onPress={() => navigate("Usuario")}>
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
          </ScrollView>
        </ContainerDown>
      </Container>
    );
  }
}
