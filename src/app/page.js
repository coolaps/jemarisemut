import Navbar from "@/components/navbar/navbar";

// css
import './style.css'
import ParticlesComponent from "@/components/particles/particles";

export default function Home() {
  return (
    <>
      <Navbar/>

      {/* section home */}
      <div id="home" className="pt-[80px] pb-[80px] text-zinc-600">
        <div className="max-w-4xl flex justify-evenly items-center m-auto flex-wrap flex-col mt-[50px]">
          <div className="px-3 py-2 bg-biru-100 font-semibold capitalize rounded-full">PARTNER TERPERCAYA</div>

          <div className="mt-10 font-bold text-5xl md:text-6xl text-center max-w-[700px]">Buat Orang Terdekat Kamu Terkesan Dengan Kado Spesial</div>

          <div className="mt-8 text-center text-xl"><span className="font-semibold">Jemari Semut</span> Penyedia jasa pembuatan Scrapeframe dan Simple Art Terpercaya</div>

          <div className="mt-8 transition duration-300 ease-in-out bg-hijau-200 hover:bg-zinc-500 hover:text-white font-semibold px-3 py-2 rounded-full border-2 border-zinc-900 hover:border-zinc-200 cursor-pointer">Pesan Sekarang</div>
        </div>
      </div>

      {/* section about */}
      <div id="about" className="pt-[80px] pb-[80px] text-zinc-600 bg-biru-100">
        <div className="max-w-4xl flex justify-evenly items-center m-auto flex-wrap flex-col mt-[50px]">
          about
        </div>
      </div>

      <div className="h-[1000px]"></div>

      <ParticlesComponent/>
    </>
  )
}
