"use client"

import { useState } from "react";

export default function LCG() {
    const a = 1664525;
    const c = 1013904223;
    const m = 2**32;

    const [seed, setSeed] = useState(20);
    const [currentRandom, setCurrentRandom] = useState(0);

    function nextInt() {
        setCurrentRandom((a * seed + c) % m % 10);
        setSeed((a * seed + c) % m);
    }

    return (
        <div>
            <p>시드: {seed}</p> 
            <button onClick={() => {nextInt()}}>클릭하여 랜덤 난수를 발급해보세요.</button> <br />
            <p>랜덤 난수: {currentRandom}</p>
            <p>Input 안에 값을 넣어 시드를 변경해보세요.</p> <input type="text" onChange={(e) => {setSeed(Number(e.target.value))}} />
        </div>
    );
}

    