import React from 'react'
import image1 from '../assets/image1.avif'
import { MdDelete } from 'react-icons/md'
import { useDispatch } from 'react-redux';
import { decrement, increment, RemoveItems } from '../Redux/cartSlice';



const Card2 = ({name, image, id, price, qty}) => {
  const dispatch = useDispatch();
  return (
    <div className='w-full h-[120px] p-2 flex justify-between shadow-xl rounded-md ' key={id}>
        {/* left */}
   <div className='w-[60%] h-full flex gap-2'>
    <div className='w-[60%] h-full overflow-hidden '>
        <img className='h-full w-full object-center object-cover rounded-lg' src={image} alt="" />
    </div>
    <div className='w-[40%] h-full  flex flex-col gap-4 items-center  '>
       <h2>{name}</h2>
        <div className='w-[100px] h-[50px]  flex rounded-lg overflow-hidden shadow-2xl border-2 text-green-700 border-green-600'>
            <button className='w-[30%] h-full 0 hover:bg-gray-200 font-semibold' onClick={()=>{
              qty>1?dispatch(decrement(id)): qty}}
              >-</button>
            <span className='w-[40%] h-full bg-gray-100 flex items-center justify-center'>{qty}</span>
            <button className='w-[30%] h-full  hover:bg-gray-200 font-semibold}' onClick={()=>dispatch(increment(id))}>+</button>
        </div>
    </div>
   </div>

   {/* right */}
   <div className='w-[40%] flex flex-col items-end justify-start gap-5 '>
<span className='font-semibold text-green-500 tracking-tighter '>Rs: {price}</span>
<MdDelete className='w-[30px] h-[30px] text-red-600' onClick={()=> dispatch(RemoveItems(id))}/>
   </div>


    </div>
  )
}

export default Card2
