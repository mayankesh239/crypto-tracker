import React from 'react'
import "./Home.css"
import Typewriter from "typewriter-effect";

const Home = () => {
    return (
        <div className='home'>
                <Typewriter
                options={{
                    strings: ['HEY THERE! ', 'WELCOME TO CRYPTO PRICE TRACKER'],
                    autoStart: true,
                    loop: true,
                }}
            />
            <div>LET'S CHASE THE BULL RUN</div>
        </div>
    )
}

export default Home
