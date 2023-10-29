import React, { useState, useEffect } from 'react';
import CommentForm from './components/CommentForm';
import CommentList from './components/CommentList';

const App: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    const storedComments = JSON.parse(localStorage.getItem('comments') || '[]');
    setComments(storedComments);
  }, []);

  const addComment = (author: string, text: string) => {
    const newComment = {
      author,
      text,
      dateTime: new Date().toLocaleString(),
    };
    setComments([newComment, ...comments]);
  };

  useEffect(() => {
    localStorage.setItem('comments', JSON.stringify(comments));
  }, [comments]);

  return (
    <div>
      <h1>Diário de Comentários</h1>
      <CommentForm onAddComment={addComment} />
      <p>Total de Comentários: {comments.length}</p>
      <CommentList comments={comments} />
    </div>
  );
};

export default App;
