import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/layout/layout/Layout';
import Header from './components/layout/header/Header';


function App() {
  return (
    <Layout>
      <Router>
        <Header />
      </Router>
    </Layout>
  );
}

export default App;
