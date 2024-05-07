import React from 'react'
import { Lilita_One } from 'next/font/google'
import Link from 'next/link'
import { BackArrowIcon } from './Icons'

const font = Lilita_One({weight: "400" , subsets: ["latin"]})


const CMSNavbar = () => {

  return (
 
<div className='flex justify-between items-center py-1 px-5'>
  
    <Link href="/">    <BackArrowIcon/>   </Link>
  
    <Link href="/">
            <div className={`${font.className} text-3xl dark:text-amber-50`}>
                        Özgür
                        <span className='text-purple-500'>Enes</span>
             </div>
    </Link>
</div>

  )
}

export default CMSNavbar