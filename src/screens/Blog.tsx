import { StyleSheet, Text, View } from "react-native";
import React from "react";

// import component
import BlogPost from "../components/BlogPost";

const Blog = () => {
  return (
    <>
      {/* Header wrapper */}
      <View style={styles.postTitleContainer}>
        <View style={styles.postTitleWrapper}>
          <Text style={styles.postTitle}>Blog Posts</Text>
        </View>
      </View>
      <View style={styles.postWrapper}>
        <BlogPost />
      </View>
    </>
  );
};

export default Blog;

const styles = StyleSheet.create({
  postTitleContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 32,
  },
  postTitleWrapper: {},
  postTitle: {
    color: "black",
    fontSize: 24,
    fontWeight: "bold",
  },
  postWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});
