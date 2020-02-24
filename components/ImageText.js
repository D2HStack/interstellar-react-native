import React from "react";
import { Text, Image, View, StyleSheet } from "react-native";

function ImageText({ url, actor, role }) {
  console.log("url", url);
  //../assets/images/Mattew.jpg"
  // #2E2E2E
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/Mattew.jpg")}
        style={{
          height: 150,
          width: 120,
          resizeMode: "cover",
          marginRight: 20
        }}
      ></Image>
      <View style={{ backgroundColor: "#252525", width: 120 }}>
        <Text
          style={{ color: "white", fontSize: 10, width: 80, marginTop: 10 }}
          numberOfLines={1}
        >
          {actor}
        </Text>
        <Text
          style={{
            fontSize: 10,
            width: 80,
            marginTop: 5,
            color: "#636363"
          }}
          numberOfLines={1}
        >
          {role}
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {}
});
export default ImageText;
