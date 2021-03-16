import styled from "styled-components/native";

export const TopSafeArea = styled.SafeAreaView<{color?: string}>`
  display: flex;
  flex: 0;
  position: relative;
  background: ${({ theme, color }) => color ? color : ' #f3f3f3'};
`;

export const PageWrapper = styled.SafeAreaView<{backgroundColor?: string}>`
  display: flex;
  flex: 1;
  position: relative;
  background: ${({backgroundColor}) => backgroundColor ? backgroundColor : `#f3f3f3`};
`;

export const StyledView = styled.View<{
  padding?: string | number;
  width?: string;
  align?: string;
  fullHeight?: boolean;
}>`
  display: flex;
  align-items: ${({ align }) => (align ? align : "flex-start")};
  width: ${({ width }) => (width ? width : "100%")};
  ${({ fullHeight }) => fullHeight && `${"height: 100%"}`};
  justify-content: space-between;
  padding: 0 ${({padding}) => padding ? padding : 0}px;
`;

export const Label = styled.View`
  height: 180px;
  width: 300px;
  border-color: white;
  border-width: 2px;
  position: relative;
  top: 25%;
`;

export const StyledImage = styled.Image`
  width: 90%;
  flex: 0.3;
  margin-bottom: 100px;
`;

export const Input = styled.TextInput<{
  isRtl?: boolean;
  error?: boolean;
  firstClick?: boolean;
  withBorders?: boolean;
  fontSize?: string;
  fontWeight?: 'bold' | 'normal' | 'lighter' | 'bolder';
  color?: string;
}>`
  background:  #f3f3f3;
  padding: 8px 16px;
  min-height: 55px;
  margin-bottom: 5px;
  margin-top: 5px;
  font-size: ${({fontSize}) => fontSize ? fontSize : '30px'};
  color:  ${({color}) => color ? color : '#3b3b3b'};
  font-weight: ${({fontWeight}) => fontWeight ? fontWeight : 'normal'};
  text-align: ${({ isRtl }) => (isRtl ? "right" : "left")};
  border-width: 1px;
  width: 100%;
  border-radius: ${({ withBorders }) => (withBorders ? "60px" : 0)};
  border-color: ${({ withBorders, theme }) =>
    withBorders ? `#bfbfbf` : "transparent"};
  background-color: ${({ withBorders, theme }) =>
    withBorders ? `#f3f3f3` : "transparent"};
  border-bottom-color: ${({ error, theme }) =>
    error ?  `#b01f0c` : `#E3E3E3`};
  ${({ firstClick }) => firstClick && "opacity: 0.5"}
`;

export const Text = styled.Text<{
  marginTop?: string;
  marginLeft?: string;
  marginRight?: string;
  marginBottom?: string;
  size?: string;
  color?: string;
  fontWeight?: "bold" | "normal" | "thin" | "extraBold";
  align?: "center" | "flex-start" | "flex-end";
  lineHeight?: string;
}>`
  color: ${({color}) => color ? color : '#323232'};
  font-size: ${({ size }) => (size ? size : "16px")};
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : 0)};
  margin-right: ${({ marginRight }) => (marginRight ? marginRight : 0)};
  margin-bottom: ${({ marginBottom }) => (marginBottom ? marginBottom : 0)};
  margin-left: ${({ marginLeft }) => (marginLeft ? marginLeft : 0)};
  align-self: ${({ align }) => (align ? align : "center")};
  ${({ lineHeight }) => lineHeight && `line-height: ${lineHeight}`};
  text-align: ${({ align }) =>
    align === "flex-start"
      ? "left"
      : align === "flex-end"
      ? "right"
      : "center"};
  font-weight: ${({ fontWeight }) =>
    fontWeight === "extraBold"
      ? "900"
      : fontWeight === "bold"
      ? "bold"
      : fontWeight === "thin"
      ? "200"
      : "normal"};
`;

export const Row = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Col = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledScrollView = styled.ScrollView`
  display: flex;
  width: 100%;
`;

export const CircleImage = styled.Image<{width?: number}>`
  overflow: hidden;
  height: ${({width}) => width ? width : 30}px;
  width: ${({width}) => width ? width : 30}px;
  border-radius: ${({width}) => width ? width / 2 : 15}px;
`;


export const InputWithOverlayContainer = styled.View`
  position: relative;
  align-items: center;
  width: 100%;
`;