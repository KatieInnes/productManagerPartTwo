import React, {useEffect} from 'react'
import axios from 'axios';

const AllProductView = (props) => {

    const {  thingTypedInForm, savedFormItem } = props;

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
                return <p key={index}>{product.title}</p>
                })
            }
        </div>
    )
}
export default AllProductView;
