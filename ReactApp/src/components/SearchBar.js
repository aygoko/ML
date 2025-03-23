// components/SearchBar.js
import { useState } from 'react';

const SearchBar = () => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь обработка запроса через API
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center space-x-2 mt-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Введите ваш запрос..."
        className="p-2 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-primary"
      />
      <button
        type="submit"
        className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/80"
      >
        Найти
      </button>
    </form>
  );
};

export default SearchBar;
