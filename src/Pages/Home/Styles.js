import styled from "styled-components";

export const Container = styled.View`
  flex: 1;
  background-color: #f4f6f6;
`;

export const ContainerUp = styled.View`
  flex: 2.5;
  flex-direction: column;
  background-color: #a0b1bf;
  border-bottom-left-radius: 48px;
  border-bottom-right-radius: 48px;
`;
export const ContainerUp_one = styled.View`
  flex: 4;
  flex-direction: row;
  background-color: #a0b1bf;
  border-bottom-left-radius: 48px;
  border-bottom-right-radius: 48px;
`;
export const ContainerUp_two = styled.View`
  flex: 2;
  flex-direction: row-reverse;
  background-color: #a0b1bf;
  border-bottom-left-radius: 48px;
  border-bottom-right-radius: 48px;
`;

export const ContainerDown = styled.View`
  flex: 3;
  background-color: #f4f6f6;
  flex-direction: column-reverse;
`;

export const CarImage = styled.Image.attrs({
  source: require("../../../Images/carvolks.png"),
  resizeMode: "stretch",
  position: "absolute",
})`
  right: 0px;
  top: -120px;
  align-self: flex-end;
  width: 50%;
  height: 90%;
`;

export const UpBall = styled.View`
  background-color: #b9bdc0;
  margin-bottom: 20;
  right: 100px;
  bottom: 100px;
  height: 240px;
  width: 255px;
  align-self: flex-start;
  border-radius: 300px;
`;

export const DownBall = styled.View`
  background-color: #646d74;
  right: 140px;
  height: 240px;
  width: 240px;
  top: 70px;
  align-self: flex-end;
  border-radius: 200px;
`;

export const LogoImage = styled.Image.attrs({
  source: require("../../../Images/logo.png"),
  resizeMode: "contain",
  position: "absolute",
})`
  left: 70px;
  top: 100px;
  justify-content: center;
  align-items: center;
  align-self: center;
  width: 65%;
  height: 65%;
`;