import React from "react";
import Navbar from "../component/navbar";
import Catalogo from "../component/catalogo";
import Pages from "../component/pages";


const Home = () => {

    return (
        <>
            <Navbar></Navbar>
            <Catalogo></Catalogo>
            <Pages></Pages>
        </>
    );
};

export default Home;