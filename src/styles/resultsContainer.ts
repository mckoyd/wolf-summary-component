import { tss } from "tss-react/mui";

export const useResultContainerStyles = tss.create(({ theme }) => ({
  resultsBox: {
    boxShadow: "0px 30px 60px rgba(61, 108, 236, 0.15)",
    borderRadius: "0px 0px 32px 32px",
    background:
      "linear-gradient(180deg, #7755FF 0%, #6943FF 0.01%, #2F2CE9 100%)",
    padding: "1em",
    color: theme.palette.common.white,
    [theme.breakpoints.up("lg")]: {
      borderRadius: "32px",
      padding: "3.5em 0",
    },
  },
  resultsCircle: {
    borderRadius: "100%",
    background:
      " linear-gradient(180deg, #4D21C9 0%, rgba(37, 33, 201, 0) 100%, rgba(37, 33, 201, 0) 100%)",
    width: "10em",
    height: "10em",
  },
  scoreTotal: {
    opacity: 0.52,
  },
}));
