import React from "react";
import {
  Card,
  ListItem,
  Button,
  Icon,
  Divider,
  Avatar
} from "react-native-elements";

import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import { classes } from "./styles";

export default function Profile() {
  // const navigationOptions = {
  //   title: "Profile"
  // };

  return (
    <View style={classes.root}>
      <View style={classes.modulo}>
        <TouchableOpacity
          onPress={() => {
            alert("aqui");
          }}
        >
          <ImageBackground
            source={require("../../assets/img/personData.png")}
            style={{ width: "100%", height: "100%" }}
            onPress={() => {
              alert("You tapped the button!");
            }}
          >
            <View
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                alignItems: "center"
              }}
            >
              <Text
                style={{
                  fontFamily: "roboto",
                  fontSize: 26,
                  fontWeight: "bold",
                  color: "#ffffff",
                  marginTop: 20
                }}
              >
                DADOS PESSOAIS
              </Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      </View>
      <Divider style={{ backgroundColor: "#ffffff" }} />
      <View style={classes.modulo}>
        <TouchableOpacity
          onPress={() => {
            alert("aqui");
          }}
        >
          <ImageBackground
            source={require("../../assets/img/abilities.jpg")}
            style={{ width: "100%", height: "100%" }}
            onPress={() => {
              alert("You tapped the button!");
              console.log("teste curriculo");
            }}
          >
            <View
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                alignItems: "center"
              }}
            >
              <Text
                style={{
                  fontFamily: "roboto",
                  fontSize: 26,
                  fontWeight: "bold",
                  color: "#ffffff",
                  marginTop: 20
                }}
              >
                CURRICULO
              </Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      </View>
      <Divider style={{ backgroundColor: "#ffffff" }} />
      <View style={classes.modulo}>
        <TouchableOpacity
          onPress={() => {
            alert("aqui");
          }}
        >
          <ImageBackground
            source={require("../../assets/img/interest.png")}
            style={{
              width: "100%",
              height: "100%"
            }}
            onPress={() => {
              alert("You tapped the button!");
            }}
          >
            <View
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                alignItems: "center"
              }}
            >
              <Text
                style={{
                  fontFamily: "roboto",
                  fontSize: 26,
                  fontWeight: "bold",
                  color: "#ffffff",
                  marginTop: 20
                }}
              >
                INTERESSES
              </Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    </View>
  );
}
