import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/layout/layout/Layout';
import Header from './components/layout/header/Header';
import Footer from './components/layout/footer/Footer';
<<<<<<< HEAD
import PostList from './components/PostList/PostList';
import PostDetails from './components/PostDetails/PostDetails';
=======
import PostList from './components/layout/PostList/PostList';
>>>>>>> 29250b4e6b674ab012c5e1ff2f0fee32c6330f73


function App() {
  return (
    <Layout>
      <Router>
        <Header />
<<<<<<< HEAD
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/post/:id" element={<PostDetails />} />
        </Routes>
=======
          <PostList />
>>>>>>> 29250b4e6b674ab012c5e1ff2f0fee32c6330f73
        <Footer />
      </Router>
    </Layout>
  );
}

export default App;
