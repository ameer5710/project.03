import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Nav = () => {
  return (
    <div className='flex gap-5 bg-black text-white text-2xl'>
        <header className=" flex py-1 px-1 text-2xl  bg-blue-800  ">
    <Image className="w-23 h-25 md:w-15 ml-95  " src="/soomro.jpg" alt="" width="60" height="120"/>
    </header>
        <Link href="\">Home</Link>
        <Link href="\name">Name</Link>
        <Link href="\name\adres">Adress</Link>
    </div>
  )
}

export default Nav