import React from 'react';
import './App.css';
import { planData } from './planData';

function App() {
  return (
    <div className="app-container">
      <header className="header">
        <h1>October 2026 Monthly Coding Plan</h1>
        <p>Mastering Modern Development</p>
      </header>

      <main className="calendar">
        {/* Render day headers (Thursday starts Oct 1st 2026) */}
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="calendar-header-cell">{day}</div>
        ))}

        {/* Empty cells to pad so Oct 1st starts on Thursday */}
        {[...Array(4)].map((_, i) => (
          <div key={`empty-${i}`} className="calendar-cell empty"></div>
        ))}

        {/* Render the actual days */}
        {planData.map((dayPlan) => {
           // We can color code based on the first part of category string
           const isWeekendProject = dayPlan.title.includes("Weekend Project");
           return (
            <div key={dayPlan.day} className={`calendar-cell ${isWeekendProject ? 'weekend' : ''}`}>
              <div className="day-number">{dayPlan.day}</div>
              <div className="day-content">
                <span className="category">{dayPlan.category.split(':')[0]}</span>
                <p>{dayPlan.title}</p>
              </div>
            </div>
          )
        })}
      </main>
    </div>
  );
}

export default App;
