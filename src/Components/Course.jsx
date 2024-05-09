import React from 'react'
import cards from "./Cards"
import list from "../../public/list.json"
import Cards from './Cards'
import { Link } from 'react-router-dom'
function Course() {
  return (
   <>
   <div className='max-w-screen-2xl container max-auto md:px-20 px-2'>
    <div className='mt-28 items-center text-center justify-center'>
        <h1 className='text-xl  md:text-4xl'>We are delighted to have you {""}
        <span className='text-pink-500'>here!!!:)</span>
        </h1>
        <p className='mt-8'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam sed, aliquid nesciunt ducimus, autem dolore nisi impedit velit totam quae porro eveniet, eligendi dolores odit?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis quis praesentium tempora at repudiandae ut minima aliquid earum voluptas quo, natus non, iusto architecto quod.
        </p>
       <Link to={'/'}>
       <button className='bg-pink-500 text-white px-3 py-1 mt-6 rounded-md hover:bg-pink-700 duration-300'>Back</button>
       </Link>
    </div>
            
              <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
                {list.map((items)=>(
                    <Cards  key={items.id} items={items}/>
                ))}
              </div>
            
   </div>
   </>
  )
}

export default Course