import styled from "styled-components";

export const Container = styled.View`
  flex: 1;
  background-color: #f4f6f6;
`;

export const ContainerUp = styled.View`
  flex: 1.5;
  flex-direction: row;
  background-color: #93abbf;
  border-bottom-left-radius: 48px;
  border-bottom-right-radius: 48px;
`;

export const ContainerDown = styled.View`
  flex: 4.5;
  background-color: #f4f6f6;
  flex-direction: column;
`;

export const LogoImage = styled.Image.attrs({
  source: require("../../../Images/logo.png"),
  resizeMode: "contain",
  position: "absolute",
})`
  left: 70px;
  top: 60px;
  justify-content: center;
  align-items: center;
  align-self: center;
  width: 65%;
  height: 65%;
`;

export const MainText = styled.Text`
  justify-content: center;
  align-items: center;
  align-self: center;
  margin-top: 27px;
  margin-bottom: 50px;
  font-size: 22px;
  font-weight: bold;
  color: #464646;
`;

export const InputView = styled.TextInput.attrs({
  placeholderTextColor: "#62676d",
  fontSize: 17,
  fontWeight: "bold",
})`
  align-self: center;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: row;
  height: 150px;
  width: 320px;
  border-color: #464646;
  margin-bottom: 30px;
  border-width: 1px;
  border-radius: 10px;
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

export const SecondaryText = styled.Text`
  justify-content: center;
  align-items: center;
  align-self: center;
  margin-top: 70px;
  margin-bottom: 8px;
  font-size: 15px;
  font-weight: bold;
  color: #464646;
`;

/*
#93ABBF
#A5A6A6
#464646
#BABDBF
#93ABBF
#BFA780
#656D74

*/
