import { Grid, Typography, useTheme } from "@mui/material";
import React from "react";
import { useHomepageStyles } from "../styles/homepage";
import ResultsContainer from "../components/ResultsContainer";

import { ReactComponent as ReactionIcon } from "../assets/images/icon-reaction.svg";
import { testScores } from "../config/homepage.config";
import { ITestScore } from "../interfaces";
import TestScoreContainer from "../components/TestScoreContainer";

const Homepage: React.FC = () => {
  const theme = useTheme();
  const { classes, cx } = useHomepageStyles();

  return (
    <Grid container direction="column" className={classes.homepageContainer}>
      <Grid item>
        <ResultsContainer />
      </Grid>
      <Grid item>
        <Grid item container direction={"column"} margin={"2em"}>
          <Typography
            fontWeight={700}
            fontSize={"18px"}
            lineHeight={"23px"}
            color="#303B59"
          >
            Summary
          </Typography>
          <Grid item container>
            {testScores.map(
              (
                { title, score, color, backgroundColor, Icon }: ITestScore,
                index: number
              ) => (
                <TestScoreContainer
                  key={`${title}-${index}`}
                  title={title}
                  score={score}
                  color={color}
                  backgroundColor={backgroundColor}
                  Icon={Icon}
                />
              )
            )}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Homepage;
