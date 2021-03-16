import { Dimensions } from "react-native";
import { IRing } from ".";
const { width } = Dimensions.get("window");

export const { PI } = Math;
export const TAU = 2 * PI;
export const SIZE = width * 0.5;
export const STROKE_WIDTH = 20;
type Color = string;

export const R1: IRing = {
  start: "rgb(0, 217, 253)",
  end: "rgb(0, 255, 169)",
  bg: "rgb(245, 245, 245)",
  theta: 0.75 * TAU,
  size: SIZE - STROKE_WIDTH * 6
};

export const R2: IRing = {
  start: "rgb(153, 255, 0)",
  end: "rgb(216, 255, 1)",
  bg: "rgb(245, 245, 245)",
  theta: 0.5 * TAU,
  size: SIZE - STROKE_WIDTH * 4
};

export const R3: IRing = {
  start: "rgb(249, 18, 78)",
  end: "rgb(249, 56, 133)",
  bg: "rgb(245, 245, 245)",
  theta: 0.85 * TAU,
  size: SIZE - STROKE_WIDTH * 2
};

export const R4: IRing = {
  start: "rgb(24, 18, 78)",
  end: "rgb(24, 56, 133)",
  bg: "rgb(245, 245, 245)",
  theta: 0.85 * TAU,
  size: SIZE
};
