import React from 'react'
// import nyc from 'assets/images/bkbridge.jpg' 
import mount from 'assets/images/mountain.jpg' 

const Herocard = () => {
    return (

        <div className='card_hero'>
            <img src={mount} alt="ESB" />

            <div className='card_desc'>
                <h1>Hello</h1>
                {/* <h2>Hello</h2> */}
                <p>App Design</p>
            </div>
            

        </div>
    )
}



export default Herocard;