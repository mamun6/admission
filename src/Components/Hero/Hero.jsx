import React from 'react'
import './Hero.css'
import { assets } from '../../assets/assets'

const Hero = () => {
  return (
    <div className='hero container' >
        <div className="hero-text">
            <h1>We ensure better education for a better world !</h1>
            <p>Education shows us the importance of hard work and, 
                at the same time, helps us grow and develop. Thus,
                 we are able to shape a better society to live in by
                knowing and respecting rights, laws, and regulations.</p>
                <button className='btn' >Read more.. </button>
        </div>
    </div>
  )
}

export default Hero