import * as React from "react";
import {ScrollView, Slider} from "react-native";

import { LogoImage } from "../../../Components/Logo";
import { TextButtom } from "../../../Components/TextButtom";

import {
  Container,
  ContainerUp,
  ContainerDown,
  UsuarioInput,
  OtherInput,
  ContinuarButtom,
  FirstContainer,
  SliderCont,
  NumberContainer,
  TextQuestion,
  Texty,
} from "./Styles";

export default class Diaria extends React.Component {
    constructor(props){
     super(props);
     this.state = {
        sliderValue: 150
    };
}

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <ContainerUp>
          <LogoImage />
        </ContainerUp>
        <ContainerDown>
          <ScrollView>
          <TextQuestion>Quanto você espera receber pela{"\n"}diária do aluguel?</TextQuestion>
           <NumberContainer><Texty>{this.state.sliderValue}</Texty></NumberContainer>
           <SliderCont>
           <Slider
            style={{width: '85%'}}
            maximumValue={600}
            minimumValue={0}
            step={10}
            minimumTrackTintColor="#a0b1bf"
            value={this.state.sliderValue}
            onValueChange={value => this.setState({sliderValue: value})}
           />
           </SliderCont>
          <TextQuestion>  Conta bancária para recebimento{"\n"}  do pagamento:</TextQuestion>
            <UsuarioInput placeholder="Nome"></UsuarioInput>
            <UsuarioInput placeholder="CPF"></UsuarioInput>
            <UsuarioInput placeholder="Banco"></UsuarioInput>
            <FirstContainer>
              <OtherInput placeholder="Agência"></OtherInput>
              <OtherInput placeholder="Conta"></OtherInput>
            </FirstContainer>
            <ContinuarButtom>
              <TextButtom>Continuar</TextButtom>
            </ContinuarButtom>
          </ScrollView>
        </ContainerDown>
      </Container>
    );
  }
}
