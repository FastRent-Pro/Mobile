import styled from "styled-components";

export const Container = styled.View`
  flex: 1;
  background-color: #a0b1bf;
`;

export const ContainerUp = styled.View`
  flex: 3;
  flex-direction: row;
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
  top: -200px;
  align-self: flex-end;
  width: 60%;
  height: 100%;
`;
