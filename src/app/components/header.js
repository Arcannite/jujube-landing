export default function Header() {
  return (
    <div className='absolute h-32 bg-none w-screen grid grid-cols-2 text-sm sm:text-base bg-none z-10'>
      <div className='pt-12 ml-8 sm:ml-16 lg:ml-44 xl:ml-64 2xl:ml-80'>
        <a href="/" className="sm:text-xl text-[#3f3b26] sm:text-[#998a43] underline sm:no-underline hover:underline hover:underline-offset-4">
          Pet shop <b>Jujube</b>
        </a>
        <div> By Stefano </div>
      </div>
      <div className='pt-12 mr-8 sm:mr-16 lg:mr-44 xl:mr-64 2xl:mr-80 text-right'>
        <b> +852 1234 5678 </b>
        <div> open from 9:00 to 21:00 </div>
      </div>
    </div>
  )
}