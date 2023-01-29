import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

// import icons
import Delete from "../../assets/delete-icon.png";
import ReceiptImage from "../../assets/receipt-image.png";

const Receipt = () => {
  return (
    <View style={styles.container}>
      <View style={styles.receiptImageContainer}>
        <Image source={ReceiptImage} style={styles.receiptImage} />
      </View>
      <View style={styles.receiptDetailsContainer}>
        <View style={styles.receiptDateContainer}>
          <Text style={styles.receiptDate}>12 January 2023</Text>
          <TouchableOpacity>
            <Image source={Delete} style={styles.receiptDeleteIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.receiptAmountContainer}>
          <Text style={styles.receiptAmount}>R1200.00</Text>
        </View>
      </View>
    </View>
  );
};

export default Receipt;

const styles = StyleSheet.create({
  container: {
    width: 320,
    height: 120,
    backgroundColor: "#FFF",
    borderRadius: 5,
    display: "flex",
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2.44,

    elevation: 5,
  },
  receiptImageContainer: {
    paddingTop: 20,
    paddingLeft: 20,
  },
  receiptImage: {
    height: 90,
    width: 90,
  },
  receiptDetailsContainer: {
    padding: 20,
  },
  receiptDateContainer: {
    display: "flex",
    flexDirection: "row",
  },
  receiptDate: {
    fontSize: 14,
  },
  receiptDeleteIcon: {
    marginLeft: 42,
    color: "black",
  },
  receiptAmountContainer: {
    paddingTop: 10,
  },
  receiptAmount: {
    fontSize: 22,
    color: "#6642A0",
    fontWeight: "bold",
  },
});
