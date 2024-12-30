import ThemeSelector from "@/components/ThemeSelector";
import { useEffect, useState } from "react";

export default function Home() {
  const [input, setInput] = useState<string>("0");
  const [error, setError] = useState<boolean>(false);

  const handleKeyClick = (key: string) => {
    if (error) {
      setInput("0");
      setError(false);
    }
    if (input === "0") {
      if (key === ".") return setInput("0.");
      setInput(key);
      return;
    }
    if (key === "." && input.includes(".")) {
      return;
    }
    if (
      (/[+\-/x]$/.test(input.charAt(input.length - 1)) &&
        /[+\-/x]/.test(key)) ||
      (input === "0" && /[+\-/x]/.test(key))
    ) {
      return;
    }
    setInput((prev) => prev + key);
  };

  const handleDeleteClick = () => {
    if (error) {
      setInput("0");
      setError(false);
      return;
    }
    if (input.length === 1) {
      setInput("0");
      return;
    }
    setInput((prev) => prev?.slice(0, -1) || "");
  };

  const handleEqualClick = () => {
    if (error) {
      setInput("0");
      setError(false);
      return;
    }
    try {
      const result = eval(input.replace(/x/g, "*")).toString();
      setInput(result);
    } catch (e) {
      console.log(e);
      setError(true);
      setInput("Syntax Error");
    }
  };

  useEffect(() => {
    if (error) {
      return;
    }
    input.replace(/[^0-9.x/+]/g, "");
  }, [input, error]);

  return (
    <div className="flex w-full min-h-screen justify-center items-center bg-backgroundMain p-6 overflow-hidden">
      <div className="flex flex-col w-[500px] gap-y-6">
        <div className="flex w-full items-end justify-between">
          <h1 className="text-3xl text-textTitle">Calculator</h1>
          <ThemeSelector />
        </div>
        {/* Calculator Screen */}
        <div className="w-full h-full bg-backgroundScreen px-4 py-8 rounded-xl">
          <p className="flex w-full bg-transparent text-[32px] justify-end text-textTitle">
            {input}
          </p>
        </div>

        {/* Calculator Buttons */}
        <div className="grid w-full grid-cols-4 gap-4 p-4 text-[32px] bg-backgroundKeypad rounded-xl text-textKey">
          <button
            className="keyButton p-2 rounded-xl"
            onClick={() => handleKeyClick("7")}
          >
            7
          </button>
          <button
            className="keyButton p-2 rounded-xl"
            onClick={() => handleKeyClick("8")}
          >
            8
          </button>
          <button
            className="keyButton p-2 rounded-xl"
            onClick={() => handleKeyClick("9")}
          >
            9
          </button>
          <button
            className="keyButtonSpecial p-2 rounded-xl"
            onClick={handleDeleteClick}
          >
            DEL
          </button>

          <button
            className="keyButton p-2 rounded-xl"
            onClick={() => handleKeyClick("4")}
          >
            4
          </button>
          <button
            className="keyButton p-2 rounded-xl"
            onClick={() => handleKeyClick("5")}
          >
            5
          </button>
          <button
            className="keyButton p-2 rounded-xl"
            onClick={() => handleKeyClick("6")}
          >
            6
          </button>
          <button
            className="keyButton p-2 rounded-xl"
            onClick={() => handleKeyClick("+")}
          >
            +
          </button>

          <button
            className="keyButton p-2 rounded-xl"
            onClick={() => handleKeyClick("1")}
          >
            1
          </button>
          <button
            className="keyButton p-2 rounded-xl"
            onClick={() => handleKeyClick("2")}
          >
            2
          </button>
          <button
            className="keyButton p-2 rounded-xl"
            onClick={() => handleKeyClick("3")}
          >
            3
          </button>
          <button
            className="keyButton p-2 rounded-xl"
            onClick={() => handleKeyClick("-")}
          >
            -
          </button>

          <button
            className="keyButton p-2 rounded-xl"
            onClick={() => handleKeyClick(".")}
          >
            .
          </button>
          <button
            className="keyButton p-2 rounded-xl"
            onClick={() => handleKeyClick("0")}
          >
            0
          </button>
          <button
            className="keyButton p-2 rounded-xl"
            onClick={() => handleKeyClick("/")}
          >
            /
          </button>
          <button
            className="keyButton p-2 rounded-xl"
            onClick={() => handleKeyClick("x")}
          >
            x
          </button>

          <button
            className="keyButtonToggle p-2 rounded-xl col-span-2"
            onClick={() => setInput("0")}
          >
            RESET
          </button>
          <button
            className="keyButtonEqual p-2 rounded-xl col-span-2"
            onClick={handleEqualClick}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}
