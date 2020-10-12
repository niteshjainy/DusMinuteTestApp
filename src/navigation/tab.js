import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../component/Home";
import Events from "../component/Events";
import Order from "../component/Order";
import Cards from "../component/Cards";
import {
  MaterialCommunityIcons,
  Ionicons,
  AntDesign,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { Text, View } from "react-native";
import { connect } from "react-redux";
import { Component } from "react";
const Tab = createBottomTabNavigator();

class MyBottomTab extends Component {
  render() {
    return (
      <Tab.Navigator backBehavior="none">
        <Tab.Screen
          name="Home"
          options={{
            tabBarIcon: () => (
              <AntDesign name="home" size={32} color="#b3b3b3" />
            ),
          }}
          component={Home}
        />
        <Tab.Screen
          name="Events"
          options={{
            tabBarIcon: () => (
              <Ionicons name="md-paper" size={32} color="#b3b3b3" />
            ),
          }}
          component={Events}
        />
        <Tab.Screen
          name="Orders"
          options={{
            tabBarIcon: () => (
              <SimpleLineIcons name="bag" size={30} color="#b3b3b3" />
            ),
          }}
          component={Order}
        />
        <Tab.Screen
          name="Cards"
          options={{
            tabBarIcon: () => (
              <View style={{ padding: 5 }}>
                <MaterialCommunityIcons
                  name="cart-outline"
                  size={32}
                  color="#b3b3b3"
                />
                <View
                  style={{
                    position: "absolute",
                    height: 34,
                    width: 30,
                    borderRadius: 15,
                    backgroundColor: "orange",
                    left: 35,
                    bottom: 15,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text>{this.props.cart_value}</Text>
                </View>
              </View>
            ),
          }}
          component={Cards}
        />
      </Tab.Navigator>
    );
  }
}

const mapStateToPrpos = (state) => {
  return {
    cart_value: state.cart_product.length,
    state: state,
  };
};
export default connect(mapStateToPrpos, null)(MyBottomTab);
