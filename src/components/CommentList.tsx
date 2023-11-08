import React from 'react';
import './CommentList.css';

// Define a interface 'Comment' que descreve a estrutura de um comentário.
interface Comment {
  author: string;    // Nome do autor do comentário.
  text: string;      // O texto do comentário.
  dateTime: string;  // Data e hora do comentário.
}

// Define a interface 'CommentListProps' que descreve as propriedades esperadas pelo componente 'CommentList'.
interface CommentListProps {
  comments: Comment[];  // Um array de objetos 'Comment' que representa os comentários.
}

// Define o componente 'CommentList' como uma função de componente do React (React Functional Component).
const CommentList: React.FC<CommentListProps> = ({ comments }) => {
  return (
    // Renderiza a lista de comentários dentro de uma div com a classe 'comment-list'.
    <div className="comment-list">
      {comments.map((comment, index) => (
        // Para cada comentário no array 'comments', renderiza um 'comment-box' com informações do comentário.
        <div className="comment-box" key={index}>
          <div className="comment">
            <div className="comment-author">
              {/* Exibe a imagem do ícone 'Com' e o nome do autor do comentário. */}
              <img src="./image/com.png" alt="Com Icon" /> {comment.author}
            </div>
            <div className="comment-text">
              {/* Exibe o texto do comentário. */}
              {comment.text}
            </div>
            <div className="comment-datetime">
              {/* Exibe a data e hora do comentário. */}
              {comment.dateTime}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// Exporta o componente 'CommentList' para que ele possa ser usado em outros lugares da aplicação.
export default CommentList;
