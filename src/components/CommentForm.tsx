import { useState } from 'react';
import './CommentForm.css';

interface CommentFormProps {
  onAddComment: (author: string, text: string) => void;
}

const CommentForm: React.FC<CommentFormProps> = ({ onAddComment }) => {
  const [author, setAuthor] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (author && comment) {
      onAddComment(author, comment);
      setAuthor('');
      setComment('');
    }
  };

  return (
    // Adicione a classe CSS "comment-form" para estilização
    <form className="comment-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Seu nome"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <br />
      <textarea
        placeholder="Seu comentário"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      ></textarea>
      <br />
      <button type="submit">Enviar Comentário</button>
    </form>
  );
};

export default CommentForm;
