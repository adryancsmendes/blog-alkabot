import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/layout/layout/Layout';
import Header from './components/layout/header/Header';
import Footer from './components/layout/footer/Footer';
import PostList from './components/PostList/PostList';
import PostDetails from './components/PostDetails/PostDetails';

function App() {
  return (
    <Layout>
      <Router>
        <Header />
        <main className="Main">
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/post/:id" element={<PostDetails />} />
        </Routes>
        </main>
        <Footer />
      </Router>
    </Layout>
  );
}

export default App;
