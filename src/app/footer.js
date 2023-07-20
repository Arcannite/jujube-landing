function GetYear() {
  const now = new Date();
  return now.getUTCFullYear()
}

export default function Footer() {
  return (
    <div className="text-sm sm:text-base absolute inset-x-0 bottom-0 min-w-max bg-slate-900 text-gray-300 py-4 text-center sm:text-right sm:pr-4">
      Designed and created by Castle Vast. Copyright &#169; { GetYear() } 
    </div>
  )
}
