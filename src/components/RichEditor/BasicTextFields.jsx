import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function BasicTextFields({ setPostTitle }) {
  const handleOnchange = (event) => {
    console.log(event.target.value);
    setPostTitle(event.target.value);
  };
  return (
    <Box
      component="form"
      sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        label="标题"
        variant="outlined"
        onChange={handleOnchange}
      />
    </Box>
  );
}
