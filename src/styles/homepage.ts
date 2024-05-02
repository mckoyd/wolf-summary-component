import { tss } from "tss-react/mui";

export const useHomepageStyles = tss.create(({ theme }) => ({
  homepageContainer: {
    width: "100vw",
    fontFamily: "Hanken Grotesk",
    overflowX: "hidden",
  },
}));
