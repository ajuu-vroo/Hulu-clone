function TopNav() {
    return (
        
        <header  className=' flex flex-col items-center  md:flex-row md:justify-between overflow-x-hidden'>
            <div className='flex justify-center p-8 text-gray-300 tracking-widest md:mx-8 '>
                <div className='hover:text-white mx-3 h-8 w-8 group cursor-pointer md:mx-8'><a href="/">
                <svg xmlns="http://www.w3.org/2000/svg"    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span className='opacity-0 group-hover:opacity-100'>  HOME</span></a>
                </div>

                <div className='hover:text-white mx-3 h-8 w-8 group cursor-pointer md:mx-10'>
                <svg xmlns="http://www.w3.org/2000/svg"   fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className='opacity-0 group-hover:opacity-100'>TRENDING</span>
                </div>

                <div className='hover:text-white mx-3 h-8 w-8 group cursor-pointer md:mx-10'>
                <svg xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className='opacity-0 group-hover:opacity-100'>VERIFIED</span>
                </div>

                <div className='hover:text-white mx-3 h-8 w-8 group cursor-pointer md:mx-10'>
                <svg xmlns="http://www.w3.org/2000/svg"   fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                <span className='opacity-0 group-hover:opacity-100'>COLLECTIONS</span>
                </div>

                <div className='hover:text-white mx-3 h-8 w-8 group cursor-pointer md:mx-10'>
                <svg xmlns="http://www.w3.org/2000/svg"   fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className='opacity-0 group-hover:opacity-100'>SEARCH</span>
                </div>

                <div className='hover:text-white mx-3 h-8 w-8 group cursor-pointer md:mx-10 relative'>
                <svg xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg> 
                <span className='opacity-0 group-hover:opacity-100 absolute right-0 top-8'>ACCOUNT</span> 
                </div>
                </div>
                <div className='w-48'>
                    <img src="https://www.sonnysangha.com/_next/image?url=https%3A%2F%2Flinks.papareact.com%2Fua6&w=640&q=75" alt=""/>

                </div>
                {/* <div className='bg-green-900 h-20 w-7 md:hidden'></div> */}
        </header>
    )
}

export default TopNav
