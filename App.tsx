import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

// import Home from "./src/screens/Home";
import Blog from "./src/screens/Blog";

export default function App() {
  return (
    <View>
      <SafeAreaView>
        <Blog />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({});
