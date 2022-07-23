import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Article from './pages/Article';
import ArticleList from './pages/ArticleList';
import Navbar from './components/Navbar';
import NotFound from './pages/NotFound';



function App() {
  return (
    <Router>
      <Navbar />
      <div className='max-w-screen-md mx-auto pt-20'>

        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/articles-list' element={<ArticleList />} />
          <Route exact path='/article/:name' element={<Article />} />
          <Route element={<NotFound />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
