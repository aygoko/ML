// components/ScheduleCard.js
const ScheduleCard = ({ title, date, location }) => (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4">
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-gray-600 mb-2">Дата: {date}</p>
      <p className="text-gray-600">Место: {location}</p>
    </div>
  );
  
  export default ScheduleCard;
  