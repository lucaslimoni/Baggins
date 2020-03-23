// import {
//   createStackNavigator,
//   createBottomTabNavigator
// } from "react-navigation";
import "react-native-gesture-handler";
import React from "react";
import { createAppContainer } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { View } from "react-native";
// import Icon from "react-native-vector-icons/Ionicons";
// import Icon from 'react-native-vector-icons/FontAwesome';
import Main from "./pages/main";
import Profile from "./pages/profile";
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
        // activeColor: "#000000",
        // inactiveColor: "#3a397b",
        // barStyle: {
        //   backgroundColor: "#f2ac33",
        // },
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
        // activeColor: '#ffffff',
        // inactiveColor: "#3a397b",
        // barStyle: { backgroundColor: "#f2ac33" },
      }
    },
  },
  {
    initialRouteName: "Profile",
    activeColor: "#ffffff",
    inactiveColor: "#3a397b",
    barStyle: {
      backgroundColor: "#f2ac33",
    },
  }
);
export default createAppContainer(Tab);

// export function MyTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={Main} />
//       <Tab.Screen name="Settings" component={Profile} />
//     </Tab.Navigator>
//   );
// }


// export default createBottomTabNavigator(
//   {
//     Home: Main,
//     Profile: Profile
//   },
//   {
//     navigationOptions: {
//       headerStyle: {
//         backgroundColor: '#DA552F',
//       },
//       headerTintColor: '#FFF',
//     },
//   },
// );
