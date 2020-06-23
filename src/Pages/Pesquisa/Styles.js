import styled from "styled-components";

export const Container = styled.View`
  flex: 1;
  background-color: #f4f6f6;
`;

export const ContainerUp = styled.View`
  flex: 4.2;
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
  source: require("../../../Images/GTI.png"),
  resizeMode: "stretch",
  position: "absolute",
})`
  justify-content: center;
  align-items: center;
  align-self: center;
  top: -155px;
  width: 60%;
  height: 50%;
`;

export const TextQuestion = styled.Text`
  justify-content: left;
  align-items: left;
  align-self: left;
  margin-top: 20px;
  margin-bottom: 10px;
  margin-left: 15px;
  font-size: 25px;
  font-weight: bold;
  color: #62676d;
`;

export const TextFirst = styled.Text`
  justify-content: center;
  align-items: center;
  align-self: center;
  margin-top: 65px;
  margin-bottom: 10px;
  font-size: 25px;
  color: #ffff;
`;

export const FirstText = styled.Text`
  align-self: center;
  font-size: 10px;
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
  width: 260px;
  height: 50px;
  border-radius: 13px;
  margin-bottom: 10px;
  background-color: #646d74;
`;

export const OtherButtom = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  align-self: center;
  width: 165px;
  height: 50px;
  border-radius: 13px;
  margin-top: 65px;
  background-color: #646d74;
`;

export const SmallButtom = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  align-self: center;
  width: 50px;
  height: 50px;
  border-radius: 14px;
  margin-bottom: 10px;
  background-color: #b9bdc0;
`;

export const CarButtom = styled.TouchableOpacity`
  height: 40px;
  width: 40px;
  position: absolute;
`;

export const LogoPlat = styled.Image.attrs({
    source: require("../../../Images/logoplatcar.png"),
  resizeMode: "stretch",
  position: "absolute",
})`
  height: 40px;
  width: 40px;
`;

export const MapContainer = styled.View`
  overflow: hidden;
  justify-content: center;
  align-items: center;
  align-self: center;
  margin-top: 10px;
  width: 350px;
  height: 150px;
  border-radius: 30px;
`;

export const StarImage = styled.Image.attrs({
    source: require("../../../Images/star.png"),
    resizeMode: "contain",
    position: "absolute",
  })`
    justify-content: center;
    align-items: center;
    align-self: center;
    width: 50%;
    height: 50%;
  `;