import Image from 'next/image'

import catImage from '../../public/graphics/cat.webp'
import left1 from '../../public/graphics/left-1.webp'
import left2 from '../../public/graphics/left-2.webp'
import left3_1 from '../../public/graphics/left-3-1.webp'
import left3_2 from '../../public/graphics/left-3-2.webp'
import left4_1 from '../../public/graphics/left-4-1.webp'
import left4_2 from '../../public/graphics/left-4-2.webp'
import left4_3 from '../../public/graphics/left-4-3.webp'

import arrow from '../../public/graphics/arrow.svg'

function Circle() {
  return (
    <div
      className="absolute -top-40 -z-20 transform-gpu overflow-hidden sm:-top-1/2 right-0"
      aria-hidden="true"
    >
      <div
        className="relative left-[calc(50%-11rem)] aspect-[1/1] w-[36.125rem] bg-[#beb275] sm:left-[calc(70%-30rem)] sm:w-[80rem]"
        style={{
          clipPath:
            'circle(40%)',
        }}
      />
    </div>
  )
}

function Header() {
  return (
    <div className='absolute h-32 bg-none w-screen grid grid-cols-2 gap-4'>
      <div className='pt-12 pl-80'>
        <div> Pet shop <b>Jujube</b> </div>
        <div> By Stefano </div>
      </div>
      <div className='pt-12 pr-80 text-right'>
        <b> +852 1234 5678 </b>
        <div> open from 9:00 to 21:00 </div>
      </div>
    </div>
  )
}

function Footer() {
  const sections = [
    "About",
    "Products",
    "User reviews",
    "Find us",
    "E-mail: @petshophk",
    "+852 1234 5678",
  ]
  return (
    <div className="text-sm sm:text-base absolute inset-x-0 bottom-0 min-w-max bg-white text-gray-800 py-1 text-center grid grid-cols-6">
      {sections.map( (section) => (
        <b key={section}>
          {section}
        </b>
      ))}
    </div>
  )
}

function Icons() {
  return (
    <div className='grid grid-cols-4 gap-4'>

      <div className='w-24 text-center'>
        <Image className='object-scale-down' src={left1}/>
        <p className="text-xl">Cat</p>
      </div>

      <div className='w-24 text-center'>
        <Image className='object-scale-down' src={left2}/>
        <p className="text-xl">Dog</p>
      </div>

      <div className=''>

        <div className='w-48 grid grid-cols-2 justify-center'>
          <Image className='col-start-1 col-span-1 object-scale-down scale-75' src={left3_1}/>
          <Image className='col-start-2 col-span-1 object-scale-down' src={left3_2}/>
        </div>
        <p className="pl-8 text-xl">Cat and Dog</p>

      </div>

      <div className='mx-auto text-center'>

        <div className='w-48 grid grid-cols-3 justify-center h-24'>
          <div className="col-start-2 col-span-1 h-10">
            <Image src={left4_1}/>
          </div>
          <div className="col-start-1 col-span-1 h-10">
            <Image className="scale-75" src={left4_2}/>
          </div>
          <div className="col-start-3 col-span-1 h-10">
            <Image className="scale-75" src={left4_3}/>
          </div>
        </div>
        <p className="text-xl">Various animals</p>

      </div>

    </div>
  )
}

function ButtonAndArrow() {
  return (
    <div className='flex justify-start items-end'>
      <button 
        className='rounded-lg px-20 py-4 max-h-16 bg-gradient-to-b from-[#e7d05b] to-[#b7a446] text-black text-xl font-semibold drop-shadow-[0_5px_0px_rgba(119,104,25,1)]'
      >
        Shop Now
      </button>
      <Image className='ml-12 mb-4' src={arrow}/>
    </div>
  )
}

function Body() {
  return (
    <div className="flex flex-row min-h-screen">
      
      <div className='
        pt-32 xl:pt-40 pb-32 pl-8 md:pl-16 
        lg:ml-28 xl:ml-48 2xl:ml-64 
        pr-8 md:pr-0
        bg-none basis-full md:basis-7/12 space-y-12'
      >

        <h1 className='text-5xl sm:text-6xl font-semibold w-3/4'> The Premium Dog Harness </h1>
        <h3 className='text-xl sm:text-2xl font-sans w-3/4'> Our high quality dog harness offers you the perfect linkage between you and your beloved dog. </h3>
        
        <Icons/>

        <ButtonAndArrow/>
        
      </div>

      <div className='basis-2/12'></div> {/* Just for formatting */}

      <div className='hidden md:block basis-1/4'>
        <Image className='mt-32' src={catImage} alt="Cat peeking"/>
      </div>

    </div>
  )
}

export default function Home() {
  return (
    <main className="bg-white">
      <div className='relative isolate'>
        <Circle/>
        <Header/>
        <Body/>
        <Footer/>
      </div>
    </main>
  )
}