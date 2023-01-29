import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

import Home from "./src/screens/Home";

export default function App() {
  return (
    <View>
      <SafeAreaView>
        <Home />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({});
