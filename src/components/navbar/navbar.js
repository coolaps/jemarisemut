'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react'
import { Menu2, X } from 'tabler-icons-react';

// image
import LogoJemariSemut from '../../assets/logo_jemarisemut.png'

// menu item
const menuItem = [
  {
    name: 'Home',
    link: '/#home',
    status: 'link'
  },
  {
    name: 'About',
    link: '/#about',
    status: 'link'
  },
  {
    name: 'Product',
    link: '/#product',
    status: 'link'
  },
  {
    name: 'Pricing',
    link: '/#pricing',
    status: 'link'
  }
]

const Navbar = ({ isTransparentWhenTop = true }) => {
  const [isOpenHiddenMenu, setisOpenHiddenMenu] = useState(false)
  const [isScreenOnBottom, setisScreenOnBottom] = useState(false)
  const navbar = useRef(null)

  useEffect(() => {
    const whenWithoutTransparent = () => {
      if (isTransparentWhenTop === false) {
        if (navbar.current !== null) {
          navbar.current.style.backgroundColor = "#808a89";
          navbar.current.style.color = "#eae4db";
          setisScreenOnBottom(true);
        }
      }
    }

    whenWithoutTransparent()
  }, [])
  

  useEffect(() => {
    const screenWhenScroll = () => {
      if (isTransparentWhenTop) {
        if (navbar.current !== null) {
          if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            // when on bottom
            navbar.current.style.backgroundColor = "white";
            setisScreenOnBottom(true);
          } else {
            // when on top
            navbar.current.style.backgroundColor = "";
            setisScreenOnBottom(false);
          }
        }
      }
    }

    window.onscroll = function () {
      screenWhenScroll();
    };
  }, [setisScreenOnBottom])
  
  return (
    <div className={`poppins text-zinc-600 z-50 transition duration-300 ease-in-out px-7 py-3 fixed top-0 left-0 right-0 ${isScreenOnBottom && 'shadow-xl'}`} ref={navbar}>
      <div className='max-w-5xl m-auto'>
        <div className='flex md:flex-wrap items-center justify-between'>
          {/* logo */}
          <a
            href={'/#home'}
          >
            <div className='transition duration-300 ease-in-out flex justify-start items-center'>
              <Image src={LogoJemariSemut} className='transition duration-300 ease-in-out drop-shadow-lg w-[50px] md:w-[60px]' alt='Logo Jemari Semut'/>
              <div className='transition duration-300 ease-in-out font-bold ml-1 text-2xl md:text-3xl'>Jemari <span className='text-[#FECC52]'>Semut</span></div>
            </div>
          </a>

          {/* menu */}
          <div className='hidden md:flex flex-wrap justify-between w-[500px]'>
            {
              menuItem.map((res, index) => {
                return (
                  res.status === 'link' &&
                    <a href={res.link} key={res.name+index+'linkwhenup'} className={`pb-1 transition duration-300 ease-in-out text-base hover:cursor-pointer hover:text-blue-950 border-y-2 border-b-transparent border-t-transparent hover:border-b-blue-950`}>{res.name}</a>
                )
              })
            }
          </div>

          {/* hamburger menu */}
          <div 
            className={`block md:hidden transition duration-300 ease-in-out hover:cursor-pointer text-white bg-zinc-600 hover:bg-zinc-400 p-2 rounded-full`}
            onClick={() => setisOpenHiddenMenu(true)}
          >
            <Menu2 />
          </div>

          {/* hidden menu */}
          <div className={`transition duration-300 ease-in-out ${isOpenHiddenMenu ? 'fixed bg-[rgba(0,0,0,.4)]' : 'hidden bg-black'} md:hidden top-0 left-0 w-[100%] h-[100%]`}>
            <div className='flex justify-center h-[100%] items-center'>
              <div className='bg-white text-black p-2 m-2 w-[90%] xs:w-[80%] sm:w-[60%] h-[60%] rounded-xl border-4 border-def-500'>
                <div className='flex flex-col justify-evenly items-center h-[100%]'>
                  {/* menu link */}
                  {
                    menuItem.map((res, index) => 
                      res.status === 'link' &&
                        <a
                          href={res.link} 
                          key={res.name+'linkwhenbottom'} 
                          className='transition duration-300 ease-in-out hover:cursor-pointer text-zinc-600 hover:text-zinc-300'
                          onClick={() => setisOpenHiddenMenu(false)}
                        >
                          {res.name}
                        </a>
                    )
                  }
                  <div 
                    className='transition hover:cursor-pointer text-red-400 hover:text-red-200'
                    onClick={() => setisOpenHiddenMenu(false)}
                  >
                    <X />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar