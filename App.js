import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { f, auth, database } from "./config/config";

const App = () => {
  return (
    <View style={styles.screen}>
      <Text>Test</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
export default App;
