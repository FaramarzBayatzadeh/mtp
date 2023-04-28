import { Theme } from "@mui/material";
import { makeStyles } from "@mui/material/styles";

export interface StyleProps {
  BackgroundColor: string;
  Color: string;
}

export const useStyles = makeStyles((theme: Theme) => ({
  mySelector: (props: StyleProps) => ({
    // props = { width: string; height: string }
    backgroundColor: props.BackgroundColor,
    color: props.Color,
  }),
}));
