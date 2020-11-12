import React from "react";
import "./button.css";

export default function Button({ btn, clickEvent }) {
  return (
    <button key={btn} className="btn" onClick={() => clickEvent(btn)} id={btn}>
      {btn}
    </button>
  );
}
