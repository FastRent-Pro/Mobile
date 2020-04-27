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

export const TextQuestion = styled.Text`
  justify-content: center;
  align-items: center;
  align-self: center;
  margin-top: 30px;
  margin-bottom: 10px;
  font-size: 25px;
  font-weight: bold;
  color: #62676d;
`;

export const FirstOptionCard = styled.TouchableOpacity`
  align-self: center;
  margin-top: 60px;
  background-color: #ffff;
  flex-direction: row;
  height: 70px;
  width: 350px;
  border-radius: 15px;
  box-shadow: 5px 5px 5px #62676d;
`;

export const SecondOptionCard = styled.TouchableOpacity`
  align-self: center;
  margin-top: 50px;
  background-color: #656d74;
  flex-direction: row;
  height: 70px;
  width: 350px;
  border-radius: 15px;
  box-shadow: 5px 5px 5px #464646;
`;

export const ThirdOptionCard = styled.TouchableOpacity`
  align-self: center;
  margin-top: 50px;
  margin-bottom: 10px;
  background-color: #bfa780;
  flex-direction: row;
  height: 70px;
  width: 350px;
  border-radius: 15px;
  box-shadow: 5px 5px 5px #464646;
`;

export const FirstText = styled.Text`
  align-self: center;
  margin-left: 15px;
  font-size: 15px;
  font-weight: bold;
  color: #62676d;
`;

export const CarOneOp = styled.Image.attrs({
  source: require("../../../Images/CarOneOp.png"),
  resizeMode: "stratch",
  position: "absoliute",
})`
  bottom: 55px;
  width: 60%;
  height: 230%;
`;

export const SecondText = styled.Text`
  align-self: center;
  margin-left: 15px;
  font-size: 15px;
  font-weight: bold;
  color: #ffff;
`;

export const CarSecOp = styled.Image.attrs({
  source: require("../../../Images/CarSecOp.png"),
  resizeMode: "stratch",
  position: "absoliute",
})`
  bottom: 55px;
  width: 60%;
  height: 230%;
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
