import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation, useParams } from 'react-router-dom';
import { ImSpinner9 } from 'react-icons/im'
import './PostDetails.modules.css'

function PostDetails() {
  const { id } = useParams(); // Obtém o parâmetro de rota "id" usando o hook "useParams" do React Router

  // Define os estados iniciais para o post, os comentários e a imagem do post
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [image, setImage] = useState('');

  // Obtém o objeto de localização da rota atual usando o hook "useLocation" do React Router
  const location = useLocation();

  useEffect(() => {
    // Define as funções assíncronas para buscar o post e os comentários usando a API JSONPlaceholder
    async function fetchPost() {
      // define o estado de carregamento para true
      setLoading(true);
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const userResponse = await axios.get(`https://jsonplaceholder.typicode.com/users/${response.data.userId}`);
        setPost({
          ...response.data,
          author: userResponse.data.name
        });
        // Define a imagem do post com base no estado de localização atual da rota
        setImage(location.state.imageUrl);
        setLoading(false);
      } catch (error) {
        console.error(`Error fetching post: ${error}`);
        // exibe um alerta com a mensagem de erro
        window.alert('Não foi possível carregar o post. Por favor, tente novamente mais tarde.');
      }
    }

    // Define uma função assíncrona para buscar os comentários do post atual através da API 'jsonplaceholder'
    async function fetchComments() {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
        setComments(response.data);
      } catch (error) {
        console.error(`Error fetching comments: ${error}`);
      }
    }

    // Chama as funções 'fetchPost' e 'fetchComments' para carregar os dados do post e seus comentários
    fetchPost();
    fetchComments();
    
    // Rola a página para o topo para que o usuário possa ver o conteúdo principal do post
    window.scrollTo(0, 0);
  }, [id, location]);

  // define o estado de carregamento inicial como true
  const [loading, setLoading] = useState(true);

  // se o estado de carregamento for verdadeiro, exibe uma mensagem de carregamento
  if (loading) {
    return <div className="Loading"><ImSpinner9 /></div>;
  }

  return (
    <div className="post-details">
      <h1 className="post-details__title">{post.title}</h1>
      <p className="post-details__author">by {post.author}</p>
      <img className="post-details__image" src={image} alt={post.title} />
      <div className="post-details__content-container">
        <div className="post-details__post">
          <p className="post-details__text">{post.body}</p>
        </div>
        <div className="post-details__comments">
          <h2 className="post-details__comments-title">Comments</h2>
          <ul className="post-details__comments-list">
            {comments.map(comment => (
              <li key={comment.id}>
                <p className="post-details__comment-author">{comment.name}</p>
                <p className="post-details__comment-body">{comment.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PostDetails;
