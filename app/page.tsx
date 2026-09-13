"use client";

import { useState } from "react";

export default function Home() {

  const [count, setCount] = useState(0);

  function onClickHandler(incDec: NextStateOf) {
    if (incDec == NextStateOf.increase) {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
  }

  type ClickButtonProps = {
    incDec: NextStateOf;
  }

  enum NextStateOf {
    increase,
    decrease
  }

  function ClickButton({incDec}: ClickButtonProps) {
    return (
      <div>
        <button onClick={() => { onClickHandler(incDec) }}>1 만큼을 {incDec == 0 ? "추가하려면" : "감소시키려면"} 클릭하세요.</button>
      </div>
    )
  }

  return (
    <div>
      <ClickButton incDec={NextStateOf.increase} />
      <ClickButton incDec={NextStateOf.decrease} />
      <p>Count: {count}</p>
    </div>
  );
}
