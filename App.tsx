import React from 'react';
import Header from './components/Header';
import ActionButtons from './components/ActionButtons';
import ProductList from './components/ProductList';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="w-full max-w-[430px] min-h-screen bg-background-light dark:bg-background-dark relative overflow-x-hidden pb-12 shadow-2xl">
      <Header />
      <ActionButtons />
      <ProductList />
      <Footer />
    </div>
  );
};

export default App;