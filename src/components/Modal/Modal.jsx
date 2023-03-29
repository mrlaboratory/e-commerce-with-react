import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Modal = ({ modal, setIsOpen }) => {

    console.log(modal)

    return (
        <div id='modalContainer' style={{}} className=' w-screen fixed h-screen flex justify-center  items-center top-0 left-0 '>
            <div className='w-[600px] h-[400px] mx-w-[80%]  rounded-lg bg-white relative border shadow-sm  p-5'>
                <img className='mx-auto w-[200px] rounded-lg' src={modal.thumbnail} alt="" />
                <h2 className='text-center text-2xl font-bold'> {modal.title} </h2>
                <h3 className='font-bold'>Category :  {modal.category}</h3>
                <h3 className='font-bold'>Price : ${modal.price}</h3>
                <p>
                Description: {modal.description}
                </p>
                <h3>stock : {modal.stock} </h3>
                <h3>discountPercentage : {modal.discountPercentage} </h3>
                

                <div onClick={() => setIsOpen(false)} id="modal-close-btn" className="absolute -top-2 -right-2  sm:-top-5 sm:-right-5 btn p-0 w-[50px] h-[50px] rounded-full bg-[#EB5757] text-white text-2xl font-bold border-none">
                    <FontAwesomeIcon icon={faClose}></FontAwesomeIcon>
                </div>
            </div>

        </div>
    );
};

export default Modal;