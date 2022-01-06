import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const ProductCardInfo = (props) => {

    const productParams = useParams();
    const [data,setData] = useState([]);
    console.log('params',productParams.category)

    useEffect(() => {

axios.get(`http://localhost:5000/${productParams.category}`).then(res => {

setData(res.data);



});


    }, [])
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
export default ProductCardInfo;