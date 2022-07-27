import React, { useState } from 'react'
import { useEffect } from 'react'
import Beer from '../Beer/Beer'
import styles from './Beers.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'

export default function Beers() {

  const URL = 'https://api.punkapi.com/v2/beers?page=1&per_page=80'
  const [loading, setLoading] = useState(true)
  const beers = useSelector(store => store.beers)
  const dispatch = useDispatch()

  console.log('ящики с пивом', beers)

  useEffect(() => {
    axios.get(URL)
      .then(( data ) => {
        // console.log(data.data)
      dispatch({ type: 'SET_BEERS', payload: data.data })
      setLoading(false)       
      })

  }, [dispatch])

  return (
    <div className={ styles.main } >
      { loading ?
       ( 'Loading...' ) :
       (beers.map((beer) => <Beer beer={ beer } key={ beer.id }/>))
      }
      
    </div>
  )
}
