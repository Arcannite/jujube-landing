import Image from 'next/image'

import Circle from '../components/circle.js'

import dogRunningImage from '../../../public/graphics/dogRunning.webp'
import dummyMap from '../../../public/graphics/dummyMap.webp'

function Body() {
  return (
    <div className="relative grid grid-cols-2 min-h-screen"> 

      <div className="
        pt-32 xl:pt-40 pb-8 pl-8 sm:pl-16
        lg:ml-28 xl:ml-48 2xl:ml-64 
        grid-start-1 grid-span-1 space-y-6 lg:space-y-12
      ">
        <h1 className='text-3xl sm:text-5xl lg:text-6xl font-semibold w-3/4'>
          Jujube
          {/* Not having this nbsp would make it so that on some viewports part of the shop button is pushed out of view */}
        </h1>
        <h3 className='text-lg sm:text-xl lg:text-2xl w-3/4'>
          Jujube is a project that is catered to the needs of pets.
        </h3>
        <Image className='object-contain xl:max-w-md' src={dogRunningImage} alt="Dog running"/>
      </div>

      <div className="grid-start-2 grid-span-1 grid grid-rows-5 pl-6 sm:pl-12">

        <div className='row-start-3 row-span-1 grid grid-cols-2 sm:gap-4'>
          <div className='block sm:hidden grid-start-1 grid-span-1'> 
            <Image className='object-contain' src={dummyMap} alt="dummy map"></Image>
          </div>
        </div>

        <div className='row-start-4 row-span-2 grid grid-cols-3 gap-4'>
          <div className='hidden sm:block grid-start-1 grid-span-1'> 
            <Image className='object-contain' src={dummyMap} alt="dummy map"></Image>
          </div>
          <div className='grid-start-2 grid-span-1'> 
            <div> Email: </div>
            <div> Telephone: </div>
            <div> Location: </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default function Home() {
  return (
    <main className="bg-white">
      <div className='relative isolate text-slate-900'>
        <Circle/>
        <Body/>
      </div>
    </main>
  )
}