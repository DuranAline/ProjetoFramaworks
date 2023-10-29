import React, { useState } from 'react';

// Definindo a interface CommentFormProps para representar as propriedades esperadas para o componente CommentForm
interface CommentFormProps {
  onAddComment: (author: string, text: string) => void;
  // A propriedade 'onAddComment' é uma função que recebe um nome de autor (string) e um texto de comentário (string)
}

// Componente CommentForm que permite aos usuários inserir novos comentários
const CommentForm: React.FC<CommentFormProps> = ({ onAddComment }) => {
  const [author, setAuthor] = useState(''); // Estado para o nome do autor
  const [comment, setComment] = useState(''); // Estado para o texto do comentário

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (author && comment) {
      onAddComment(author, comment);
      setAuthor('');  // Limpa o campo de nome do autor após o envio do comentário
      setComment(''); // Limpa o campo de texto do comentário após o envio do comentário
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Seu nome"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        // Quando o usuário digita no campo de nome, atualiza o estado 'author'
      />
      <br />
      <textarea
        placeholder="Seu comentário"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        // Quando o usuário digita no campo de comentário, atualiza o estado 'comment'
      ></textarea>
      <br />
      <button type="submit">Enviar Comentário</button>
    </form>
  );
};

export default CommentForm;
