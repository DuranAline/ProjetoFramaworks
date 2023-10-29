import React, { useState, useEffect } from 'react';
import CommentForm from './components/CommentForm';
import CommentList from './components/CommentList';
import Header from './components/header.css';
import './App.css';

interface Comment {
  author: string;
  text: string;
  dateTime: string;
}

const App: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);

  // Carregar comentários do armazenamento local quando o aplicativo é montado
  useEffect(() => {
    const storedComments = JSON.parse(localStorage.getItem('comments') || '[]');
    setComments(storedComments);
  }, []);

  // Adicionar um novo comentário
  const addComment = (author: string, text: string) => {
    const newComment: Comment = {
      author,
      text,
      dateTime: new Date().toLocaleString(),
    };
    setComments([newComment, ...comments]);
  };

  // Salvar os comentários no armazenamento local sempre que houver uma mudança
  useEffect(() => {
    localStorage.setItem('comments', JSON.stringify(comments));
  }, [comments]);

  return (
    <div>
      <Header />
      <div className="content">
        <h1>Diário de Comentários</h1>
        <CommentForm onAddComment={addComment} />
        <p>Total de Comentários: {comments.length}</p>
        <CommentList comments={comments} />
      </div>
    </div>
  );
};

export default App;
