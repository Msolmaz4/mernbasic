import './App.css';
import {BrowserRouter ,Routes,Route} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import Navbar from './components/Navbar';
import Backdrop from './components/Backdrop';
import SideDrawer from './components/SideDrawer';
import { useState } from 'react';






function App() {

 const [sideToggle,setSideToggle] = useState()

  return (
    <BrowserRouter>
  
    {/**NAVBAR */}
    {/**SIDEDRAWER*/}
    {/**BACKDROP*/}
    <Navbar/>
    <SideDrawer show={sideToggle}/>
    <Backdrop show={sideToggle}/>
    
  
  

  

    <main>
     
    
        <Routes>
          <Route path='/'  element={<HomeScreen/>}/>
          <Route path='/product/:id'  element={<ProductScreen/>}/>
          <Route path='/cart'  element={<CartScreen/>}/>
        </Routes>

      
      
      
    </main>
    {/**HOMESCREEN*/}
    {/**PRODUCTSSCREEN*/}
    {/**CARTSCRENN*/}

      </BrowserRouter>
  );
}

export default App;
