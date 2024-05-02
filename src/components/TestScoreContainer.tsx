import { Grid, Typography } from "@mui/material";
import React from "react";
import { useTestScoreContainerStyles } from "../styles/testScoreContainer";
import { ITestScore } from "../interfaces";

const TestScoreContainer: React.FC<ITestScore> = ({
  title,
  score,
  color,
  backgroundColor,
  Icon,
}) => {
  const { classes, cx } = useTestScoreContainerStyles();
  const bg = () => {
    switch (backgroundColor) {
      case "red":
        return classes.red;
      case "yellow":
        return classes.yellow;
      case "green":
        return classes.green;
      case "blue":
        return classes.blue;
      default:
        return;
    }
  };

  return (
    <Grid
      item
      container
      className={cx(classes.testSection, bg())}
      margin={"1em 0"}
      padding={"1em"}
      justifyContent={"space-between"}
      alignContent={"center"}
    >
      <Grid item container width={"50%"} gap={"0.5em"}>
        <Icon />
        <Typography color={color} className={classes.testSectionTitle}>
          {title}
        </Typography>
      </Grid>
      <Grid item>
        <Typography color="#303B59" fontWeight={700}>
          {score} <span className={classes.testTotalSpan}>/ 100</span>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default TestScoreContainer;
