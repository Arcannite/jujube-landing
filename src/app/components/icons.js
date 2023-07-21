import Image from 'next/image'

import left1 from '../../../public/graphics/left-1.webp'
import left2 from '../../../public/graphics/left-2.webp'
import left3_1 from '../../../public/graphics/left-3-1.webp'
import left3_2 from '../../../public/graphics/left-3-2.webp'
import left4_1 from '../../../public/graphics/left-4-1.webp'
import left4_2 from '../../../public/graphics/left-4-2.webp'
import left4_3 from '../../../public/graphics/left-4-3.webp'

export default function Icons() {
  return (
    <div className='grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4 lg:scale-100'>

      <div className='w-16 sm:w-20 xl:w-24 text-center mx-auto lg:mx-0'>
        <Image className='object-scale-down' src={left1}/>
        <p className="text-xl">Cat</p>
      </div>

      <div className='w-16 sm:w-20 xl:w-24 text-center mx-auto lg:mx-0'>
        <Image className='object-scale-down' src={left2}/>
        <p className="text-xl">Dog</p>
      </div>

      <div className='text-center mx-auto'>

        <div className='w-40 grid grid-cols-2 xl:h-24'>
          <Image className='col-start-1 col-span-1 object-scale-down scale-75' src={left3_1}/>
          <Image className='col-start-2 col-span-1 object-scale-down' src={left3_2}/>
        </div>
        <p className="text-xl">Cat&nbsp;and&nbsp;Dog</p>

      </div>

      <div className='text-center mx-auto lg:ml-16'>

        <div className='w-40 grid grid-cols-3 justify-center xl:h-24'>
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
        <p className="text-xl">Various&nbsp;animals</p>

      </div>

    </div>
  )
}
