import styled from "styled-components";

export const Container = styled.View`
  flex: 1;
  background-color: #f4f6f6;
`;

export const ContainerUp = styled.View`
  flex: 1.5;
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

export const FirstContainer = styled.View`
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const UsuarioInput = styled.TextInput.attrs({
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

export const OtherInput = styled.TextInput.attrs({
  placeholderTextColor: "#62676d",
  fontSize: 17,
  fontWeight: "bold",
})`
  justify-content: center;
  align-items: center;
  align-self: center;
  margin-top: 15px;
  width: 148px;
  height: 50px;
  border-bottom-width: 1px;
  border-bottom-color: #62676d;
`;

export const ContinuarButtom = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  align-self: center;
  width: 320px;
  height: 50px;
  border-radius: 13px;
  margin-top: 60px;
  margin-bottom: 10px;
  background-color: #646d74;
`;


export const TextQuestion = styled.Text`
  justify-content: center;
  align-items: center;
  align-self: center;
  margin-top: 30px;
  margin-bottom: 10px;
  font-size: 21px;  
  font-weight: bold;
  color: #62676d;
`;

export const Texty = styled.Text`
  justify-content: center;
  align-items: center;
  align-self: center;
  font-size: 13px;  
  font-weight: bold;
  color: #ffff;
`;

export const SliderCont = styled.View`
 align-items: center;
`;

export const NumberContainer = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  align-self: center;
  margin-top: 10px;
  margin-bottom: 13px;
  background-color: #646d74;
  height: 40px;
  width: 40px;
  border-radius: 50px;
`;

