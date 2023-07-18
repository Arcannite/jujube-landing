function GetYear() {
  const now = new Date();
  return now.getUTCFullYear()
}

export default function Footer() {
  return (
    <div className="absolute inset-x-0 bottom-0 min-w-max bg-slate-900 text-gray-300 py-4 text-right pr-4">
      Designed and created by Castle Vast. Copyright &#169; { GetYear() } 
    </div>
  )
}
