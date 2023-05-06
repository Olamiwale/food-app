import React, { useState } from "react";
import { categories, data } from "../data.js";

export default function Food(props) {
  const [food, setFood] = useState(data);

  const [search, setSearch] = useState("");

  const filterItem = (category) => {
    setFood(
      data.filter((item) => {
        return food === "" ? item : item.category.toLowerCase() === category;
      })
    );
  };


  const filterItemPrice = (price) => {
    setFood(
      data.filter((item) => {
        return food === "" ? item : item.price===price;
      })
    );
  };


  

  const submit = (e) => {
    e.preventDefault();
    filterItem(search);
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Top Rated Menu Items
      </h1>

      <form className="py-5" onSubmit={submit}>
        <input
          onChange={handleChange}
          value={search}
          className="border px-4 w-[350px] p-2 rounded-full"
          type="text"
          placeholder="Search Your Favorite Food"
        />
        <button className=" ml-2 bg-gray-400 rounded-full px-4 py-2">
          Search
        </button>
      </form>

      <div>
        <p className="text-xl font-bold">Filter by type</p>

        <button
          onClick={() => setFood(data)}
          className="bg-gray-400 p-2 px-4 rounded-full m-2 font-bold shadow-lg"
        >
          All
        </button>

        <button
          onClick={() => filterItem("chicken")}
          className="bg-gray-400 p-2 rounded-full m-2 font-bold shadow-lg "
        >
          Chicken
        </button>

        <button
          onClick={() => filterItem("pizza")}
          className="bg-gray-400 p-2 rounded-full m-2 font-bold shadow-lg "
        >
          Pizza
        </button>

        <button
          onClick={() => filterItem("salad")}
          className="bg-gray-400 p-2 rounded-full m-2 font-bold shadow-lg "
        >
          Salad
        </button>
      </div>


      <div>
        <p className="text-xl font-bold">Filter by type</p>

        <button
          onClick={() => setFood(data)}
          className="bg-gray-400 p-2 px-4 rounded-full m-2 font-bold shadow-lg"
        >
          All
        </button>

        <button
          onClick={filterItemPrice}
          className="bg-gray-400 p-2 rounded-full m-2 font-bold shadow-lg "
        >
          Chicken
        </button>

        <button
          onClick={() => filterItem("$62")}
          className="bg-gray-400 p-2 rounded-full m-2 font-bold shadow-lg "
        >
          $42
        </button>

        <button
          onClick={() => filterItem("$42")}
          className="bg-gray-400 p-2 rounded-full m-2 font-bold shadow-lg "
        >
          $42
        </button>
      </div>


      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-4">
        {food.map((item, index) => (
          <div
            key={index}
            className="border shadow-lg rounded-lg hover:scale-105 duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[200px] object-cover rounded-t-lg"
            />
            <div className="flex justify-between px-2 py-4">
              <p className="font-bold">{item.name}</p>
              <p>
                <span className="bg-orange-500 text-white p-1 rounded-full">
                  {item.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
