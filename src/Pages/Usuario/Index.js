import * as React from 'react';
import {Image, ScrollView, View, Button } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import * as Constants from 'expo-constants';

import { LogoImage } from "../../../Components/Logo";
import { TextButtom} from "../../../Components/TextButtom";


import {
  Container,
  ContainerUp,
  ContainerDown,
  UsuarioInput,
  OtherInput,
  ContinuarButtom,
  PhotoContainer,
  CameraImage,
  FirstContainer,
  PicView,
  Pic,
} from "./Styles";

export default class Usuario extends React.Component {
  state = {
    image: null,
  };

  render() {
    let { image } = this.state;
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <ContainerUp>
          <LogoImage />
        </ContainerUp>
        <ContainerDown>
            <ScrollView>
          <PhotoContainer onPress={this._pickImage}>
          <CameraImage />
          <PicView>
           {image && <Pic source={{ uri: image }}/>}
          </PicView>
          </PhotoContainer>
            <UsuarioInput placeholder="Nome"></UsuarioInput>
            <UsuarioInput placeholder="Sobrenome"></UsuarioInput>
          <FirstContainer>
            <OtherInput placeholder="CEP"></OtherInput>
            <OtherInput placeholder="CPF"></OtherInput>
          </FirstContainer>
          <FirstContainer>
            <OtherInput placeholder="UF"></OtherInput>
            <OtherInput placeholder="Cidade"></OtherInput>
          </FirstContainer>
            <UsuarioInput placeholder="Endereço"></UsuarioInput>
          <ContinuarButtom>
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
  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
    });
    console.log(result);
    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };
}