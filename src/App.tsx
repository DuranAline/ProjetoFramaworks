import { useState, useEffect } from 'react';
import CommentForm from './components/CommentForm';
import CommentList from './components/CommentList';
import CommentCount from './components/CommentCount'; // Importe o novo componente CommentCount
import Carousel from './components/Carousel';
import Header from './components/Header';

interface Comment {
  author: string;
  text: string;
  dateTime: string;
}

const App: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    const storedComments = JSON.parse(localStorage.getItem('comments') || '[]');
    setComments(storedComments);
  }, []);

  const addComment = (author: string, text: string) => {
    const newComment: Comment = {
      author,
      text,
      dateTime: new Date().toLocaleString(),
    };
    const updatedComments = [newComment, ...comments];
    setComments(updatedComments);
    localStorage.setItem('comments', JSON.stringify(updatedComments)); // Atualize o armazenamento local
  };

  return (
    <div>
      <Header />
      <div className="content">
        <Carousel />
        <CommentForm onAddComment={addComment} />
        <CommentCount count={comments.length} /> 
        <CommentList comments={comments} />
      </div>
    </div>
  );
};

export default App;
