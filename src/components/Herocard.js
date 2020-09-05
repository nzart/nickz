import React from 'react'
/* import nyc from 'assets/images/bkbridge.jpg' 
import mount from 'assets/images/mountain.jpg'  */

const Herocard = (props) => {
    return (

        <div className='card_hero'>
            <img src={props.imgSrc} alt={props.altTag} />

            <div className='card_desc'>
                <h1>{props.title}</h1>
                {/* <h2>Hello</h2> */}
                <p>{props.desc}</p>
            </div>
            

        </div>
    )
}



export default Herocard;