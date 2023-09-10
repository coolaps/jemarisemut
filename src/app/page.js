import Navbar from "@/components/navbar/navbar";

// css
import './style.css'
import ParticlesComponent from "@/components/particles/particles";

// icon
import { HandClick, Tool, DeviceMobileMessage, Hearts } from 'tabler-icons-react';
import Footer from "@/components/footer/footer";
import Image from "next/image";
import numberSeparator from "@/utils/numberSeparator";
import WhatsappButton from "@/components/wabutton/WhatsappButton";

// gambar scrapeframe
import scarepeFrame1 from '../assets/image/scrapeframe/s_1.jpg'
import scarepeFrame2 from '../assets/image/scrapeframe/s_2.jpg'
import scarepeFrame3 from '../assets/image/scrapeframe/s_3.jpg'
import scarepeFrame4 from '../assets/image/scrapeframe/s_4.jpg'
import scarepeFrame5 from '../assets/image/scrapeframe/s_5.jpg'
import scarepeFrameTemplate from '../assets/image/scrapeframe/template.jpg'

// gambar simple art
import simpleArt1 from '../assets/image/simple_art/s_1.jpg'
import simpleArt2 from '../assets/image/simple_art/s_2.jpg'
import simpleArt3 from '../assets/image/simple_art/s_3.jpg'
import simpleArt4 from '../assets/image/simple_art/s_4.jpg'
import simpleArt5 from '../assets/image/simple_art/s_5.jpg'
import closeUp from '../assets/image/simple_art/close_up.jpg'
import couple from '../assets/image/simple_art/couple.jpg'
import full_body from '../assets/image/simple_art/full_body.jpg'
import half_body from '../assets/image/simple_art/half_body.jpg'

// item scrapeframe
const itemsScrapeFrame = [
  {
    name: 'Desain By Template',
    image: scarepeFrameTemplate,
    price: 85000,
    text: 'Pesan Scrapeframe dengan template yang sudah kami sediakan',
    message: 'Hy Admin saya mau pesan scrapeframe dengan Desain Template'
  },
  {
    name: 'Desain By Request',
    image: scarepeFrame1,
    price: 100000,
    text: 'Pesan Scrapeframe dengan desain custom',
    message: 'Hy Admin saya mau pesan scrapeframe dengan Desain Request'
  },
]

// item simple art
const itemsSimpleArt = [
  {
    name: 'Close Up',
    image: closeUp,
    price: [20000, 30000, 50000, 55000, 60000],
    list: ['File', 'Cetak', 'Cetak 6R + Pigora', 'Cetak 8R + Pigora', 'Cetak 10R + Pigora'],
    message: 'Hy Admin saya mau pesan Simple Art'
  },
  {
    name: 'Half Body',
    image: half_body,
    price: [25000, 35000, 55000, 60000, 65000],
    list: ['File', 'Cetak', 'Cetak 6R + Pigora', 'Cetak 8R + Pigora', 'Cetak 10R + Pigora'],
    message: 'Hy Admin saya mau pesan Simple Art'
  },
  {
    name: 'Full Body',
    image: full_body,
    price: [30000, 40000, 60000, 65000, 70000],
    list: ['File', 'Cetak', 'Cetak 6R + Pigora', 'Cetak 8R + Pigora', 'Cetak 10R + Pigora'],
    message: 'Hy Admin saya mau pesan Simple Art'
  },
  {
    name: 'Couple',
    image: couple,
    price: [40000, 50000, 70000, 75000, 80000],
    list: ['File', 'Cetak', 'Cetak 6R + Pigora', 'Cetak 8R + Pigora', 'Cetak 10R + Pigora'],
    message: 'Hy Admin saya mau pesan Simple Art'
  },
]

