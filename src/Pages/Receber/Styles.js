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
  text-align: center;
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
  margin-top: 30px;
  background-color: #ffff;
  flex-direction: row;
  height: 100px;
  width: 240px;
  border-radius: 30px;
  box-shadow: 5px 5px 5px #62676d;
`;

export const SecondOptionCard = styled.TouchableOpacity`
  align-self: center;
  margin-top: 50px;
  background-color: #656d74;
  flex-direction: row;
  height: 100px;
  width: 240px;
  border-radius: 30px;
  box-shadow: 5px 5px 5px #464646;
`;

export const FirstText = styled.Text`
  text-align: center;
  align-self: center;
  margin-left: 37px;
  font-size: 15px;
  font-weight: bold;
  color: #62676d;
`;

export const SwitchText = styled.Text`
  margin-top: 5px;
  font-size: 16px;
  font-weight: bold;
  color: #62676d;
`;


export const SecondText = styled.Text`
  text-align: center;
  align-self: center;
  margin-left: 48px;
  font-size: 15px;
  font-weight: bold;
  color: #ffff;
`;

export const LoginButtom = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  align-self: center;
  width: 320px;
  height: 50px;
  border-radius: 13px;
  margin-top: 80px;
  margin-bottom: 30px;
  background-color: #646d74;
`;

export const SwitchContainer = styled.View`
 margin-top: 80px;
 text-align: left;
 flex-direction: row;
 justify-content: space-evenly;
 align-items: 'center';

`;

export const FirstDivider = styled.View`
  align-self: center;
  width: 320px;
  margin top: 85px;
  margin-bottom: -73px;
  border-bottom-width: 1px;
  border-bottom-color: #62676d;
`;

export const SecDivider = styled.View`
  align-self: center;
  width: 320px;
  margin-top: 6px
  border-bottom-width: 1px;
  border-bottom-color: #62676d;
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