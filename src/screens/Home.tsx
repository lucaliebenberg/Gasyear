import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

// icon and image imports
import SearchIcon from "../../assets/search-icon.png";
import Notification from "../../assets/notification-icon.png";
import { IoMdNotificationsOutline } from "react-icons/io";

// import components
import Receipt from "../components/Receipt";

const Home = () => {
  return (
    <>
      {/* Header wrapper */}
      <View style={styles.titleContainer}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>Gas year</Text>
        </View>
        <View style={styles.iconsWrapper}>
          {/* <IoMdNotificationsOutline style={styles.icon} /> */}
          <TouchableOpacity>
            <Image source={Notification} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={SearchIcon}
              style={[styles.icon, styles.iconRight]}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Receipts wrapper */}
      <View style={styles.receiptContainer}>
        <View style={styles.receiptTitleWrapper}>
          <Text style={styles.receiptTitle}>My Receipts</Text>
        </View>
        <View style={styles.receiptsWrapper}>
          <Receipt />
        </View>
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  // Header styling
  titleContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 32,
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
  iconRight: {
    marginLeft: 8,
  },
  // Receipts styling
  receiptContainer: {
    display: "flex",
    flexDirection: "column",
  },
  receiptTitleWrapper: {
    paddingLeft: 34,
  },
  receiptTitle: {
    fontSize: 18,
    color: "#656565",
  },
  receiptsWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 16,
  },
});
