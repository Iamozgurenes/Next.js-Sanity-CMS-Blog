"use client"

import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { MoonIcon, SunIcon } from './Icons'

const ThemeSwitch = () => {

    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if(!mounted) {
        return null;
    }

  return (
    <button className='
    border border-black rounded-2xl  border-t-0 border-b-0 hover:bg-black hover:bg-opacity-10  
    dark:border dark:border-purple-500 dark:rounded-2xl p-1  dark:hover:bg-purple-500  dark:hover:bg-opacity-10  ' 
    onClick={() => setTheme(theme === 'dark' ? 'light' : "dark")}>
        {theme === 'dark' ? <SunIcon/> : <MoonIcon/>}
    </button>
  )
}

export default ThemeSwitch