import React from "react";
import { useNavigate } from 'react-router-dom';
import '../Style/card.css';
import productos from '../Service/producto.js';


const Buy = () => {
   

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    };

    return (

        <div className="mx-auto max-w-1/2 px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16 box-flex">


            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0 box-flex">
                <h2 className="sr-only">Product information</h2>
                <p className="text-3xl tracking-tight text-gray-900">${productos.Producto.precio}</p>

                {/* Reviews */}
                <div className="mt-6">
                    <h3 className="sr-only">Reviews</h3>
                    <div className="flex items-center">
                        <div className="flex items-center">
                            {[...Array(4)].map((_, i) => (
                                <svg key={i} className="h-5 w-5 flex-shrink-0 text-gray-900" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                                </svg>
                            ))}
                            <svg className="h-5 w-5 flex-shrink-0 text-gray-200" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <p className="sr-only">4 out of 5 stars</p>
                        <a href="#" className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500 reviews">{productos.Producto.review} reviews</a>
                    </div>
                </div>

                <form className="mt-10 ">
                    {/* Colors */}
                    <div>
                        <h3 className="text-sm font-medium text-gray-900">Color</h3>

                        <fieldset className="mt-4">
                            <div className="flex items-center space-x-3">
                                {['White', 'Gray', 'Black'].map(color => (
                                    <label key={color} className={`relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-${color === 'Black' ? 'gray-900' : 'gray-400'}`}>
                                        <input type="radio" name="color-choice" value={color} className="sr-only" />
                                        <span className={`h-8 w-8 rounded-full border border-black border-opacity-10 bg-${color.toLowerCase()}`}></span>
                                    </label>
                                ))}
                            </div>
                        </fieldset>
                    </div>

                    {/* Sizes */}
                    <div className="mt-10 ">
                        <div className="flex items-center justify-between">
                            <h3 className="text-sm font-medium text-gray-900">Size</h3>
                            <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">Size guide</a>
                        </div>

                        <fieldset className="mt-4 ">
                            <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4 box-size">
                                {productos.Producto.tamaños.map(size => (
                                    <label key={size} className={`group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none cursor-pointer`}>
                                        <input type="radio" name="size-choice" value={size} className="sr-only" />
                                        <span id="size-choice" className="absolute inset-0 rounded-md"></span>
                                        {size}
                                    </label>
                                ))}
                            </div>
                        </fieldset>
                    </div>

                    <button type="submit" className="mt-10 w-full bg-indigo-600 text-white py-3 px-6 rounded-md hover:bg-indigo-500 btn">Add to Cart</button>
                </form>
            </div>
        </div>
    );
};

export default Buy;
