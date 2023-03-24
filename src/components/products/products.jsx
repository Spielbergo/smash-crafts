import React from 'react'
import { products } from '../../constants'
import './products.css'

const PetProducts = () => {
  return (
    <section className='products--container'>
      <div className='products--title'>
        <h5>Some text here</h5>
        <h3>Some more text right here</h3>
        <div className='dividing-line'></div>
      </div>

      <div className='products--cards'>
        {products.map(( product ) => 
          <div key={product.id} className='products--card shadow'>
              <img src={product.image} alt={product.title} />
              <div className='products--card-text'>
                <h4>{product.title}</h4>
                <p>{product.category}</p>
              </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default PetProducts