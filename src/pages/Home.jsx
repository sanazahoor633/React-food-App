import React from "react";
import Nav from "../components/Nav";
import Categories from "../Categories";
import Card from "../components/Card";
import { food_items } from "../food";
import { dataContext } from "../context/UserContext";
import { useContext } from "react";
import { IoMdClose } from "react-icons/io";
import Card2 from "../components/Card2";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const Home = () => {
  const { cat, setCat, input, showCart, setshowCart } = useContext(dataContext);

  function filter(category) {
    if (category === "All") {
      setCat(food_items);
    } else {
      let newList = food_items.filter(
        (item) => item.food_category === category
      );
      setCat(newList);
    }
  }

  let items = useSelector((state) => state.cart);
  let subTotal = items.reduce((total, item) => total +  item.qty * item.price, 0)
 let delevryFee = 20;
 let taxes = subTotal*0.5/100;
 let total =  Math.floor(subTotal+delevryFee+taxes)
  
  return (
    <div className="w-full min-h-screen bg-slate-200 ">
      <Nav />
      {!input ? (
        <div className="categories flex gap-4 items-center justify-center flex-wrap w-[100%]">
          {Categories.map((item) => {
            return (
              <div
                key={item.id}
                className="bg-white w-[140px] h-[150px] rounded-lg shadow-xl flex flex-col items-start p-5 justify-center gap-2 hover:bg-green-300 cursor-pointer transition-all duration-500"
                onClick={() => filter(item.name)}
              >
                <a href="">{item.image}</a>
                <h1 className=" tracking-tighter text-xl font-semibold text-gray-700">
                  {item.name}
                </h1>
              </div>
            );
          })}
        </div>
      ) : null}

      <div className="w-full flex flex-wrap gap-5 px-5 justify-center pt-8 pb-8">

        {cat.length>1 ? cat.map((item) => (
          <Card
            key={item.id}
            name={item.food_name}
            image={item.food_image}
            price={item.price}
            id={item.id}
            type={item.food_type}
          />
        )) : <div className="pt-10 text-green-600 text-2xl font-semibold">No Dish Found</div> }
      
      </div>



      <div
        className={` trnslateeeee flex flex-col items-center w-full md:w-[40vw] h-[100%] bg-white fixed top-0 right-0 px-4 py-2  tracking-tighter transition-all duration-500 overflow-auto ${
          showCart ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <header className="flex justify-between items-center w-full">
          <span className="text-green-400 tracking-tighter text-xl">
            Order items
          </span>
          <IoMdClose
            className="w-[40px] h-[40px] hover:text-green-700 cursor-pointer text-green-400 tracking-tighter text-xl font-semibold"
            onClick={() => setshowCart(false)}
          />
        </header>
{items.length>0 ? <>
        <div className="w-full mt-4 flex flex-col gap-4 ">
          {items.map((item) => (
            <Card2
              key={item.id}
              name={item.name}
              price={item.price}
              image={item.image}
              id={item.id}
              qty={item.qty}
            />
          ))}
        </div>


        <div className="w-full border-t-2 border-b-2 border-gray-400 mt-4 flex flex-col gap-4 p-4">
<div className="w-full flex justify-between items-center ">
  <span className='font-semibold  text-lg tracking-tighter '>SubtTotal:</span>
  <span className='font-semibold  text-lg text-green-500 tracking-tighter '>Rs: {subTotal}/-</span>
</div>

<div className="w-full flex justify-between items-center ">
  <span className='font-semibold  text-lg tracking-tighter '>Delvery:</span>
  <span className='font-semibold  text-lg text-green-500 tracking-tighter '>Rs: {delevryFee}/-</span>
</div>

<div className="w-full flex justify-between items-center ">
  <span className='font-semibold  text-lg tracking-tighter '>Taxes:</span>
  <span className='font-semibold  text-lg text-green-500 tracking-tighter '>Rs: {taxes}/-</span>
</div>
        </div>

        <div className="w-full flex justify-between items-center p-9 ">
  <span className='font-semibold  text-2xl tracking-tighter '>Total:</span>
  <span className='font-semibold  text-2xl text-green-500 tracking-tighter '>Rs: {total}/-</span>
</div>
  <button className='w-[80%] bg-green-700 hover:bg-green-400 p-2 text-white rounded-md text-xl tracking-tighter transition-all duration-500' onClick={()=>{toast.success('Order placed') }} >Place Order</button>


</> : <div className="pt-10 text-green-600 text-2xl font-semibold">Empty</div> }
       

      </div>
    </div>
  );
};

export default Home;
