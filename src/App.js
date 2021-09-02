import './App.css';
import Footer from './component/Footer/Footer';
import Home from './page/Home/Home';
import All from './page/All/All';
import ProductByCategories from './page/Categories/ProductByCategories';
import Sale from './page/Sale/Sale';
import ProductDetail from './page/ProductDetail/ProductDetail';
import { Switch, Route } from 'react-router-dom';
import Cart from './component/Cart/Cart';
import CheckOut from './component/CheckOut/CheckOut';
import OrderSuccess from './component/OrderSuccess/OrderSuccess';
import Header from './component/Header/Header';
import {ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.min.css";
function App() {
    
    return (
        <div className="App">
            <Header />
            <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/all" component={All} />
                <Route path="/category/:category" component={ProductByCategories} />
                <Route path="/sale" component={Sale} />
                <Route path="/product/:productSlug" component={ProductDetail} />
                <Route path="/cart" component={Cart}/>
                <Route path="/checkout" component={CheckOut}/>
                <Route path="/orderSuccess" component={OrderSuccess} />
            </Switch>
            <Footer />
            <ToastContainer/>
        </div>
    );
}

export default App;
