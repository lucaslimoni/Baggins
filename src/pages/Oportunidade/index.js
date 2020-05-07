import Reactotron from "reactotron-react-native";
import React from "react";
import { View, Text } from "react-native";

export default function Oportunidade({ navigation }) {
  Reactotron.log(navigation);
  return (
    <View>
      <Text>Index: {navigation.state.params.oportunidade.index}</Text>
      <Text>id: {navigation.state.params.oportunidade.id}</Text>
      <Text>Title: {navigation.state.params.oportunidade.title}</Text>
      <Text>URI: {navigation.state.params.oportunidade.uri}</Text>
      <Text>Descrição: {navigation.state.params.oportunidade.descricao}</Text>
    </View>
  );
}
