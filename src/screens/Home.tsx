import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

import SearchIcon from "../../assets/search-icon.png";
import Notification from "../../assets/notification-icon.png";

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>Gas year</Text>
        </View>
        <View style={styles.iconsWrapper}>
          <Image source={Notification} style={styles.icon} />
          <Image source={SearchIcon} style={styles.icon} />
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
  },
  header: {
    display: "flex",
  },
  titleWrapper: {
    justifyContent: "flex-start",
  },
  title: {
    color: "black",
    fontSize: 24,
    fontWeight: "bold",
  },
  iconsWrapper: {
    display: "flex",
    flexDirection: "row",
    fontSize: 24,
  },
  icon: {
    width: 24,
    height: 24,
  },
});
