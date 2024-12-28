import ThemeSelector from "@/components/ThemeSelector";

export default function Home() {
  return (
    <div className="flex w-full min-h-screen justify-center items-center bg-backgroundMain">
      <div className="flex w-[600px]">
        <div className="flex w-full items-end justify-between">
          <h1 className="text-3xl text-textTitle">Calculator</h1>
          <ThemeSelector />
        </div>
      </div>
    </div>
  );
}
