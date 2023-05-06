import React, { useState } from "react";

import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineClose,
  AiFillTag,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { MdFavorite, MdHelp } from "react-icons/md";

export default function Navbar() {
  const [nav, setNav] = useState(true);

  const toggle = () => {
    setNav(!nav)
  }

  return (
    <div className="bg-red-500 z-100">
      <div className=" w-[95%] flex justify-between items-center p-4 m-auto">
        <div className="flex items-center gap-5">
          {nav ? <AiOutlineMenu size={25} onClick={toggle} /> : <AiOutlineClose size={25} onClick={toggle} />}
          

          <div className="text-2xl font-bold p-2 uppercase">
            <p className="text-xl">Ola's Recipe</p>
          </div>

          <div className=" hidden md:flex items-center rounded-full bg-gray-300 font-bold">
            <p className=" bg-black text-white rounded-full p-2 px-2">
              Delivery
            </p>
            <p className="p-2">Pick Up</p>
          </div>
        </div>

       

        <div className="flex items-center font-semibold">
          <BsFillCartFill size={25} />
          <p className="text-2xl px-2">Cart</p>
        </div>
         
 <div className={!nav ? " bg-red-500  h-[500px] fixed top-[57px] left-0 py-[50px] pl-[20px] z-10" : ' left-[-100px] hidden'}>
          
          

          <ul className="flex flex-col p-4 text-gray-800 ">

            <li className="text-2xl py-5 flex gap-6 font-bold">
              <TbTruckDelivery size={30}  /> Orders
            </li>
            <li className="text-2xl py-4 flex gap-6 font-bold">
              <MdFavorite size={30}  /> Favorites
            </li>
            <li className="text-2xl py-4 flex gap-6 font-bold">
              <FaWallet size={30}  /> Wallet
            </li>
            <li className="text-2xl py-4 flex gap-6 font-bold">
              <MdHelp size={30}  /> Help
            </li>
            <li className="text-2xl py-4 flex gap-6 font-bold">
              <AiFillTag size={30} /> Promotions
            </li>
            <li className="text-2xl py-4 flex gap-6 font-bold">
              <BsFillSaveFill size={30}  /> Best Ones
            </li>
            <li className="text-2xl py-4 flex gap-6 font-bold">
              <FaUserFriends size={30}  /> Invite Friends
            </li>
          </ul>
        </div>


      </div>
    </div>
  );
}

