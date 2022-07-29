import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { beersSelector } from '../../redux/selector'
import styles from './PersonalPage.module.scss'

export default function PersonalPage() {

  const { beers } = useSelector(beersSelector.getState)
  const { id } = useParams()
  const beer = beers.find((elem) => elem.id === +id)
  console.log(beer)
  const foodPairing = beer.food_pairing

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>

      <main className={ styles.beer }>
        <div className={ styles.content }>
          <header className={ styles.beer__name }>{ beer.name }</header>
          <article className={ styles.beer__info }>
            <p className={ styles.beer__info_tagline }>{ beer.tagline }</p>
            <p className={ styles.beer__info_description }>{ beer.description }</p>
            <p className={ styles.beer__info_abv }>abv: { beer.abv }</p>
            <label>Food pairing:</label>
            <ol>
              {
                foodPairing?.map((el) => <li>{ el }</li>)
              }
            </ol>
          </article>
        </div>
        <aside>
          <img className={ styles.beer__image } src={ beer.image_url } alt='logo'/>
        </aside>
      </main>
    </div>
  )
}
