import React, { useContext } from "react";
import Image from 'next/image'
import { useState } from "react";
import { CartContext } from "@/utils/ContextReducer";
import Link from "next/link";



export default function Card(props) {

  const data = props.foodData;
  const { state, dispatch } = useContext(CartContext)
  const priceOptions = Object.keys(data.price);

  const [qty, setQty] = useState(1) // 1 to 7
  const [size, setSize] = useState(priceOptions[0]) // regular , medium , large

  const handleQty = (e) => {
    setQty(e.target.value)
  }

  const handleSize = (e) => {
    setSize(e.target.value)
  }

  //  Cart Functionality
  const handleAddToCart = async () => {

    const updateItem = await state.find(
      (item) => item.tempId === data["_id"] + size
    )

    if (!updateItem) {
      dispatch({
        type: "ADD",
        id: data["_id"],
        tempId: data["_id"] + size,
        name: data.name,
        price: finalPrice,
        qty: qty,
        priceOption: size,
        img: data.img
      })

      // console.log(state);
    }

    if (updateItem) {
      dispatch({
        type: "UPDATE",
        tempId: data["_id"] + size,
        price: finalPrice,
        qty: qty
      })

      // console.log(state);

    }
  }


  let finalPrice = qty * parseInt(data.price[size])


  return (
    <div className="box">
      <div className="w-80 rounded-lg bg-gray-400 overflow-hidden dark:bg-black border-gradient">
        {/* Dynamic Routing */}
        <Link href={{ pathname: "/Item/[item]" }} as={`Item/${data["_id"]}`}>

          <div className="relative w-full h-80">
            <Image
              src={data.img}
              layout="fill" objectFit="cover" alt="pizza" />
          </div>
          {/* contents */}
          <div className="p-4">
            <div className="font-bold mb-2 text-xl uppercase">{data.name}</div>
            <p className="short_description text-gray-700 dark:text-gray-400 text-base">
              {data.description}
            </p>
          </div>
        </Link>

        {/* Buttons */}
        <div className="flex px-4 justify-between">

          <select className="h-100 p-1 text-black hover:font-bold font-semibold cursor-pointer
           dark:text-gray-300 border border-black dark:border-gray-400 rounded"
            onChange={handleQty}>
            {/* Mapping */}
            {Array.from(Array(7), (e, i) => {
              return (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              )
            })}

          </select>

          <select className="h-100 p-1 text-black hover:font-bold font-semibold cursor-pointer
           dark:text-gray-300 border border-black dark:border-gray-400 rounded"
            onChange={handleSize}>
            {/* size mapping */}
            {priceOptions.map(options => {
              return (
                <option className="" key={options} value={options}>
                  {options}
                </option>
              )
            })}

          </select>


        </div>

        {/* Price  */}
        <div className="flex p-4 font-bold justify-between">

          <button onClick={handleAddToCart} className="border dark:border-gray-400 border-gray-900 rounded p-2 hover:bg-gradient-to-r
           from-indigo-700 to-orange-700 hover:text-gray-100 ">
            Add to cart
          </button>

          <p className="p-2 text-xl">₹ {finalPrice} /-</p>
        </div>

      </div>
    </div>
  );
}
