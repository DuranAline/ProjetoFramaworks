import { useState, useEffect } from 'react';
import CommentForm from './components/CommentForm';
import CommentList from './components/CommentList';
import Carousel from './components/Carousel'; // Importe o componente Carousel
import Header from './components/Header';


// Define a interface para a estrutura de um comentário
interface Comment {
  author: string;
  text: string;
  dateTime: string;
}

const App: React.FC = () => {
  // Estado para armazenar os comentários
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
        <Carousel /> {/* Renderiza o componente Carousel acima dos comentários */}
        <p>Total de Comentários: {comments.length}</p>
        <CommentForm onAddComment={addComment} />
        <CommentList comments={comments} />
      </div>
    </div>
  );
};

export default App;
