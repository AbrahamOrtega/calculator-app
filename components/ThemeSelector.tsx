import changeTheme from "@/utils/changeTheme";
import { useState, useEffect } from "react";

export default function ThemeSelector() {
  const [theme, setTheme] = useState<string>("default");

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (localStorage.getItem("theme")) {
      return changeTheme(localStorage.getItem("theme") as string, setTheme);
    }
  }, []);

  return (
    <div className="flex items-end gap-x-8">
      <p className="text-textTitle">THEME</p>
      <div className="flex flex-col">
        <div className="flex w-24 text-textTitle justify-between px-3">
          <p>1</p>
          <p>2</p>
          <p>3</p>
        </div>
        <div className="flex w-24 h-8 bg-backgroundScreen rounded-full p-1 justify-between">
          <div
            className={`flex h-full aspect-square  rounded-full cursor-pointer ${
              theme === "default"
                ? "bg-keyBackgroundToggle"
                : "hover:bg-keyBackgroundToggle hover:opacity-50"
            }`}
            onClick={() => changeTheme("default", setTheme)}
          />
          <div
            className={`flex h-full aspect-square  rounded-full cursor-pointer ${
              theme === "theme2"
                ? "bg-keyBackgroundToggle"
                : "hover:bg-keyBackgroundToggle hover:opacity-50"
            }`}
            onClick={() => changeTheme("theme2", setTheme)}
          />
          <div
            className={`flex h-full aspect-square  rounded-full cursor-pointer ${
              theme === "theme3"
                ? "bg-keyBackgroundToggle"
                : "hover:bg-keyBackgroundToggle hover:opacity-50"
            }`}
            onClick={() => changeTheme("theme3", setTheme)}
          />
        </div>
      </div>
    </div>
  );
}
