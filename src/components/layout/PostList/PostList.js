import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import './PostList.modules.css'

function PostList() {
  const [posts, setPosts] = useState([]);
  const [limit, setLimit] = useState(6);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        const postsWithImages = await Promise.all(response.data.slice(0, limit).map(async post => {
          try {
            const imageResponse = await axios.get('https://api.pexels.com/v1/search', {
              headers: {
                Authorization: 'dPq3D4jUYKA6n6Pkba5hsR0cOElTpEwnU7IXlpaVAxpwAFtbGFypM4XX'
              },
              params: {
                query: post.title,
                per_page: 1,
                orientation: 'landscape'
              }
            });
            const userResponse = await axios.get(`https://jsonplaceholder.typicode.com/users/${post.userId}`);
            return {
              ...post,
              imageUrl: imageResponse.data.photos[0].src.medium,
              author: userResponse.data.name
            }
          } catch (error) {
            console.error(`Error fetching image for post ${post.id}: ${error}`);
            return {
              ...post,
              imageUrl: '',
              author: ''
            }
          }
        }));
        setPosts(postsWithImages);
      } catch (error) {
        console.error(`Error fetching posts: ${error}`);
        // exibe um alerta com a mensagem de erro
        window.alert('Não foi possível carregar os posts. Por favor, tente novamente mais tarde.');
      }
    }
  
    fetchPosts();
  }, [limit]);

  const handleShowMore = () => {
    setLimit(prevLimit => prevLimit + 3);
  }

  return (
    <div className="post-list">
      {posts.map(post => (
        <div key={post.id} className="post-list__item">
          <Link to={`/post/${post.id}`}>
            <div className="post-list__image" style={{ backgroundImage: `url(${post.imageUrl})` }}></div>
          </Link>
          <div className="post-list__content">
            <div className="post-list__text">
              <Link className="post-list__title" to={`/post/${post.id}`}>
                <h2>{post.title}</h2>
              </Link>
              <p className="post-list__info">by {post.author}</p>
              <p className="post-list__excerpt">{post.body}</p>
            </div>
            <div className="post-list__button-container">
              <Link to={`/post/${post.id}`} className="post-list__button">Read full article</Link>
            </div>
          </div>
        </div>
      ))}
      {limit < posts.length && (
        <div className="post-list__show-more-container">
          <button onClick={handleShowMore} className="post-list__show-more">See more</button>
        </div>
      )}
    </div>
  );
  
}

export default PostList;
