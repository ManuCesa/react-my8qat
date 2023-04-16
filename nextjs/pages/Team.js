import Head from "next/head";
import Image from "next/image";
import Team1 from '/public/assets/team1.jpg'
import Team2 from '/public/assets/team2.jpg'
function Team() {
    return (
        <main
        className={`flex flex-col min-h-screen justify-center items-center bg-[url("/assets/bg/team.gif")] bg-center bg-cover px-5 pt-10`}
      >
        <Head>
          <title>Seal Squad - Team</title>
          <meta name="description" content="Seal Squad" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="flex flex-col gap-2 justify-center items-center lg:justify-start lg:items-start w-full py-14 lg:py-0">
        <div className="flex justify-center items-center gap-5">
        <div className="sm:w-[250px] w-[150px] bg-white/70 rounded-lg p-3">
            <Image src={Team1} alt="team1" />
        </div>
        <div className="sm:w-[250px] w-[150px]  bg-white/70 rounded-lg p-3">
            <Image src={Team2} alt="team2" />
        </div>
        </div>

        <div>
        <p className="lg:w-[40%] text-xl text-black text-center lg:text-left">
        The Seal Squad Dev team is determined to push the boundaries of utility and firmly believe NFTs can be fun.
        </p>
        </div>

        </div>

      </main>
    );
}

export default Team;