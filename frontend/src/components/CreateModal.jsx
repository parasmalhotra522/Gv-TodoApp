// Modal.jsx
import React from 'react';
import Modal from 'react-modal';

const CreateModal = ({ isOpen, onRequestClose, children }) => {
  // console.log("Inside add taks modal", isOpen, onRequestClose, children);
  const styles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '30rem', // Adjust the width as needed
      borderRadius: '10px',
    },
  };
  
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Add Modal"
      ariaHideApp={false}
      style={styles}
    >
      <div className="flex justify-end">
        <button
          onClick={onRequestClose}
          className=" text-red px-3 py-1  hover:bg-red-600"
        >
          X
        </button>
      </div>

       <div className="p-4">{children}</div>
    </Modal>
  );
};

export default CreateModal;
