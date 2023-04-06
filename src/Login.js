import './Log.css';
import Headerlog from './Headerlog';

import Footer from './Footer';
import Swal from "sweetalert2";
import { Form, Button, Navbar, nav, Container, Carousel, Table, card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Slider from "react-slick";
import { AiOutlineShoppingCart, AiOutlineHeart, AiOutlineUser, AiOutlineQuestionCircle } from 'react-icons/ai';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Link, Routes, Route, MemoryRouter, NavLink } from 'react-router-dom';
import { AiFillShop } from 'react-icons/ai';
import axios from "axios";
import { useLocation } from 'react-router-dom';

function App() {
    const location = useLocation();


  return (
    <>
    <div>
<Headerlog></Headerlog>

                    <form  style={{marginTop:"40px"}}>
                    <div class="container1">
    <h3 class="login-title">Log in</h3>

    <form class="login-form">


      <div>
        <label for="email">Email </label>
        <input
               id="email"
               type="email"
               placeholder="me@example.com"
               name="email"
               required
               />
      </div>

      <div>
        <label for="password">Password </label>
        <input
               id="password"
               type="password"
               placeholder="password"
               name="password"
               required
               />
      </div>

      <button class="btn btn--form" type="submit" value="Log in">
        Log in
      </button>
    </form>
</div>
                    </form>

<Footer></Footer>
</div>
    </>
  );
}

export default App;
