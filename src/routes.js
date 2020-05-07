import React from "react";
import "react-native-gesture-handler";
import { createAppContainer } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createStackNavigator } from 'react-navigation-stack';
import { View } from "react-native";
import Home from "./pages/Home/home";
import Profile from "./pages/Profile";
import Buscar from "./pages/buscar";
import Chat from "./pages/chat";
import Icon from "react-native-vector-icons/Ionicons";
import Oportunidade from "./pages/Oportunidade";
import DadosPessoais from "./pages/Profile/DadosPessoais";
import Interesse from "./pages/Profile/Interesse";
import Curriculo from "./pages/Profile/Curriculo";

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        headerShown: false
      }
    },
    Oportunidade: {
      screen: Oportunidade, navigationOptions: {
        headerTitleAlign: "center",
        headerTintColor: "#3a397b",
        headerStyle: {
          backgroundColor: "#f2ac33",
        },
      }
    }
  },
  {
    mode: "card",
    headerMode: "float",
  }
);
const ProfileStack = createStackNavigator(
  {
    Profile: {
      screen: Profile,
      navigationOptions: {
        headerShown: false
      }
    },
    DadosPessoais: {
      screen: DadosPessoais, navigationOptions: {
        headerTitleAlign: "center",
        headerTintColor: "#3a397b",
        headerStyle: {
          backgroundColor: "#f2ac33",
        },
      }
    },
    Curriculo: {
      screen: Curriculo, navigationOptions: {
        headerTitleAlign: "center",
        headerTintColor: "#3a397b",
        headerStyle: {
          backgroundColor: "#f2ac33",
        },
      }
    },
    Interesse: {
      screen: Interesse, navigationOptions: {
        headerTitleAlign: "center",
        headerTintColor: "#3a397b",
        headerStyle: {
          backgroundColor: "#f2ac33",
        },
      }
    }
  },
  {
    mode: "card",
    headerMode: "float",
  }
);

const Tab = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
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
      screen: ProfileStack,
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

