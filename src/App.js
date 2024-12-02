import React, { useState } from 'react';
import imageData from './data/imageData';
import Gallery from './components/Gallery';
import Filter from './components/Filter';
import './App.css';

// Utility function to shuffle array
const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);

const App = () => {
  const [filter, setFilter] = useState('All');

  // Combine all images into one array and shuffle for "All"
  const allImages = shuffleArray(
    Object.values(imageData).flat()
  );

  // Filter images based on the selected category
  const filteredImages =
    filter === 'All' ? allImages : imageData[filter] || [];

  const categories = ['All', ...Object.keys(imageData)]; // Include "All" in the categories

  return (
    <div className="app">
      <h1>Filter Image Gallery</h1>
      <Filter categories={categories} onFilterChange={setFilter} activeFilter={filter} />
      <Gallery key={filter} images={filteredImages} />
    </div>
  );
};

export default App;
