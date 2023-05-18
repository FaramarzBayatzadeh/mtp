import { Grid } from "@mui/material";
import react, { useEffect, useState } from "react";

var useSyncLocalStorage = (initialValue: Board) => {
  const getLocalStorage = (key: string) => {
    return window.localStorage.getItem(key);
  };

  const setInitialValue = (key: string, initialValue: string) => {
    return getLocalStorage(key) || initialValue;
  };

  const [name, setName] = useState(() =>
    setInitialValue("name", initialValue.Name)
  );
  const [date, setDate] = useState(() =>
    setInitialValue("date", initialValue.Date)
  );
  const [description, setDescription] = useState(() =>
    setInitialValue("description", initialValue.Description)
  );

  const [count, setCount] = useState(1);
  const handleNameChange = (event: any) => {
    setName(event.target.value);
  };

  const handleDescriptionChange = (event: any) => {
    setDescription(event.target.value);
  };

  const handleDateChange = (event: any) => {
    setDate(event.target.value);
  };

  var setLocalStorage = (model: Board) => {
    window.localStorage.setItem("name", model.Name);
    window.localStorage.setItem("date", model.Date);
    window.localStorage.setItem("description", model.Description);
  };

  useEffect(() => {
    setLocalStorage({
      Name: name,
      Description: description,
      Date: date,
    } as Board);
  }, [name, description, date]);

  return [
    name,
    description,
    date,
    handleNameChange,
    handleDescriptionChange,
    handleDateChange,
  ];
};

const BoardAdd = (initialValue: Board) => {
  const [
    name,
    description,
    date,
    handleNameChange,
    handleDescriptionChange,
    handleDateChange,
  ] = useSyncLocalStorage(initialValue);

  // const handleForm = () => {
  //   setCount(5);
  // };
  return (
    <Grid Container spacing={2}>
      <Grid xs={12}>
        <input
          type="text"
          id="name"
          onChange={() => handleNameChange}
          value={name}
        />
      </Grid>
      <Grid xs={12}>
        <input
          type="text"
          id="Date"
          onChange={() => handleDateChange}
          value={date}
        />
      </Grid>

      <Grid xs={12}>
        <input
          type="text"
          id="Description"
          onChange={() => handleDescriptionChange}
          value={description}
        />
      </Grid>

      <Grid xs={12} spacing={8}>
        <button type="button">Submit</button>
      </Grid>
    </Grid>
  );
};

export default BoardAdd;
