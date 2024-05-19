import React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Card from "./Card";

function CardPage() {
  const cardArray = [1, 2, 3, 4, 5, 6, 7];
  return (
    <>
      <Grid container spacing={6}>
        {cardArray.map((item, index) => {
          return (
            <Grid xs={3} key={index}>
              <Card key={index}></Card>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}

export default CardPage;
