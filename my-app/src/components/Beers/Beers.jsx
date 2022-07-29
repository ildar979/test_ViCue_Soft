import React, { useState } from 'react'
import { useEffect } from 'react'
import Beer from '../Beer/Beer'
import styles from './Beers.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { perSelector } from '../../redux/selector'

export default function Beers() {
  
  const URL = 'https://api.punkapi.com/v2/beers?page=1&per_page=80'
  
  const [loading, setLoading] = useState(false)
  const { currentBeer } = useSelector(perSelector.getState)  
  const dispatch = useDispatch()
  const [input, setInput] = useState('')

  useEffect(() => {
    setLoading(true)
    axios.get(URL)
      .then(( data ) => {
      dispatch({ type: 'SET_BEERS', payload: data.data })
      setLoading(false)       
      })
  }, [dispatch])

  const filteredBeers = currentBeer.filter(beer => {
    return beer.name.toLowerCase().includes(input.toLowerCase())
  })

  return (
      <div>
        <div>
          <form className={ styles.search }>
            <input className={ styles.search__input }
            placeholder='Искать' 
            type="search"
            onChange={(event) => setInput(event.target.value) }/>
          </form>
        </div>
        <div className={ styles.main } >
          { loading ?
          ( 'Loading...' ) :
          (filteredBeers?.map((beer) => <Beer beer={ beer } key={ beer.id }/>))
          }
          
        </div>
      </div>
  )
}
