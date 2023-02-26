import logo from './logo.svg';
import './App.css';
import Layout from './layouts/Layout';
import Home from './pages/home/Home';
import Detail from './pages/detail/Detail';
import Category from './pages/category/Category';
import AboutUs from './pages/about/AboutUs';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>

        <Route index element={<Home />} />
        <Route path=":id" element={<Detail />} />

        <Route path="categories" element={<Category />} />
        <Route path="categories/:name" element={<Category />} />

        <Route path="aboutUs" element={<AboutUs />} />

      </Route>
    </Routes>
  );
}

export default App;
