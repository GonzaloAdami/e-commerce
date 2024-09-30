import React from "react";
import '../Style/Card.css';

const Card = ({ productos }) => {

    const devolverImagen = (valor) => {
        switch(valor) {
            case "Mala":
                return "https://res-console.cloudinary.com/dt6otshxt/thumbnails/v1/image/upload/v1726650569/ZG93bi1hcnJvd3MtZG93bmxvYWQtc3ZncmVwby1jb21faWt0M3Fy/preview";
            case "Media":
                return "https://res-console.cloudinary.com/dt6otshxt/thumbnails/v1/image/upload/v1726650899/dXNlci1wZW9wbGUtYWNjb3VudC1zdmdyZXBvLWNvbV8xX3pjdGV2eQ==/preview";
            case "Buena":
                return "https://res-console.cloudinary.com/dt6otshxt/thumbnails/v1/image/upload/v1726650201/dXAtZGlyZWN0aW9uLXVwbG9hZC1zdmdyZXBvLWNvbV8xX2xmZHhxYg==/preview";
            default:
                return "https://via.placeholder.com/150"; // Imagen por defecto si el valor no coincide con ningún caso
        }
    };

    return (
        <div className="productos-container">
            {productos.map((producto, index) => (
                <div className="card" key={index}>
                    <div className="title">
                        <span style={{ backgroundColor: `${producto.color}` }}>
                            <svg fill="#ffffff" viewBox="0 0 512 512">
                                {/* SVG content */}
                            </svg>
                        </span>
                        <p className="title-text">
                            {producto.atributo}
                        </p>
                        <p className="percent" style={{ color: `${producto.color}` }}>
                            <img 
                                src={devolverImagen(producto.reputacion)} 
                                width="20px" 
                                height="20px"
                                alt="Reputación" 
                            />
                            {producto.porcentaje}%
                        </p>
                    </div>
                    <div className="data">
                        <p>{producto.reputacion}</p>
                        <div className="range">
                            <div className="fill" style={{ width: `${producto.porcentaje}%`, backgroundColor: `${producto.color}` }}></div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Card;
