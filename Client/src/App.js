import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import MainPage from './components/MainPage';
import Product from './components/Product';
import Trucks from './components/Trucks';
import Bikes from './components/Bikes';
import Cars from './components/Cars';
import CreateAcc from './components/CreateAcc';
import CreatePost from './components/CreatePost';
import Login from './components/Login.';
import Header from './partial/Header';
import MyProfile from './components/MyProfile';
import ProductCard from './components/ProductCard'

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Header /> 

        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/product" element={<Product />} />
          <Route path="/trucks" element={<Trucks />} />
          <Route path="/bikes" element={<Bikes />} />
          <Route path="/cars" element={<Cars />} />
          <Route path='/createacc' element={<CreateAcc />} />
          <Route path='/createpost' element={<CreatePost />} />
          <Route path='/login' element={<Login />} />
          <Route path="/myprofile" element={<MyProfile />} />
          <Route path="/productcard" element={<ProductCard />} />

        </Routes>
      
    </BrowserRouter>
    </div>
  );
}

export default App;