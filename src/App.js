import React from 'react';
import Header from './main_components/Header';
import Footer from './main_components/Footer';
import Product from "./main_components/Products/index"

function App() {
  return (
    <div className="main-content">
      <Header />
        <Product />
      <Footer />
    </div>
  );
}

export default App;
