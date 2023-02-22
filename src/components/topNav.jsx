import { CiGrid41 } from "react-icons/ci";
import { BsBell } from "react-icons/bs";
export default function TopNav() {
  return (
    <div className="w-full flex justify-between items-center">
      <button
        aria-label="sort"
        className="border-zinc-400/25 border-[.1rem] cursor-pointer p-1 text-xl rounded-md"
      >
        <CiGrid41 />
      </button>
      <div className="flex flex-col justify-center items-center">
        <h5 className="text-zinc-500">Location</h5>
        <h3>2343, Osu Oxford Sreet</h3>
      </div>
      <button
        className="border-zinc-400/25 border-[.1rem] cursor-pointer p-2 text-xl rounded-[50%]"
        aria-label="notification"
      >
        <BsBell />
      </button>
    </div>
  );
}
