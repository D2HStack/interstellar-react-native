import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import ImageText from "../components/ImageText";
import images from "../assets/data/img-data";

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
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={{ flexDirection: "row" }}>
            {images.map(item => {
              return (
                <ImageText
                  image={item.image}
                  actor={item.actor}
                  character={item.character}
                ></ImageText>
              );
            })}
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
