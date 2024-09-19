import React from "react";
import '../Style/Card.css';
import productos from '../Service/producto.js';

const Card = () => {
    return (
        <div className="productos-container">
            {productos.Producto.reputacion.map((producto, index) => (
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
                            <img src={producto.reputacionIcon} width="20px" alt="Reputación" />
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
