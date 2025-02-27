import React from 'react'
import {Link} from 'react-router-dom'
import list from '../../public/list.json'
import Cards from './Cards'

function Course() {
  return (
    <>
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 z-50'>
            <div className='mt-28 items-center justify-center text-center'>
                <h1 className='text-2xl md:text-4xl'> We're delighted to have you <span className='text-pink-500'>Here!! :)</span></h1>

                <p className='mt-12'>Makes You More Empathetic. Getting lost in a good read can make it easier for you to relate to others. Literary fiction, specifically, has the power to help readers understand what others are thinking by reading other people's emotions.Books improve memory. Books relieve the stress of students. Books improve your writing skills. Books introduce us to things and perspectives</p>

                <Link to="/">
                    <button className='bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mt-8'>Back</button>
                </Link>
            </div>

            <div className='mt-8 grid grid-cols-1 md:grid-cols-4'>
                {
                    list.map((item)=> (
                        <Cards key={item.id} item={item}/>
                    ))
                }
            </div>

        </div>
    </>
  )
}

export default Course