import React from "react";

const commentsData = [
  {
    name: "Arun Panigrahi",
    text: "comment section lorem ipsum",
    replies: [
      {
        name: "Arun Panigrahi",
        text: "comment section lorem ipsum",
        replies: [],
      },
      {
        name: "Arun Panigrahi",
        text: "comment section lorem ipsum",
        replies: [
          {
            name: "Arun Panigrahi",
            text: "comment section lorem ipsum",
            replies: [],
          },
          {
            name: "Arun Panigrahi",
            text: "comment section lorem ipsum",
            replies: [],
          },
        ],
      },
      {
        name: "Arun Panigrahi",
        text: "comment section lorem ipsum",
        replies: [],
      },
    ],
  },
  {
    name: "Arun Panigrahi",
    text: "comment section lorem ipsum",
    replies: [],
  },
  {
    name: "Arun Panigrahi",
    text: "comment section lorem ipsum",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg">
      <img
        className="w-12  h-12  "
        alt="user"
        src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
      />
      <div className="px-3">
        <p>{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comments, index) => (
    <>
      <div key={index}>
        <Comment data={comments} />
      </div>
      <div className="pl-5 border border-l-black ml-5">
        <CommentsList comments={comments.replies} />
      </div>
    </>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
