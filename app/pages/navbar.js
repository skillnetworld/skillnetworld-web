'use client'
import { useState } from 'react'
import Notice from './Notice'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const router = useRouter();

  return (
    <>
      <Notice />

      <nav className="bg-gray-600 flex justify-between px-4 py-3 mt-8 md:mt-9 shadow-md rounded-b-lg">
        <img className='w-16 max-h-14 rounded-lg items-center content-center ml-16' src='https://media.canva.com/v2/image-resize/format:JPG/height:578/quality:92/uri:ifs%3A%2F%2FM%2F26fe7663-af8f-4b9d-87f3-178250fc3cdb/watermark:F/width:800?csig=AAAAAAAAAAAAAAAAAAAAAFkf-pBTg81M88DA7thkUA6BOl2ginU4NLDciIcEEBre&exp=1769011414&osig=AAAAAAAAAAAAAAAAAAAAAKTvQc3TZv3V_WJjKGvswAAnL2pIH69oCqayBNblxqvF&signer=media-rpc&x-canva-quality=screen' alt='Logo' ></img>

        <div className="flex items-center justify-between mr-11 md:justify-center">


          <div className="text-white font-bold text-lg md:hidden">
            MENU
          </div>


          <button
            className="md:hidden text-white text-2xl"
            aria-label="Toggle Menu"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>

          <ul className="hidden md:flex space-x-11 font-bold text-black">
            <Link href={{ pathname: '/' }}>Home</Link>

            <Link href={{ pathname: '/pages/navpages/about' }}>About</Link>
            <Link href={{ pathname: '/pages/navpages/blogs' }}>blogs</Link>
            <Link href={{ pathname: 'pages/navpages/contact' }}>Contact</Link>




          </ul>
        </div>


        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${open ? 'max-h-96 mt-4' : 'max-h-0'
            }`}
        >
          <div className="bg-gray-300 rounded-lg p-4 space-y-3">
            <Mobile onClick={() => router.push('/')} title="Home" />
            <Mobile onClick={() => router.push('/pages/navpages/about')} title="About" />
            <Mobile onClick={() => router.push('/pages/navpages/blogs')} title="Blogs" />
            <Mobile onClick={() => router.push('/pages/navpages/contact')} title="Contact" />
          </div>
        </div>
      </nav>
    </>
  )
}




/* Mobile Menu Item */
function Mobile({ title, onClick }) {
  return (
    <div onClick={onClick} className="bg-white text-blue-900 font-bold p-3 rounded-md text-center active:scale-95 transition">
      {title}
    </div>
  )
}
