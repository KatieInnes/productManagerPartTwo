import React, { useState } from  'react';
import axios from 'axios';
    
const ProductForm = (props) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const [product, setProduct] = useState([]);

    axios.get('http://localhost:8000/api/products').then(data => {
        setProduct(data)
    })


    const createProduct = (e) => {
        e.preventDefault();

        setProduct([...product, { title, price, description }]);

        axios.post('http://localhost:8000/api/products', {
            title,
            price,
            description
        }).then(res=>{
            setTitle("");
            setPrice("");
            setDescription("");
        })
    };
    
    return(
        <>
        <h1>Product Manager</h1>
        <form onSubmit={ createProduct }>
            <div className="mb-3">
                <label>Title: </label> 
                <input type="text" value={title} onChange={ (e) => setTitle(e.target.value) } />
            </div>
            <div className="mb-3">
                <label>Price: </label> 
                <input type="text" value={price} onChange={ (e) => setPrice(e.target.value) } />
            </div>
            <div className="mb-3">
                <label>Description: </label> 
                <input type="text" value={description} onChange={ (e) => setDescription(e.target.value) } />
            </div>
            <input type = "submit" value = "Create" />
        </form>

        <h2>All Products</h2>
        <div>
            {
                product.map(item => 
                    <p>{item.title}</p>
                )
            }
        </div>


        </>

    );
};
    
export default ProductForm;