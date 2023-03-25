import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation, useParams } from 'react-router-dom';
import { ImSpinner9 } from 'react-icons/im'
import './PostDetails.modules.css'

function PostDetails() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const location = useLocation();
  const [image, setImage] = useState('');

  useEffect(() => {
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
        setImage(location.state.imageUrl);
        setLoading(false);
      } catch (error) {
        console.error(`Error fetching post: ${error}`);
        // exibe um alerta com a mensagem de erro
        window.alert('Não foi possível carregar o post. Por favor, tente novamente mais tarde.');
      }
    }

    async function fetchComments() {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
        setComments(response.data);
      } catch (error) {
        console.error(`Error fetching comments: ${error}`);
      }
    }

    fetchPost();
    fetchComments();
  }, [id, location]);

  // define o estado de carregamento inicial como true
  const [loading, setLoading] = useState(true);

  // se o estado de carregamento for verdadeiro, exibe uma mensagem de carregamento
  if (loading) {
    return <div className="Loading"><ImSpinner9 /></div>;
  }

  return (
    <div className="post-details">
      <img className="post-details__image" src={image} alt={post.title} />
      <div className="post-details__content-container">
        <div className="post-details__post">
          <h1 className="post-details__title">{post.title}</h1>
          <p className="post-details__author">by {post.author}</p>
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
