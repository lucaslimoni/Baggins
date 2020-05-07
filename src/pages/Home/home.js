import React, { useState, useEffect } from "react";
import {
  Animated,
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";

import {
  ParallaxSwiper,
  ParallaxSwiperPage,
} from "react-native-parallax-swiper";

import { Card, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/Ionicons";
import { CommonActions } from "react-navigation";
const { width, height } = Dimensions.get("window");
const dados = [
  {
    id: 1,
    title: "Anarquista Júnior",
    uri: "https://goo.gl/wtHtxG",
    descricao:
      "Vaga para Anarquista Júnior em Brasília. Ira trabalhar em todas as manifestações contra o groverno brasileiro.",
  },
  {
    id: 2,
    title: "Designer Abstrato",
    uri: "https://goo.gl/gt4rWa",
    descricao:
      "Vaga para Designer Abstrato em Curitiba. Ira trabalhar em todas as manifestações artisticas do hotel Baulhaus.",
  },
  {
    id: 3,
    title: "Messias",
    uri: "https://goo.gl/KAaVXt",
    descricao:
      "Vaga para Messias em São Paulo. Ira trabalhar em todas as manifestações como o novo messias, espalhando a palavra de Sharabadaias.",
  },
  {
    id: 4,
    title: "Desenvolvedor",
    uri: "http://getwallpapers.com/wallpaper/full/b/f/9/489755.jpg",
    src: "../../assets/img/developerImage.jpeg",
    descricao:
      "Vaga para Desenvolvedor React em Portugal. Ira trabalhar em todas as frentes de desenvolvimento da linguagem React.",
  },
];

export default function Home({ navigation, props }) {
  const myCustomAnimatedValue = new Animated.Value(0);
  // FunctionToOpenSecondActivity = () => {
  //   this.props.navigation.navigate("Second");
  // };

  return (
    <ParallaxSwiper
      speed={0.5}
      animatedValue={myCustomAnimatedValue}
      dividerWidth={8}
      dividerColor="black"
      backgroundColor="black"
      onMomentumScrollEnd={(activePageIndex) => console.log(activePageIndex)}
      showProgressBar={true}
      showsHorizontalScrollIndicator={true}
      progressBarBackgroundColor="rgba(255,255,255,0.25)"
      progressBarValueBackgroundColor="white"
    >
      {dados.map((item, index) => {
        return (
          <ParallaxSwiperPage
            key={item.id}
            BackgroundComponent={<Image style={styles.backgroundImage} />}
            ForegroundComponent={
              <View style={styles.foregroundTextContainer}>
                <Card
                  title={item.title}
                  image={{ uri: item.uri }}
                  imageStyle={{ height: 500 }}
                  containerStyle={{
                    height: "90%",
                    width: "95%",
                    marginBottom: 55,
                    borderRadius: 10,
                  }}
                >
                  <View>
                    <Text
                      style={{
                        marginBottom: "5%",
                        alignSelf: "center",
                      }}
                    >
                      {item.descricao}
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
                      title="&nbsp;&nbsp;SABER MAIS"
                      icon={
                        <Icon name="md-reorder" color="#ffffff" size={28} />
                      }
                      containerStyle={{ bottom: 0 }}
                      // iconRight={true}
                      buttonStyle={{
                        borderRadius: 5,
                        width: "100%",
                      }}
                      onPress={() => {
                        navigation.navigate("Oportunidade", {
                          oportunidade: {
                            index: index,
                            id: item.id,
                            title: item.title,
                            uri: item.uri,
                            descricao: item.descricao,
                          },
                        });
                      }}
                    />
                  </View>
                </Card>
              </View>
            }
          />
        );
      })}
    </ParallaxSwiper>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    width,
    height,
  },
  foregroundTextContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  foregroundText: {
    fontSize: 34,
    fontWeight: "700",
    letterSpacing: 0.41,
    color: "white",
  },
});
