import { tss } from "tss-react/mui";

export const useHomepageStyles = tss.create(({ theme }) => ({
  homepageContainer: {
    height: "100vh",
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
}));
