import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

// import components
import Header from "./components/Header";
import Overview from "./components/Overview";
import Details from "./components/Details";

export default function App() {
  // SafeAreaView not running for version earlier than 11
  //
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Header></Header>
        <Overview></Overview>
        <View style={{ backgroundColor: "#181818", height: 20 }}></View>
        <Details></Details>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1E1E"
  },

  title: {
    color: "#fff"
  }
});
