import React from "react";
import Tilt from "react-tilt";
import brain from './brain.png';
import Image from 'next/image'

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} style={{ height: 64, width: 64 }} >
                <div className="Tilt-inner">
                    <Image style={{}} src={brain} alt='brain'/>
                </div>
            </Tilt>
        </div>
    )
}

export default Logo;