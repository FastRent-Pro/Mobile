import React, { Component } from "react";
import { ScrollView } from "react-native";
import { LogoImage } from "../../../Components/Logo";
import { TextButtom } from "../../../Components/TextButtom";

import {
  Container,
  ContainerUp,
  ContainerDown,
  TextQuestion,
  TwoPics,
  FirstPics,
  ThreePics,
  CarImage,
  SecondaryText,
  InputView,
  ContinuarButtom,
} from "./Styles";

export default class SobreVeiculo extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <ContainerUp>
          <LogoImage />
        </ContainerUp>

        <ContainerDown>
          <ScrollView>
            <TextQuestion>
              Adicione fotos do seu veículo{"\n"} para incentivar o aluguel!
            </TextQuestion>
            <TwoPics>
              <FirstPics>
                <CarImage />
              </FirstPics>
              <FirstPics>
                <CarImage />
              </FirstPics>
            </TwoPics>
            <ThreePics>
              <FirstPics>
                <CarImage />
              </FirstPics>
              <FirstPics>
                <CarImage />
              </FirstPics>
              <FirstPics>
                <CarImage />
              </FirstPics>
            </ThreePics>
            <SecondaryText>
              Conte para os clientes como você cuida do seu carro e como espera
              que o façam.
            </SecondaryText>
            <InputView></InputView>
            <ContinuarButtom onPress={() => navigate("Receber")}>
              <TextButtom>Continuar</TextButtom>
            </ContinuarButtom>
          </ScrollView>
        </ContainerDown>
      </Container>
    );
  }
}
