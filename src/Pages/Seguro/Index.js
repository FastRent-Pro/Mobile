import React, { Component } from "react";
import { ScrollView } from 'react-native';

import { TextButtom} from "../../../Components/TextButtom";

import {
  LogoImage,
  Container,
  ContainerUp,
  ContainerDown,
  TextQuestion,
  FirstOptionCard,
  SecondOptionCard,
  ThirdOptionCard,
  FirstText,
  CarOneOp,
  CarSecOp,
  CarThirdOp,
  LoginButtom,
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
          <TextQuestion>Qual plano de seguro você deseja?</TextQuestion>

          <FirstOptionCard>
          <CarOneOp />
            <FirstText>
              O melhor plano de seguro.{"\n"}Você recebe 75% do valor final. </FirstText>
          </FirstOptionCard>
          <SecondOptionCard>
          <CarSecOp />
            <FirstText>
              Segundo melhor plano de seguro.{"\n"}Você recebe 85% do valor final.
            </FirstText>
          </SecondOptionCard>
          <ThirdOptionCard>
            <CarThirdOp />
            <FirstText>
             Terceiro melhor plano de seguro.{"\n"}Você recebe 90% do valor final.
            </FirstText>
          </ThirdOptionCard>
          <LoginButtom>
            <TextButtom>Continuar</TextButtom>
          </LoginButtom>
          </ScrollView>
        </ContainerDown>
      </Container>
    );
  }
}
