import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { beersSelector } from '../../redux/selector';

export default function Pagination() {

  const dispatch = useDispatch()
  const {beers} = useSelector(beersSelector.getState)

  const [beersPerPage] = useState(5);
  const [currentPage,setCurrentPage] = useState(1)

  const lastBeerIndex = currentPage * beersPerPage;
  const firstBeerIndex = lastBeerIndex - beersPerPage;
  const currentBeer = beers?.slice(firstBeerIndex, lastBeerIndex);

  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(beers?.length / beersPerPage); i++) {
    pageNumber.push(i)
  }

  useEffect(() => {
    dispatch({ type: 'SET_CURRENT_BEER', payload: currentBeer })
  }, [currentBeer, dispatch]);

  return (
    <div>
      <ul className="pagination" style={{display: 'flex', justifyContent: 'center', marginTop: '25px'}}>
        {
          pageNumber.map(number => (
            <li className="page-item" key={number}>
              <button onClick={() => setCurrentPage(number)}  className='page-link'>
                { number }
              </button>
            </li>
          ))
        }
      </ul>
    </div>
  )
}
