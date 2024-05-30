import React from "react";

export default function Panel(props) {
  console.log("Panel props.children: ", props.children);
  return <div className="flex-grow pb-3 overflow-y-auto">{props.children}</div>;
}
