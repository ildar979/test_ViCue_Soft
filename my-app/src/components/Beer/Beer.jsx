import React from 'react'
import styles from './Beer.module.scss'

export default function Beer({ beer }) {

  const cutText = (text) => {
    let result = '';
    if (text.length > 140) {
      result = text.slice(0,136) + '...';
      return result
    } else {
      return text
    }    
  }
  

  return (
      <div className={styles.beer}>
        <img src={ beer.image_url } className={ styles.beer__image } alt="Beer foto"/>
        <div className={ styles.body }>
          <h5 className={ styles.body__title }>{ beer.name }</h5>
          <p className={ styles.body__discription }>{ cutText(beer.description) }</p>
          <a href="#" className={ styles.body__moreInfo }>Go somewhere</a>
        </div>
      </div>
  )
}
