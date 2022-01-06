import { Button } from '@material-ui/core';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css'
const Dashboard = (props) => {
    const navigate = useNavigate();

    const [list, setList] = useState([
        {
            id: 'xyz',
            title: 'electronics',
            price: '$20'
        },
        {
            id: 'xyzq',
            title: 'fashion',
            price: '$30'
        },
        {
            id: 'xyzr',
            title: 'card 3',
            price: '$60'
        },
        {
            id: 'xyzpp',
            title: 'card 4',
            price: '$20'
        },
        {
            id: 'xyzjj',
            title: 'card 5',
            price: '$90'
        },
        {
            id: 'xyzu',
            title: 'card 6',
            price: '$40'
        },
        {
            id: 'xywz',
            title: 'card 7',
            price: '$20'
        },
        {
            id: 'xyzww',
            title: 'card 8',
            price: '$20'
        },
        {
            id: 'xyzwwl',
            title: 'card 9',
            price: '$20'
        },
        {
            id: 'xyzwww',
            title: 'card 10',
            price: '$20'
        },
        {
            id: 'xyzoioi',
            title: 'card 11',
            price: '$20'
        }
    ])

    const cardNavigateHandler = (cardTitle)=> {

// navigate(`/productcard/${cardTitle}`);
navigate(`/productcardqueryparams?category=${cardTitle}`);
    

    }

    return (
        <div className="dashboard">

            {

                list.map(el => {
                    return (
                        <div key={el.id} className="productcard">

                            <div className="card-title">

                                {el.title}



                            </div>
                            <div className="card-info">
                                <Button onClick={cardNavigateHandler.bind(null,el.title)}>Explore</Button>
                            </div>
                        </div>
                    )
                })

            }
        </div>
    )



}
export default Dashboard;