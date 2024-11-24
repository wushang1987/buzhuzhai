import React from "react";
import { useGetPostQuery } from "../../services/pokemon";
import { EditorState, convertToRaw } from "draft-js";

import draftToHtml from "draftjs-to-html";

function PostCard() {
  const { data: allPost, error, isLoading } = useGetPostQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  console.log(allPost);

  return allPost.data.allPost.map((post) => {
    return (
      <>
        <h3 key={post._id}>{post.title}</h3>
        <div>{post.createTime}</div>
        <div dangerouslySetInnerHTML={{ __html: draftToHtml(post.content) }} />
        <hr />
      </>
    );
  });
}

export default PostCard;
