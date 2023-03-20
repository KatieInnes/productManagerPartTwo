import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';

const AllProductView = (props) => {

    const { thingTypedInForm, savedFormItem } = props;

    useEffect(()=>{
        axios.get("http://localhost:8000/api/products")
        .then((res)=>{
            
            if (res && res.data && res.data.products) {
                console.log(res);
                savedFormItem(res.data.products);
            }
    })
        .catch((err)=>{
            console.log(err);
        })
    }, [savedFormItem]);

    return (
        <div>
            {
                thingTypedInForm.map((product, index)=>{
                return(
                    <div>
                        <Link to={`/product/${product._id}`}>{product.title}</Link>
                    </div>
                )})
            }
        </div>
    )
}
export default AllProductView;
