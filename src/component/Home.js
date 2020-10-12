import React, { Component } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { connect } from "react-redux";
import Product from "./Product";
class Home extends Component {
  render() {
    const renderItem = ({ item }) => <Product data={item} />;
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={this.props.product_list}
          renderItem={renderItem}
          keyExtractor={(item) => item.price}
        />
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
    product_list: state.product_list,
    state: state,
  };
};
export default connect(mapStateToProps, null)(Home);
