import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

export default function PersonalPage() {

  const beer = useSelector(store => store.beer)
  // console.log('-+-+-+-', beer)
  const dispatch = useDispatch()
  const { id } = useParams

  useEffect(() => {
    axios.get(`https://api.punkapi.com/v2/beers/${ id }`)
    .then((data) => { console.log(data)
    })
  })

  return (
    <div>PersonalPage</div>
  )
}
