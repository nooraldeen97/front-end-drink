import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FavCard from './FavCard';


function Favorite(){

    
    const [favData, setFavData] = useState([]);

    function getData() {
        axios.get("https://drink-store.herokuapp.com/getDrinks")
            .then(result => {
                setFavData(result.data);
            })
    }

    function removeHandler(id){
        axios.delete(`https://drink-store.herokuapp.com/delete/${id}`)
        .then((result)=>{setFavData(result.data)})
        .catch((error)=>{console.log(error)})   
    }

    useEffect(getData, []);

    return(
        <div style={{height:"585px",width:"100%"}}>
        {
            favData.map((elem)=>{
                return <FavCard elem={elem} removeHandler={removeHandler}/>
            })
        }
        </div>
    );
}

export default Favorite;