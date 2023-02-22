import { CiSearch } from "react-icons/ci";
export default function Search() {
  return (
    <label
      htmlFor="search"
      className="flex w-[95%] relative m-auto p-0  justify-center items-center"
    >
      <span className="top-[50%] translate-y-[-50%] left-[4%] absolute z-10">
        <CiSearch />
      </span>
      <input
        type="text"
        id="search"
        placeholder="Search"
        className="bg-[#F5F5F6] flex-grow py-2 pl-10 placeholder:text-black placeholder:font-normal rounded-2xl outline-none border-none"
      />
    </label>
  );
}
