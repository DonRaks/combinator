import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { auth,signIn,signOut,handlers } from '@/auth'


const Navbar = async () => {

  const session=await auth()
  return (
    <div>
        <header className="text-2xl font-bold px-1 py-1  bg-black " >
          <nav className="flex justify-between items-center">
            <Link href="/">
              <Image
                  src="/logo.png"
                  alt="Logo"
                  width={100}
                  height={100} 
                  className="h-10 w-13"
              />
            </Link>

            <div className="flex space-x-4">
              {session && session.user  ? (
                <>
                  
                  <Link href="/create" className="text-gray-600 hover:text-gray-800">
                    CREATE
                  </Link>

                  <Link href="/">rukevwe</Link>

                  <Link href="/api/auth/signout" className="text-gray-600 hover:text-gray-800">
       
                    Logout
                  </Link>
                </>
              ) : (
                <Link href="/api/auth/signin" className="text-gray-600 hover:text-gray-800">
                  Login
                </Link>
              )}   
            </div>
          </nav>
        </header>
    </div>
  )
}

export default Navbar