import Reactotron from "reactotron-react-native";
import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground } from "react-native";
import { Card, Button, Avatar } from "react-native-elements";
import Icon from "react-native-vector-icons/Ionicons";
const imagem = [
  require("../../../assets/img/background/travel/0.jpg"),
  require("../../../assets/img/background/travel/1.jpg"),
  require("../../../assets/img/background/travel/2.jpg"),
  require("../../../assets/img/background/travel/3.jpg"),
  require("../../../assets/img/background/travel/4.jpg"),
  require("../../../assets/img/background/travel/5.jpg"),
  require("../../../assets/img/background/travel/6.jpg"),
  require("../../../assets/img/background/travel/7.jpg"),
  require("../../../assets/img/background/travel/8.jpg"),
  require("../../../assets/img/background/travel/9.jpg"),
  require("../../../assets/img/background/travel/10.jpg"),
  require("../../../assets/img/background/travel/11.jpg"),
  require("../../../assets/img/background/travel/12.jpg"),
  require("../../../assets/img/background/travel/13.jpg"),
  require("../../../assets/img/background/travel/14.jpg"),
  require("../../../assets/img/background/travel/15.jpg"),
  require("../../../assets/img/background/travel/16.jpg"),
  require("../../../assets/img/background/travel/17.jpg"),
  require("../../../assets/img/background/travel/18.jpg"),
  require("../../../assets/img/background/travel/19.jpg"),
  require("../../../assets/img/background/travel/20.jpg"),
];

function getRandom(max) {
  return Math.floor(Math.random() * max + 1);
}

export default function DadosPessoais({ navigation }) {
  Reactotron.log(navigation);
  const num = getRandom(20);
  Reactotron.log(imagem[num]);
  return (
    <View>
      <ImageBackground
        source={imagem[getRandom(20)]}
        style={{ width: "100%", height: "100%" }}
      >
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "transparent",
          }}
        >
          <Card
            // title={"item.title"}
            // image={<Avatar size="xlarge" rounded source={imagem[num]} showAccessory />}
            // imageStyle={{ height: 150, borderRadius: 25 }}
            containerStyle={{
              height: "60%",
              width: "95%",
              marginBottom: 55,
              borderRadius: 10,
              opacity: 0.7,
              // backgroundColor: "transparent",
            }}
          >
            <View
              style={{
                // flex: 1,
                alignItems: "center",
                justifyContent: "center",
                // backgroundColor: "transparent",
              }}
            >
              <Avatar
                size="xlarge"
                rounded
                source={require("../../../assets/img/imageProfile/lucaslimoni.png")}
                showEditButton
              />
            </View>
            <View>
              <Text
                style={{
                  marginBottom: "1%",
                  alignSelf: "center",
                }}
              >
                {"Lucas Limoni"}
              </Text>
              <Text
                style={{
                  marginBottom: "1%",
                  alignSelf: "center",
                }}
              >
                {"limonilucas@gmail.com`"}
              </Text>
              <Text
                style={{
                  marginBottom: "1%",
                  alignSelf: "center",
                }}
              >
                {"+55(41)98855-4903"}
              </Text>
              <Text
                style={{
                  marginBottom: "1%",
                  alignSelf: "center",
                }}
              >
                {"Curitiba - Brasil"}
              </Text>
            </View>
            <View
              style={{
                width: "100%",
                position: "relative",
                bottom: 0,
              }}
            >
              <Button
                title="&nbsp;&nbsp;ALTERAR"
                icon={<Icon name="md-create" color="#ffffff" size={28} />}
                containerStyle={{ bottom: 0 }}
                // iconRight={true}
                buttonStyle={{
                  borderRadius: 5,
                  width: "100%",
                }}
                onPress={() => {
                  // navigation.navigate("Oportunidade", {
                  //   oportunidade: {
                  //     index: index,
                  //     id: item.id,
                  //     title: item.title,
                  //     uri: item.uri,
                  //     descricao: item.descricao,
                  //   },
                  // });
                }}
              />
            </View>
          </Card>
        </View>
      </ImageBackground>
    </View>
  );
}
