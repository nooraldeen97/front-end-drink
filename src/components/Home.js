import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import HomeCard from './HomeCard';
import "./Home.css";

function Home() {

    const [arr, setArr] = useState([]);
    const [filteredArr, setFilteredArr] = useState([]);
    const searchRef = useRef(null);

    useEffect(getData, []);

    function getData() {
        axios.get("https://drink-store.herokuapp.com/")
            .then(result => {
                setArr(result.data);
            })
    }

    function searchHandler() {
        let newArr = arr.filter((elem => {
            return elem.strDrink.includes(searchRef.current.value);
        }))
        setFilteredArr(newArr);


    }


    return (
        <>
            <div id='hero'>
                <h1><span style={{ color: "yellow" }}>Stay Humid</span> <br></br>Lets take a natural juice.</h1>
                <input type="text" ref={searchRef} placeholder='search about drink' />
                <button onClick={searchHandler}>search</button>
            </div>
            <div id='divCard'>
                {
                   filteredArr.length? filteredArr.map(elem => {
                        return <HomeCard elem={elem} />
                    }) :  arr.map(elem => {
                        return <HomeCard elem={elem} />
                    })
                }

            </div>

        </>
    );
}

export default Home;