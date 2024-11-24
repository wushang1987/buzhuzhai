import { Editor } from "react-draft-wysiwyg";
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import React from "react";

import BasicTextFields from "./BasicTextFields";
import ButtonGroup from "./ButtonGroup";

import MyInput from "./DraftRichEditor";

function RichEditor() {
  const [contentState, setContentState] = React.useState(null);

  const [postTitle, setPostTitle] = React.useState(null);

  const onContentStateChange = (contentState) => {
    console.log(contentState);
    setContentState(contentState);
  };
  return (
    <>
      <BasicTextFields setPostTitle={setPostTitle}></BasicTextFields>
      <Editor onContentStateChange={onContentStateChange} />
      {/* <MyInput></MyInput> */}
      <ButtonGroup
        postTitle={postTitle}
        contentState={contentState}
      ></ButtonGroup>
    </>
  );
}

export default RichEditor;
