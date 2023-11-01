import React from 'react';
import './CommentCount.css';

interface CommentCountProps {
  count: number;
}

const CommentCount: React.FC<CommentCountProps> = ({ count }) => {
  return (
    <p>Total de Comentários: {count}</p>
  );
};

export default CommentCount;
