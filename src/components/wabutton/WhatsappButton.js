import Image from 'next/image'
import React from 'react'

// logo whatsapp
import LogoWa from '../../assets/icon/whatsapp.png'

const WhatsappButton = () => {
  return (
    <a 
      href='https://wa.me/6281932622630?text=Hi admin saya ingin bertanya'
      target='_blank'
      className='fixed bottom-10 right-2 max-w-[50px]'
    >
      <Image className='drop-shadow-2xl' src={LogoWa} alt='Logo'/>
      <div className='absolute top-0 right-0 bg-red-600 text-white rounded-full px-1 text-xs drop-shadow-xl'>1</div>
    </a>
  )
}

export default WhatsappButton