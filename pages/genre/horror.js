import Content from "../../components/Content";

function Horror({results}) {
    return (
        <div>
            <Content result={results}/>
        </div>
    )
}
export async function getStaticProps(){
    const rawData = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&language=en-US&page=1&with_genres=27`)
    const data = await rawData.json();
    const{results} = data

    return{
        props:{
            results,
        }
    }
}

export default Horror;