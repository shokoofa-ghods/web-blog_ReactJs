import React from 'react'
import { Link } from 'react-router-dom'


function Footer(props) {
    return(
        <>
        <h2>This is Footer Side</h2>
        <p>Thanks for Visiting</p>
        <Link to='./ContactUs'>Contact Us</Link> 
        </>       
    )
}
export default Footer