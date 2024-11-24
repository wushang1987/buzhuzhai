import React from "react";
import { useGetPostQuery } from "../services/pokemon";

function PostCard() {
  const { data: allPost, error, isLoading } = useGetPostQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  console.log(allPost);

  return allPost.data.allPost.map((post) => {
    return <div key={post._id}>{post.title}</div>;
  });
}

export default PostCard;
