import React from 'react'
import { GiChickenOven } from 'react-icons/gi'
import { LuLeafyGreen } from 'react-icons/lu'
import { useDispatch } from 'react-redux';
import { AddItems } from '../Redux/cartSlice';
import { toast } from 'react-toastify';
 

const Card = ({name, image, id, price, type}) => {
  const dispatch = useDispatch();
  return (
    <div key={id} className=' w-[300px] h-[400px] bg-white flex flex-col gap-4 p-2 rounded-md shadow-lg hover:border-2 border-green-400 transition-all duration-500'>
   <div className='image w-[100%] h-[60%] overflow-hidden rounded-md'>
    <img className='h-[100%] w-[100%] object-center object-cover' src={image} alt="" />
   </div>
   <div className="text">
    <h2 className='text-2xl font-bold'>{name}</h2>
   </div>
   <div className='price flex justify-between items-center w-full text-green-600 tracking-tighter font-bold'>
    <h3 className='text-lg font-bold'>{price}</h3>
  <div className=' flex items-center justify-center gap-1'>
   {type === 'veg' ? <GiChickenOven /> : <LuLeafyGreen />} <span>{type}</span>
  </div>
   </div>
 
  <button className='w-full bg-green-700 hover:bg-green-400 p-2 text-white rounded-md text-xl tracking-tighter transition-all duration-500' onClick={()=> {dispatch(AddItems({id: id, name: name, price: price, image: image, qty: 1})); toast.success('item added') } }>Add to Dish</button>
    </div>
  )
}

export default Card
