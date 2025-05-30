import React from 'react';
import './BookCard.css';

interface BookCardProps {
  id: string;
  title: string;
  author: string;
  price: number;
  imageUrl: string;
  onAddToCart: (id: string) => void;
}

const BookCard: React.FC<BookCardProps> = ({
  id,
  title,
  author,
  price,
  imageUrl,
  onAddToCart,
}) => {
  return (
    <div className="book-card">
      <div className="book-image">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="book-info">
        <h3 className="book-title">{title}</h3>
        <p className="book-author">{author}</p>
        <p className="book-price">{price.toLocaleString('vi-VN')}đ</p>
        <button 
          className="add-to-cart-btn"
          onClick={() => onAddToCart(id)}
        >
          Thêm vào giỏ
        </button>
      </div>
    </div>
  );
};

export default BookCard; 