import React from "react";
import { StyleSheet, View } from "react-native";
import { SIZE } from "./Constants";

export default ({ rings, size }) => {
  return (
    <>
      {rings.map((ring, key) => (
        <View style={styles.overlay} {...{ key }}>
          <View
            style={{
              width: ring.size,
              height: ring.size,
              borderRadius: ring.size / 2,
              borderWidth: 2,
              borderColor: "#fff"
            }}
          />
        </View>
      ))}
      <View style={styles.overlay}>
        <View style={[size ?
          { height: size, width: size } : styles.canvas]}>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center"
  },
  canvas: {
    width: SIZE,
    height: SIZE
  }
});
