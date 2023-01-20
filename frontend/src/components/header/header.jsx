import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <nav className='header'>
                <Link to='/content' style={{ textDecoration: 'none' }}>
                <section className='logo'>
                    <img src={require("../../images/icon.png")} alt="logo" />
                    <div id='logo-name'>Instaclone</div>
                </section>
                </Link>
                <section className="cameraLogo">
                    <Link to="/createPost">
                    <img className='camerapic' src={require("../../images/camera.png")} alt="logo" />
                    </Link>
                </section>
            </nav>
        </>
    )
}

export default Header