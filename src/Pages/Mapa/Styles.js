import styled from "styled-components";

import logoplat from "../../../Images/logoplatcar.png";
import logogold from "../../../Images/logogoldcar.png";
import logosilver from "../../../Images/logosilvercar.png";

export const Header = styled.View`
  flex: 0.2;
  flex-direction: row;
  background-color: #a0b1bf;
  border-bottom-left-radius: 48px;
  border-bottom-right-radius: 48px;
`;

export const Footer = styled.View`
  flex: 0.1;
  position: absolute;
  bottom: 0px;
  height: 90px;
  width: 100%;
  background-color: #f4f6f6;
  border-top-left-radius: 48px;
  border-top-right-radius: 48px;
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
