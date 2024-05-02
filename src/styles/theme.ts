import { Theme, createTheme } from "@mui/material/styles";
import { CSSProperties } from "react";

declare module "@mui/material/styles" {
  interface TypeBackground {
    lightSlateBlueBg: string;
    lightRoyalBlueBg: string;
    violetBlueCircle: string;
    persianBlueCircle: string;
    redGradient: string;
    yellowGradient: string;
    greenGradient: string;
    blueGradient: string;
  }

  interface CommonColors {
    lightRed: string;
    orangeyYellow: string;
    greenTeal: string;
    cobaltBlue: string;
    white: string;
    paleBlue: string;
    lightLavender: string;
    darkGrayBlue: string;
  }

  interface TypographyVariants {
    continueBtn: CSSProperties;
  }
  interface TypographyVariantsOptions {
    continueBtn?: CSSProperties;
  }
}

const lightRed = "hsl(0, 100%, 67%)",
  orangeyYellow = "hsl(39, 100%, 56%)",
  greenTeal = "hsl(166, 100%, 37%)",
  cobaltBlue = "hsl(234, 85%, 45%)",
  lightSlateBlueBg = "hsl(252, 100%, 67%)",
  lightRoyalBlueBg = "hsl(241, 81%, 54%)",
  violetBlueCircle = "hsla(256, 72%, 46%, 1)",
  persianBlueCircle = "hsla(241, 72%, 46%, 0)",
  white = "hsl(0, 0%, 100%)",
  paleBlue = "hsl(221, 100%, 96%)",
  lightLavender = "hsl(241, 100%, 89%)",
  darkGrayBlue = "hsl(224, 30%, 27%)",
  redGradient =
    "linear-gradient(0deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), #FF5555",
  yellowGradient =
    "linear-gradient(0deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), #FFB21E",
  greenGradient =
    "linear-gradient(0deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), #00BB8F",
  blueGradient =
    "linear-gradient(0deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), #1125D6";

const theme: Theme = createTheme({
  palette: {
    common: {
      lightRed,
      orangeyYellow,
      greenTeal,
      cobaltBlue,
      white,
      paleBlue,
      lightLavender,
      darkGrayBlue,
    },
    background: {
      lightSlateBlueBg,
      lightRoyalBlueBg,
      violetBlueCircle,
      persianBlueCircle,
      redGradient,
      yellowGradient,
      greenGradient,
      blueGradient,
    },
  },
  typography: {
    h2: {
      fontFamily: "Hanken Grotesk",
      fontStyle: "normal",
      fontWeight: "700",
      fontSize: "18px",
      lineHeight: "23px",
      textAlign: "center",
      color: "#CAC9FF",
    },
    continueBtn: {
      background: "#303B59",
      borderRadius: "128px",
      color: "#FFF",
      width: "100%",
      padding: "1em 0",
      textTransform: "none",
      fontWeight: 700,
      fontSize: "18px",
      lineHeight: "23px",
    },
  },
});

export default theme;
