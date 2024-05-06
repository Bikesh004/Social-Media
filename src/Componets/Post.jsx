import { useContext } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { Postlist } from "../Store/post-list-store";

function Post({ post }) {
  const { deletePost } = useContext(Postlist);

  return (
    <div className="card card-container" style={{ width: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(post.id)}
          >
            <MdDeleteOutline />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span key={tag} className="badge text-bg-primary tag">
            {tag}
          </span>
        ))}
        <div className="alert alert-primary reactions" role="alert">
          This post reacted by {post.reactions} People.
        </div>
      </div>
    </div>
  );
}

export default Post;
