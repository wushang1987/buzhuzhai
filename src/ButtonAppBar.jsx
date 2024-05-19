import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "@mui/material";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            href="/"
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            <Button color="inherit" sx={{ flexGrow: 1 }} href="/">
              Home
            </Button>
          </Typography>

          <Button color="inherit" href="/signIn">
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
