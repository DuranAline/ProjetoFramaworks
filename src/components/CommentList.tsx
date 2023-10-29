import React from 'react';

interface Comment {
  author: string;
  text: string;
  dateTime: string;
}

interface CommentListProps {
  comments: Comment[];
}

const CommentList: React.FC<CommentListProps> = ({ comments }) => {
  return (
    <div>
      {comments.map((comment, index) => (
        <div key={index}>
          <p>Nome: {comment.author}</p>
          <p>Comentário: {comment.text}</p>
          <p>Data e Hora: {comment.dateTime}</p>
        </div>
      ))}
    </div>
  );
};

export default CommentList;
