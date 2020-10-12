import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import MyBottomTab from "../navigation/tab";
import Login from "../component/Login";

const Stack = createStackNavigator();

export default MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        options={{
          headerShown: false,
        }}
        component={Login}
      />
      <Stack.Screen
        name="Home"
        options={{
          title: "Dus Minute",
          headerStyle: {
            backgroundColor: "#00b3b3",
          },

          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
            alignSelf: "center",
          },
        }}
        component={MyBottomTab}
      />
    </Stack.Navigator>
  );
};
