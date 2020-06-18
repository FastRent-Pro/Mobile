import React, { Component } from "react";
import {ScrollView} from "react-native";

import {
  Container,
  ContainerDown,
  ContainerUp,
  TextQuestion,
  FirstContainer,
  SecondContainer,
  ThirdOptionCard,
  SecondOptionCard,
  ContinuarButtom,
  TextFirst,
  FirstText,
  SecondText,
  CarOneOp,
  CarSecOp,
  CarThirdOp,
  CarImage,
} from "./Styles";

import { TextButtom } from "../../../Components/TextButtom";

export default class Home extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <ContainerUp>
         <TextFirst>Volkswagen{"\n"}GOLF GTI</TextFirst>
        </ContainerUp>
        <ContainerDown>
         <CarImage />
           <TextQuestion>Detalhes do carro:</TextQuestion>
           <FirstContainer>
               <SecondContainer>
               <FirstText>Modelo: 2.0 TSI{"\n"}
                          Câmbio: Automático{"\n"}
                          Categoria: Econômico
                </FirstText>
               </SecondContainer>
               <ContinuarButtom>
               <TextButtom>Veja mais detalhes</TextButtom>
               </ContinuarButtom>
               </FirstContainer> 
           <TextQuestion>Outros carros próximos a você: </TextQuestion>
           <ScrollView>
           <SecondOptionCard>
            <SecondText>
              Volkswagen Arteon{"\n"}2.0T SE{"\n"}Plano Platinum
            </SecondText>
            <CarSecOp />
          </SecondOptionCard>
          <ThirdOptionCard>
            <SecondText>
              Volkswagen Tiguan{"\n"}R-Line{"\n"}Plano Gold
            </SecondText>
            <CarThirdOp />
          </ThirdOptionCard>
          </ScrollView>
        </ContainerDown>
      </Container>
    );
  }
}
