// pages/Peresdachi.js
import { useEffect, useState } from 'react';
import axios from '../services/api';
import ScheduleCard from '../components/ScheduleCard';

const Peresdachi = () => {
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        const response = await axios.get('/api/exam-schedule');
        setSchedule(response.data);
      } catch (error) {
        console.error('Ошибка:', error);
      }
    };
    fetchSchedule();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Расписание пересдач</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {schedule.map(item => (
          <ScheduleCard
            key={item.id}
            title={item.discipline}
            date={item.date}
            location={item.location}
          />
        ))}
      </div>
    </div>
  );
};

export default Peresdachi;
