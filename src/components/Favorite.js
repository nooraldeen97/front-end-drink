import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FavCard from './FavCard';
import "./Favorite.css";

function Favorite() {


    const [favData, setFavData] = useState([]);

    function getData() {
        axios.get("https://drink-store.herokuapp.com/getDrinks")
            .then(result => {
                setFavData(result.data);
            })
    }

    function addCommentHandler(comm, id) {
        let comment = { "comment": comm }
        axios.put(`https://drink-store.herokuapp.com/update/${id}`, comment)
            .then((result) => { setFavData(result.data) })
            .catch((error) => { console.log(error) })

    }

    function removeHandler(id) {
        axios.delete(`https://drink-store.herokuapp.com/delete/${id}`)
            .then((result) => { setFavData(result.data) })
            .catch((error) => { console.log(error) })
    }

    useEffect(getData, []);

    return (
        <div id='favCardsCont'>
            {
                favData.map((elem) => {
                    return <FavCard elem={elem}
                        removeHandler={removeHandler}
                        addCommentHandler={addCommentHandler} />
                })
            }
        </div>
    );
}

export default Favorite;