import * as React from 'react';
import {ScrollView} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import * as Constants from 'expo-constants';

import { LogoImage } from "../../../Components/Logo";
import { TextButtom} from "../../../Components/TextButtom";


import {
  bold, 
  Container,
  ContainerUp,
  ContainerDown,
  UsuarioInput,
  OtherInput,
  OtherText,
  ContinuarButtom,
  PhotoContainer,
  FirstContainer,
  SecondContainer,
  ResiImage,
  CNHImage,
  PicView,
  Pic,
  ValiText,
} from "./Styles";

export default class Documentos extends React.Component {
  state = {
    image: null,
    image2: null,
  };

  render() {
    let { image, image2 } = this.state;
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <ContainerUp>
          <LogoImage />
        </ContainerUp>
        <ContainerDown>
            <ScrollView> 
            <UsuarioInput placeholder="Número da CNH"></UsuarioInput>
            <UsuarioInput placeholder="Código de Segurança"></UsuarioInput>
            <OtherInput placeholder="Data de Validade"></OtherInput>
          <FirstContainer>
            <SecondContainer>
                <OtherText>Foto da CNH{"\n"}(aberta)</OtherText>
          <PhotoContainer onPress={this.pickImage}>
          <CNHImage />
          <PicView>
           {image && <Pic source={{ uri: image }}/>}
          </PicView>
          </PhotoContainer>
          </SecondContainer>
          <SecondContainer>
                <OtherText>Foto do Comprovante{"\n"}de Residência</OtherText>
          <PhotoContainer onPress={this.pickImage2}>
          <ResiImage />
          <PicView>
           {image2 && <Pic source={{ uri: image2 }}/>}
          </PicView>
          </PhotoContainer>
          </SecondContainer>
          </FirstContainer>
           <ValiText>
               A validação dos documentos pode demorar até 48h para 
               análise. Trabalhamos para garantir a segurança dos nossos serviços.
           </ValiText>
          <ContinuarButtom onPress={() => navigate("InfoCarros")}>
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
}