import { useNavigate } from 'react-router-dom';
import './buysell.css';

const BuySell = () => {
  return (
    <div className="marketplace">

      <div className="marketplace-header">
        <h1>Buy & Sell Marketplace</h1>

        <button
  className="sell-btn"
  onClick={() => navigate('/sell-item')}
>
  + Sell Your Item
</button>
      </div>

      <div className="products">

  <div className="product-card">
    <img
      src="https://via.placeholder.com/200"
      alt="Laptop"
    />
    <h3>Laptop</h3>
    <p>₹25000</p>
    <button>View Details</button>
  </div>

  <div className="product-card">
    <img
      src="https://via.placeholder.com/200"
      alt="Calculator"
    />
    <h3>Scientific Calculator</h3>
    <p>₹500</p>
    <button>View Details</button>
  </div>

  <div className="product-card">
    <img
      src="https://via.placeholder.com/200"
      alt="Cycle"
    />
    <h3>Mountain Cycle</h3>
    <p>₹6000</p>
    <button>View Details</button>
  </div>

  <div className="product-card">
    <img
      src="https://via.placeholder.com/200"
      alt="Books"
    />
    <h3>Engineering Books Set</h3>
    <p>₹1200</p>
    <button>View Details</button>
  </div>

  <div className="product-card">
    <img
      src="https://via.placeholder.com/200"
      alt="Chair"
    />
    <h3>Study Chair</h3>
    <p>₹1800</p>
    <button>View Details</button>
  </div>

  <div className="product-card">
    <img
      src="https://via.placeholder.com/200"
      alt="Headphones"
    />
    <h3>Wireless Headphones</h3>
    <p>₹2200</p>
    <button>View Details</button>
  </div>

</div>

    </div>
  );
};

export default BuySell;