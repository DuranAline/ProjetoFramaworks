import { useState, useEffect } from 'react';
import CommentForm from './components/CommentForm';
import CommentList from './components/CommentList';
import Carousel from './components/Carousel';
import Header from './components/Header';
import './components/App.css';
import Footer from './components/Footer';

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
    // Verifica se há comentários armazenados no localStorage e, se não houver, retorna um array vazio.
    const storedComments = JSON.parse(localStorage.getItem('comments') || '[]');
    setComments(storedComments); // Atualiza o estado 'comments' com os comentários armazenados.
  }, []);

  // Adicionar um novo comentário
  const addComment = (author: string, text: string) => {
    const newComment: Comment = {
      author,
      text,
      dateTime: new Date().toLocaleString(),
    };
    const updatedComments = [newComment, ...comments];
    setComments(updatedComments); // Atualiza o estado 'comments' com os novos comentários.

    // Salva os comentários no localStorage para que sejam mantidos após a recarga da página.
    localStorage.setItem('comments', JSON.stringify(updatedComments));
  };

  return (
    <div>
      <Header />
      <div className="content">
        <Carousel />

        <CommentForm onAddComment={addComment} />
        <div className="total-box">
          <p className='paragrafo'>Total de Comentários: {comments.length}</p>
        </div>
        <CommentList comments={comments} />
      </div>
      <Footer /> 
    </div>
  );
};

export default App;