import Image from 'next/image'

import arrow from '../../../public/graphics/arrow.svg'

export default function ButtonAndArrow() {
  return (
    <div className='flex justify-start items-end'>
      <button 
        className='
          rounded-lg max-h-16 
          px-20 py-4 
          my-16 md:my-0 
          bg-gradient-to-b from-[#e7d05b] to-[#b7a446]
          text-black text-xl font-semibold
          drop-shadow-[0_5px_0px_rgba(119,104,25,1)]'
      >
        Shop&nbsp;Now
      </button>
      <Image className='hidden md:block ml-12 mb-4' src={arrow}/>
    </div>
  )
}