import React from 'react'
import './modal.css'

export default function Modal({closeModal}) {
  return (
      <div className='ModalBackground'>
        <div className='modalContainer'>
            <div className='title'>
                <div className='titleName'><h3>I am creating New Simple Modal</h3></div>
            </div>
            <div className='body'>
                <p>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'</p>
            </div>
            <div className='footer'></div>
            <button className='btn buttonCancel' onClick={()=>closeModal(false)}>Cancel</button>
        </div>
      </div>
  )
}
