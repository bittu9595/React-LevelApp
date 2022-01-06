import React from "react";
 import { useEffect, useState } from "react";
import withHoc from "../hoc/withmyhoc";

const Persons = (props) => {
    console.log('Person props',props);

    //state

    //destructuring

   

   
    const [userInput,setUserInput] = useState('');
    const [category,setCategory]= useState('');
    

   

    useEffect(
        ()=> {
            console.log('working like componentdidmount')
            return ()=> {
                console.log('Person.js componentwill unmount')
            }
        },
        []
    );

    useEffect(
        ()=> {
            console.log('working like componentdidupdate')
        },[userInput]
    );

    

    /**
     * This function is made for selecting the appropriate category
     * @param {*} event 
     */
    const selectCategory = (event)=> {
        console.log('event.target.value',event.target.value);
        setCategory(event.target.value);
    }



    const onChangeHandler = (event)=> {
        // props.change(event.target.value);
        setUserInput(event.target.value);
    }

    return(
        <div>
            <h1>Person Loading....</h1>
            <input onChange = {onChangeHandler}/>
            <div>
                <label>Select Category</label>
                <div>
                    <div onChange={selectCategory}>
                    <input value = "category1"  type="radio"/>Category1



                    
                    
                   
                   <input value = "category2" type = "radio"/>Category 2


                   </div>
                </div>
            </div>
             {userInput}
        </div>
    )

}

export default withHoc(React.memo(Persons));