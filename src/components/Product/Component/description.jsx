import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Card from "./card";
import Datos from "../Service/producto";

const Description = () => {
  const [producto, setProducto] = useState(null);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const productId = queryParams.get("id");

  useEffect(() => {
    const foundProduct = Datos.BD.Producto.find(prod => prod.id === productId);
    if (foundProduct) {
      setProducto(foundProduct);
    } else {
      console.error("Producto no encontrado");
    }
  }, [productId]);

  if (!producto) return <div>Cargando...</div>;

  const reputaciones = [
    producto.reputacion.reputacion,
    producto.reputacion.atencion,
    producto.reputacion.velocidad,
  ];

  return (
    <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8 max-w-1/2 w-1/2">
      <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{producto.nombre}</h1>
      <div>
        <Card productos={reputaciones} />

        <div className="px-4 sm:px-0">
          <h3 className="text-base font-semibold leading-7 text-gray-900">Información del producto</h3>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Detalles</p>
        </div>

        <div className="mt-6 border-t border-gray-100">
          <dl className="divide-y divide-gray-100">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">Género</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{producto.genero || "No disponible"}</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">Tipo</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{producto.tipo || "No disponible"}</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">Material</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{producto.material || "No disponible"}</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">Marca</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{producto.marca || "No disponible"}</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">Tamaños</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{producto.tamaños.join(", ") || "No disponible"}</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Description;
