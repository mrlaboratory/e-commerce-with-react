import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const Product = (props) => {
    const { title, thumbnail, price,id,addToCart,setIsOpen , setModal} = props
    const [text,setText]  = useState('Add to Cart')
    const changeText = () => {
        setText('Added')
    }
    return (
        <div className=' border rounded-lg p-4 relative'>
            <img className='rounded-lg mx-h-[300px]' src={thumbnail} alt="" />
            <h2 className='text-xl'>{title}</h2>
            <h2 className='font-bold text-white absolute top-5 left-5 bg-green-600 rounded-lg p-1'>Price : ${price}</h2>
            <div className='w-11/12 mt-14'>
                <button onClick={() => {setIsOpen(true),setModal(props)}} className='btn btn-sm'>Read More</button>
                <button onClick={() => {addToCart(id),changeText()}} className='btn w-11/12 absolute bottom-2 flex justify-center'>{text} <FontAwesomeIcon icon={faCartShopping}/> </button>

            </div>

        </div>
    );
};

export default Product;