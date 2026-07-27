import React from "react";

const Product = ({ title, price, image }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden">
      <img src={image} alt={title} />
      <h3 className="text-lg mb-1 pr-2 pt-2">{title}</h3>
      <p className="text-gray-600 mb-3 pr-2">${price}</p>

      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 transition">افزودن به سبد خرید</button>
    </div>
  );
};

export default Product;
