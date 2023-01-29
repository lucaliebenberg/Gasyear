import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

// import Home from "./src/screens/Home";
// import Blog from "./src/screens/Blog";
import OnboardingCarousel from "./src/screens/OnboardingCarousel";

export default function App() {
  return (
    <View>
      <SafeAreaView>
        <OnboardingCarousel />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({});
