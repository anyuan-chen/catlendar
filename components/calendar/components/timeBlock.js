import React from "react";

export default function TimeBlock(props) {
  return (
    <div className="flex flex-row w-70w border">
      <div className="flex space-between flex-col space-y-5">
        <p>{props.start}</p>
        <p>{props.end}</p>
      </div>
      <div className=""></div>
    </div>
  );
}
