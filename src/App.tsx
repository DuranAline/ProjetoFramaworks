import React, { useState, useEffect } from 'react';
import CommentForm from './components/CommentForm';
import CommentList from './components/CommentList';
import Header from './components/Header';
import './App.css'; // Importe o arquivo de estilos para o App

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
      <Header />
      <div className="content"> {/* Crie uma div para o conteúdo, se necessário */}
        <h1>Diário de Comentários</h1>
        <CommentForm onAddComment={addComment} />
        <p>Total de Comentários: {comments.length}</p>
        <CommentList comments={comments} />
      </div>
    </div>
  );
};

export default App;
