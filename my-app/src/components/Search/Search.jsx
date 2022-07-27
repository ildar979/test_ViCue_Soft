import React from 'react'
import styles from './Search.module.scss'

export default function Search() {
  return (
    <div>
      <form className={ styles.search }>
        <input className={ styles.search__input } placeholder='Искать' type="search"/>
        <button className={ styles.search__btn } type="submit">Поиск</button>
      </form>
    </div>
  )
}
