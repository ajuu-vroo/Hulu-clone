import { useState, useEffect } from "react"

function MoviePoster({ item }) {

    const [showModal, setShowModal] = useState(false);
    const [videoID, setVideoID] = useState('');
    useEffect(()=> {
        const fetchApi = async() =>{
            if(item.media_type === 'tv'){
            const url = "https://api.themoviedb.org/3/tv/" + item.id + "/videos?api_key=50b08e08fe26c61541bf43d02781dee8&language=en-US";
            const rawResponse = await fetch(url);
            const response = await rawResponse.json();
            setVideoID(response?.results[0]?.key || 'M9hMoHHbsT0');
           }else{
            const url = "https://api.themoviedb.org/3/movie/" + item.id + "/videos?api_key=50b08e08fe26c61541bf43d02781dee8&language=en-US";
            const rawResponse = await fetch(url);
            const response = await rawResponse.json();
            setVideoID(response?.results[0]?.key || 'M9hMoHHbsT0');
           }
           console.log({data:videoID, nameID:item.id})
        }

        fetchApi();
    }
    ,[showModal]);

    return (
        <div className='text-gray-300 overflow-x-hidden p-7 cursor-pointer group sm:w-1/3 relative overflow-visible' >
            <div onClick={() => setShowModal(true)}>
                <img className='transition duration-200 transform group-hover:scale-[1.02]' src={`https://www.themoviedb.org/t/p/original/${item?.backdrop_path}`} alt={item?.title} />
                {item.title ? <p className='text-white text-2xl pt-3'>{item?.title}</p> : <p className='text-white text-2xl pt-3'>{item?.name}</p>}
                <p className='pt-1 pb-2'>{item?.overview.substr(0, 45)},...</p>
                <p className='tracking-widest group-hover:text-white'>{item?.release_date || item?.first_air_date} • <svg xmlns="http://www.w3.org/2000/svg" className='h-5 w-5 inline-block' fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>{item?.vote_count}</p>
            </div>
            {
                showModal
                &&
                (<div className='h-auto z-50 w-11/12 bg-[#0a0a0af3] absolute top-0 left-4 shadow-2xl' >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 absolute right-0 shadow-2xl text-[#a90a0a] z-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={() => setShowModal(false)}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <iframe src={`https://www.youtube.com/embed/${videoID}`}  className='lg:h-[230px] w-full' />
                    {item.title ? <p className='text-white pt-8 pl-4 text-3xl '>{item?.title}</p> : <p className='text-white text-3xl pt-8 pl-4 '>{item?.name}</p>}
                    <p className='pt-1 pb-2 pl-4 text-[12px] 
                    text-gray-300 opacity-80 h-auto'>{item?.overview.substr(0,298)}</p>
                    <p className='pt-6 pb-2 pl-4 text-base 
                    text-gray-300'>{'First time aired: ' + (item?.release_date || item?.first_air_date)}</p>
                    <p className='pt-1 pb-2 pl-4 text-base 
                    text-gray-300'>{'Original Language: ' + (item?.original_language)}</p>
                    <p className='pt-1 pb-4 pl-4 text-base 
                    text-gray-300'>{'Popularity: ' + (item?.popularity)}</p>

                </div>)
            }

        </div>
    )
}

export default MoviePoster
