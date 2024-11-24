import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import axios from "axios";

import { useAddPostMutation } from "../../services/pokemon";
export default function BasicButtons({ contentState, postTitle }) {
  const [addPost] = useAddPostMutation();
  const handClick = (e) => {
    console.log(postTitle);
    const result = addPost({
      title: postTitle,
      content: contentState,
    });

    console.log(result);
  };

  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained" onClick={handClick}>
        保存
      </Button>
    </Stack>
  );
}
