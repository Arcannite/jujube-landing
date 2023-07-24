import Image from 'next/image'

import comfort from '../../../public/graphics/comfort.svg'
import control from '../../../public/graphics/control.svg'
import style from '../../../public/graphics/style.svg'
import safety from '../../../public/graphics/safety.svg'

export default function Icons() {
  const icons = [
    {
      src: comfort,
      description: "Comfort",
    },
    {
      src: control,
      description: "Control",
    },
    {
      src: style,
      description: "Style",
    },
    {
      src: safety,
      description: "Safety",
    },
  ]

  return (
    <div className='grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4'>
      {icons.map( (icon) => (
        <div className='w-16 sm:w-20 xl:w-24 ml-8 lg:mx-auto text-center' key={icon.description}>
          <Image className='object-scale-down' src={icon.src}/>
          <p className="text-xl">{icon.description}</p>
        </div>
      ))}
    </div>
  )
}
