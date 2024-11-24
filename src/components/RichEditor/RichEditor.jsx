import { Editor } from "react-draft-wysiwyg";
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import React from "react";

import BasicTextFields from "./BasicTextFields";
import ButtonGroup from "./ButtonGroup";

function RichEditor() {
  const [editorState, setEditorState] = React.useState(null);

  const [postTitle, setPostTitle] = React.useState(null);

  const onEditorStateChange = (editorState) => {
    console.log(editorState);
    setEditorState(editorState);
  };
  return (
    <>
      <BasicTextFields setPostTitle={setPostTitle}></BasicTextFields>
      <Editor onEditorStateChange={onEditorStateChange} />
      <ButtonGroup
        postTitle={postTitle}
        editorState={editorState}
      ></ButtonGroup>
    </>
  );
}

export default RichEditor;
