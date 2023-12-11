interface Size {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
}

const size: Size = {
  xs: "400px",
  sm: "600px",
  md: "900px",
  lg: "1280px",
  xl: "1440px",
  xxl: "1920px",
};

export const device = {
  xs: `@media only screen and (max-width: ${size.xs})`,
  sm: `@media only screen and (max-width: ${size.sm})`,
  md: `@media only screen and (max-width: ${size.md})`,
  lg: `@media only screen and (max-width: ${size.lg})`,
  xl: `@media only screen and (max-width: ${size.xl})`,
  xxl: `@media only screen and (max-width: ${size.xxl})`,
};
