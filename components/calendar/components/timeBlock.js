import React from "react";

export default function TimeBlock(props) {
  return (
    <div className="flex flex-row">
      <div className="flex space-between flex-col space-y-5">
        <p>{props.start}</p>
        <p>{props.end}</p>
      </div>
      <div className=""></div>
    </div>
  );
}
