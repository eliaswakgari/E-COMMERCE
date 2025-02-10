import './App.css'
import Navbar from './Navbar/Navbar'
import { Route,Routes } from 'react-router-dom'
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import LoginSignUp from './Pages/LoginSignUp'
import Footer from './Components/Footer/Footer'
import banner_kid from './assets/banner_kids.png'
import banner_women from './assets/banner_women.png'
import banner_men from './assets/banner_mens.png'
function App() {
   
  return (
    <div className="app">
   <Navbar/>
   <Routes>
   <Route path='/' element={<Shop/>}/>
   <Route path='/men' element={<ShopCategory category='men' banner={banner_men}/>}/>
   <Route path='/women' element={<ShopCategory category='women' banner={banner_women}/>}/>
   <Route path='/kid' element={<ShopCategory category='kid' banner={banner_kid}/>}/>
   <Route path='/product' element={<Product/>}>
   <Route path=':productId' element={<Product/>}/>
   </Route>
   <Route path='/cart' element={<Cart/>}/>
   <Route path='/login' element={<LoginSignUp/>} />
   </Routes>
   <Footer/>
    </div>
  )
     
}

export default App
