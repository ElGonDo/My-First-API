import Footer from './components/Footer';
import Header from './components/Header';
import ProductList from './components/Product';
import ProductDelete from './components/ProductDelete';
import ProductPost from './components/ProductPost';
import ProductPatch from './components/ProductPatch';
import './styles/App.css';

function App() {
  return (
    <div className='container-main'>
      <Header />
      <div className="content">
        <ProductList/>
        <ProductPost/>
        <ProductDelete/>
        <ProductPatch/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
