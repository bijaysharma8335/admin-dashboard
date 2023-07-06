import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useStateContext } from "../context/ContextProvider";
import { cartData } from "../data/dummy";

const Cart = () => {
    const { currentColor } = useStateContext();
    return (
        <div>
            {cartData?.map((item, index) => (
                <div key={index}>
                    <div>
                        <div className="flex items-center leading-8 gap-5 border-b-1 border-color dark:border-gray-600 p-4">
                            <img className="rounded-lg h-80 w-24 " src={item.image} alt="" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Cart;
