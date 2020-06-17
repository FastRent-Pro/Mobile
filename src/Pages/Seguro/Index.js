import React, { Component } from "react";
import { ScrollView } from "react-native";
import { LogoImage } from "../../../Components/Logo";
import { TextButtom } from "../../../Components/TextButtom";
import {
  PlatText,
  GoldText,
  SilverText,
} from "../../../Components/InsuranceText";

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
  CarSecOp,
  CarThirdOp,
  LoginButtom,
  OtherContainer,
} from "./Styles";

export default class Seguro extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <ContainerUp>
          <LogoImage />
        </ContainerUp>

        <ContainerDown>
          <ScrollView>
            <TextQuestion>Qual plano de seguro{"\n"}         você deseja?</TextQuestion>
            <FirstOptionCard onPress={() => navigate("SobreVeiculo")}>
              <OtherContainer>
                <PlatText>Platinum</PlatText>
              </OtherContainer>
              <CarOneOp />
              <FirstText>
                O melhor plano de seguro.{"\n"}Você recebe 75% do valor final.{" "}
              </FirstText>
            </FirstOptionCard>
            <SecondOptionCard onPress={() => navigate("SobreVeiculo")}>
              <OtherContainer>
                <GoldText>Gold</GoldText>
              </OtherContainer>
              <CarSecOp />
              <FirstText>
                Segundo melhor plano de seguro.{"\n"}Você recebe 85% do valor
                final.
              </FirstText>
            </SecondOptionCard>
            <ThirdOptionCard onPress={() => navigate("SobreVeiculo")}>
              <OtherContainer>
                <SilverText>Silver</SilverText>
              </OtherContainer>
              <CarThirdOp />
              <FirstText>
                Terceiro melhor plano de seguro.{"\n"}Você recebe 90% do valor
                final.
              </FirstText>
            </ThirdOptionCard>
          </ScrollView>
        </ContainerDown>
      </Container>
    );
  }
}
