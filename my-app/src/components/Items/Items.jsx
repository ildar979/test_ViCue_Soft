import React, { useState } from 'react'
import { useEffect } from 'react'
import Item from '../Item/Item'
import styles from './Items.module.scss'

export default function Items() {

  const [beers, setBeers] = useState([])

  useEffect(() => {

  })

  return (
    <div>
      <Item/>
    </div>
  )
}
