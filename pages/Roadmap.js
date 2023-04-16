import Head from "next/head";


function Roadmap() {
    return (
        <main
        className={`flex flex-col min-h-screen justify-center items-center bg-[url("/assets/bg/roadmap.gif")] bg-top bg-cover px-5 pt-10`}
      >
        <Head>
          <title>Seal Squad - Roadmap</title>
          <meta name="description" content="Seal Squad" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

      </main>
    );
}

export default Roadmap;