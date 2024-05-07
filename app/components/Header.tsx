import React from 'react';


interface Props {
    title: string;
}

const Header = ({title = ""}: Props) => {
    return (
        <header className='py-5 px-4 text-center border-b dark:border-purple-900'>
            <h1 className='uppercase text-2xl mx-auto max-w-2xl font-bold'>  {title}  </h1>
        </header>
    )
}

export default Header;