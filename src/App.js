import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/layout/layout/Layout';
import Header from './components/layout/header/Header';
import Footer from './components/layout/footer/Footer';
import PostList from './components/layout/PostList/PostList';


function App() {
  return (
    <Layout>
      <Router>
        <Header />
          <PostList />
        <Footer />
      </Router>
    </Layout>
  );
}

export default App;
