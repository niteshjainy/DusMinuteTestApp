import React, { Component } from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
const { width, height } = Dimensions.get("window");
export default class Login extends Component {
  state = {
    value: "",
  };
  render() {
    const checkNumber = () => {
      if (this.state.value == "") alert("Please enter a number");
      else if (this.state.value.length < 10)
        alert("Please enter a valid number");
      else this.props.navigation.navigate("Home");
    };
    return (
      <View style={styles.container}>
        <Image
          source={require("../../assets/logo.jpeg")}
          style={{
            height: height * 0.35,
            width: "100%",
            resizeMode: "stretch",
            position: "absolute",
            top: 20,
          }}
        ></Image>

        <View style={styles.TextInput}>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              style={{
                width: 25,
                height: 20,
              }}
              source={require("../../assets/flag.png")}
            ></Image>
          </View>
          <Text style={styles.prefix}>+91</Text>
          <TextInput
            value={this.state.value}
            onChangeText={(text) => this.setState({ value: text })}
            style={{ fontSize: 18, color: "white" }}
            placeholderTextColor="#8c8c8c"
            placeholder="Enter your mobile number"
            keyboardType="number-pad"
            underlineColorAndroid="transparent"
          />
        </View>
        <View
          style={{
            position: "absolute",
            top: 320,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              checkNumber();
            }}
          >
            <Text style={styles.loginButton}>SEND OTP</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#242424",
  },
  loginButton: {
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 22,
    width: width * 0.9,
    height: 50,
    borderRadius: 50,
    backgroundColor: "#00b3b3",
    color: "white",
    marginTop: 60,
  },
  prefix: {
    paddingHorizontal: 10,
    fontWeight: "bold",
    color: "white",
    fontSize: 22,
  },
  TextInput: {
    borderColor: "#00b3b3",
    borderRadius: 25,
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 10,
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 22,
    width: width * 0.8,
    flexDirection: "row",
    color: "#cccccc",
    position: "absolute",
    top: 295,
  },
});
