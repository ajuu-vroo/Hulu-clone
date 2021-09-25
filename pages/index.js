import Head from 'next/head'
import Content from '../components/Content'

export default function Home({results}) {
  return (
    <div style={{backgroundColor: '#06202A'}}>
      <Head>
        <title>HuluLite - Stream your favourite shows.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Content result={results}/>
    </div>
  )
}

export async function getStaticProps(){
  const rawData = await fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.API_KEY}&language-en-US`)
  const data = await rawData.json()
  const{results} = data;

  return{
      props:{
          results,
      }
  }
}
