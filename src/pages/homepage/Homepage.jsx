import React, { useState } from 'react'
import { css } from "@emotion/react";
import DotLoader from "react-spinners/DotLoader";
import Contact from '../../components/Contact/Contact'
import HomeBody from '../../components/HomeBody/HomeBody'
import Navbar from '../../components/Navbar/Navbar'
import UserGrid from '../../components/UserGrid/UserGrid'
import { fetchUsers } from './Queries'
import "./styles.scss"
const Homepage = () => {
    const [loading,setLoading]=useState(false);
    const [isClicked,setClicked]=useState(false);
    const [allUsers,setAllUsers]=useState([]);

    const handleClick = async () => {
        setLoading(true);
        setClicked(true);
        setInterval(async ()=>{
            const response = await fetchUsers();
            setLoading(false)
            setAllUsers(response.data.data)
        },2500)
        

    }
    const isClickFunc = () => {
        setClicked(false)
    }
    const override = css`
        display: block;
        margin: 3rem auto 0;
        border-color: red;
        `;
    const color="#dc0095"
    return (
        <div className="container">
            <Navbar handleClick={handleClick} isClickFunc={isClickFunc}/>
            {
                isClicked?
                loading?
                <DotLoader color={color} loading={loading} css={override} size={150} />:
                <UserGrid users={allUsers}/>:
                <>
                <HomeBody/>
                <Contact/>
                </>
            }
            
            
        </div>
    )
}

export default Homepage
