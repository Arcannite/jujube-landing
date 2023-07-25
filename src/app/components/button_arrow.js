import Image from 'next/image'

import arrow from '../../../public/graphics/arrow.svg'

export default function ButtonAndArrow() {
  return (
    <div className='flex justify-start items-end pb-32 short:pb-12 tall:pb-0'>
      <button 
        className='
          rounded-lg max-h-16 lg:max-h-20
          px-20 py-4 xl:px-28 lg:py-6
          my-8 sm:my-12 md:my-0
          bg-gradient-to-b from-[#e7d05b] to-[#b7a446]
          hover:from-[#fce262] hover:to-[#d3bd50]
          text-black text-xl xl:text-2xl font-semibold
          drop-shadow-[0_5px_0px_rgba(119,104,25,1)]'
      >
        SHOP&nbsp;NOW
      </button>
      <Image className='hidden md:block ml-12 mb-4' src={arrow} alt={"Arrow pointing to button"}/>
    </div>
  )
}