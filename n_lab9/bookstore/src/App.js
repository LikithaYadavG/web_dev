import React, { useState } from 'react';
import './App.css';
import BookSearch from './BookSearch';
import BookList from './BookList';
import BookReviewForm from './ReviewForm';
import BookReviewList from './ReviewList';
import data from './Books.json';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [reviews, setReviews] = useState([]);

  const handleSearch = (searchTerm) => {
    // Implement book search logic (e.g., filtering data based on searchTerm)
    const filteredBooks = data.filter((book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredBooks);
  };

  const handleReviewSubmit = (review) => {
    setReviews([...reviews, review]);
  };

  return (
    <div className="App">
      <h1>Online Bookstore</h1>
      <BookSearch onSearch={handleSearch} />
      <BookList books={searchResults} />
      <BookReviewForm onSubmit={handleReviewSubmit} />
      <BookReviewList reviews={reviews} />
    </div>
  );
}

export default App;