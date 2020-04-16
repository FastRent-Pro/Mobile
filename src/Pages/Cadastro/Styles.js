import styled from "styled-components";

export const Container = styled.View`
  flex: 1;
  background-color: #f4f6f6;
`;

export const ContainerUp = styled.View`
  flex: 2.3;
  flex-direction: row;
  background-color: #a0b1bf;
  border-bottom-left-radius: 48px;
  border-bottom-right-radius: 48px;
`;

export const ContainerDown = styled.View`
  flex: 3.7;
  background-color: #f4f6f6;
  flex-direction: column;
`;

export const TextCadastro = styled.Text`
  justify-content: center;
  align-items: center;
  align-self: center;
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 25px;
  font-weight: bold;
  color: #62676d;
`;

export const CadastroInput = styled.TextInput.attrs({
  placeholderTextColor: "#62676d",
  fontSize: 17,
  fontWeight: "bold",
})`
  justify-content: center;
  align-items: center;
  align-self: center;
  margin-top: 20px;
  width: 320px;
  height: 50px;
  border-bottom-width: 1px;
  border-bottom-color: #62676d;
`;

export const LoginButtom = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  align-self: center;
  width: 320px;
  height: 50px;
  border-radius: 13px;
  margin-top: 40px;
  margin-bottom: 10px;
  background-color: #646d74;
`;

export const FacebookButtom = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  align-self: center;
  width: 320px;
  height: 50px;
  border-radius: 13px;
  margin-top: 30px;
  background-color: #3c5c94;
`;

export const GoogleButtom = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  align-self: center;
  width: 320px;
  height: 50px;
  border-radius: 13px;
  margin-top: 10px;
  background-color: #ffffff;
`;

export const FacebookLogo = styled.Image.attrs({
  source: require("../../../Images/facebooklogo.png"),
  resizeMode: "contain",
  position: "absolute",
})`
  border-radius: 100px;
  left: -128px;
  align-self: flex-end;
  width: 100%;
  height: 95%;
`;

export const GoogleLogo = styled.Image.attrs({
  source: require("../../../Images/googlelogo.png"),
  resizeMode: "contain",
  position: "absolute",
})`
  border-radius: 100px;
  left: -85px;
  align-self: flex-end;
  width: 75%;
  height: 75%;
`;
