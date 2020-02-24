import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import ImageText from "../components/ImageText";

function Details(props) {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-end"
        }}
      >
        <Text style={{ color: "white", fontSize: 20 }}>Top Billed Cast</Text>
        <Text style={{ color: "#0A80BF", fontSize: 12, fontWeight: "bold" }}>
          SEE ALL
        </Text>
      </View>
      <View style={{ marginTop: 10 }}>
        <ScrollView horizontal={true}>
          <View style={{ flexDirection: "row" }}>
            <ImageText
              url="../assets/images/Mattew.jpg"
              actor="Matthew McConaughey"
              role="Cooper"
            ></ImageText>
            <ImageText
              url="../assets/images/Mattew.jpg"
              actor="Matthew McConaughey"
              role="Cooper"
            ></ImageText>
            <ImageText
              url="../assets/images/Mattew.jpg"
              actor="Matthew McConaughey"
              role="Cooper"
            ></ImageText>
          </View>
        </ScrollView>

        <Text style={{ color: "white", fontSize: 15, marginTop: 20 }}>
          Director
        </Text>
        <Text style={{ color: "#636363", fontSize: 15, marginTop: 5 }}>
          Christopher Nolan
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { margin: 20, backgroundColor: "#1E1E1E" }
});
export default Details;
