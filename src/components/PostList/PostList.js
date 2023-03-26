import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ImSpinner9 } from 'react-icons/im';
import './PostList.modules.css';
import HeroSection from '../HeroSection/HeroSection';

function PostList() {
  const [posts, setPosts] = useState([]); // Armazena todos os posts.
  const [displayedPosts, setDisplayedPosts] = useState([]); // Armazena os posts que serão exibidos na página.
  const [limit, setLimit] = useState(6); // Define o número de posts exibidos por página.
  const [loading, setLoading] = useState(true); // Indica se os posts estão sendo carregados.

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts'); // Busca os posts na API.
        const postsWithImagesAndAuthors = await Promise.all(response.data.map(async post => {
          try {
            const imageResponse = axios.get('https://api.pexels.com/v1/search', { // Busca uma imagem na API de imagens.
              headers: {
                Authorization: 'dPq3D4jUYKA6n6Pkba5hsR0cOElTpEwnU7IXlpaVAxpwAFtbGFypM4XX'
              },
              params: {
                query: post.title,
                per_page: 1,
                orientation: 'landscape'
              }
            });

            const userResponse = axios.get(`https://jsonplaceholder.typicode.com/users/${post.userId}`); // Busca informações do usuário que criou o post.

            const [image, user] = await Promise.all([imageResponse, userResponse]); // Aguarda o retorno das buscas.

            return {
              ...post,
              imageUrl: image.data.photos && image.data.photos[0] && image.data.photos[0].src && image.data.photos[0].src.medium, // Verifica se existe uma URL de imagem disponível e atribui à propriedade imageUrl
              author: user.data.name
            };
          } catch (error) {
            console.error(`Error fetching image for post ${post.id}: ${error}`);
            return {
              ...post, // Retorna todas as informações do post.
              imageUrl: 'https://via.placeholder.com/400x225.png?text=No+Image',
              author: 'Author not found'
            };
          }
        }));

        setPosts(postsWithImagesAndAuthors); // Armazena os posts com as informações de imagem e autor.
        setLoading(false); // Indica que os posts foram carregados.
      } catch (error) {
        console.error(`Error fetching posts: ${error}`);
        window.alert('Não foi possível carregar os posts. Por favor, tente novamente mais tarde.');
      }
    }

    fetchPosts(); // Chama a função que busca os posts.
    window.scrollTo(0, 0); // Move o scroll para o topo da página.
  }, []);

  useEffect(() => {
    setDisplayedPosts(posts.slice(0, limit)); // Define os posts que serão exibidos com base no número de posts definido em "limit".
  }, [posts, limit]);

  const handleShowMore = () => {
    setLimit(prevLimit => prevLimit + 3); // Atualiza o número de posts a serem exibidos ao clicar no botão "See more".
  }

  if (loading) {
    return <div className="Loading"><ImSpinner9 /></div>; // Renderiza um spinner enquanto os posts estão sendo carregados.
  }

  return (
    <div className="post-list-page">
      <HeroSection />
      <div className="post-list">
        {displayedPosts.map(post => (
          <div key={post.id} className="post-list__item">
            <Link to={`/post/${post.id}`} state={{ imageUrl: post.imageUrl }}>
              <div className="post-list__image" style={{ backgroundImage: `url(${post.imageUrl})` }}></div>
            </Link>
            <div className="post-list__content">
              <div className="post-list__text">
                <Link className="post-list__title" to={`/post/${post.id}`} state={{ imageUrl: post.imageUrl }}>
                  <h2>{post.title}</h2>
                </Link>
                <p className="post-list__info">by {post.author}</p>
                <p className="post-list__excerpt">{post.body}</p>
              </div>
              <div className="post-list__button-container">
                <Link to={`/post/${post.id}`} state={{ imageUrl: post.imageUrl }} className="post-list__button">Read full article</Link>
              </div>
            </div>
          </div>
        ))}
        {limit < posts.length && ( // Renderiza o botão "See more" se ainda houverem posts a serem carregados.
          <div className="post-list__show-more-container">
            <button onClick={handleShowMore} className="post-list__show-more">See more</button>
          </div>
        )}
      </div>
    </div>
  );

}

export default PostList;
