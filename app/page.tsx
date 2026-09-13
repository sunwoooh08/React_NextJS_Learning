"use client";

import { useState } from "react";

export default function Home() {

  const [count, setCount] = useState(0);

  function onClickHandler(incDec: "inc" | "dec") {
    if (incDec == "inc") {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
  }

  type ClickButtonProps = {
    incDec: "inc" | "dec";
  }
  
  function ClickButton({incDec}: ClickButtonProps) {
    return (
      <div>
        <button onClick={() => { onClickHandler(incDec) }}>1 만큼을 {incDec == "inc" ? "추가하려면" : "감소시키려면"} 클릭하세요.</button>
      </div>
    )
  }

  return (
    <div>
      <ClickButton incDec="inc" />
      <ClickButton incDec="dec" />
      <p>Count: {count}</p>
    </div>
  );
}
