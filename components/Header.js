import React from "react";
import { Image, View, StyleSheet } from "react-native";

function Header(props) {
  //    const {} = props;
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/images/IMDB_Logo_2016_black.jpeg")}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#323232",
    height: 50
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    marginLeft: 20
  }
});

export default Header;
