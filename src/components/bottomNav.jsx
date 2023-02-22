import { GiHamburger } from "react-icons/gi";
import { BsHandbag, BsPerson } from "react-icons/bs";
import { CiBookmarkMinus } from "react-icons/ci";
export default function BottomNav() {
  const icons = [
    { icon: <GiHamburger /> },
    { icon: <BsHandbag /> },
    { icon: <CiBookmarkMinus /> },
    { icon: <BsPerson /> },
  ];
  return (
    <div className="bottom-0 fixed w-full  bg-white justify-around p-2 py-4 left-0 flex">
      {icons.map(({ icon }, id) => (
        <span
          className={`text-3xl ${
            id != 0 ? " text-zinc-500" : "text-[#F7B43F]"
          }`}
          key={id}
        >
          {icon}
        </span>
      ))}
    </div>
  );
}
