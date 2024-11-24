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
        label="Outlined"
        variant="outlined"
        onChange={handleOnchange}
      />
      {/* <TextField id="filled-basic" label="Filled" variant="filled" /> */}
      {/* <TextField id="standard-basic" label="Standard" variant="standard" /> */}
    </Box>
  );
}
