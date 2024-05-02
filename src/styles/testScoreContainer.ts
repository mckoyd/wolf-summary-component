import { tss } from "tss-react/mui";

export const useTestScoreContainerStyles = tss.create(({ theme }) => ({
  testSection: {
    borderRadius: "12px",
  },
  testSectionTitle: {
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "21px",
  },
  testTotalSpan: {
    opacity: 0.5,
  },
  red: {
    background: theme.palette.background.redGradient,
  },
  yellow: {
    background: theme.palette.background.yellowGradient,
  },
  green: {
    background: theme.palette.background.greenGradient,
  },
  blue: {
    background: theme.palette.background.blueGradient,
  },
}));
