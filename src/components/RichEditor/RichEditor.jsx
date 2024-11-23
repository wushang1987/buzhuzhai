import { Editor } from "react-draft-wysiwyg";
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import React from "react";

import ButtonGroup from "./ButtonGroup";

function RichEditor() {
  return (
    <>
      <Editor />

      <ButtonGroup></ButtonGroup>
    </>
  );
}

export default RichEditor;
