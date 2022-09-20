import React,{useState} from 'react';
import './App.css';
import Modal from './component/modal/modal';

function App() {
  const[opneModal ,setOpenModal] = useState(false)
  return (
    <div className="App">
      <div className='test'><h2>Welcome to my Modale</h2></div>
      <button className='btn' onClick={()=>setOpenModal(true)}>Opne Modal</button>
      { opneModal && <Modal closeModal={setOpenModal} />}
    </div>
  );
}

export default App;
