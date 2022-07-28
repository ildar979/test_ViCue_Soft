import React from 'react'
import Beers from '../../components/Beers/Beers'
import Pagination from '../../components/Pagination/Pagination'
import Search from '../../components/Search/Search'

export default function MainPage() {
  return (
    <div>
      <Search/>
      <Beers/>
      <Pagination/>
    </div>
  )
}
