import React, { Component } from "react";
import { ScrollView } from "react-native";
import { LogoImage } from "../../../Components/Logo";
import { TextButtom } from "../../../Components/TextButtom";

import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import * as Constants from 'expo-constants';


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
  First,
  Pic
} from "./Styles";

export default class SobreVeiculo extends React.Component {
  state = {
    image: null,
    image2: null,
    image3: null, 
    image4: null,
    image5: null,
  };
  render() {
    let { image, image2, image3, image4, image5 } = this.state;
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
              <FirstPics onPress={this.pickImage}>
                <CarImage />
                <First>
                  {image && <Pic source={{ uri: image }}/>}
                </First>
              </FirstPics>
              <FirstPics onPress={this.pickImage2}>
                <CarImage />
                <First>
                  {image2 && <Pic source={{ uri: image2 }}/>}
                </First>
              </FirstPics>
            </TwoPics>
            <ThreePics>
              <FirstPics onPress={this.pickImage3}>
                <CarImage />
                <First>
                  {image3 && <Pic source={{ uri: image3 }}/>}
                </First>
              </FirstPics>
              <FirstPics onPress={this.pickImage4}>
                <CarImage />
                <First>
                  {image4 && <Pic source={{ uri: image4 }}/>}
                </First>
              </FirstPics>
              <FirstPics onPress={this.pickImage5}>
                <CarImage />
                <First>
                  {image5 && <Pic source={{ uri: image5 }}/>}
                </First>
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
  //Métodos para o expo-ImagePicker
  componentDidMount() {
    this.getPermissionAsync();
  }
  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sinto muito, nós precisamos de permissão para acessar suas fotos.');
      }
    }
  }
  pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
    });
    console.log(result);
    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };

  pickImage2 = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
    });
    console.log(result);
    if (!result.cancelled) {
      this.setState({ image2: result.uri });
    }
  };
  pickImage3 = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
    });
    console.log(result);
    if (!result.cancelled) {
      this.setState({ image3: result.uri });
    }
  };
  pickImage4 = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
    });
    console.log(result);
    if (!result.cancelled) {
      this.setState({ image4: result.uri });
    }
  };
  pickImage5 = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
    });
    console.log(result);
    if (!result.cancelled) {
      this.setState({ image5: result.uri });
    }
  };
}

