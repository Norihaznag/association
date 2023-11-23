import Nav from '@/components/Navbar'
import Link from 'next/link'
import React from 'react'
import css from 'styled-jsx/css'
const Index = () => {
  return (
    <div className={`w-100 bg-slate-700`}>
  <nav className={`w-1 h-1 justify-center`}>
  <ul className={`text-blue-600`}>
      <li><Link className={`text-red-700`} href={`/Index`}>Index</Link></li>
      <li><Link href={`/Donate`}>About</Link></li>
      <li><Link href={`/Contact`}>Contact</Link> </li>
      <li><Link href={`/About`}>About</Link></li>
      <li><Link href={`/About`}>Other</Link></li>
     </ul>
  </nav>
    </div>
  )
}

export default Index