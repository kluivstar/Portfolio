import React from 'react'
import Link from "next/link";

const Header = () => {
  return (
    <main className='flex flex-row justify-between -mr-5 sm:-mr-0 px-8 py-5 sm:px-14 md:px-27 lg:px-27 xl:px-58'>
        {/* Image */}
        <div className='flex'>
            <Link href="/" className='text-[11px] font-bold  tracking-widest lg:text-[16px]'>KK</Link>
            <span className="inline-block w-15 h-0.5 mt-2.5 bg-gray-500 mx-2 lg:mt-3.5"></span>
        </div>
        
        {/* Links */}
        <div className="text-left">
            <ul className="px-2 text-[11px] font-bold space-x-3.5 tracking-widest md:mr-6 lg:text-[16px]">
                {[
                { label: "X.", url: "https://x.com/kluivstar" },
                { label: "LI.", url: "https://www.linkedin.com/in/kasimu-kluivert" },
                { label: "GH.", url: "https://github.com/kluivstar" },
                ].map(({ label, url }) => (
                <li
                    key={label}
                    className="relative inline-block cursor-pointer 
                            transition-transform duration-300 ease-out 
                            hover:-translate-y-1 group"
                >
                    <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative"
                    >
                    {label}
                    {/* underline effect */}
                    <span
                        className="absolute left-0 -bottom-1 h-[3px] bg-white w-0 
                                transition-all duration-300 ease-out 
                                group-hover:w-full"
                    />
                    </a>
                </li>
                ))}
            </ul>
        </div>
    </main>
  )
}

export default Header