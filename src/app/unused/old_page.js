import Footer from './footer'
import NavBar from './navbar'
import Image from 'next/image'
import dog_img from '../../../public/graphics/dog_img.webp'

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-500 relative">

      <NavBar/>

      <div className="flex flex-row max-h-screen">
        <div className='
          pt-32 xl:pt-40 pb-32 pl-8 md:pl-16 
          lg:ml-28 xl:ml-48 2xl:ml-64 
          pr-8 md:pr-0
          bg-slate-200 basis-full md:basis-3/5 space-y-16'
        >

          <h1 className='text-5xl sm:text-6xl font-semibold'> The Premium Dog Harness </h1>
          <h3 className='text-xl sm:text-2xl font-sans'> Our high quality dog harness offers you the perfect linkage between you and your beloved dog. </h3>

          <div className='flex flex-row'>
            <div className='basis-1/3'>
              <svg className="scale-75 sm:scale-90 lg:scale-100" fill="#000000" height="100px" width="100px" id="Layer_1" viewBox="0 0 128 128">
                <polygon points="74.1,51.5 4.3,18.4 4.3,11.8 76.4,46.3 "/>
                <path d="M50.2,87.9h30.5v27.2c0,4.5,3.6,8.1,8.1,8.1c4.5,0,8.1-3.6,8.1-8.1V87.9c2.4,0,2.7-1.6,2.7-3.4V64.2L74,51.7H19.8l-7-4
                  c-2.2-1.3-5.1-0.5-6.4,1.8c-1.3,2.2-0.5,5.1,1.8,6.4l11,6.3v53c0,4.5,3.6,8.1,8.1,8.1c4.5,0,8.1-3.6,8.1-8.1l0-20.7L50,119.1
                  c2.3,3.8,7.2,5.1,11.1,2.8c3.8-2.3,5-7.3,2.8-11.1L50.2,87.9z"/>
                <polygon points="76.5,46.2 99.5,57.1 99.5,52.8 118.2,52.8 125,38 76.5,14.9 "/>
              </svg>
              <p className='pl-5'>Control</p>
            </div>
            <div className='basis-1/3'>
              <svg className="scale-75 sm:scale-90 lg:scale-100" fill="#000000" height="100px" width="100px" version="1.1" id="_x31_" viewBox="0 0 128 128">
                <path id="_x31__46_" d="M35.9,13c-3.5-3.5-9.3-4.4-12.7-1.2L4.5,30.5c-2.9,2.9-1.6,7.7,2.3,8.7L10,40c8.1,2.1,16.3-2.7,18.5-10.7
                  l2-7.7c0.3-1.1,1.4-1.7,2.4-1.4c1.1,0.3,1.7,1.4,1.4,2.4L32.6,29c3.4-1.9,7.3-3,11.5-3h4.7L35.9,13z"/>
                <path id="_x31__45_" d="M92.1,13c3.5-3.5,9.3-4.4,12.7-1.2l18.6,18.7c2.9,2.9,1.6,7.7-2.3,8.7l-3.2,0.8c-8.1,2.1-16.3-2.7-18.5-10.7
                  l-2-7.7c-0.3-1.1-1.4-1.7-2.4-1.4s-1.7,1.4-1.4,2.4l1.7,6.4c-3.4-1.9-7.3-3-11.5-3h-4.7L92.1,13z"/>
                <path id="_x32_" d="M103.6,59.9V49.8c0-10.8-8.9-19.7-19.7-19.7H44.3c-10.8,0-19.7,8.9-19.7,19.7v10.1c-3.1,4.1-5,9.3-5,15v14.9
                  c0,12.3,8.9,22.6,20.7,24.7c0.1,0,0.1,0,0.2,0c0.3,0.1,0.6,0.1,1,0.1c0.6,0.1,1.2,0.1,1.8,0.2c0.2,0,0.4,0,0.5,0c0.2,0,0.3,0,0.5,0
                  h0.5h7.5c3.2,2.7,7.2,4.2,11.7,4.2s8.5-1.6,11.7-4.2h7.6h0.5c0.2,0,0.3,0,0.5,0s0.4,0,0.5,0c0.6,0,1.2-0.1,1.8-0.2
                  c0.3,0,0.6-0.1,1-0.1c0.1,0,0.1,0,0.2,0c11.7-2.1,20.7-12.4,20.7-24.7V74.9C108.5,69.3,106.7,64.1,103.6,59.9z M82.5,47.7
                  c3.6,0,6.6,3,6.6,6.6s-3,6.6-6.6,6.6s-6.6-3-6.6-6.6C76,50.6,78.9,47.7,82.5,47.7z M45.5,47.7c3.6,0,6.6,3,6.6,6.6s-3,6.6-6.6,6.6
                  s-6.6-3-6.6-6.6C39,50.6,41.9,47.7,45.5,47.7z M64,114.9c-7.4,0-13.6-5.8-14-13.3c4.6,0,8.9-1.6,12.3-4.5v10.6c0,1,0.7,1.8,1.8,1.8
                  s1.8-0.7,1.8-1.8V97.1c3.4,2.8,7.7,4.5,12.3,4.5C77.6,109,71.4,114.9,64,114.9z M97.7,81.2c0,9.8-8,17.8-17.8,17.8
                  c-6.9,0-12.8-3.9-15.8-9.7c-3,5.7-8.9,9.7-15.8,9.7c-9.8,0-17.8-8-17.8-17.8v-5.8c0-1.1,0.8-2,2-2s2,0.8,2,2v5.8
                  c0,7.6,6.2,13.8,13.8,13.8c7,0,12.7-5.2,13.7-12c-0.1-0.1-0.1-0.1-0.2-0.2l-8-12.1c-1.1-1.6,0.2-3.5,2.3-3.5h16c2,0,3.3,1.9,2.3,3.5
                  l-8,12.1c0,0.1-0.1,0.1-0.2,0.2c1,6.8,6.7,12,13.7,12c7.6,0,13.8-6.2,13.8-13.8v-5.8c0-1.1,0.8-2,2-2s2,0.8,2,2V81.2L97.7,81.2z"/>
              </svg>
              <p className='pl-5'>Comfort</p>
            </div>
            <div className='basis-1/3'>
              <svg className="scale-75 sm:scale-90 lg:scale-100" fill="#000000" id="Style" width="100px" height="100px" viewBox="0 0 202 256">
                <path d="M108.856,39.664c0.158,0.029,0.315,0.044,0.472,0.062c1.44,4.056,3.228,7.935,5.345,11.592l-4.533,5.396l-63.673-7.203
                  L51.77,2l64.118,7.107l13.048,25.568l-10.864,12.671c-1.527-2.81-2.854-5.749-3.961-8.802c1.496-1.025,2.6-2.622,2.953-4.546
                  c0.702-3.831-1.834-7.506-5.665-8.208c-3.831-0.702-7.506,1.834-8.208,5.665C102.489,35.287,105.025,38.961,108.856,39.664z
                  M120.833,60.277c-12.42,5.499-19.69,11.953-26.591,21.961c-20.809-1.503-44.855,11.052-60.921,33.989
                  c-15.432,22.03-19.683,49.046-12.56,66.937c-4.057,1.6-7.752,4.103-10.749,7.377c-5.47,5.973-8.197,14.05-7.481,22.16
                  c1.305,14.775,14.186,26.347,29.327,26.347l79.777,0.015c4.117,0,7.468,3.35,7.468,7.468c0,4.124,3.344,7.468,7.468,7.468
                  s7.468-3.344,7.468-7.468c0-11.649-8.937-21.251-20.315-22.307l-0.204-0.112H31.857c-7.472,0-13.819-5.59-14.449-12.725
                  c-0.354-4.005,0.931-7.826,3.618-10.76c2.251-2.458,5.195-3.978,8.426-4.412c9.268,9.522,20.386,13.27,21.885,13.27l48.153-0.268
                  c4.119-0.023,7.448-3.37,7.448-7.489c0-4.137-3.353-7.489-7.489-7.489H80.8c0,0,10.118-8.6,14.841-13.47
                  c0.055-0.057,0.096-0.112,0.146-0.168c3.235-3.18,5.61-7.231,6.715-11.786c1.068-4.952,0.773-10.779-1.924-16.938
                  c-3.126-6.22-8.417-11.255-15.646-12.788c-0.938-0.199-3.927-0.372-6.817-0.353c-0.064,0-11.864-0.019-11.864-0.019
                  c-2.062,0-3.934-1.873-3.934-3.934s1.873-3.934,3.934-3.934c0,0,11.647,0,11.803,0c19.426,0,28.362,10.577,32.13,24.18
                  c1.102,3.987,13.309,50.036,13.309,50.036c0.671,2.428,2.88,4.111,5.4,4.111h15.386c4.124,0,7.468-3.344,7.468-7.468
                  c0-4.124-3.344-7.468-7.468-7.468h-7.468l-0.01-44.743c18.876-9.428,29.882-24.038,29.882-52.341c0-4.032,0-7.982,0-11.417
                  C148.417,83.499,132.059,74.133,120.833,60.277z M166.682,80.791c0-3.682,0-6.04,0-6.04h23.337c3.435,0,7.207-2.232,8.075-5.564
                  l1.241-5.965c0.709-2.726-0.141-5.62-2.231-7.524l-19.333-17.373c-3.435-3.109-7.87-4.658-12.49-4.658h-1.717
                  c-0.092,0-11.819-10.304-20.252-17.67c-2.538-2.217-6.502-0.412-6.502,2.958v19.829c0,0.014-8.453,11.909-12.64,17.801
                  C134.495,69.645,149.677,78.546,166.682,80.791z"/>
              </svg>
              <p className='pl-5'>Style</p>
            </div>
          </div>

          <button 
            className='rounded-lg px-28 py-6 bg-black text-slate-50 text-2xl font-semibold hover:bg-white hover:text-slate-900 ease-out duration-300'
          >
            Shop Now
          </button>

        </div>
        <div className='hidden md:block py-32 lg:mr-28 xl:mr-48 2xl:mr-64  bg-slate-200 basis-2/5'>
          <Image className='object-contain mx-auto' src={dog_img} alt={"dog with harness"}></Image>
        </div>
      </div>

      <Footer/>
    </main>
  )
}