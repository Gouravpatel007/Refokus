import React from 'react';
import { IoIosReturnRight } from "react-icons/io";

function Button({title="Get Started"}) {
  return (
    <div className='w-fit min-w-40 px-4 py-2 bg-zinc-100 text-black rounded-full flex item-center justify-between'>
        <span className='text-sm font-medium mt-2'>{title}</span>
        <IoIosReturnRight />
    </div>
  )
}

export default Button
