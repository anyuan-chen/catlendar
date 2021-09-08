import React, { useState, useEffect } from "react";
import TimeBlock from "./components/timeBlock";

export default function CalendarComponent() {
  const [schedule, setSchedule] = useState(["undefined"]);
  useEffect(() => {
    if (schedule[0] === "undefined") {
      if (localStorage.schedule === undefined) {
        localStorage.setItem(schedule, []);
        setSchedule([]);
      } else {
        setSchedule(JSON.parse(localStorage.schedule));
      }
    }

    setTimeBlocks(
      timeBlocks.map((time) => {
        let start = time;
        let end = time + 1;
        if (end == 24) {
          end = 0;
        }
        const convert = (hour) => {
          if (hour === 12) {
            return "12 PM";
          } else if (hour === 0) {
            return "12 AM";
          } else if (hour < 12) {
            return `${hour} AM`;
          } else if (hour > 12) {
            return `${hour % 12} PM`;
          }
        };

        start = convert(start);
        end = convert(end);
        if (start === "12 AM") {
          return <TimeBlock start={start} end={end}></TimeBlock>;
        } else {
          return <TimeBlock end={end}></TimeBlock>;
        }
      })
    );
  }, []);

  const [timeBlocks, setTimeBlocks] = useState([
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23,
  ]);

  return <div>{timeBlocks}</div>;
}
