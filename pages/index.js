import Head from "next/head";
import { Fragment } from "react";
import CatHands from "../components/CatHands";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <Navbar></Navbar>
      <div className="grid grid-cols-12 grid-rows-6 flex-grow">
        <div className="bg-pinkLight mt-10 ml-16 row-start-1 row-span-4 col-start-1 col-span-4 z-10 rounded-full flex justify-between flex-col">
          <div className="flex flex-col items-center">
            <h2 className="pt-16 font-primary text-xl">Intrdoucing your new</h2>
            <h2 className="pt-2 font-primary text-2xl font-extrabold">
              Calendar Companion
            </h2>
            <h1 className="pt-8 font-display text-7xl font-extrabold">
              Cat Calendar
            </h1>
          </div>
          <div
            className="justify-self-end flex flex-col items-center z-0"
            id="catPaws"
          >
            <CatHands></CatHands>
          </div>
        </div>
        <div
          className="bg-gray-50 col-start-2 row-start-2 rounded-3xl row-span-4 col-span-10 "
          id="greyBox"
        ></div>
      </div>
    </div>
  );
}
