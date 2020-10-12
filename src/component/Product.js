import React, { Component } from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";
const { width } = Dimensions.get("window");
class Product extends Component {
  render() {
    return (
      <View style={styles.Container}>
        <View
          style={{
            width: width * 0.37,
            borderRightWidth: 1,
            borderRightColor: "#d9d9d9",
          }}
        >
          <Image
            style={{ flex: 1, width: "100%" }}
            source={require("./../../assets/logo2.png")}
          ></Image>
        </View>
        <View style={{ flex: 1 }}>
          <View style={{ flex: 2, marginLeft: 10 }}>
            <Text style={{ marginRight: 50, fontSize: 17 }}>
              {this.props.data.product_name}
            </Text>
            <Text style={{ marginRight: 50, fontSize: 17, marginTop: 5 }}>
              {this.props.data.brand}
            </Text>
            <Text
              style={{
                marginRight: 50,
                fontSize: 15,
                marginTop: 5,
                color: "#a6a6a6",
              }}
            >
              {" "}
              {this.props.data.quantity}
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ marginLeft: 10, color: "#a6a6a6" }}>
              Price : {this.props.data.price}
            </Text>
            {this.props.data.order_quantity === 0 ? (
              <TouchableOpacity onPress={() => this.props.add(this.props.data)}>
                <Text style={styles.AddButton}> ADD</Text>
              </TouchableOpacity>
            ) : (
              <View style={styles.EditButton}>
                <TouchableOpacity
                  onPress={() => this.props.remove(this.props.data)}
                >
                  <Text
                    style={{
                      borderRightWidth: 1,
                      borderColor: "#00b3b3",
                      paddingVertical: 2,
                      paddingHorizontal: 10,
                    }}
                  >
                    {" "}
                    -
                  </Text>
                </TouchableOpacity>
                <Text
                  style={{
                    borderRightWidth: 1,
                    borderColor: "#00b3b3",
                    paddingVertical: 2,
                    paddingHorizontal: 5,
                  }}
                >
                  {this.props.data.order_quantity}
                </Text>
                <TouchableOpacity
                  onPress={() => this.props.add(this.props.data)}
                >
                  <Text
                    style={{
                      paddingVertical: 2,
                      paddingHorizontal: 8,
                    }}
                  >
                    {" "}
                    +
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    height: 180,
    marginTop: 10,
    paddingVertical: 10,
    backgroundColor: "white",
    marginHorizontal: 4,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: "#ddd",
    borderBottomWidth: 0,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 3,
    flexDirection: "row",
  },
  AddButton: {
    marginRight: 15,
    borderRadius: 30,
    backgroundColor: "#00b3b3",
    paddingHorizontal: 25,
    paddingVertical: 5,
    color: "white",
  },
  EditButton: {
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "#00b3b3",
    justifyContent: "center",
    flexDirection: "row",
    marginRight: 15,
  },
});

const mapDispatchToProps = (dispatch) => {
  return {
    add: (data) =>
      dispatch({
        type: "ADD_TO_CART",
        payload: data,
      }),
    remove: (data) =>
      dispatch({
        type: "REMOVE_FROM_CART",
        payload: data,
      }),
  };
};

export default connect(null, mapDispatchToProps)(Product);
