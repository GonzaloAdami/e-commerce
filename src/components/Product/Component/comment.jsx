import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Datos from "../Service/producto";

const Comment = () => {
    const [newComment, setNewComment] = useState("");
    const [productComments, setProductComments] = useState([]);
    
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const productId = queryParams.get("id");

    useEffect(() => {
        const product = Datos.BD.Producto.find(prod => prod.id === productId);
        if (product) {
            setProductComments(product.comentarios);
        }
    }, [productId]);

    const handleCommentChange = (e) => {
        setNewComment(e.target.value);
    };

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes agregar la lógica para enviar el nuevo comentario
        console.log("Nuevo comentario:", newComment);
        setNewComment(""); // Limpiar el campo de texto
    };

    return (
        <>
            <hr className="hr" />
            <div className="comentario-container">
                <article className="card-body">
                    <header className="card-header">
                        <img
                            src="https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg"
                            className="avatar"
                            alt=""
                        />
                        <div className="box-title">
                            <span>Usuario</span>
                        </div>
                    </header>
                    <hr />
                    <footer className="card-footer">
                        <form onSubmit={handleCommentSubmit}>
                            <textarea
                                value={newComment}
                                onChange={handleCommentChange}
                                placeholder="Escribir comentario"
                                rows="3"
                                cols="37"
                            ></textarea>
                            
                        </form>
                    </footer>
                </article>

                {/* Mapeo de comentarios */}
                {productComments.map((comentario, index) => (
                    <article key={index} className="card-body">
                        <header className="card-header">
                            <img src={comentario.foto} className="avatar" alt={comentario.nombre} />
                            <div className="box-title">
                                <span>{comentario.nombre}</span>
                                <div className="flex items-center">
                                    {[...Array(comentario.estrellas)].map((_, i) => (
                                        <svg key={i} className="h-5 w-5 flex-shrink-0 text-gray-900" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                                        </svg>
                                    ))}
                                    {[...Array(5 - comentario.estrellas)].map((_, i) => (
                                        <svg key={i} className="h-5 w-5 flex-shrink-0 text-gray-200" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                                        </svg>
                                    ))}
                                </div>
                                <p className="sr-only">{comentario.estrellas} out of 5 stars</p>
                            </div>
                        </header>
                        <hr />
                        <footer className="card-footer">
                            <p>{comentario.comentario}</p>
                        </footer>
                    </article>
                ))}
            </div>
        </>
    );
};

export default Comment;
