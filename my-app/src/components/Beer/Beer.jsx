import React from 'react'
import styles from './Beer.module.scss'

export default function Beer({ beer }) {

  console.log('пивас', beer)
  

  return (
    <div>
      <div className="card" style={{ width: '300px', height: '600px' }}>
        <img src={ beer.image_url } className={ styles.beer__image } alt="Beer foto"/>
        <div className="card-body">
          <h5 className="card-title">{ beer.name }</h5>
          <p className="card-text">{ beer.description }</p>
          {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
        </div>
      </div>
    </div>
  )
}
