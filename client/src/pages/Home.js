import React from 'react';
import {Link} from 'react-router-dom';
import BannerPic from '../assets/bannerPic.png'
import Button from '@mui/material/Button';
// import { Parallax } from 'react-parallax';
import '../styles/Home.css'

const currDate = new Date().toLocaleDateString();
const currTime = new Date().toLocaleTimeString();

function Home() {
  return (
    <div className='home'>
        <div
        className='headerContainer'
        style={{ backgroundImage: `url(${BannerPic})` }}>
        <p> Current Date is = {currDate} </p>
        <p> Curremt Time is = {currTime} </p> 
            <h1>Pa-Dala</h1><br/>
            <p>Erranding Service</p>
            <Link to ="/login" style={{ textDecoration: 'none' }}>
            <Button>Log-in</Button>
            </Link>
        </div>
    </div>
  )
}

export default Home