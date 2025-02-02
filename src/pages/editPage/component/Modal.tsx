import React, { useState } from "react";
import "./Modal.css"; // Make sure to import the correct styles

interface ModalProps {
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ onClose }) => {
  const [image, setImage] = useState<string | null>(null);

  // Handle image upload
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        {/* Close button */}
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <h2>Welcome to the Edit Page!</h2>
        <p>This is a modal that appears when you load the page.</p>

        {/* Big box with dotted border */}
        <div className="big-box">
          <p>This is the big box with a dotted border.</p>

          {/* Image upload input */}
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{ marginBottom: "20px" }}
          />

          {/* Display the uploaded image */}
          {image && (
            <img
              src={image}
              alt="Uploaded"
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          )}
        </div>

        {/* Row of three smaller boxes */}
        <div className="small-boxes">
          <div className="small-box">Box 1</div>
          <div className="small-box">Box 2</div>
          <div className="small-box">Box 3</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
