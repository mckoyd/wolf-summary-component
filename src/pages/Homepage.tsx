import React from "react";
import {
  Button,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useHomepageStyles } from "../styles/homepage";
import ResultsContainer from "../components/ResultsContainer";
import { testScores } from "../config/homepage.config";
import { ITestScore } from "../interfaces";
import TestScoreContainer from "../components/TestScoreContainer";

const Homepage: React.FC = () => {
  const theme = useTheme();
  const matchesLG = useMediaQuery(theme.breakpoints.up("lg"));
  const { classes, cx } = useHomepageStyles();

  return (
    <Grid
      container
      className={classes.homepageContainer}
      alignItems={matchesLG ? "center" : undefined}
      justifyContent={matchesLG ? "center" : undefined}
    >
      <Grid
        item
        container
        direction={matchesLG ? "row" : "column"}
        className={classes.mainContainer}
        alignItems={matchesLG ? "center" : undefined}
        justifyContent={matchesLG ? "center" : undefined}
      >
        <Grid item>
          <ResultsContainer />
        </Grid>
        <Grid item>
          <Grid
            item
            container
            direction={"column"}
            padding={matchesLG ? 0 : "2em"}
            paddingLeft={matchesLG ? "2em" : undefined}
            width={matchesLG ? "20em" : undefined}
          >
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
            <Grid item margin={"1em 0"}>
              <Button className={classes.continueBtn}>Continue</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Homepage;
