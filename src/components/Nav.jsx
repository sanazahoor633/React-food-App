import React, { useContext, useEffect } from 'react'
import { MdFastfood } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { dataContext } from "../context/UserContext";

import { food_items } from '../food';
import { useSelector } from 'react-redux';


const Nav = () => {
  let {input, setinput, cat, setCat, setshowCart} = useContext(dataContext);


  useEffect(()=>{
  //  item.food_name.toLowerCase().includes(input.toLowerCase())
    let newList = food_items.filter((item)=> item.food_name.toLowerCase().includes(input.toLowerCase()))
    setCat(newList)
  }, [input])


  // console.log('i am sana')
 let item = useSelector((state)=>state.cart)
console.log(item);


  return (
    <div className='w-full h-[100px] flex justify-between items-center px-8'>
        <div className='bg-white w-[60px] h-[60px] flex justify-center items-center rounded-md shadow-xl '>
  <MdFastfood className='w-[30px] h-[30px] text-green-400' />
        </div>
    <form className='w-[40%] md:w-[70%] h-[60px] bg-white flex items-center px-5 gap-5 rounded-xl shadow-md' onSubmit={(e)=> e.preventDefault()}>
<FaSearch className='text-xl text-green-400'/>
<input className='w-full outline-none text-[16px] md:text-[22px]' type="text" placeholder='Search Here.......' value={input} onChange={(e)=> setinput(e.target.value)}/>
    </form>
 <div className='bg-white w-[60px] h-[60px] flex justify-center items-center rounded-md shadow-xl relative' onClick={()=>setshowCart(true)}>
    <span className='absolute top-0 right-2 text-green-600 tracking-tighter font-bold'>{item.length}</span>
< FiShoppingBag className='w-[30px] h-[30px] text-green-400' />

        </div>

    </div>
  )
} 






export default Nav

