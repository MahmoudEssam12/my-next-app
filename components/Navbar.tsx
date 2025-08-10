import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div>
        <ul className='flex items-center gap-2 ps-8 mb-8'>
            <li className='p-2 text-white capitalize'>
                <Link href={"/about"}>about</Link>
                </li>
            <li className='p-2 text-white capitalize'>
                <Link href={"/more"}>more</Link>
            </li>
            <li className='p-2 text-white capitalize'>
                <Link href={"/"}>home</Link>
            </li>
        </ul>
    </div>
  )
}
