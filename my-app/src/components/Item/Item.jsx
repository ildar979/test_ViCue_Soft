import React from 'react'
import styles from './Item.module.scss'

export default function Item() {
  return (
    <div>
      <div class="card" style={{ width: '18rem' }}>
        <img src="..." class="card-img-top" alt="Beer foto"/>
        <div class="card-body">
          <h5 class="card-title">Название карточки</h5>
          <p class="card-text">Some quick example text</p>
          {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
        </div>
      </div>
    </div>
  )
}
