import React from "react";
import { useNavigate } from 'react-router-dom';
import '../Style/card.css';
import Description from "../Component/description";
import Buy from "../Component/buy";
import Comment from "../Component/comment";
import Catalogo from "../../Home/component/catalogo";


const Producto = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    };

    return (
        <>
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
                    <div className="producto-box">
                        <div className="producto-Description">
                            <Description />
                            <div className="comentario-box">
                                <Comment></Comment>
                                
                            </div>
                            
                        </div>
                        <div className="producto-Buy">
                            <Buy />
                        </div>
                        
                    </div>
                    <hr className="hr" />
                    <Catalogo></Catalogo>

                </div>
                
            </div>
            
        </>
    );
};

export default Producto;
