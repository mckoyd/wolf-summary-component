import { tss } from "tss-react/mui";
import { CSSProperties } from "react";

export const useHomepageStyles = tss.create(({ theme }) => ({
  homepageContainer: {
    height: "100vh",
    background: "ECF2FF",
  },
  mainContainer: {
    width: "100vw",
    fontFamily: "Hanken Grotesk",
    overflowX: "hidden",
    [theme.breakpoints.up("lg")]: {
      borderRadius: "32px",
      height: "fit-content",
      boxShadow: "0px 30px 60px rgba(61, 108, 236, 0.15)",
      width: "fit-content",
    },
  },
  continueBtn: {
    ...(theme.typography.continueBtn as CSSProperties),
    "&:hover": {
      background:
        "linear-gradient(180deg, #7755FF 0%, #6943FF 0.01%, #2F2CE9 100%)",
    },
  },
}));
