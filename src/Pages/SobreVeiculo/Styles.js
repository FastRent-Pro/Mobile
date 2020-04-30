import styled from "styled-components";

export const Container = styled.View`
  flex: 1;
  background-color: #f4f6f6;
`;

export const ContainerUp = styled.View`
  flex: 1.1;
  flex-direction: row;
  background-color: #a0b1bf;
  border-bottom-left-radius: 48px;
  border-bottom-right-radius: 48px;
`;

export const ContainerDown = styled.View`
  flex: 4;
  background-color: #f4f6f6;
  flex-direction: column;
`;

export const TextQuestion = styled.Text`
  text-align: center;
  justify-content: center;
  align-items: center;
  align-self: center;
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 22px;
  font-weight: bold;
  color: #62676d;
`;

export const TwoPics = styled.View`
  flex: 2;
  justify-content: center;
  align-items: center;
  align-self: center;
  flex-direction: row;
  margin-top: 18px;
  margin-right: 10px;
  margin-left: 10px;
  height: 170px;
  width: 360px;
`;

export const FirstPics = styled.TouchableOpacity`
  flex: 1;

  justify-content: center;
  margin-right: 1px;
  margin-left: 1px;
  height: 100%;
  width: 100%;
  background-color: #dcdcdc;
`;

export const First = styled.View`
  flex: 1;

  justify-content: center;
  margin-right: 1px;
  margin-left: 1px;
  height: 100%;
  width: 100%;
`;

export const Pic = styled.Image`
  height: 100%;
  width: 100%;
`;

export const ThreePics = styled.View`
  flex: 3;
  justify-content: center;
  align-items: center;
  align-self: center;
  flex-direction: row;
  margin-top: 2px;
  margin-right: 10px;
  margin-left: 10px;
  height: 100px;
  width: 360px;
`;

export const CarImage = styled.Image.attrs({
  source: require("../../../Images/imageCar.png"),
  resizeMode: "contain",
  position: "absolute",
})`
  justify-content: center;
  align-items: center;
  align-self: center;
  width: 30%;
  height: 30%;
`;

export const SecondaryText = styled.Text`
  align-self: center;
  text-align: center;
  margin-top: 35px;
  margin-bottom: 20px;
  font-size: 15px;
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

export const ContinuarButtom = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  align-self: center;
  margin-bottom: 10px;
  width: 320px;
  height: 50px;
  border-radius: 13px;
  background-color: #646d74;
`;
