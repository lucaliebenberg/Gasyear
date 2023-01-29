import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

// icon and image imports
import SearchIcon from "../../assets/search-icon.png";
import Notification from "../../assets/notification-icon.png";
import { IoMdNotificationsOutline } from "react-icons/io";

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Gas year</Text>
      </View>
      <View style={styles.iconsWrapper}>
        {/* <IoMdNotificationsOutline style={styles.icon} /> */}
        <Image source={Notification} style={styles.icon} />
        <Image source={SearchIcon} style={[styles.icon, styles.iconRight]} />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 32,
  },
  titleWrapper: {
    justifyContent: "flex-start",
    // marginRight: 180,
    // textAlign: "left",
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
  iconRight: {
    marginLeft: 8,
  },
});
