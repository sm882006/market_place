import './LostFoundItem.css';

const LostFoundItem = () => {
  return (
    <div className="lost-form-page">

      <div className="lost-form-card">

        <h2>Report Found Item</h2>

        <form>

          <label>Item Name</label>
          <input
            type="text"
            placeholder="Enter item name"
          />

          <label>Place Found</label>
          <input
            type="text"
            placeholder="Library, Canteen, Hostel..."
          />

          <label>Date Found</label>
          <input type="date" />

          <label>Description</label>
          <textarea
            placeholder="Describe the item"
          ></textarea>

          <label>Contact Number</label>
          <input
            type="tel"
            placeholder="Enter contact number"
          />

          <label>Upload Image</label>
          <input type="file" />

          <button type="submit">
            Post Found Item
          </button>

        </form>

      </div>

    </div>
  );
};

export default LostFoundItem;