import React from 'react'
import './Footer.css'
import { headerData } from '../../data/headerData'

//Footer Component
function Footer() {
    return (
        <div className="footer">   
            <footer>
             <p>
             © Copyright 2022 by {(headerData.name)}
            </p>
            </footer> 
        </div>
    )
}

export default Footer

