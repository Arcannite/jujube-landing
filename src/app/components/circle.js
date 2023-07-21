export default function Circle() {
  return (
    <div
      className="absolute -z-20 transform-gpu overflow-hidden -top-40 lg:-top-1/2 right-0"
      aria-hidden="true"
    >
      <div
        className="
          relative aspect-[1/1] bg-[#beb275]
          left-[calc(65%-11rem)] md:left-[calc(50%-8rem)] xl:left-[calc(70%-30rem)] 2xl:left-[calc(65%-30rem)]
          w-[32rem] sm:w-[40rem] md:w-[48rem] lg:w-[64rem] 2xl:w-[72rem]
        "
        style={{
          clipPath:
            'circle(40%)',
        }}
      />
    </div>
  )
}