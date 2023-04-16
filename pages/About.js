import Head from "next/head";

function About() {
  return (
    <main
      className={`flex flex-col min-h-screen justify-center items-center bg-[url("/assets/bg/about.gif")] bg-center bg-cover px-5 pt-10`}
    >
      <Head>
        <title>Seal Squad - About</title>
        <meta name="description" content="Seal Squad" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex w-full justify-start items-center py-14 lg:py-0 ">
        <p className="lg:w-[60%] w-full bg-[#F9FAFB]/10 lg:text-xl text-base text-black">
          Seal Squad is a unique collection of 3,333 seals that will take you on
          an exciting journey filled with adventures and rewards.
          Well aim to push the boundaries of Web3 while building a community of like-minded
          individuals who share a passion for the space.
          With over 75 traits, each seal in our collection is unique! Once you own a seal, you become
          a part of our community and gain access to exclusive benefits such
          networking, alpha and giveaways! Our seals arent just cute PFPs; they
          are essential in your ability to complete weekly missions! Use 1, or
          form a squad (3) to tackle the rarest of missions and give your squad
          a higher chance of success! Our weekly missions will test your skills
          and strategic thinking, and offer you a chance to win amazing prizes.
          Join us on this exciting journey and become a part of our growing
          community. Collect your favorite seals, form a squad, and get ready to
          test your skills!
        </p>
      </div>
    </main>
  );
}

export default About;
