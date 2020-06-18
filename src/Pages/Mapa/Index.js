import React, { Component } from "react";
import { ScrollView, Text, View, Image, ImageBackground } from "react-native";

import { Container } from "../../../Components/Container";
import { LogoImage } from "../../../Components/Logo";

import MapView from "react-native-maps";
import {
  LogoPlat,
  LogoGold,
  LogoSilver,
  CarButtom,
  Header,
  Footer,
} from "./Styles";

export default class Mapa extends Component {
  render() {
    return (
      <Container>
        <MapView
          style={{ flex: 2 }}
          initialRegion={{
            latitude: -1.456652,
            longitude: -48.485174,
            latitudeDelta: 0.01,
            longitudeDelta: 0.04,
          }}
        >
          <Header>
            <LogoImage />
          </Header>

          <Footer></Footer>

          <MapView.Marker
            coordinate={{ latitude: -1.456652, longitude: -48.485174 }}
          >
            <CarButtom>
              <LogoPlat />
            </CarButtom>
          </MapView.Marker>

          <MapView.Marker
            coordinate={{ latitude: -1.462492, longitude: -48.489878 }}
          >
            <CarButtom>
              <LogoSilver />
            </CarButtom>
          </MapView.Marker>

          <MapView.Marker
            coordinate={{ latitude: -1.467124, longitude: -48.468715 }}
          >
            <CarButtom>
              <LogoGold />
            </CarButtom>
          </MapView.Marker>

          <MapView.Marker
            coordinate={{ latitude: -1.436268, longitude: -48.490236 }}
          >
            <CarButtom>
              <LogoPlat />
            </CarButtom>
          </MapView.Marker>

          <MapView.Marker
            coordinate={{ latitude: -1.44599, longitude: -48.45437 }}
          >
            <CarButtom>
              <LogoPlat />
            </CarButtom>
          </MapView.Marker>

          <MapView.Marker
            coordinate={{ latitude: -1.433785, longitude: -48.468085 }}
          >
            <CarButtom>
              <LogoSilver />
            </CarButtom>
          </MapView.Marker>

          <MapView.Marker
            coordinate={{ latitude: -1.439969, longitude: -48.479809 }}
          >
            <CarButtom>
              <LogoGold />
            </CarButtom>
          </MapView.Marker>

          <MapView.Marker
            coordinate={{ latitude: -1.451248, longitude: -48.500556 }}
          >
            <CarButtom>
              <LogoGold />
            </CarButtom>
          </MapView.Marker>

          <MapView.Marker
            coordinate={{ latitude: -1.473614, longitude: -48.485973 }}
          >
            <CarButtom>
              <LogoGold />
            </CarButtom>
          </MapView.Marker>

          <MapView.Marker
            coordinate={{ latitude: -1.46623, longitude: -48.48312 }}
          >
            <CarButtom>
              <LogoSilver />
            </CarButtom>
          </MapView.Marker>

          <MapView.Marker
            coordinate={{ latitude: -1.466217, longitude: -48.493801 }}
          >
            <CarButtom>
              <LogoPlat />
            </CarButtom>
          </MapView.Marker>

          <MapView.Marker
            coordinate={{ latitude: -1.451568, longitude: -48.471227 }}
          >
            <CarButtom>
              <LogoSilver />
            </CarButtom>
          </MapView.Marker>

          <MapView.Marker
            coordinate={{ latitude: -1.44705, longitude: -48.491195 }}
          >
            <CarButtom>
              <LogoSilver />
            </CarButtom>
          </MapView.Marker>
        </MapView>
      </Container>
    );
  }
}
