import {
  createContext,
  useCallback,
  useEffect,
  useReducer,
  useState,
} from "react";

export const Postlist = createContext({
  postlist: [],
  fatching: false,
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_INTIAL_POSTS") {
    newPostList = action.payload.posts;
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }
  return newPostList;
};

const PolistlistProvider = ({ children }) => {
  const [postlist, dispatchPolist] = useReducer(postListReducer, []);
  const [fatching, setfaching] = useState(false);

  useEffect(() => {
    setfaching(true);
    const controller = new AbortController();
    const signal = controller.signal;
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setfaching(false);
      });
    return () => {
      controller.abort();
    };
  }, []);

  const addPost = (post) => {
    dispatchPolist({
      type: "ADD_POST",
      payload: post,
    });
  };
  const addInitialPosts = (posts) => {
    dispatchPolist({
      type: "ADD_INTIAL_POSTS",
      payload: {
        posts,
      },
    });
  };
  const deletePost = useCallback(
    (postId) => {
      dispatchPolist({
        type: "DELETE_POST",
        payload: {
          postId,
        },
      });
    },
    [dispatchPolist]
  );

  return (
    <Postlist.Provider value={{ postlist, fatching, addPost, deletePost }}>
      {children}
    </Postlist.Provider>
  );
};

export default PolistlistProvider;
