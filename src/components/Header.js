// components/Header.js
import { Link } from 'react-router-dom';

const Header = () => (
  <nav className="bg-primary text-white p-4 flex justify-between items-center">
    <Link to="/" className="text-2xl font-bold">МИРЭА Assistant</Link>
    <div className="flex space-x-4">
      <Link to="/" className="hover:underline">Главная</Link>
      <Link to="/peresdachi" className="hover:underline">Пересдачи</Link>
      <Link to="/uo" className="hover:underline">УО</Link>
      <Link to="/services" className="hover:underline">Сервисы</Link>
      <button onClick={() => window.location.reload()} className="px-3 py-1 bg-white text-primary rounded hover:bg-gray-200">Обновить</button>
    </div>
    <AuthButton />
  </nav>
);

export default Header;
