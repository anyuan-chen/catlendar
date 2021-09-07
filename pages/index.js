import Head from "next/head";
import { Fragment } from "react";
import CatHands from "../components/CatHands";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <Navbar></Navbar>
      <div className="grid grid-cols-12 grid-rows-6 flex-grow">
        <div className="bg-pinkLight mt-10 ml-16 row-start-1 row-span-4 col-start-1 col-span-4 z-10 rounded-full flex flex-col items-center">
          <h2 className="pt-12 font-primary">Intrdoucing your new</h2>
          <h2>Calendar Companion</h2>
          <h1>Cat Calendar</h1>
          <CatHands></CatHands>
        </div>
        <div className="bg-gray-50 col-start-2 row-start-2 rounded-3xl row-span-4 col-span-10 "></div>
      </div>
    </div>
  );
}
