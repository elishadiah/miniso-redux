import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// toast
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Header from './components/Header/Header';
//import FirstNavigation from "./components/layout/Header/FirstNavigation";
import Footer from './components/layout/Footer/Footer';
import MainNavigation from './components/layout/Header/MainNavigation';
import Profile from './components/layout/Profile/Profile';
import Cart from './pages/Cart/Cart';
import AccesoriosMaquillaje from './pages/Categories/AccesoriosMaquillaje';
import AlimentosyBebidas from './pages/Categories/AlimentosyBebidas';
import BolsasyAccesorios from './pages/Categories/BolsasyAccesorios';
import Cosmeticos from './pages/Categories/Cosmeticos';
import CuidadoPersonal from './pages/Categories/CuidadoPersonal';
import Electronicos from './pages/Categories/Electronicos';
import EstilodeVida from './pages/Categories/EstilodeVida';
import Juguetes from './pages/Categories/Juguetes';
import LibreriayPapeleria from './pages/Categories/LibreriayPapeleria';
import PerfumesyAromatizantes from './pages/Categories/PerfumesyAromatizantes';
import RegalosGratis from './pages/Categories/RegalosGratis';
import Textil from './pages/Categories/Textil';
import Collections from './pages/Collections';
import ContactUs from './pages/ContactUs';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
//import BoardModerator from "./components/board-moderator.component";
//import BoardAdmin from "./components/board-admin.component";
import HomePage from './pages/HomePage';
import Login from './pages/Login/Login';
import MenosDeQ39 from './pages/MenosDeQ39/MenosDeQ39';
import NewProductList from './pages/NewProductList/NewProductList';
//import { render } from "@testing-library/react";
import Payment from './pages/Payment/Payment';
import Product from './pages/Product/Product';
import ProductList from './pages/ProductList/ProductList';
import Register from './pages/Register/Register';
import ResetPassword from './pages/ResetPassword/ResetPassword';
import Sale from './pages/Sale';
import ShopNow from './pages/ShopNow';
import StorePage from './pages/Store/StorePage';
import Stores from './pages/Stores';
import TheNew from './pages/TheNew';
import ProtectedRoutes from './routes/ProtectedRoutes';
import AuthRoutes from './routes/AuthRoutes';

const App = () => {
  // const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  // const [showAdminBoard, setShowAdminBoard] = useState(false);

  return (
    <Router>
      <ToastContainer
        position='top-center'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
      />
      {/*<Announcement />*/}
      {/*<FirstNavigation />*/}
      <Header />
      <MainNavigation />
      <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>
        <Route path='/lo-nuevo'>
          <TheNew />
        </Route>
        <Route path='/colecciones'>
          <Collections />
        </Route>
        <Route path='/sale'>
          <Sale />
        </Route>
        <Route path='/tiendas'>
          <Stores />
        </Route>
        <Route path='/viewstores'>
          <Stores viewStore />
        </Route>
        <Route path='/contactanos'>
          <ContactUs />
        </Route>
        <ProtectedRoutes path='/profile'>
          <Profile />
        </ProtectedRoutes>
        <Route path='/comprar-ahora'>
          <ShopNow />
        </Route>
        {/*Categories*/}
        <Route path='/accesorios-de-maquillaje'>
          <AccesoriosMaquillaje />
        </Route>
        <Route path='/alimentos-y-bebidas'>
          <AlimentosyBebidas />
        </Route>
        <Route path='/bolsas-y-accesorios'>
          <BolsasyAccesorios />
        </Route>
        <Route path='/cosmeticos'>
          <Cosmeticos />
        </Route>
        <Route path='/cuidado-personal'>
          <CuidadoPersonal />
        </Route>
        <Route path='/electronicos'>
          <Electronicos />
        </Route>
        <Route path='/estilo-de-vida'>
          <EstilodeVida />
        </Route>
        <Route path='/juguetes'>
          <Juguetes />
        </Route>
        <Route path='/libreria-y-papeleria'>
          <LibreriayPapeleria />
        </Route>
        <Route path='/perfumes-y-aromatizantes'>
          <PerfumesyAromatizantes />
        </Route>
        <Route path='/regalos-gratis'>
          <RegalosGratis />
        </Route>
        <Route path='/textil'>
          <Textil />
        </Route>
        <Route path='/productoslista/:category'>
          <ProductList />
        </Route>
        <Route path='/product/:id'>
          <Product />
        </Route>
        <Route path='/menos-de-q39'>
          <MenosDeQ39 />
        </Route>
        <Route path='/lo-más-nuevo'>
          <NewProductList />
        </Route>
        <ProtectedRoutes path='/cart'>
          <Cart />
        </ProtectedRoutes>
        <ProtectedRoutes path='/payment'>
          <Payment />
        </ProtectedRoutes>
        <AuthRoutes path='/login'>
          <Login />
          {/*{user ? <Redirect to='/' /> : <Login />}*/}
        </AuthRoutes>
        <AuthRoutes path='/forgot-password'>
          <ForgotPassword />
        </AuthRoutes>
        <AuthRoutes path='/reset-password'>
          <ResetPassword />
        </AuthRoutes>
        <AuthRoutes path='/register'>
          <Register />
          {/*{user ? <Redirect to='/' /> : <Register />}*/}
        </AuthRoutes>
        <Route path='/store'>
          <StorePage />
          {/*{user ? <Redirect to='/' /> : <Register />}*/}
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};
export default App;
