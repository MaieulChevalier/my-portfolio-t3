import { type NextPage } from "next";
import * as React from "react";

import BackgroundParticles from "@/components/BackgroundParticles";
import Head from "next/head";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { InformationCircleIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";
import { Transition } from "@headlessui/react";

const Home: NextPage = () => {
  const [windowHeight, setWindowHeight] = useState(0);
  const [show, setShow] = useState(false);

  const router = useRouter();

  useEffect(() => {
    setWindowHeight(window.innerHeight);
    setShow(true);
  }, []);
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <BackgroundParticles />
        <Transition
          show={show}
          enter="transition-opacity duration-1000"
          enterFrom="opacity-0"
          enterTo="opacity-100"
        >
          <div className="flex min-h-screen w-full flex-col items-center justify-center p-4 text-center">
            <h1
              className={clsx(
                windowHeight < 540 ? "mt-12" : "",
                "max-w-2xl text-4xl font-bold text-gray-800 sm:text-5xl md:text-6xl"
              )}
            >
              Working on the future of the web
            </h1>
            <br />

            <h2 className="max-w-5xl text-lg text-gray-800 sm:text-xl md:text-2xl">
              {/* Avec mon profil international et mon expérience entrepreneuriale
              en tant que développeur web, je peux vous aider à voir
              l&apos;ensemble du tableau dans les détails et ainsi minimiser les
              risques d&apos;échecs à toute étape de votre projet. */}
              With my international profile and my entrepreneurial experience as
              a web developer, I can help you see the whole picture in detail
              and thus significantly reduce the risks of failure at any stage of
              your project.
            </h2>
            <br />
            <button
              onClick={() => router.push("/about-me")}
              className="inline-flex items-center rounded-full bg-gray-800 px-5 py-3 font-bold text-white transition delay-75 ease-in-out hover:translate-y-1 hover:scale-110 hover:bg-gray-700 active:scale-95"
            >
              <InformationCircleIcon className="mr-2 h-5 w-5" />
              <span>Learn more</span>
            </button>
          </div>
        </Transition>
      </main>
    </>
  );
};

export default Home;
