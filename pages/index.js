import Head from "next/head";
import { Fragment } from "react";
import AngleArrow from "../components/AngleArrow";
import CatHands from "../components/CatHands";
import Navbar from "../components/Navbar";
import PolarPaw from "../components/PolarPaw";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <Navbar></Navbar>
      <div className="grid grid-cols-12 grid-rows-6 flex-grow">
        {/* pink circle */}
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
        {/* polar bear paw */}
        <div className="row-start-1 row-span-2 col-start-10 col-span-1 z-10">
          <PolarPaw></PolarPaw>
        </div>
        {/* gray box */}
        <div className="flex items-center space-x-10 bg-navbar row-span-1 my-6 col-span-4 justify-center col-start-5 row-start-2 z-20 rounded-full">
          <h2 className="font-display font-extrabold text-2xl">Events</h2>
          <AngleArrow></AngleArrow>
          <h2 className="font-display font-extrabold text-2xl ">Habits</h2>
          <AngleArrow></AngleArrow>
          <h2 className="font-display font-extrabold text-2xl ">Schedule</h2>
        </div>
        <div
          className="bg-gray-50 col-start-2 row-start-2 rounded-3xl row-span-4 col-span-10 "
          id="greyBox"
        ></div>
        <div className="row-end-7 col-start-6 row-span-4 z-10">
          <svg
            width="783"
            height="524"
            viewBox="0 0 783 524"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              cx="391.5"
              cy="390.038"
              rx="391.5"
              ry="389.038"
              transform="rotate(7.96623 391.5 390.038)"
              fill="#FFCACA"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
