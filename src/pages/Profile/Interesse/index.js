import Reactotron from "reactotron-react-native";
import React from "react";
import { View, Text } from "react-native";

export default function Interesse({ navigation }) {
  Reactotron.log(navigation);
  return (
    <View>
      <Text>Interesse</Text>
    </View>
  );
}
