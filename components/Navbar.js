import React from "react";
import SunglassesHat from "./SunglassesCat";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="grid grid-cols-10 justify-center pt-5 px-5 bg-navbar">
      <SunglassesHat></SunglassesHat>
      <Link href="/">
        <a className="col-start-7 flex items-center justify-center text-2xl  font-bold font-display">
          Home
        </a>
      </Link>
      <Link href="/events">
        <a className="flex items-center justify-center text-2xl font-bold font-display">
          Events
        </a>
      </Link>
      <Link href="/habits">
        <a className="flex items-center justify-center text-2xl font-bold font-display">
          Habits
        </a>
      </Link>
      <Link href="/calendar">
        <a className="flex items-center justify-center text-2xl font-bold font-display">
          Calendar
        </a>
      </Link>
    </div>
  );
}
