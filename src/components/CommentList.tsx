import React from 'react';

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
    <div>
      {comments.map((comment, index) => (
        <div key={index}>
          <p>Nome: {comment.author}</p>         {/* Exibe o nome do autor do comentário */}
          <p>Comentário: {comment.text}</p>     {/* Exibe o texto do comentário */}
          <p>Data e Hora: {comment.dateTime}</p> /* Exibe a data e hora do comentário */
        </div>
      ))}
    </div>
  );
};

export default CommentList;
