import React from "react";
import Animated, { lessThan, max, min, multiply } from "react-native-reanimated";
import { TAU } from "./Constants";
import CircularProgress from "./CircularProgress";
import AngularGradient from "./AngularGradient";
import { PixelRatio, StyleSheet, View } from "react-native";
import { interpolateColor } from "react-native-redash";
import { IRing } from ".";

interface RingProps {
  ring: IRing;
  progress: Animated.Node<number>;
  stroke: number;
}

export default ({ ring, progress, stroke }: RingProps) => {
  const theta = multiply(progress, ring.theta);
  const fg = (
    <AngularGradient size={ring.size} colors={[ring.start, ring.end]} />
  );
  const radius = PixelRatio.roundToNearestPixel(ring.size / 2);
  const bg = (<View style={{ flex: 1, backgroundColor: ring.start }} />);
  const rotate = max(TAU, theta);
  const opacity = lessThan(theta, TAU);
  // const backgroundColor = interpolateColor(theta, {
  //   inputRange: [0, TAU],
  //   outputRange: [ring.start, ring.end]
  // })

  return (
    <>
      <Animated.View style={{ transform: [{ rotate }] }}>
        <CircularProgress {...{ theta, fg, bg, radius }} />
      </Animated.View>
      <View
        style={{
          ...StyleSheet.absoluteFillObject,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Animated.View style={{
          opacity,
          left: -(ring.size / 2 - stroke / 2),
          height: stroke,
          width: stroke,
          borderRadius: stroke / 2,
          backgroundColor: ring.end
        }} />

      </View>

      <View
        style={{
          ...StyleSheet.absoluteFillObject,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Animated.View style={{width: ring.size, height: ring.size, transform: [{rotate: theta}]}}>
        <Animated.View style={{
          top: ring.size / 2 - stroke / 2,
          height: stroke,
          width: stroke,
          borderRadius: stroke / 2,
          backgroundColor: ring.end,
          shadowColor: 'grey',
          shadowOpacity: 0.2,
          shadowRadius: 2
        }} />
        </Animated.View>
      </View>
    </>
  );
};
