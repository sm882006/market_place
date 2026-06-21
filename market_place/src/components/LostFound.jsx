import { useNavigate } from 'react-router-dom';
import './LostFound.css';

const LostFound = () => {
  const navigate = useNavigate();

  return (
    <div className="lostfound-page">

      <div className="lostfound-header">
        <h1>Lost & Found</h1>

        <button
          className="report-btn"
          onClick={() => navigate('/lostfound-item')}
        >
          + Report Found Item
        </button>
      </div>

      <div className="found-items">

        <div className="found-card">
          <img
            src="https://via.placeholder.com/200"
            alt="ID Card"
          />

          <h3>College ID Card</h3>
          <p>📍 Found near Main Gate</p>
          <p>📅 20 June 2025</p>

          <button>View Details</button>
        </div>

        <div className="found-card">
          <img
            src="https://via.placeholder.com/200"
            alt="Keys"
          />

          <h3>Keys</h3>
          <p>📍 Found near Library</p>
          <p>📅 18 June 2025</p>

          <button>View Details</button>
        </div>

      </div>

    </div>
  );
};

export default LostFound;