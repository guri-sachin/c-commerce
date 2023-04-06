import {Form,Button,Container} from 'react-bootstrap';
import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { Route, Link,Router,Routes} from 'react-router-dom';
import {fetch} from 'whatwg-fetch';

import './App.css';
import Checkout from './comp/Checkout';
import Header from './comp/Header';
import Papper from './comp/Papper';
import Profile from './comp/Profile';
import Order from './comp/Order';
import Wallet from './comp/Wallet';
import Wishlist from './comp/Wishlist';
import View from './comp/View';
import Pdes from './comp/Pdes';
import Front from './comp/Front';
import Dyv from './comp/Dyv';
import Headerlog from './logcom/Headerlog';
import Profilelog from './logcom/Profilelog';
import Pdeslog from './logcom/Pdeslog';
import Papperlog from './logcom/Papperlog';
import Checkbuy from './logcom/Checkbuy';
import Orderlog from './logcom/Orderlog';
import Sipping from './logcom/Sipping';
import Checkcard from './logcom/Checkcard';
import Wishlistlog from './logcom/Wishlistlog';
import Frontlog from './logcom/Frontlog';
import Invoic from './logcom/Invoic';
import DyvSign from './comp/DyvSign';
import Subcard from './comp/Subcard';

import Admin from './admin/Admin';
import Add from './admin/Add';
import Products from './admin/Products';
import Register from './admin/Register';
import Categories from './admin/Categories';
import Sub from './admin/Sub';
import Listcate from './admin/Listcate';
import Listsub from './admin/Listsub';
import Shop from './admin/Shop';
import Orders from './admin/Orders';
import Coupns from './admin/Coupns';
import Edit from './admin/Edit';

import Color from './admin/Color';

function Home()
{
   

   return(
    

 <div>
    
    

     <Routes>
            <Route exact path="Header" element={<Header/>}></Route>
            <Route exact path="/*" element={<Front/>}></Route>
            <Route exact path="/Headerlog" element={<Headerlog/>}></Route>
            <Route exact path="/Profilelog" element={<Profilelog/>}></Route>
            <Route exact path="/Papper" element={<Papper/>}></Route>
            <Route exact path="/Dyv" element={<Dyv/>}></Route>
            <Route exact path="/Profile" element={<Profile/>}></Route>
            <Route exact path="/Order" element={<Order/>}></Route>
            <Route exact path="/Wallet" element={<Wallet/>}></Route>
            <Route exact path="/Wishlist" element={<Wishlist/>}></Route>
            <Route exact path="/View" element={<View/>}></Route>
            <Route exact path="/Checkout" element={<Checkout/>}></Route>
            <Route exact path="/Pdes" element={<Pdes/>}></Route>
            <Route exact path="/Pdeslog" element={<Pdeslog/>}></Route>
            <Route exact path="/Papperlog" element={<Papperlog/>}></Route>
            <Route exact path="/Checkbuy" element={<Checkbuy/>}></Route>
            <Route exact path="/Orderlog" element={<Orderlog/>}></Route>
            <Route exact path="/Sipping" element={<Sipping/>}></Route>
            <Route exact path="/Checkcard" element={<Checkcard/>}></Route>
            <Route exact path="/Wishlistlog" element={<Wishlistlog/>}></Route>
            <Route exact path="/Frontlog" element={<Frontlog/>}></Route>
            <Route exact path="/DyvSign" element={<DyvSign/>}></Route>
            <Route exact path="/Invoic" element={<Invoic/>}></Route>
            <Route exact path="/Subcard" element={<Subcard/>}></Route>

            
            <Route exact path="/Admin" element={<Admin/>}></Route>
            <Route exact path="/Add" element={<Add/>}></Route>
            
            <Route exact path="/Categories" element={<Categories/>}></Route>
            <Route exact path="/Products" element={<Products/>}></Route>
            <Route exact path="/Register" element={<Register/>}></Route>
            <Route exact path="/Sub" element={<Sub/>}></Route>
            <Route exact path="/Listcate" element={<Listcate/>}></Route>
            <Route exact path="/Listsub" element={<Listsub/>}></Route>
            <Route exact path="/Shop" element={<Shop/>}></Route>
            <Route exact path="/Orders" element={<Orders/>}></Route>
            <Route exact path="/Coupns" element={<Coupns/>}></Route>
            <Route exact path="/Edit" element={<Edit/>}></Route>
            <Route exact path="/Color" element={<Color/>}></Route>
            
</Routes>


 </div>

  
       
   );

}
export default Home;