import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Outlet, Link } from "react-router-dom";
import BasicList from "./BasicList";

import RichEditor from "./RichEditor/RichEditor";

import PostCard from "./post/PostCard";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  marginTop: "20px",
  color: theme.palette.text.secondary,
}));

export default function HomePageLayout() {
  return (
    <Box sx={{ flexGrow: 1, marginTop: "3rem" }}>
      <Grid container spacing={2}>
        <Grid item xs={2} md={3}>
          <BasicList></BasicList>
        </Grid>
        <Grid item xs={10} md={9}>
          <Outlet />
          {/* <PostCard></PostCard>
           <RichEditor></RichEditor> */}
        </Grid>
      </Grid>
    </Box>
  );
}
