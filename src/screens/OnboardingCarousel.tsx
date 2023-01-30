import { StyleSheet, View, Image } from "react-native";
import React from "react";
import Onboarding from "react-native-onboarding-swiper";

const OnboardingCarousel = () => (
  <View style={styles.container}>
    <Onboarding
      pages={[
        {
          backgroundColor: "#fff",
          image: <Image source={require("../../assets/onboard1.png")} />,
          title: "Take a picture",
          subtitle: "Done with React Native Onboarding Swiper",
        },
        {
          backgroundColor: "#fff",
          image: <Image source={require("../../assets/onboard2.png")} />,
          title: "Get your history",
          subtitle: "Done with React Native Onboarding Swiper",
        },
        {
          backgroundColor: "#fff",
          image: <Image source={require("../../assets/onboard3.png")} />,
          title: "Purchase analysis",
          subtitle: "Done with React Native Onboarding Swiper",
        },
      ]}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    marginTop: 680,
    color: "black",
  },
});

export default OnboardingCarousel;
