import Head from 'next/head'
import Image from 'next/image'
import Mint from '../components/Mint';

export default function Home() {

  return (
    <main className={`flex flex-col min-h-screen justify-center items-center bg-[url("/assets/bg/home.gif")] bg-center bg-cover px-5 pt-10`}>
      <Head>
        <title>Seal Squad - Home</title>
        <meta name="description" content="Seal Squad" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='flex lg:w-[90%] w-full lg:justify-end justify-center items-center '>
      <p className='lg:w-[55%] w-full lg:text-3xl text-lg bg-[#F9FAFB]/10 p-3 lg:text-left text-center rounded-lg'>
      3,333 pixelated seals invading Web3.<br></br>
      Dont let their cuteness fool you.<br></br>
      Establish your squad to complete top secret missions for rewards
      </p>
      </div>


     



      
    </main>
  )
}
