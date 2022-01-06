import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const ProductCardQueryParams = (props)=> {
    const [data,setData] = useState([]);
    const [searchParams,setSearchParams] = useSearchParams();
    console.log('searchparams---',searchParams.get('category'));

    useEffect(() => {

        axios.get(`http://localhost:5000/${searchParams.get('category')}`).then(res => {
        
        setData(res.data);
        
        
        
        });
    });

    return (
        <div>
            <h1>productcard</h1>
            {
                data.map(el=> {
                    return (
                        <div key = {el.id}>
                            {el.title}
                        </div>
                    )
                })
            }
        </div>
    )
}
export default ProductCardQueryParams;