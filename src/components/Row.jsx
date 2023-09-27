import React, { useEffect, useState } from 'react'
import tmdbaxios from '../tmdbaxios'
import './Row.css';

 function Row({title,fetchUrl,isPoster}) {
  const [allMovies,setallMovies] = useState()
const base_url =  "https://image.tmdb.org/t/p/original/";

  const fetchData = async ()=>{
    const {data} =await tmdbaxios.get(fetchUrl)
    setallMovies(data.results)
  }
  // console.log(allMovies);

  useEffect(()=>{
    fetchData()
  },[])
  return (
    <div className='row'>
      <h1>{title}</h1>
      <div className='movies-row'>
        {
          allMovies?.map(item=>(
            <img className={`${isPoster && 'movie-poster'} movie`}  src={`${base_url}/${isPoster?item.poster_path:item?.backdrop_path}`} alt='no image' />
          ))
        }
      </div>
    </div>
  )
}

export default Row;
