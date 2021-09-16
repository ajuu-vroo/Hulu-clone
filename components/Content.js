import MoviePoster from "./MoviePoster"

function Content({result}) {
    return (
        <div className='sm:flex sm:flex-wrap sm:mt-5'>
            {result.map((item,index)=>{
                return <MoviePoster item={item} key={index} />
            })}
        </div>
    )
}

export default Content
