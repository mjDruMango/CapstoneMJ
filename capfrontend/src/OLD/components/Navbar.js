import React from 'react';
import { Link } from "react-router-dom";
import '../style.css';

function Navbar() {
    return (
        <nav>
            <ul>
                <div>
                    <li>
                        <Link to="/ImageUpload">LSB Encryption</Link>
                    </li>
                </div>
                <div>
                    <li>
                        <Link to="/About">About</Link>
                    </li>
                </div>
                <div className='right-item'>
                    <li>
                        <Link to="/Login">Login</Link>
                    </li>
                </div>
            </ul>
        </nav>
    );
}

export default Navbar;