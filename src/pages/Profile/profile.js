import React from "react";
import { ListItem, Divider, Avatar } from "react-native-elements";

import { View, Text } from "react-native";
import { classes } from "./styles";

export default function Profile() {
  const navigationOptions = {
    title: "Profile"
  };

  return (
    <View style={classes.root}>
      <View style={classes.modulo}>
        <Text style={classes.titulo}>Dados Pessoais</Text>
        <ListItem
          leftAvatar={{
            // title: "Lucas Limoni",
            source: {
              uri:
                "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"
            },
            showEditButton: true
          }}
          title="Lucas Limoni"
          subtitle="Desenvolvedor"
          // chevron
        />
      </View>
      <Divider style={{ backgroundColor: "#ffffff" }} />
      <View style={classes.modulo}>
        <Text style={classes.titulo}>Curriculo</Text>
        <Avatar rounded icon={{ name: "home" }} />
      </View>
      <Divider style={{ backgroundColor: "#ffffff" }} />
      <View style={classes.modulo}>
        <Text style={classes.titulo}>Interesses</Text>
      </View>
    </View>
  );
}
