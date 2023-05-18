import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Grid from "@mui/material/Grid";
import AppBarComponent from "./Components/AppBar/Index";
import BoardAdd from "./ExerciseHook/BoardAdd";

function App() {
  const [count, setCount] = useState(0);

  return (
    // <Grid container spacing={8}>
    //   <AppBarComponent />
    // </Grid>
    <div>
      <BoardAdd />
    </div>
  );
}

export default App;
