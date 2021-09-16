import {useRouter} from 'next/router'

function Navbar() {
    const router = useRouter();
    return (
        <nav className='text-gray-300 px-6 py-3 flex overflow-x-scroll md:pt-8 scrollbar-hide relative'>
            <p className='px-2 text-2xl tracking-wide  transform hover:scale-125 hover:text-white active:text-red-500 md:pl-20 transition duration-150 md:px-10  cursor-pointer' onClick={()=> router.push('/')}>Trending</p>
            <p className='px-5 transition duration-200 whitespace-nowrap text-2xl tracking-wide transform hover:scale-125 hover:text-white active:text-red-500 md:px-10 cursor-pointer'onClick={()=> router.push('/genre/top-rated')}>Top Rated</p>
            <p className='px-5 transition duration-200 whitespace-nowrap text-2xl tracking-wide transform hover:scale-125 hover:text-white active:text-red-500 md:px-10 cursor-pointer ' onClick={()=> router.push('/genre/action')}>Action</p>
            <p className='px-5 transition duration-200 whitespace-nowrap text-2xl tracking-wide transform hover:scale-125 hover:text-white active:text-red-500 md:px-10 cursor-pointer' onClick={()=> router.push('/genre/comedy')}>Comedy</p>
            <p className='px-5 transition duration-200 whitespace-nowrap text-2xl tracking-wide transform hover:scale-125 hover:text-white active:text-red-500 md:px-10 cursor-pointer'onClick={()=> router.push('/genre/horror')}>Horror</p>
            <p className='px-5 transition duration-200 whitespace-nowrap text-2xl tracking-wide transform hover:scale-125 hover:text-white active:text-red-500 md:px-10 cursor-pointer' onClick={()=> router.push('/genre/romance')}>Romance</p>
            <p className='px-5 transition duration-200 whitespace-nowrap text-2xl tracking-wide transform hover:scale-125  hover:text-white active:text-red-500 md:px-10 cursor-pointer' onClick={()=> router.push('/genre/mystery')}>Mystery</p>
            <p className='px-5 transition duration-200 whitespace-nowrap text-2xl tracking-wide transform hover:scale-125 hover:text-white active:text-red-500 md:px-10 cursor-pointer' onClick={()=> router.push('/genre/sci-fi')}>Sci-Fi</p>
            <p className='px-5 transition duration-200 whitespace-nowrap text-2xl tracking-wide transform hover:scale-125 hover:text-white active:text-red-500 md:px-10 cursor-pointer'onClick={()=> router.push('/genre/western')}>Western</p>
            <p className='px-5 transition duration-200 whitespace-nowrap text-2xl tracking-wide transform hover:scale-125 hover:text-white active:text-red-500 md:px-10 cursor-pointer'onClick={()=> router.push('/genre/animation')}>Animation</p>
            <p className='px-5 transition duration-200 whitespace-nowrap text-2xl tracking-wide transform hover:scale-125 hover:text-white active:text-red-500 md:px-10 cursor-pointer'onClick={()=> router.push('/genre/tv-movie')}>TV Movie</p>
            <div className=' fixed top-30 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12' />
        </nav>
    )
}

export default Navbar
