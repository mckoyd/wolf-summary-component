import { Theme, createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface TypeBackground {
    lightSlateBlueBg: string;
    lightRoyalBlueBg: string;
    violetBlueCircle: string;
    persianBlueCircle: string;
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
  darkGrayBlue = "hsl(224, 30%, 27%)";

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
    },
  },
});

export default theme;
