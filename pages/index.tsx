import ThemeSelector from "@/components/ThemeSelector";
import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState<string>("");

  return (
    <div className="flex w-full min-h-screen justify-center items-center bg-backgroundMain">
      <div className="flex flex-col w-[500px] gap-y-6">
        <div className="flex w-full items-end justify-between">
          <h1 className="text-3xl text-textTitle">Calculator</h1>
          <ThemeSelector />
        </div>
        {/* Calculator Screen */}
        <div className="w-full h-full bg-backgroundScreen px-4 py-8 rounded-xl">
          <input
            type="text"
            className="flex w-full outline-none bg-transparent text-[32px] text-right text-textTitle"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>

        {/* Calculator Buttons */}
        <div className="grid w-full grid-cols-4 gap-4 p-4 text-[32px] bg-backgroundKeypad rounded-xl text-textKey">
          <button className="keyButton p-2 rounded-xl">7</button>
          <button className="keyButton p-2 rounded-xl">8</button>
          <button className="keyButton p-2 rounded-xl">9</button>
          <button className="keyButtonSpecial p-2 rounded-xl">DEL</button>

          <button className="keyButton p-2 rounded-xl">4</button>
          <button className="keyButton p-2 rounded-xl">5</button>
          <button className="keyButton p-2 rounded-xl">6</button>
          <button className="keyButton p-2 rounded-xl">+</button>

          <button className="keyButton p-2 rounded-xl">1</button>
          <button className="keyButton p-2 rounded-xl">2</button>
          <button className="keyButton p-2 rounded-xl">3</button>
          <button className="keyButton p-2 rounded-xl">-</button>

          <button className="keyButton p-2 rounded-xl">.</button>
          <button className="keyButton p-2 rounded-xl">0</button>
          <button className="keyButton p-2 rounded-xl">/</button>
          <button className="keyButton p-2 rounded-xl">x</button>

          <button className="keyButtonToggle p-2 rounded-xl col-span-2">
            RESET
          </button>
          <button className="keyButtonEqual p-2 rounded-xl col-span-2">
            =
          </button>
        </div>
      </div>
    </div>
  );
}
