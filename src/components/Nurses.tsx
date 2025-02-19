import React from 'react';
import nursesData from '../data/nurses.json';

const Nurses: React.FC = () => {
  return (
    <div>
      <h1>Медсестры</h1>
      <table className="table">
        <thead>
          <tr>
            <th>ФИО</th>
            <th>Отделение</th>
          </tr>
        </thead>
        <tbody>
          {nursesData.map(nurse => (
            <tr key={nurse.id}>
              <td>{nurse.name}</td>
              <td>{nurse.department}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Nurses;