import Image from 'next/image'
import React from 'react'

// image
import Logo from '../../assets/logo_jemarisemut.png'
import { BrandInstagram, BrandWhatsapp } from 'tabler-icons-react'

const Footer = () => {
  return (
    <div className='bg-zinc-800'>
      <div className='max-w-4xl m-auto text-white pt-10 pb-10 flex justify-center items-center flex-col'>
        <Image width={80} src={Logo} alt='logo jemari semut'/>

        <div className='my-3 max-w-[300px] text-center'>Penyedia jasa pembuatan Scarepframe dan Simple Art</div>

        {/* logo */}
      <div className='flex justify-center items-center mb-4'>
        <a
          href='https://wa.me/6281932622630?text=Hi admin saya ingin bertanya'
          target='_blank'
          className='rounded-full border-2 border-zinc-600 p-1 m-2 cursor-pointer'
        >
          <BrandWhatsapp />
        </a>
        <a
          href='https://www.instagram.com/jemarisemut_'
          target='_blank'
          className='rounded-full border-2 border-zinc-600 p-1 m-2 cursor-pointer'
        >
          <BrandInstagram />
        </a>
      </div>

      <div className='text-zinc-500'>Jemari Semut © 2023</div>
      </div>
    </div>
  )
}

export default Footer