import styled from "styled-components";

import logoplat from "../../../Images/logoplatcar.png";
import logogold from "../../../Images/logogoldcar.png";
import logosilver from "../../../Images/logosilvercar.png";
import home from "../../../Images/casa.png";
import search from "../../../Images/bussola.png";
import profile from "../../../Images/perfil.png";

export const Header = styled.View`
  flex: 0.2;
  flex-direction: row;
  background-color: #a0b1bf;
  border-bottom-left-radius: 48px;
  border-bottom-right-radius: 48px;
`;

export const Footer = styled.View`
  flex: 1;
  flex-direction: row;
  position: absolute;
  align-self: center;
  align-items: center;
  bottom: 0px;
  height: 80px;
  width: 80%;
  margin-bottom: 20px;
  background-color: #f4f6f6;
  border-radius: 48px;
`;

export const LeftNavButtom = styled.TouchableOpacity`
  flex: 2;
  height: 100%;
  width: 100%;
  align-items: center;
  border-right-width: 0.5px;
  border-color: #bbb6b6;
  border-top-left-radius: 48px;
  border-bottom-left-radius: 48px;
`;

export const MiddletNav = styled.TouchableOpacity`
  flex: 2;
  height: 100%;
  width: 100%;
  border-right-width: 0.5px;
  border-color: #bbb6b6;
`;

export const RightNav = styled.TouchableOpacity`
  flex: 2;
  height: 100%;
  width: 100%;
  border-top-right-radius: 48px;
  border-bottom-right-radius: 48px;
`;

export const LogoHome = styled.Image.attrs({
  source: home,
  resizeMode: "contain",
})`
  align-self: center;
  margin-top: 20px;
  height: 38px;
  width: 38px;
`;

export const LogoSearch = styled.Image.attrs({
  source: search,
  resizeMode: "contain",
})`
  align-self: center;
  margin-top: 23px;
  height: 40px;
  width: 40px;
`;

export const LogoProfile = styled.Image.attrs({
  source: profile,
  resizeMode: "contain",
})`
  align-self: center;
  margin-top: 23px;
  height: 40px;
  width: 40px;
`;

export const CarButtom = styled.TouchableOpacity`
  height: 40px;
  width: 40px;
`;

export const LogoPlat = styled.ImageBackground.attrs({
  source: logoplat,
  resizeMode: "stretch",
  position: "absolute",
})`
  height: 40px;
  width: 40px;
`;

export const LogoGold = styled.ImageBackground.attrs({
  source: logogold,
  resizeMode: "stretch",
  position: "absolute",
})`
  height: 40px;
  width: 40px;
`;

export const LogoSilver = styled.ImageBackground.attrs({
  source: logosilver,
  resizeMode: "stretch",
  position: "absolute",
})`
  height: 40px;
  width: 40px;
`;
