import React from 'react'
function Cards({item}) {

  return (
    <>
        <div className='mt-8 mb-12 p-3 ml-8'>
            <div className="card bg-base-100 shadow-xl mt-5 w-80 h-full hover:scale-105  dark:bg-slate-900 dark:text-white">
                <figure><img className='h-48 w-full object-cover' src={item.image} /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                    {item.name}
                    <div className="badge badge-secondary">{item.category}</div>
                    </h2>
                    <div className="card-actions justify-between mt-5">
                    <div className="badge badge-outline mt-3">${item.price}</div> 
                    <div className="cursor-pointer p-3 hover:bg-pink-500 hover:text-white px-2 py-1 rounded-full border-[2px] duration-200">Buy Now</div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Cards