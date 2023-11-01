import React from 'react';
import './CommentList.css';
// Definindo a interface Comment para representar a estrutura de um comentário
interface Comment {
  author: string;    // Propriedade para o nome do autor
  text: string;      // Propriedade para o texto do comentário
  dateTime: string;  // Propriedade para a data e hora do comentário
}

// Definindo a interface CommentListProps para representar as propriedades esperadas para o componente CommentList
interface CommentListProps {
  comments: Comment[]; // A propriedade 'comments' é um array de objetos do tipo 'Comment'
}

// Componente CommentList que renderiza uma lista de comentários
const CommentList: React.FC<CommentListProps> = ({ comments }) => {
  return (
    <div className="comment-list">
      {comments.map((comment, index) => (
        <div className="comment-box" key={index}>
          <div className="comment">
            <div className="comment-author">{comment.author}</div>
            <div className="comment-text">{comment.text}</div>
            <div className="comment-datetime">{comment.dateTime}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentList;
