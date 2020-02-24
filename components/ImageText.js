import React from "react";
import { Text, Image, View, StyleSheet } from "react-native";

// require("../assets/images/Mattew.jpg")
function ImageText({ image, actor, character }) {
  console.log("img", image);
  //../assets/images/Mattew.jpg"
  // #2E2E2E
  return (
    <View style={styles.container}>
      <Image
        source={image}
        style={{
          height: 160,
          width: 120,
          resizeMode: "cover",
          marginRight: 20
        }}
      ></Image>
      <View style={{ backgroundColor: "#252525", width: 120 }}>
        <Text
          style={{
            color: "white",
            fontSize: 10,
            width: 80,
            marginTop: 10,
            marginLeft: 10
          }}
          numberOfLines={1}
        >
          {actor}
        </Text>
        <Text
          style={{
            fontSize: 10,
            width: 80,
            marginTop: 5,
            color: "#636363",
            marginLeft: 10,
            marginBottom: 10
          }}
          numberOfLines={1}
        >
          {character}
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {}
});
export default ImageText;
