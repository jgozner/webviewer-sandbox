import React, { useRef, useEffect } from 'react';
import './App.css';
import WebViewerModal from './WebViewerModal';
import Modal from 'react-modal';

const App = () => {

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="App">
      <button onClick={openModal}>Open Modal</button>
      <Modal
        ariaHideApp={false}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Modal"
      >
        <WebViewerModal />
      </Modal>
    </div>
  );
};

export default App;
