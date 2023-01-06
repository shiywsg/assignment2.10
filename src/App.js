import Product from './components/Product'
import { ProductProvider } from './context/ProductContext';
import './App.css';

function App() {
  //warp it around the product component
  return (
    <div className="App">
      <ProductProvider>
        <Product />
      </ProductProvider>
    </div>
  );
}

export default App;
