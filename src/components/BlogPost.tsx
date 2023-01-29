import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

// imports
import Delete from "../../assets/delete-icon.png";
import ReceiptImage from "../../assets/receipt-image.png";
import PostImage from "../../assets/post-image.png";

const BlogPost = () => {
  return (
    <View style={styles.container}>
      <View style={styles.postImageContainer}>
        <Image source={PostImage} style={styles.postImage} />
      </View>
      <View style={styles.postDetailsContainer}>
        <View style={styles.postUrlContainer}>
          <Text style={styles.postUrl}>www.WHOFoundation.co.za</Text>
          <TouchableOpacity>
            <Text style={styles.postTime}>10:00 AM</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.postTitleContainer}>
          <Text style={styles.postTitle}>
            The Headline Story For Saving Petrol
          </Text>
        </View>
      </View>
    </View>
  );
};

export default BlogPost;

const styles = StyleSheet.create({
  container: {
    width: 320,
    height: 95,
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
  postImageContainer: {
    paddingTop: 20,
    paddingLeft: 12,
  },
  postImage: {
    height: 60,
    width: 60,
  },
  postDetailsContainer: {
    padding: 20,
  },
  postUrlContainer: {
    display: "flex",
    flexDirection: "row",
  },
  postUrl: {
    fontSize: 10,
    color: "grey",
  },
  postTime: {
    marginLeft: 42,
    color: "black",
    fontSize: 8,
    fontWeight: "bold",
  },
  postTitleContainer: {
    paddingTop: 5,
  },
  postTitle: {
    fontSize: 16,
    color: "black",
    maxWidth: 180,
  },
});
