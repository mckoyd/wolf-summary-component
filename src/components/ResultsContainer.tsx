import { Grid, Typography, useTheme } from "@mui/material";
import React from "react";
import { useResultContainerStyles } from "../styles/resultsContainer";

const ResultsContainer: React.FC = () => {
  const theme = useTheme();
  const { classes } = useResultContainerStyles();
  return (
    <Grid
      item
      container
      direction="column"
      className={classes.resultsBox}
      justifyItems={"center"}
      alignItems={"center"}
    >
      <Grid item margin={"1em"}>
        <Typography variant="h2">Your Results</Typography>
      </Grid>
      <Grid
        item
        container
        direction={"column"}
        className={classes.resultsCircle}
        alignItems={"center"}
        justifyContent={"center"}
        margin={"1em"}
      >
        <Typography
          fontWeight={800}
          fontSize="56px"
          lineHeight="72px"
          color={theme.palette.common.white}
        >
          76
        </Typography>
        <Typography
          fontWeight={700}
          fontSize={"16px"}
          lineHeight={"21px"}
          color={"#CAC9FF"}
          className={classes.scoreTotal}
        >
          of 100
        </Typography>
      </Grid>
      <Grid item margin={"1em"}>
        <Typography
          fontWeight={700}
          fontSize="24px"
          lineHeight="31px"
          align="center"
        >
          Great
        </Typography>
        <Typography
          fontWeight={500}
          fontSize={"16px"}
          lineHeight={"21px"}
          align="center"
          color="#CAC9FF"
        >
          Your performance exceed 65% of
          <br /> the people conducting the test here!
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ResultsContainer;
