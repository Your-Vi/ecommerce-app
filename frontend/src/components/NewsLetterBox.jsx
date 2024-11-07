import React from 'react'

const NewsLetterBox = () => {


    const onSubmitHandler = (event)=>{
        event.preventDefault();

    }





  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
        <p className='text-gray-400 mt-3'>
            viForever is a brand of shopping a different collection of outfit that matches your dress taste of designing .This will be a cheaper collection for your thoughts. 
        </p>
        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border-2 pl-3'>
            <input type="email" placeholder="Enter your email" className='w-full sm:flex-1 outline-none' required />
            <button type="submit" className='bg-black text-white text-xs px-10 py-4 active:bg-white active:text-black active:border border-black'>SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default NewsLetterBox