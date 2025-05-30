import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          BookStore
        </Link>
        <nav className="nav-menu">
          <Link to="/" className="nav-item">Trang chủ</Link>
          <Link to="/books" className="nav-item">Sách</Link>
          <Link to="/categories" className="nav-item">Danh mục</Link>
          <Link to="/about" className="nav-item">Giới thiệu</Link>
        </nav>
        <div className="header-right">
          <Link to="/cart" className="cart-icon">
            <i className="fas fa-shopping-cart"></i>
            <span className="cart-count">0</span>
          </Link>
          <Link to="/login" className="login-btn">Đăng nhập</Link>
        </div>
      </div>
    </header>
  );
};

export default Header; 