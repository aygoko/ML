import { useState } from 'react';
import axios from '../services/api';
import NLPChat from '../components/NLPChat';

const Home = () => {
  const [query, setQuery] = useState('');
  const [answer, setAnswer] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/nlp', { query });
      setAnswer(response.data.answer);
    } catch (error) {
      setAnswer('Ошибка: Проверьте подключение к интернету');
    }
  };

  return (
    <div className="container mx-auto p-4 pt-10">
      {}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-primary mb-4">
          Добро пожаловать в текстового ассистента МИРЭА!
        </h1>
        <p className="text-gray-600 max-w-md mx-auto">
          Я помогу вам найти актуальную информацию о пересдачах, УО, стипендиях и других услугах университета.
        </p>
      </div>

      {}
      <form onSubmit={handleSearch} className="mb-8">
        <div className="relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Введите ваш вопрос..."
            className="w-full p-4 pr-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            type="submit"
            className="absolute right-4 top-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/80"
          >
            Найти
          </button>
        </div>
        {answer && (
          <div className="mt-4 p-4 bg-gray-100 rounded-lg">
            <p className="text-gray-700">{answer}</p>
          </div>
        )}
      </form>

      {}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Часто задаваемые вопросы</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <p className="text-gray-600">
              Как узнать расписание пересдач?
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <p className="text-gray-600">
              Как связаться с Управлением организационной работы?
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <p className="text-gray-600">
              Какие стипендии доступны студентам?
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <p className="text-gray-600">
              Как записаться на курсы автошколы МИРЭА?
            </p>
          </div>
        </div>
      </div>

      {}
      <NLPChat />

{}
<div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Основные сервисы</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-primary mb-2">Пересдачи</h3>
            <p className="text-gray-600">
              Расписание, условия и результаты пересдачи дисциплин.
            </p>
            <Link to="/peresdachi" className="text-primary underline hover:text-primary/70">
              Перейти →
            </Link>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-primary mb-2">УО</h3>
            <p className="text-gray-600">
              Контакты, расписание приемных дней и справочная информация.
            </p>
            <Link to="/uo" className="text-primary underline hover:text-primary/70">
              Перейти →
            </Link>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-primary mb-2">Автошкола</h3>
            <p className="text-gray-600">
              Информация о курсах, стоимости и датах набора.
            </p>
            <Link to="/services/avto" className="text-primary underline hover:text-primary/70">
              Перейти →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;