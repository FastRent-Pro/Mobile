import styled from "styled-components";

export const LogoImage = styled.Image.attrs({
  source: require("../Images/logo.png"),
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
