import React from 'react';
import doctorsData from '../data/doctors.json';

const Doctors: React.FC = () => {
  return (
    <div>
      <h1>Врачи</h1>
      <table className="table">
        <thead>
          <tr>
            <th>ФИО</th>
            <th>Отделение</th>
            <th>Заведующий отделением</th>
          </tr>
        </thead>
        <tbody>
          {doctorsData.map(doctor => (
            <tr key={doctor.id}>
              <td>{doctor.name}</td>
              <td>{doctor.department}</td>
              <td>{doctor.isHead ? 'Да' : 'Нет'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Doctors;