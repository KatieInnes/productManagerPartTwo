import React from 'react';
import ProductForm from './components/ProductForm';
import AllProductView from './components/AllProductView';
import OneProductView from './components/OneProductView';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";



function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <ProductForm />
                <AllProductView />
                <OneProductView />
            </div>
        </BrowserRouter>
    );
}
export default App;
