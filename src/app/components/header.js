export default function Header() {
  return (
    <div className='absolute h-32 bg-none w-screen grid grid-cols-2 gap-4'>
      <div className='pt-12 ml-16 lg:ml-44 xl:ml-64 2xl:ml-80'>
        <div> Pet shop <b>Jujube</b> </div>
        <div> By Stefano </div>
      </div>
      <div className='pt-12 mr-16 lg:mr-44 xl:mr-64 2xl:mr-80 text-right'>
        <b> +852 1234 5678 </b>
        <div> open from 9:00 to 21:00 </div>
      </div>
    </div>
  )
}