import Image from 'next/image'

import Circle from '../components/circle.js'
import Header from '../components/header.js'
import Footer from '../components/footer.js'

import dogRunningImage from '../../../public/graphics/dogRunning.webp'

function Body() {
  return (
    <div className="relative flex flex-row min-h-screen"> 
      <div className="
        pt-32 xl:pt-40 pb-8 pl-8 sm:pl-16
        lg:ml-28 xl:ml-48 2xl:ml-64 
        pr-8 md:pr-0
        basis-2/3 space-y-6 lg:space-y-12
      ">
        <h1 className='text-3xl sm:text-5xl lg:text-6xl font-semibold w-3/4'>
          Jujube
          {/* Not having this nbsp would make it so that on some viewports part of the shop button is pushed out of view */}
        </h1>
        <h3 className='text-lg sm:text-xl lg:text-2xl w-3/4'>
          Jujube is a project that is catered to the needs of pets.
        </h3>
        <Image className='object-contain max-w-md' src={dogRunningImage} alt="Dog running"/>
        <div>
          <div> Email: </div>
          <div> Telephone: </div>
          <div> Location: </div>
        </div>
      </div>
      <div className="basis-2/3">
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