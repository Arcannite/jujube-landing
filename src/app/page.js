import Image from 'next/image'

import Header from './components/header.js'
import Footer from './components/footer.js'
import Icons from './components/icons.js'
import ButtonAndArrow from './components/button_arrow.js'
import Circle from './components/circle.js'

import dogImage from '../../public/graphics/dogPeeking.webp'

function Body() {
  return (
    <div className="relative flex flex-row min-h-screen">
      
      <div className='
        pt-32 xl:pt-40 pb-8 pl-8 sm:pl-16
        lg:ml-28 xl:ml-48 2xl:ml-64 
        pr-8 md:pr-0
        bg-none basis-5/6 lg:basis-7/12 space-y-6 lg:space-y-12'
      >

        <h1 className='text-3xl sm:text-5xl lg:text-6xl font-semibold w-3/4'>
          The Premium Dog&nbsp;Harness
          {/* Not having this nbsp would make it so that on some viewports part of the shop button is pushed out of view */}
        </h1>
        <h3 className='text-lg sm:text-xl lg:text-2xl w-3/4'>
          Our high quality dog harness offers you the perfect linkage between you and your beloved dog.
        </h3>
        
        <Icons/>

        <ButtonAndArrow/>
        
      </div>

      <div className='hidden lg:block basis-2/12'></div> {/* Just for formatting */}

      <div className='absolute max-w-[40%] right-0 md:static md:basis-1/2 lg:basis-1/4'>
        <Image className='mt-32' src={dogImage} alt="Dog peeking"/>
      </div>

    </div>
  )
}

export default function Home() {
  return (
    <main className="bg-white">
      <div className='relative isolate text-slate-900'>
        <Circle/>
        <Header/>
        <Body/>
        <Footer/>
      </div>
    </main>
  )
}