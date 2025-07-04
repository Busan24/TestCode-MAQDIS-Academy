import React from 'react';

const ProgressSection = () => {
  return (
    <div className="progress-section">
      <h3>Progress Hafalan</h3>
      <div className="progress-info">
        <span>Hari 8 : Ayat 16-20.1 : 16-20.1</span>
      </div>
      <div className="progress-circles">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className={`progress-circle ${i < 6 ? 'completed' : ''}`}
          >
            {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressSection;