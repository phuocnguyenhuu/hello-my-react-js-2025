import React from 'react';
import BookCard from '../components/BookCard';
import './HomePage.css';

// Dữ liệu mẫu
const sampleBooks = [
  {
    id: '1',
    title: 'Đắc Nhân Tâm',
    author: 'Dale Carnegie',
    price: 89000,
    imageUrl: 'https://example.com/book1.jpg',
  },
  {
    id: '2',
    title: 'Nhà Giả Kim',
    author: 'Paulo Coelho',
    price: 75000,
    imageUrl: 'https://example.com/book2.jpg',
  },
  // Thêm sách mẫu khác ở đây
];

const HomePage: React.FC = () => {
  const handleAddToCart = (id: string) => {
    console.log(`Thêm sách ${id} vào giỏ hàng`);
    // Xử lý thêm vào giỏ hàng ở đây
  };

  return (
    <div className="home-page">
      <div className="banner">
        <h1>Chào mừng đến với BookStore</h1>
        <p>Khám phá thế giới sách tuyệt vời</p>
      </div>

      <section className="featured-books">
        <h2>Sách nổi bật</h2>
        <div className="books-grid">
          {sampleBooks.map((book) => (
            <BookCard
              key={book.id}
              {...book}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </section>

      <section className="categories">
        <h2>Danh mục sách</h2>
        <div className="categories-grid">
          <div className="category-card">
            <h3>Văn học</h3>
            <p>Khám phá các tác phẩm văn học hay</p>
          </div>
          <div className="category-card">
            <h3>Kinh tế</h3>
            <p>Sách về kinh doanh và tài chính</p>
          </div>
          <div className="category-card">
            <h3>Kỹ năng sống</h3>
            <p>Phát triển bản thân và kỹ năng</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 