import * as styledComponents from "styled-components";
import ThemeType from "../styles/theme";

declare module "styled-components" {
  interface DefaultTheme extends ThemeType {}
}

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider
} = styledComponents as styledComponents.ThemedStyledComponentsModule<
  ThemeType
>;

export { css, createGlobalStyle, keyframes, ThemeProvider, styledComponents };
export default styled;
