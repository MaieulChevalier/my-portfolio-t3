import { type NextPage } from "next";
import BackgroundParticles from "@/components/BackgroundParticles";
import Head from "next/head";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
const Home: NextPage = () => {
  const [windowHeight, setWindowHeight] = useState(0);
  console.log("windowHeight", windowHeight);

  useEffect(() => {
    setWindowHeight(window.innerHeight);
  }, []);
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <main className="">
        <div className="flex min-h-screen w-full flex-col items-center p-4 pt-20 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">Data to enrich your</span>
            <span className="block text-indigo-600 xl:inline">
              online business
            </span>
          </h1>
          <p className="mx-auto mt-3 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
          <div className="mx-auto mt-5 max-w-md sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <a
                href="#"
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
              >
                Get started
              </a>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <a
                href="#"
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-indigo-600 hover:bg-gray-50 md:py-4 md:px-10 md:text-lg"
              >
                Live demo
              </a>
            </div>
          </div>
        </div>
      </main> */}
      <main>
        <div className="flex min-h-screen w-full flex-col items-center justify-center p-4 text-center">
          <BackgroundParticles />
          <h1
            className={clsx(
              windowHeight < 600 ? "mt-14" : "",

              "text-4xl font-bold text-gray-800 sm:text-5xl md:text-6xl"
            )}
          >
            Une vision à 360° pour faire décoller vos projets 🚀
          </h1>
          <br />
          <h2 className="max-w-5xl text-lg text-gray-800 sm:text-xl md:text-2xl">
            Avec mon profil international, mon expérience entrepreneuriale et
            mes compétences techniques dans le web, je peux vous aider à voir
            l&apos;ensemble du tableau et ainsi minimiser les risques
            d&apos;échecs à toute étape de votre projet.
          </h2>
          <br />
          <button className="inline-flex items-center rounded-full bg-gray-800 py-3 px-5 font-bold text-white hover:bg-gray-700 active:scale-95">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="mr-2 h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z"
                clipRule="evenodd"
              />
            </svg>
            <span>En savoir plus</span>
          </button>
          {/* <br />
          <div style={{ maxWidth: "652.38px" }} className="w-full">
            <HomeTypewriterMain />
          </div> */}
        </div>
      </main>
    </>
  );
};

export default Home;
