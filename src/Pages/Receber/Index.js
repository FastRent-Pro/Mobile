import React, { Component } from "react";
import { ScrollView, Switch } from 'react-native';
import { LogoImage } from "../../../Components/Logo";
import {TextButtom} from "../../../Components/TextButtom";

import {
  Container,
  ContainerUp,
  ContainerDown,
  TextQuestion,
  FirstOptionCard,
  SecondOptionCard,
  FirstText,
  LoginButtom,
  SecondText,
  SwitchText,
  SwitchContainer,
  FirstDivider,
  SecDivider,
} from "./Styles";

export default class Receber extends Component {
  constructor(props) {
    super(props);
    this.state = {switchValue: false}
  }

  toggleSwitch = (value) => {
    this.setState({switchValue: value});
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
          <TextQuestion>Onde o cliente irá{"\n"}receber o seu carro?</TextQuestion>
 
          <FirstOptionCard>
            <FirstText>Levarei o carro até ele.</FirstText>
          </FirstOptionCard>
          <SecondOptionCard>
            <SecondText>Marcarei o endereço{"\n"}pelo chat.</SecondText>
          </SecondOptionCard>
          <FirstDivider />
          <SwitchContainer>
           <SwitchText>Ativar aluguel automático</SwitchText>
           <Switch 
            value = {this.state.switchValue}
            onValueChange = {this.toggleSwitch}
            />
            </SwitchContainer> 
            <SecDivider /> 
          <LoginButtom onPress={() => navigate("Diaria")}>
            <TextButtom>Continuar</TextButtom>
          </LoginButtom>
          </ScrollView>
        </ContainerDown>
      </Container>
    );
  }
}