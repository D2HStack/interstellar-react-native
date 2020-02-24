import React from "react";
import {
  Image,
  Text,
  View,
  StyleSheet,
  TouchableHighlight
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AuthSession } from "expo";

function Overview(props) {
  //    const {} = props;
  const subText = "2014   PG-13   2h49min   Adventure, Drama, Sci-Fi";
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Interstellar</Text>
      <Text style={styles.subText}>
        2014 PG-13 2h49min Adventure, Drama, Sci-Fi
      </Text>
      <View style={styles.flexDirectionRow}>
        <Image
          style={styles.imageMain}
          source={require("../assets/images/interstellar-main.jpg")}
        ></Image>
        <View style={{ flex: 1, marginLeft: 10 }}>
          <Text style={styles.summary} numberOfLines={3} ellipsizeMode="tail">
            A team of explorers travel through a wormhole in space in an attempt
            to ensure humanity's survival.
          </Text>
          <TouchableHighlight style={styles.button}>
            <Text style={{ textAlign: "center", color: "white" }}>
              + ADD TO WATCHLIST
            </Text>
          </TouchableHighlight>
        </View>
      </View>
      <View style={styles.ratingContainer}>
        <View style={styles.iconTextContainer}>
          <Ionicons name="md-star" size={30} color="#E2B01C"></Ionicons>
          <View style={styles.ratingIMDB}>
            <Text style={styles.ratingIMDBNum}>8.6</Text>
            <Text style={styles.ratingIMDBDen}>/10</Text>
          </View>
          <Text style={styles.ratersNum}>1.1M</Text>
        </View>
        <View style={styles.iconTextContainer}>
          <Ionicons name="md-star-outline" size={30} color="#fff"></Ionicons>
          <View>
            <Text style={styles.ratingComment}>RATE THIS</Text>
          </View>
        </View>
        <View style={styles.ratingContainer}>
          <View style={styles.iconTextContainer}>
            <Text style={styles.ratingMeta}>74</Text>

            <Text style={styles.ratingTitleMeta}>Metascore</Text>

            <Text style={styles.ratersNum}>46 critic reviews</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flexDirectionRow: {
    flexDirection: "row"
  },
  container: {
    // backgroundColor: "#F04F0F",
    backgroundColor: "#1E1E1E",
    height: 250,
    marginLeft: 20,
    marginRight: 20
  },
  title: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 10
  },
  subText: {
    color: "#6C6C6C",
    fontSize: 12,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10
  },
  summary: { fontSize: 12, color: "white" },
  button: {
    backgroundColor: "#036CB5",
    height: 30,
    justifyContent: "center",
    borderRadius: 5,
    marginTop: 10
  },

  imageMain: {
    width: 80,
    height: 100
  },
  ratingContainer: {
    height: 80,
    flexDirection: "row",
    justifyContent: "space-around"
    // backgroundColor: "green"
  },
  iconTextContainer: {
    marginTop: 10,
    width: 80,
    alignItems: "center"
  },

  ratingIMDB: {
    flexDirection: "row",
    alignItems: "flex-end"
  },
  ratingIMDBNum: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
    lineHeight: 14
  },
  ratingIMDBDen: {
    color: "white",
    fontSize: 12,
    lineHeight: 14
  },
  ratersNum: {
    color: "#636363",
    fontSize: 11
  },
  ratingComment: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold"
  },

  ratingMeta: {
    color: "white",
    fontSize: 14,
    backgroundColor: "#57C045"
  },
  ratingTitleMeta: {
    color: "white",
    fontSize: 14
  }
});

export default Overview;
