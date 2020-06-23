import React, { Component } from "react";
import {ScrollView, StyleSheet} from "react-native";

import MapView from "react-native-maps";

import {
  Container,
  ContainerDown,
  ContainerUp,
  TextQuestion,
  FirstContainer,
  SecondContainer,
  ContinuarButtom,
  TextFirst,
  FirstText,
  CarImage,
  OtherButtom,
  SmallButtom,
  MapContainer,
  CarButtom,
  LogoPlat,
  StarImage,
} from "./Styles";

import { TextButtom } from "../../../Components/TextButtom";

export default class Pesquisa extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
        <Container>
        <ContainerUp>
         <FirstContainer>
         <SecondContainer>
         <TextFirst>Volkswagen{"\n"}GOLF GTI</TextFirst>
         </SecondContainer>
        <OtherButtom>
        <TextButtom>Cuidados com o carro</TextButtom>
        </OtherButtom>  
         </FirstContainer>

         <FirstContainer>
         <SecondContainer>
         <FirstText>
                    Modelo: 2.0 TSI{"\n"}
                    Câmbio: Automático
        </FirstText>
        </SecondContainer>
        <SecondContainer>
        <FirstText> Aluguel: R$80,00/dia{"\n"}
                    Categoria: Econômico
        </FirstText>
        </SecondContainer>
        </FirstContainer>  
        </ContainerUp>  
        <ContainerDown>
            <CarImage/>
           <TextQuestion>Localização:</TextQuestion>
           <ScrollView>
           <MapContainer>
           <MapView
             style={{ ...StyleSheet.absoluteFillObject }}
             initialRegion={{
             latitude: -1.456652,
             longitude: -48.485174,
             latitudeDelta: 0.01,
             longitudeDelta: 0.04,
          }}
        >

          <MapView.Marker
            coordinate={{ latitude: -1.456652, longitude: -48.485174 }}
          >
            <CarButtom onPress={() => navigate("Carro")}>
              <LogoPlat />
            </CarButtom>
          </MapView.Marker>

        </MapView>
        </MapContainer>
           <FirstContainer>
             <SmallButtom>
              <StarImage />
             </SmallButtom>
            <ContinuarButtom>
            <TextButtom>Reserve</TextButtom>
            </ContinuarButtom>
            </FirstContainer>
            </ScrollView>
        </ContainerDown>
      </Container>
    );
  }
}
