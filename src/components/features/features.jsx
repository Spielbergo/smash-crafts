import React from 'react'
import { features } from '../../constants'
import './features.css'

const Features = () => {
  return (
    <section className='features--container'>
      {features.map(( feature ) => 
        <div key={feature.id} className='features--card'>
            <img src={feature.image} />
            <h3>{feature.title}</h3>
        </div>
      )}
    </section>

  )
}

export default Features