import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import HomeCard from './HomeCard';
import "./Home.css";
import { Container } from 'react-bootstrap';
import { Col,Row} from "react-bootstrap";

function Home() {

    const [arr, setArr] = useState([]);
    const [filteredArr, setFilteredArr] = useState([]);
    const searchRef = useRef(null);

    useEffect(getData, []);
    const styleCardDiv = "col-md-5 col-lg-3 mx-auto g-2"

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
           <Container fluids>

            <Row>

            {/* <div id='divCard'> */}
                {
                    filteredArr.length? filteredArr.map(elem => {
                        return <Row  className={styleCardDiv}><HomeCard elem={elem} /></Row>
                        
                    }) :  arr.map(elem => {
                        return <Row  className={styleCardDiv}><HomeCard elem={elem} /></Row>
                    })
                    
                }

                </Row>
                </Container>
                

            {/* </div> */}
        </>
    );
}

export default Home;