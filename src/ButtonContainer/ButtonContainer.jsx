import React from "react";
import Button from "./Button";

export default function ButtonContainer({ handleClick }) {
  const buttons = [1, 2, 3, "+", 4, 5, 6, "-", 7, 8, 9, "*", "=", 0, "/", "%"];

  return (
    <div className="btn-container">
      {buttons.map((el) => (
        <Button key={el} btn={el} clickEvent={handleClick} />
      ))}
    </div>
  );
}
