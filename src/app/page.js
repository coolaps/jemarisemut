import Navbar from "@/components/navbar/navbar";

// css
import './style.css'
import ParticlesComponent from "@/components/particles/particles";

// icon
import { HandClick, Tool, DeviceMobileMessage, Hearts } from 'tabler-icons-react';

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

          <div className="mt-8 transition duration-300 ease-in-out bg-hijau-200 hover:bg-zinc-500 hover:text-white font-semibold px-3 py-2 rounded-full border-2 border-zinc-900 hover:border-zinc-200 cursor-pointer">Pesan Sekarang</div>
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

      <div className="h-[1000px]"></div>

      <ParticlesComponent/>
    </>
  )
}
