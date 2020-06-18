import styled from "styled-components";

export const Container = styled.View`
  flex: 1;
  background-color: #f4f6f6;
`;

export const ContainerUp = styled.View`
  flex: 2.5;
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

export const CarImage = styled.Image.attrs({
  source: require("../../../Images/CarOneOp.png"),
  resizeMode: "stretch",
  position: "absolute",
})`
  right: 0px;
  left: 100px
  top: -180px;
  align-self: flex-end;
  width: 100%;
  height: 70%;
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

export const TextQuestion = styled.Text`
  justify-content: left;
  align-items: left;
  align-self: left;
  margin-top: 30px;
  margin-bottom: 10px;
  margin-left: 15px;
  font-size: 25px;
  font-weight: bold;
  color: #62676d;
`;

export const TextFirst = styled.Text`
  justify-content: left;
  align-items: left;
  align-self: left;
  margin-top: 80px;
  margin-bottom: 10px;
  margin-left: 25px;
  font-size: 25px;
  font-weight: bold;
  color: #ffff;
`;

export const FirstText = styled.Text`
  align-self: center;
  margin-left: 15px;
  font-size: 15px;
  font-weight: bold;
  color: #62676d;
`;

export const SecondText = styled.Text`
  align-self: center;
  margin-left: 15px;
  font-size: 15px;
  font-weight: bold;
  color: #ffff;
`;

export const CarOneOp = styled.Image.attrs({
    source: require("../../../Images/CarOneOp.png"),
    resizeMode: "stretch",
    position: "absolute",
  })`
    margin-left: 100px;
    bottom: 55px;
    width: 100%;
    height: 50%;
  `;

export const CarSecOp = styled.Image.attrs({
    source: require("../../../Images/CarSecOp.png"),
    resizeMode: "stretch",
    position: "absoliute",
  })`
    bottom: 55px;
    width: 60%;
    height: 230%;
  `;
  
  export const CarThirdOp = styled.Image.attrs({
    source: require("../../../Images/CarThrOp.png"),
    resizeMode: "stretch",
    position: "absoliute",
  })`
    bottom: 55px;
    width: 70%;
    height: 230%;
  `;

  export const FirstContainer = styled.View`
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const SecondContainer = styled.View`
  align-items: center;
`;

export const ContinuarButtom = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  align-self: center;
  width: 150px;
  height: 50px;
  border-radius: 13px;
  margin-bottom: 10px;
  background-color: #646d74;
`;