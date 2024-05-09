import React from 'react'

function Cards({items}) {
    
    console.log(items, "items");
  return (
    <>
   <div className="my-3">
      <div className="card w-42 bg-base-100 ml-10 mr-6 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
  <figure><img src={items.image} alt="" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {items.name}
      <div className="badge badge-secondary">{items.category}</div>
    </h2>
    <p>{items.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">${items.price}</div> 
      <div className="badge badge-outline  hover:bg-pink-500 duration-200 cursor-pointer hover:text-white p-2">Buy Now</div>
    </div>
  </div>
</div>
    </div>
    </>



    
  )
}

export default Cards