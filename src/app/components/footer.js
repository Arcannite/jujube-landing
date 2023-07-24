export default function Footer() {
  return (
    <div className="
      fixed inset-x-0 bottom-0 min-w-screen bg-white py-1
      text-center text-gray-800 font-bold text-sm sm:text-base lg:text-lg
      grid grid-cols-4 lg:grid-cols-6"
    >
      <div>
        <a href="#"> About </a>
      </div>
      <div>
        <a href="#"> Products </a>
      </div>
      <div>
        <a href="#"> Reviews </a>
      </div>
      <div>
        <a href="#"> Find us </a>
      </div>
      <div>
        <a className="hidden lg:block"> E-mail: @petshophk </a>
      </div>
      <div>
        <a className="hidden lg:block"> +852 1234 5678 </a>
      </div>
    </div>
  )
}