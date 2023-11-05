import { useState } from 'react';
import './CommentForm.css';

// Define a interface 'CommentFormProps' que descreve as propriedades esperadas pelo componente 'CommentForm'.
interface CommentFormProps {
  onAddComment: (author: string, text: string) => void; // Uma função que será chamada ao adicionar um comentário.
}

// Define o componente 'CommentForm' como uma função de componente 
const CommentForm: React.FC<CommentFormProps> = ({ onAddComment }) => {
  // Cria estados locais para 'author' (nome do autor) e 'comment' (texto do comentário).
  const [author, setAuthor] = useState('');
  const [comment, setComment] = useState('');

  // Função para lidar com o envio do formulário.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Impede o comportamento padrão do envio do formulário.

    // Verifica se 'author' e 'comment' não estão vazios.
    if (author && comment) {
      // Chama a função 'onAddComment' passando 'author' e 'comment' como argumentos.
      onAddComment(author, comment);
      // Limpa os campos de entrada após o envio.
      setAuthor('');
      setComment('');
    }
  };

  return (
    // Renderiza o formulário com a classe CSS "comment-form" e define a função 'handleSubmit' como o manipulador de envio.
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

// Exporta o componente 'CommentForm' para que ele possa ser usado em outros lugares da aplicação.
export default CommentForm;
