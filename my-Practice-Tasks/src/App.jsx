import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Product from './components/Product'
import Comp404 from './components/Comp404'
import Login from './components/Login'
const initialProducts = [{ id: 1, name: "Wireless Headphones", price: 99.99, category: "Electronics", stock: 15, image: "🎧" },
{ id: 2, name: "Smart Watch", price: 199.50, category: "Wearables", stock: 8, image: "⌚" },
{ id: 3, name: "Mechanical Keyboard", price: 125.00, category: "Accessories", stock: 20, image: "⌨️" },
{ id: 4, name: "Gaming Mouse", price: 59.99, category: "Accessories", stock: 32, image: "🖱️" },
{ id: 5, name: "Leather Backpack", price: 85.00, category: "Fashion", stock: 10, image: "🎒" },
{ id: 6, name: "Portable SSD 1TB", price: 110.00, category: "Storage", stock: 12, image: "💽" },
{ id: 7, name: "Bluetooth Speaker", price: 45.00, category: "Electronics", stock: 25, image: "🔊" },
{ id: 8, name: "USB-C Hub", price: 35.00, category: "Accessories", stock: 50, image: "🔌" },
{ id: 9, name: "Monitor Stand", price: 40.00, category: "Office", stock: 18, image: "🖥️" },
{ id: 10, name: "Noise Cancelling Earbuds", price: 150.00, category: "Electronics", stock: 5, image: "👂" }]
const App = () => {
  const [product, setProduct] = useState(initialProducts);
  const [isLogin, setIsLogin] = useState(()=>{
    return localStorage.getItem('isLoggedIn') === 'true';
  });
  if (!isLogin) {
    return <Login setIsLogin={setIsLogin} />;
  }
  return (
    <div>
      <Navbar setIsLogin={setIsLogin} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/product/:id' element={<Product product={product} setProduct={setProduct} />} />
        <Route path='*' element={<Comp404 />} />
      </Routes>
    </div>
  );
}

export default App