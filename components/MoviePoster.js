
function MoviePoster({ item }) {


    return (
        <div className='text-gray-300 overflow-x-hidden p-7 cursor-pointer group sm:w-1/3 '>
            <img className='transition duration-200 transform group-hover:scale-105' src={`https://www.themoviedb.org/t/p/original/${item?.backdrop_path}`} alt={item?.title} />
            {item.title ?<p className='text-white text-2xl pt-3'>{item?.title}</p> : <p className='text-white text-2xl pt-3'>Hulu Movies</p>}
            <p className='pt-1 pb-2'>{item?.overview.substr(0, 45)},...</p>
            <p className='tracking-widest group-hover:text-white'>{item?.release_date} • <svg xmlns="http://www.w3.org/2000/svg" className='h-5 w-5 inline-block' fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
            </svg>{item?.vote_count}</p>

        </div>
    )
}

export default MoviePoster
