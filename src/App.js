import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './containers/ProductList';
import Header from './containers/Header';
import './App.css';
import ProductDetails from './containers/ProductDetails';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        
        <Routes>
          <Route path="/" exact element={<ProductList />} />
          <Route path="/product/:productId" exact element={<ProductDetails />} />
          <Route>404 Not Found!!!</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
