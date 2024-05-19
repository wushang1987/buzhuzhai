import * as React from "react";
import { Outlet, Link } from "react-router-dom";
import Button from "@mui/material/Button";
import ButtonAppBar from "../ButtonAppBar";
import Card from "../cardPage/Card";

export default function Root() {
  return (
    <>
      <ButtonAppBar></ButtonAppBar>

      <Card></Card>

      {/* <Button variant="contained">Hello world</Button> */}
      <div id="detail">
        <Outlet></Outlet>
      </div>
    </>
  );
}
