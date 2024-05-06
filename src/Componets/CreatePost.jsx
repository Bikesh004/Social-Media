import { useContext, useRef } from "react";
import { Postlist } from "../Store/post-list-store";
import { useNavigate } from "react-router-dom";

function CreatePost() {
  const { addPost } = useContext(Postlist);
  const navigate = useNavigate();

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";

    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userId: userId,
        tags: tags,
      }),
    })
      .then((res) => res.json())
      .then((post) => addPost(post));
    navigate("/");
  };

  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Enter your Userid here
        </label>
        <input
          type="userid"
          ref={userIdElement}
          className="form-control"
          id="title"
          placeholder="Your user Id"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Add Title
        </label>
        <input
          type="text"
          ref={postTitleElement}
          className="form-control"
          id="title"
          placeholder="How are felling today..."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Add description about your post....
        </label>
        <textarea
          type="text"
          ref={postBodyElement}
          rows="4"
          className="form-control"
          id="title"
          placeholder="Tell us about it"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Number of reactions
        </label>
        <input
          type="reactions"
          ref={reactionsElement}
          className="form-control"
          id="title"
          placeholder="How many pepole rect your post"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter your hashtags here
        </label>
        <input
          type="tags"
          ref={tagsElement}
          className="form-control"
          id="title"
          placeholder="Please enter tags using space"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
}

export default CreatePost;
