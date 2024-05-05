import React from 'react'
import  Link  from "next/link"
import Image from 'next/image'


const Footer = () => {
  return (
    <footer className="text-white-100 sticky top-0 bg-gradient-to-r from-indigo-700 via-violet-700 to-orange-700 body-font ">
      <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
        {/* footer */}
      <Link
          href={"/"}
          className="flex title-font font-extrabold items-center uppercase text-gray-100"
      >
          <Image src={"/pizza.svg"} alt="Navbar logo" width={50} height={50} />
          <p className='leading-5 text-xl mx-2'>Pizza Hut</p>
        </Link>

        {/* copyright */}

        <p className='text-sm text-gray-100 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4'>
          Copyright &copy; 2024 Pizza Hut
        </p>

      </div>

    </footer>

  )
}

export default Footer
