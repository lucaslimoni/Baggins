import React from "react";
import "react-native-gesture-handler";
import { createAppContainer } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { View } from "react-native";
import Main from "./pages/main";
import Profile from "./pages/Profile";
import Buscar from "./pages/buscar";
import Chat from "./pages/chat";
import Icon from "react-native-vector-icons/Ionicons";

const Tab = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: Main,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={25} name={'ios-home'} />
          </View>
        ),
      }
    },
    Search: {
      screen: Buscar,
      navigationOptions: {
        tabBarLabel: 'Buscar',
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={25} name={'ios-search'} />
          </View>
        )
      }
    },
    Chat: {
      screen: Chat,
      navigationOptions: {
        tabBarLabel: 'Chat',
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={25} name={'md-chatbubbles'} />
          </View>
        )
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={25} name="ios-person" />
          </View>
        ),
      }
    },
  },
  {
    initialRouteName: "Profile",
    activeColor: "#3a397b",
    inactiveColor: "#ffffff",
    barStyle: {
      backgroundColor: "#f2ac33",
    },
  }
);
export default createAppContainer(Tab);