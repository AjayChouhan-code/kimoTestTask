import { Dimensions, Platform } from "react-native";


const { width, height } = Dimensions.get("window");

//Guideline sizes are based on Design provided
const guidelineBaseWidth = 360;
const guidelineBaseHeight = 800;

const scale = (size: number) => (width / guidelineBaseWidth) * size;
const verticalScale = (size: number) => (height / guidelineBaseHeight) * size;
const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;

const fontSize = {
  small: moderateScale(12, 0.2),
  medium: moderateScale(14, 0.2),
  large: moderateScale(16, 0.2),
  xlarge: moderateScale(20, 0.2),
  xxlarge: moderateScale(24, 0.2),
};

const fontFamily = {
  regular: "IBMPlexMono-Regular",
  medium: "IBMPlexMono-Medium",
  semiBold: "IBMPlexMono-SemiBold",
  bold: "IBMPlexMono-Bold",
  boldItalic: "IBMPlexMono-BoldItalic",
  light: "IBMPlexMono-Light",
  extraLight: "IBMPlexMono-Thin"
}
const fontWeight = {
  b: "bold",
  vl: "100",
  l: "400",
  m: "500",
  md: "700",
  d: "900",
};

const colors = {
  dark: '#008080',
  light: '#E6F2F2'
}

export { colors, fontSize, fontFamily, fontWeight, moderateScale };