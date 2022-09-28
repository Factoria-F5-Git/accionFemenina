import React from 'react';
import './MenuUser.css';
import iconNavbar from'../../../assets/iconNavbar.png';
import { Link } from 'react-router-dom';

export default function MenuUser() {
  return (
    <section>
      <ul className='menu-user-container '>
        {' '}
        <li className='menu-user' id='menu-user'>
          <button className='menu-user-profile'>
            <img src={iconNavbar} alt='mujer de perfil' className='icon-Navbar'/>
          </button>
            
          <section className='menu-user-link'>
            <p>
              <Link to='/mi-perfil'> Mi perfil </Link>
            </p>

            <p>
              <Link to='/mis-comentarios'> Mis comentarios </Link>
            </p>

            <p>
              <Link to='/cerrar_sesión'> Cerrar sesion </Link>
            </p>
          </section>
        </li>
      </ul>
    </section>
  )
}