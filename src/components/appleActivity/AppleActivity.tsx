import React, { useEffect, useState } from "react";
import { StyleSheet, View, Image } from "react-native";
import { Value, set, useCode } from "react-native-reanimated";

import { timing } from "react-native-redash";
import { IRing } from ".";
import { SIZE, STROKE_WIDTH, TAU } from "./Constants";
import Ring from "./Ring";
import Stickers from "./Stickers";

interface RingsProps {
  strokeWidth: number;
  size: number;
  ringsValues: IRing[];
  speed?: number;
  flex?: number;
  imageSource?: number | any
}

export default (props: RingsProps)=> {
  const progress = new Value(0);
  const stroke = props.strokeWidth ? props.strokeWidth : STROKE_WIDTH;
  const chartSize = props.size ? props.size : SIZE;
  const [ringsList, setRingsList] = useState<IRing[]>([]);
  const duration: number = props.speed ? props.speed : 2000;

  const styles = StyleSheet.create({
    container: {
      flex: props.flex,
    },
    overlay: {
      ...StyleSheet.absoluteFillObject,
      justifyContent: "center",
      alignItems: "center",
      transform: [{ rotate: "90deg" }]
    },
    imageCircle: {
      overflow: 'hidden',
      width: chartSize / props.ringsValues.length,
      height: chartSize / props.ringsValues.length,
      borderRadius: (chartSize / props.ringsValues.length) / 2,
      transform: [{ rotate: "-90deg" }]
    }
  });

  const generateRings = (values: IRing[]) => {
    return values.map((ring: IRing, i) => {
      return {
        start: ring.start,
        end: ring.end,
        bg: ring.bg,
        theta: ring.theta * TAU,
        size: chartSize - stroke * (i * 2)
      };
    })

  }

  useEffect(() => {
    let ringsV = props.ringsValues ? generateRings(props.ringsValues) : [];
    setRingsList(ringsV);
  }, [props.ringsValues])


  useCode(() => set(progress, timing({ duration: duration })), [progress]);
  return (
    <View style={styles.container}>
      {ringsList.map((ring, i) =>
        <View key={i} style={styles.overlay}>
          <Ring {...{ ring, progress, stroke }} />
        </View>
      )}
      <View style={styles.overlay}>
        {props.imageSource && <Image source={props.imageSource} style={styles.imageCircle} />}
        {!props.imageSource && ringsList && ringsList.length > 0 && (<View style={[{
          width: ringsList[ringsList.length - 1].size - stroke * 2,
          height: ringsList[ringsList.length - 1].size - stroke * 2,
          backgroundColor: '#ffffff',
          borderRadius: (ringsList[ringsList.length - 1].size - stroke * 2) / 2
        }]} />)}
      </View>
      <Stickers rings={ringsList} size={props.size} />
    </View>
  );
};
