import React from "react";
import "./App.css";
import Screen from "./Screen/Screen";
import ButtonContainer from "./ButtonContainer/ButtonContainer";
import { evaluate } from "mathjs";

let evaluated = false;
export default function Calculator() {
  let [expr, setExpr] = React.useState("");

  function clicked(id) {
    //console.log("CLICKED " + id);
    if (isOperand(id) && isOperand(expr.toString().slice(-1))) {
      return;
    }

    if (id.toString() === "=") {
      //const newExpr = expr.toString() + item + evaluate(expr);
      try {
        var result = evaluate(expr);
      } catch (ex) {
        result = "";
      } finally {
        evaluated = true;
        setExpr(result);
      }
      return;
    }
    console.log("evaluated = " + evaluated);
    const newExpr = evaluated ? "" + id : expr.toString() + id;
    //console.log(newExpr);
    evaluated = false;
    setExpr(newExpr);
  }
  function isOperand(id) {
    return "+-/*%".includes(id);
  }

  return (
    <div className="calculator">
      <Screen key="Screen" expression={expr} />
      <ButtonContainer key="keypad" handleClick={clicked} />
    </div>
  );
}
