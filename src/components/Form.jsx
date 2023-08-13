import React, { useRef } from 'react'
import { GoSearch } from "react-icons/go";

const Form = ({fetchWeather}) => {


  const searchKey = useRef ('')


  
  return (
    <div className='w-100 d-flex justify-content-center mt-4 mb-2'>
        <input type="text" ref= {searchKey} name="" id="" className='form-control' placeholder='search' />
        <button value="Search" onClick={()=> fetchWeather(searchKey.current.value)} type='button' className= "btn btn-success ms-2" ><GoSearch/> Search </button>
    </div>
  )
}

export default Form
