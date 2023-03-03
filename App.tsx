import React from "react";
import { StyleSheet, View } from "react-native";
import {
  GestureHandlerRootView,
  PanGestureHandler
} from "react-native-gesture-handler";

export default function App() {
  return (
    <GestureHandlerRootView>
      <PanGestureHandler
        onGestureEvent={(e) => console.log(e.nativeEvent.x, e.nativeEvent.y)}
        // onHandlerStateChange={(e) => console.log(e.nativeEvent)}
      >
        <View
          style={{
            width: 50,
            height: 50,
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 180,
            backgroundColor: "#000",
          }}
        />
      </PanGestureHandler>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
