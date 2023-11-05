import React from 'react';
import './CommentList.css';

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
    <div className="comment-list">
      {comments.map((comment, index) => (
        <div className="comment-box" key={index}>
          <div className="comment">
            <div className="comment-author">
              <img src="./image/com.png" alt="Com Icon" /> {comment.author}
            </div>
            <div className="comment-text">{comment.text}</div>
            <div className="comment-datetime">{comment.dateTime}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentList;
