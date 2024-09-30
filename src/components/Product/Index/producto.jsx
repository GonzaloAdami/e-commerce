import React, { useEffect, useState } from "react";
import { useNavigate, useParams, useLocation } from 'react-router-dom'; // Asegúrate de incluir useLocation
import '../Style/card.css';
import Description from "../Component/description";
import Buy from "../Component/buy";
import Comment from "../Component/comment";
import Catalogo from "../../Home/component/catalogo";
import Datos from "../Service/producto.json";

const Producto = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [selectedColor, setSelectedColor] = useState('');
    const [selectedSize, setSelectedSize] = useState('');
    const [product, setProduct] = useState(null);

    // Obtener el id del producto de la URL
    const queryParams = new URLSearchParams(location.search);
    const productId = queryParams.get('id');

    useEffect(() => {
        console.log("ID de la URL:", productId); // Verifica que se esté obteniendo el ID
        // Buscar el producto por id
        const foundProduct = Datos.BD.Producto.find(prod => prod.id === productId);
        setProduct(foundProduct);
    }, [productId]);

    const handleClick = () => {
        navigate('/');
    };

    if (!product) return <div>Cargando...</div>;

    return (
        <div className="bg-white">
            <div className="pt-6">
                <nav aria-label="Breadcrumb">
                    <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                        <li>
                            <div className="flex items-center">
                                <a href="#" className="mr-2 text-sm font-medium text-gray-900">{product.genero}</a>
                                <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" aria-hidden="true" className="h-5 w-4 text-gray-300">
                                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                                </svg>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <a href="#" className="mr-2 text-sm font-medium text-gray-900">{product.tipo}</a>
                                <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" aria-hidden="true" className="h-5 w-4 text-gray-300">
                                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                                </svg>
                            </div>
                        </li>
                        <li className="text-sm">
                            <a href="#" aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">{product.nombre}</a>
                        </li>
                    </ol>
                </nav>

                {/* Image gallery */}
                <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
                    <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
                        <img src={product.portada} alt={product.nombre} className="h-full w-full object-cover object-center" />
                    </div>
                    <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                        {product.fotos.slice(1, 3).map((foto, index) => (
                            <div key={index} className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                                <img src={foto} alt={product.nombre} className="h-full w-full object-cover object-center" />
                            </div>
                        ))}
                    </div>
                    <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
                        <img src={product.fotos[3]} alt={product.nombre} className="h-full w-full object-cover object-center" />
                    </div>
                </div>

                <div className="producto-box">
                    <div className="producto-Description">
                        <Description />
                        <div className="comentario-box">
                            <Comment />
                        </div>
                    </div>
                    <div className="producto-Buy">
                        <Buy />
                    </div>
                </div>
                <hr className="hr" />
                <Catalogo />
            </div>
        </div>
    );
};

export default Producto;
