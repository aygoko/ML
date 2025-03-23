// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Для роутинга
import App from './App'; // Главный компонент
import './index.css'; // Глобальные стили

// Создаем корневой элемент для рендеринга
const root = ReactDOM.createRoot(document.getElementById('root'));

// Рендерим приложение
root.render(
  <React.StrictMode>
    <BrowserRouter> {/* Оболочка для роутинга */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
