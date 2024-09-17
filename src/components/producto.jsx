import React from "react";
import '../output.css';
import { useNavigate } from 'react-router-dom';
import './card.css';

const Producto = ({ productos }) => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    };

    return (
        <div className="bg-white">
            <div className="pt-6">
                <nav aria-label="Breadcrumb">
                    <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                        <li>
                            <div className="flex items-center">
                                <a href="#" className="mr-2 text-sm font-medium text-gray-900">Men</a>
                                <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" aria-hidden="true" className="h-5 w-4 text-gray-300">
                                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                                </svg>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <a href="#" className="mr-2 text-sm font-medium text-gray-900">Clothing</a>
                                <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" aria-hidden="true" className="h-5 w-4 text-gray-300">
                                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                                </svg>
                            </div>
                        </li>

                        <li className="text-sm">
                            <a href="#" aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">Basic Tee 6-Pack</a>
                        </li>

                    </ol>
                </nav>

                {/* Image gallery */}

                <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
                    <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
                        <img src="https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg" alt="Two each of gray, white, and black shirts laying flat." className="h-full w-full object-cover object-center" />
                    </div>
                    <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                        <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                            <img src="https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg" alt="Model wearing plain black basic tee." className="h-full w-full object-cover object-center" />
                        </div>
                        <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                            <img src="https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg" alt="Model wearing plain gray basic tee." className="h-full w-full object-cover object-center" />
                        </div>
                    </div>
                    <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
                        <img src="https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg" alt="Model wearing plain white basic tee." className="h-full w-full object-cover object-center" />
                    </div>
                </div>

                {/* Product info */}
                <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
                    <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Basic Tee 6-Pack</h1>
                        <div>
                        <div className="productos-container">
                                {productos.map((producto, index) => (
                                    <div className="card" key={index}>
                                        <div className="title">
                                            <span style={{ backgroundColor: `${producto.color}` }}>
                                                <svg fill="#ffffff" viewBox="0 0 512 512" id="_x30_1" version="1.1" stroke="#ffffff">
                                                    <g strokeWidth="0"></g>
                                                    <g strokeLinecap="round" strokeLinejoin="round"></g>
                                                    <g>
                                                        <g>
                                                            <path d="M312.016,222.911c-7.139-7.139-18.714-7.139-25.854,0l-47.398,47.398l-12.927-12.927c-7.139-7.139-18.714-7.139-25.854,0l0,0c-7.139,7.139-7.139,18.714,0,25.854l25.854,25.854c7.139,7.139,18.714,7.139,25.854,0l60.325-60.325C319.155,241.625,319.155,230.05,312.016,222.911z"></path>
                                                            <path d="M256,0C114.615,0,0,114.615,0,256s114.615,256,256,256s256-114.615,256-256S397.385,0,256,0z M390.062,299.737c0,23.235-11.042,45.087-29.747,58.87l-71.317,52.549C279.438,418.2,267.875,422,256,422s-23.438-3.8-32.999-10.844l-71.317-52.549c-18.705-13.783-29.747-35.635-29.747-58.87V173.359c0-15.951,10.341-30.062,25.552-34.865l72.796-22.988C231.84,111.857,243.884,110,256,110s24.16,1.857,35.714,5.505l72.796,22.988c15.211,4.803,25.552,18.914,25.552,34.865V299.737z"></path>
                                                        </g>
                                                    </g>
                                                </svg>
                                            </span>
                                            <p className="title-text">
                                                {producto.atributo}
                                            </p>
                                            <p className="percent" style={{ color: `${producto.color}` }}>
                                                <svg width="20" height="20" fill="#B9101E" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M384 576q0-26 19-45t45-19h896q26 0 45 19t19 45-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45z"></path>
                                                </svg>
                                                {producto.porcentaje}%
                                            </p>
                                        </div>
                                        <div className="data">
                                            <p>
                                                {producto.reputacion}
                                            </p>
                                            <div className="range">
                                                <div className="fill" style={{ width: `${producto.porcentaje}%`, backgroundColor: `${producto.color}` }}></div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div class="px-4 sm:px-0">
                                <h3 class="text-base font-semibold leading-7 text-gray-900">Applicant Information</h3>
                                <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Personal details and application.</p>
                            </div>
                            
                            <div class="mt-6 border-t border-gray-100">
                                <dl class="divide-y divide-gray-100">
                                    <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                        <dt class="text-sm font-medium leading-6 text-gray-900">Full name</dt>
                                        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Margot Foster</dd>
                                    </div>
                                    <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                        <dt class="text-sm font-medium leading-6 text-gray-900">Application for</dt>
                                        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Backend Developer</dd>
                                    </div>
                                    <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                        <dt class="text-sm font-medium leading-6 text-gray-900">Email address</dt>
                                        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">margotfoster@example.com</dd>
                                    </div>
                                    <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                        <dt class="text-sm font-medium leading-6 text-gray-900">Salary expectation</dt>
                                        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">$120,000</dd>
                                    </div>
                                    <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                        <dt class="text-sm font-medium leading-6 text-gray-900">About</dt>
                                        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.</dd>
                                    </div>




                                </dl>
                            </div>
                        </div>

                    </div>

                    {/* Options */}
                    <div className="mt-4 lg:row-span-3 lg:mt-0">
                        <h2 className="sr-only">Product information</h2>
                        <p className="text-3xl tracking-tight text-gray-900">$192</p>

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
                                <a href="#" className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">117 reviews</a>
                            </div>
                        </div>

                        <form className="mt-10">
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
                            <div className="mt-10">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-sm font-medium text-gray-900">Size</h3>
                                    <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">Size guide</a>
                                </div>

                                <fieldset className="mt-4">
                                    <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                                        {['XXS', 'XS', 'S', 'M', 'L'].map(size => (
                                            <label key={size} className={`group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none cursor-pointer`}>
                                                <input type="radio" name="size-choice" value={size} className="sr-only" />
                                                <span id="size-choice" className="absolute inset-0 rounded-md"></span>
                                                {size}
                                            </label>
                                        ))}
                                    </div>
                                </fieldset>
                            </div>

                            <button type="submit" className="mt-10 w-full bg-indigo-600 text-white py-3 px-6 rounded-md hover:bg-indigo-500">Add to Cart</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Producto;
