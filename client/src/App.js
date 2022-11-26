import './App.css';
import {BrowserRouter ,Routes,Route} from 'react-router-dom'





function App() {
  return (
    <BrowserRouter>
  
    {/**NAVBAR */}
    {/**SIDEDRAWER*/}
    {/**BACKDROP*/}

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
