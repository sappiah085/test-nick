import joint from "../assets/card.jpeg";
export default function JointCard() {
  return (
    <div className="w-full flex flex-col gap-1 relative cursor-pointer">
      <span className="absolute bg-white text-black right-5 px-2 py-1 rounded-2xl top-2">
        Closed
      </span>
      <img
        className="w-full rounded-2xl h-[150px] object-cover object-center"
        src={joint}
        alt="joint image"
      />
      <div className="flex flex-col">
        <h3 className=" flex justify-between">
          Potato Chips with chicken{" "}
          <span className="text-[#F7B43F]">
            GHS 36 <span className="text-zinc-400">.00</span>
          </span>{" "}
        </h3>
        <h6 className="text-zinc-500 text-sm">
          Green Leaf Eatery . Opens @ 11:00AM
        </h6>
      </div>
    </div>
  );
}
