// EditPage.tsx
import React, { useState } from "react";
import "./EditPage.css"; // Importing the CSS file for styling
import Header from "../../components/Header";
import Modal from "./component/Modal"; // Import the Modal component

const EditPage: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(true); // Modal initially visible

  const closeModal = (): void => {
    setIsModalVisible(false); // Close modal when button is clicked
  };

  return (
    <>
      {isModalVisible && <Modal onClose={closeModal} />}
      {/* Show modal when isModalVisible is true */}
      <Header />
      <div className="page-container">
        <div className="section">Section 1</div>
        <div className="section">Section 2</div>
        <div className="section">Section 3</div>
      </div>
    </>
  );
};

export default EditPage;
