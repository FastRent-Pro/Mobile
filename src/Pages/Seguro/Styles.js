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

export const OtherContainer = styled.View`
  justify-content: center;
  align-items: center;
  position: absolute;
  align-self: center;
  margin-top: 80px;
  flex-direction: row;
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
  margin-top: 80px;
  background-color: #a4aca4;
  flex-direction: row;
  height: 70px;
  width: 350px;
  border-radius: 15px;
  box-shadow: 5px 5px 5px #62676d;
`;

export const SecondOptionCard = styled.TouchableOpacity`
  align-self: center;
  margin-top: 100px;
  background-color: #d4c289;
  flex-direction: row;
  height: 70px;
  width: 350px;
  border-radius: 15px;
  box-shadow: 5px 5px 5px #464646;
`;

export const ThirdOptionCard = styled.TouchableOpacity`
  align-self: center;
  margin-top: 100px;
  background-color: #a0a0a0;
  flex-direction: row;
  height: 70px;
  width: 350px;
  border-radius: 15px;
  box-shadow: 5px 5px 5px #464646;
`;

export const FirstText = styled.Text`
  align-self: center;
  font-size: 12px;
  font-weight: bold;
  color: #62676d;
`;

export const CarOneOp = styled.Image.attrs({
  source: require("../../../Images/Platinum.png"),
  position: "absoliute",
})`
bottom: 80px;
width: 40%;
height: 200%;
`;

export const CarSecOp = styled.Image.attrs({
  source: require("../../../Images/Gold.png"),
  position: "absoliute",
})`
bottom: 80px;
width: 40%;
height: 200%;
`;

export const CarThirdOp = styled.Image.attrs({
    source: require("../../../Images/Silver.png"),
    position: "absoliute",
  })`
  bottom: 80px;
  width: 40%;
  height: 200%;
  `;

export const LoginButtom = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  align-self: center;
  width: 320px;
  height: 50px;
  border-radius: 13px;
  margin-top: 60px;
  margin-bottom: 30px;
  background-color: #646d74;
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