// item slider product
const dataTipe = [
  {
      name: '',
      link: scarepeFrame1
  },
  {
      name: '',
      link: scarepeFrame2
  },
  {
      name: '',
      link: scarepeFrame3
  },
  {
      name: '',
      link: simpleArt1
  },
  {
      name: '',
      link: simpleArt2
  },
  {
      name: '',
      link: simpleArt3
  },
]

export default function Home() {
  return (
    <>
      <Navbar/>

      {/* section home */}
      <div id="home" className="pt-[80px] pb-[80px] text-zinc-600">
        <div className="max-w-4xl flex justify-evenly items-center m-auto flex-wrap flex-col mt-[50px]">
          <div className="px-3 py-2 bg-hijau-100 text-zinc-800 font-semibold capitalize rounded-full">PARTNER TERPERCAYA</div>

          <div className="mt-10 font-bold text-5xl md:text-6xl text-center max-w-[700px]">Buat Orang Terdekat Kamu Terkesan Dengan Kado Spesial</div>

          <div className="mt-8 text-center text-xl"><span className="font-semibold">Jemari Semut</span> Penyedia jasa pembuatan Scrapeframe dan Simple Art Terpercaya</div>

          <a 
            href={`https://wa.me/6281932622630?text=Hi Admin saya mau bertanya`}
            target='_blank'
            className="mt-8 transition duration-300 ease-in-out bg-hijau-200 hover:bg-zinc-500 hover:text-white font-semibold px-3 py-2 rounded-full border-2 border-zinc-900 hover:border-zinc-200 cursor-pointer"
          >
            Pesan Sekarang
          </a>
        </div>
      </div>

      {/* section about */}
      <div id="about" className="pt-[80px] pb-[80px] text-zinc-600 bg-biru-100">
        <div className="max-w-4xl flex justify-center md:justify-between items-center md:items-start m-auto flex-wrap mt-[50px]">
          <div className="w-[90%] md:w-[30%] flex justify-center flex-col items-center md:items-start mb-4 text-center md:text-left">
            <div className="px-3 py-2 bg-hijau-100 text-zinc-800 font-semibold capitalize rounded-full w-fit">ABOUT</div>
            <div className="mt-2 text-zinc-600 text-3xl font-semibold">Kenapa Memilih Jemari <span className="text-orange-300">Semut</span> ?</div>
          </div>
          <div className="w-[90%] md:w-[70%] bg-white p-3 rounded-lg">
            <div className="flex justify-between items-center flex-wrap p-2">
              <div className="w-[100%] md:w-[50%] p-5 border-b-2 md:border-b-0 md:border-r-2 border-dashed">
                <div className="flex justify-start items-center">
                  {/* icon */}
                  <div className="text-merah-200 bg-merah-100 rounded-lg w-fit p-2 border-2 border-merah-200">
                    <HandClick/>
                  </div>
                  <div className="ml-4 text-xl font-semibold">Kreative</div>
                </div>

                {/* text */}
                <div className="mt-3 text-justify">
                  Dengan desain yang kreative tentunya akan membuat kado atau buah tangan anda semakin spesial 
                </div>
              </div>
              <div className="w-[100%] md:w-[50%] p-5">
                <div className="flex justify-start items-center">
                  {/* icon */}
                  <div className="text-hijau-200 bg-hijau-100 rounded-lg w-fit p-2 border-2 border-hijau-200">
                    <Tool/>
                  </div>
                  <div className="ml-4 text-xl font-semibold">Berpengalaman</div>
                </div>

                {/* text */}
                <div className="mt-3 text-justify">
                  Jemari Semut telah berpengalaman lebih tentang pembuatan Scrapeframe dan Simple Art 
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center border-t-2 border-dashed flex-wrap p-2">
              <div className="w-[100%] md:w-[50%] p-5 border-b-2 md:border-b-0 md:border-r-2 border-dashed">
                <div className="flex justify-start items-center">
                  {/* icon */}
                  <div className="text-biru-200 bg-biru-100 rounded-lg w-fit p-2 border-2 border-biru-200">
                    <DeviceMobileMessage/>
                  </div>
                  <div className="ml-4 text-xl font-semibold">Pemesanan Mudah</div>
                </div>

                {/* text */}
                <div className="mt-3 text-justify">
                  Anda tinggal pesan dan tunggu hasilnya, tidak perlu lagi membuat kado sendiri
                </div>
              </div>
              <div className="w-[100%] md:w-[50%] p-5">
                <div className="flex justify-start items-center">
                  {/* icon */}
                  <div className="text-ungu-200 bg-ungu-100 rounded-lg w-fit p-2 border-2 border-ungu-200">
                    <Hearts/>
                  </div>
                  <div className="ml-4 text-lg font-semibold">Buat Pasangan Terkesan</div>
                </div>

                {/* text */}
                <div className="mt-3 text-justify">
                  Buat Pasangan atau orang terdekat anda merasa spesial dengan kado yang spesial
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section product */} 
      <div id="product" className="pt-[80px] pb-[80px] text-zinc-600 overflow-hidden">
        <div className="flex flex-col w-full items-center max-w-5xl mx-auto lg:items-center lg:flex-row-reverse">
          <div className='w-[80%] sm:w-[60%] mb-[10px] mt-[20px] lg:w-[33.3%] lg:mt-[10rem] lg:mb-[20rem] lg:ml-[2rem]'>
            <div className="px-3 py-2 bg-hijau-100 text-zinc-800 font-semibold capitalize rounded-full w-fit">PRODUCT</div>
            <div className="mt-2 text-zinc-600 text-3xl font-semibold">Beberapa Product Jemari <span className="text-orange-300">Semut</span></div>
            <p className='text-justify mt-3 '>Berikut adalah sedikit contoh produk yang sudah kami buat dan memberikan feedback baik dari customer kami.</p>
          </div>

          {/* slider */}
          <div className='hidden w-[65.666667%] lg:block'>
            <div className='relative w-[100%] '>
              <div className='flex flex-wrap w-[700px] absolute justify-center sliderEffect top-[-320px]'>
                {
                  dataTipe.map((item, index) =>
                    <div key={index+item.name} className='flex bg-white shadow-sm shadow-black w-[305px] h-[305px] m-5 items-center justify-center flex-col rounded-[10px] exhibition' style={{margin: '0 10px 20px'}}>
                      <div className='flex flex-col items-center text-customColor-biruTua text-center'>
                        <Image className='w-[80%]' src={item.link} alt={item.name} />
                      </div>
                    </div>
                  )
                }
                {
                  dataTipe.map((item, index) =>
                    <div key={index+item.name} className='flex bg-white shadow-sm shadow-black w-[305px] h-[305px] m-5 items-center justify-center flex-col rounded-[10px] exhibition' style={{margin: '0 10px 20px'}}>
                      <div className='flex flex-col items-center text-customColor-biruTua text-center'>
                        <Image className='w-[80%]' src={item.link} alt={item.name} />
                      </div>
                    </div>
                  )
                }
              </div>
            </div>
          </div>

          {/* when less width */}
          <div className='lg:hidden sm:w-[80%] w-[100%] mb-[20px]'>
            <div className='w-[100%] min-h-[360px] relative'>
              <div className='flex flex-wrap md:justify-around sm:justify-center justify-center items-center'>
                {
                  dataTipe.map((item, index) =>
                    <div key={index+item.name} className='flex bg-white shadow-sm shadow-black m-3 p-3 items-center justify-center flex-col rounded-[10px] exhibition'>
                      <div className='flex flex-col items-center text-customColor-biruTua text-center'>
                        <Image className='w-[90%]' src={item.link} alt={item.name} />
                      </div>
                    </div>
                  )
                }
              </div>
            </div>
            </div>
        </div>
      </div>

      {/* section pricing */}
      <div id="pricing" className="pt-[80px] pb-[80px] text-zinc-600 bg-biru-100">
        <div className="max-w-4xl mt-[50px] m-auto">
          <div className="flex justify-center flex-col items-center">
            {/* title */}
            <div className="px-3 py-2 bg-hijau-100 text-zinc-800 font-semibold rounded-full w-fit">PRICING</div>
            <div className="mt-2 text-zinc-600 text-3xl font-semibold max-w-[600px] text-center">
              Produk Scrapeframe dan Simple Art Jemari <span className="text-orange-300">Semut</span>
            </div>
          </div>

          {/* scarepe frame */}
          <div className="mt-4">
            <div className="font-semibold text-lg ml-2">Scrapeframe :</div>

            {/* card */}
            <div className="flex justify-center md:justify-start items-center flex-wrap">
              {
                itemsScrapeFrame.map((res, index) => 
                  <div key={index + 'scrapeframe'} className="relative bg-white shadow-sm shadow-black p-2 m-2 rounded-lg w-[90%] md:w-[280px] min-h-[430px] flex justify-between flex-col">
                    <div>
                      <div className="flex justify-center">
                        <Image width={400} height={400} src={res.image} alt={res.name}/>
                      </div>

                      <div className="mt-1 font-semibold text-base">{res.name}</div>

                      <div className="text-justify font-light">{res.text}</div>
                    </div>

                    <div className="flex justify-end">
                      <a 
                        href={`https://wa.me/6281932622630?text=${res.message}`}
                        target='_blank' 
                        className="transition duration-300 ease-in-out bg-hijau-200 hover:bg-biru-100 text-zinc-800 cursor-pointer px-2 py-1 my-2 w-fit rounded-lg"
                      >
                        Pesan
                      </a>
                    </div>

                    {/* harga */}
                    <div className="absolute top-0 right-0 bg-red-700 px-1 rounded-tr-lg rounded-bl-lg text-white">Rp. {numberSeparator(res.price)}</div>
                  </div>
                )
              }
            </div>
          </div>

          <br/>

          {/* simple art */}
          <div className="mt-4">
            <div className="font-semibold text-lg ml-2">Simple Art :</div>

            {/* card */}
            <div className="flex justify-center md:justify-start items-center flex-wrap">
              {
                itemsSimpleArt.map((res, index) => 
                  <div key={index + 'scrapeframe'} className="relative bg-white shadow-sm shadow-black p-2 m-2 rounded-lg w-[90%] md:w-[280px] min-h-[390px] flex justify-between flex-col">
                    <div>
                      <div className="flex justify-center">
                        <Image width={400} height={400} src={res.image} alt={res.name}/>
                      </div>

                      <div className="mt-1 font-semibold text-lg">{res.name}</div>

                      {
                        res.list.map((resList, indexList) => 
                          <div key={indexList+resList} className="flex justify-between">
                            <div>{resList}</div>
                            <div className="font-semibold">Rp. {numberSeparator(res.price[indexList])}</div>
                          </div>
                        )
                      }
                    </div>

                    <div className="flex justify-end">
                      <a 
                        href={`https://wa.me/6281932622630?text=${res.message} ${res.name}`}
                        target='_blank' 
                        className="transition duration-300 ease-in-out bg-hijau-200 hover:bg-biru-100 text-zinc-800 cursor-pointer px-2 py-1 my-2 w-fit rounded-lg"
                      >
                        Pesan
                      </a>
                    </div>

                    {/* harga */}
                    <div className="absolute top-0 right-0 bg-red-700 px-1 rounded-tr-lg rounded-bl-lg text-white">Rp. {numberSeparator(res.price[0])} - {numberSeparator(res.price[res.price.length-1])}</div>
                  </div>
                )
              }
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <Footer/>

      {/* whatsapp button */}
      <WhatsappButton/>

      <ParticlesComponent/>
    </>
  )
}
