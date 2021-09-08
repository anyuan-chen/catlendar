import React, { useState, useEffect } from "react";
import CalendarComponent from "../components/calendar/CalendarComponent";
import Navbar from "../components/Navbar";
export default function Calendar() {
  
  return (
    <div>
      <Navbar></Navbar>
      <CalendarComponent></CalendarComponent>
    </div>
  );
}
