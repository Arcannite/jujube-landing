export default function Footer() {
  const sections = [
    "About",
    "Products",
    "User reviews",
    "Find us",
    "E-mail: @petshophk",
    "+852 1234 5678",
  ]
  return (
    <div className="
      absolute inset-x-0 bottom-0 min-w-screen bg-white py-1
      text-center text-gray-800 text-sm sm:text-base
      grid grid-cols-3 lg:grid-cols-6"
    >
      {sections.map( (section) => (
        <b key={section}>
          {section}
        </b>
      ))}
    </div>
  )
}