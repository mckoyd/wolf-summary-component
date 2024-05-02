import { useHomepageStyles } from "../styles/homepage";
import { ReactComponent as ReactionIcon } from "../assets/images/icon-reaction.svg";
import { ReactComponent as MemoryIcon } from "../assets/images/icon-memory.svg";
import { ReactComponent as VerbalIcon } from "../assets/images/icon-verbal.svg";
import { ReactComponent as VisualIcon } from "../assets/images/icon-visual.svg";
import { ITestScore } from "../interfaces";

export const testScores: ITestScore[] = [
  {
    title: "Reaction",
    score: 80,
    color: "#FF5555",
    backgroundColor: "red",
    Icon: ReactionIcon,
  },
  {
    title: "Memory",
    score: 92,
    color: "#FFB21E",
    backgroundColor: "yellow",
    Icon: MemoryIcon,
  },
  {
    title: "Verbal",
    score: 61,
    color: "#00BB8F",
    backgroundColor: "green",
    Icon: VerbalIcon,
  },
  {
    title: "Visual",
    score: 73,
    color: "#1125D6",
    backgroundColor: "blue",
    Icon: VisualIcon,
  },
];
