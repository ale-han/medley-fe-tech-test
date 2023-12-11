import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      white: string;
      black: string;
      background: string;
      text: string;
      primary: string;
      primaryTextColor: string;
      secondaryTextColor: string;
      grayTextColor: string;
      success: string;
      warning: string;
      error: string;
      disabled: string;
      successBackgroundColor: string;
      successTextColor: string;
      disabledBackgroundColor: string;
      disabledTextColor: string;
    };
    fonts: {
      Inter: "Inter";
    };
  }
}
