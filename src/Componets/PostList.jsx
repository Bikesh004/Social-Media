import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { Postlist as PostListData } from "../Store/post-list-store";
import WelcomeMassage from "./WelcomeMassage";
import LoadingSpinner from "./LoadingSpinner";

function PostList() {
  const { postlist, fatching } = useContext(PostListData);

  // const handlegetPostsClick = () => {
  //   fetch("https://dummyjson.com/posts")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       addInitialPosts(data.posts);
  //     });
  // };

  return (
    <div>
      {fatching && <LoadingSpinner />}
      {!fatching && postlist.length === 0 && (
        <WelcomeMassage /*onGetPostClick={handlegetPostsClick}*/ />
      )}
      {!fatching && postlist.map((post) => <Post key={post.id} post={post} />)}
    </div>
  );
}

export default PostList;
