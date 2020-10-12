import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Index from "./navigation/index";
import { Provider } from "react-redux";
import store from "./store";
export default function App() {
  return (
    <Provider store={store}>
      <Index />
    </Provider>
  );
}

const styles = StyleSheet.create({});
