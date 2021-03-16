// import { MaskedViewBase } from "@react-native-community/masked-view";
import React from "react";
import { View } from "react-native";

interface AngularGradient2Props {
  size: number;
  colors: [string, string];
}

export default ({ size, colors: [start, end] }: AngularGradient2Props) => {

  return (
    <View
      style={{
        width: size,
        height: size,
        backgroundColor: start,
        borderRadius: size / 2
      }}
    >
       <View
          style={{
            flex: 1,
            backgroundColor: end,
            borderRadius: size / 2
          }}
        />
    </View>
  );
};
