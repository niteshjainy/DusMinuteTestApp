import React, { Component } from "react";
import { StyleSheet, SafeAreaView, View, Text } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";
import Product from "./Product";
class Cards extends Component {
  render() {
    const renderItem = ({ item }) => <Product data={item} />;
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={this.props.cart_product}
          renderItem={renderItem}
          keyExtractor={(item) => item.product_name}
        />
        <View
          style={{
            height: 50,
            backgroundColor: "transparent",
            borderWidth: 1,
            borderColor: "#00b3b3",
            color: "white",
            margin: 15,
            padding: 15,
            borderRadius: 50,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              this.props.reset();
              alert("Order Subimitted successfully");
            }}
          >
            <Text
              style={{
                color: "black",
                textAlign: "center",
                fontWeight: "800",
                fontSize: 18,
              }}
            >
              PLACE ORDER
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e6e6e6",
  },
});

const mapStateToProps = (state) => {
  return {
    cart_product: state.cart_product,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    reset: () =>
      dispatch({
        type: "RESET",
      }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cards);
