import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import MainPage from './components/MainPage';
import Product from './components/Product';
import Trucks from './components/Trucks';
import Bikes from './components/Bikes';
import Cars from './components/Cars';
import CreateAcc from './components/CreateAcc';
import CreatePost from './components/CreatePost';
import Login from './components/Login';
import Header from './partial/Header';
import MyProfile from './components/MyProfile';
import ProductCard from './components/ProductCard';
import MyVehicle from './components/MyVehicle';
import MyVehicles from './components/MyVehicles';
const token=localStorage.getItem("token");

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
          <Route path="/createacc" element={token ? <Navigate to="/myprofile"/> : <CreateAcc />} />
          <Route path='/createpost'  element={token ? <CreatePost/> : <Navigate to="/login"/>} />
          <Route path="/login" element={token ? <Navigate to="/myprofile"/> : <Login />}/>
          <Route path="/myprofile" element={<MyProfile />} />
          <Route path="/productcard" element={<ProductCard />} />
          <Route path="/myvehicles" element={token ? <MyVehicles/> : <Navigate to="/login" />} />
          <Route path="/myvehicles/:id" element={token ? <MyVehicle/> : <Navigate to="/login" />} />
        </Routes>
      
    </BrowserRouter>
    </div>
  );
}

export default App;