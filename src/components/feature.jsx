import feature from "../assets/feature.png";
export default function Feature() {
  return (
    <div className="bg-[#F9E63A] flex rounded-3xl p-4">
      <div className="items-start gap-2 flex flex-col">
        <h3 className="font-bold">
          The Biggest Hot dog festival is here again!!
        </h3>
        <button className="bg-white py-2 px-2 rounded-md cursor-pointer">Register Now</button>
      </div>
      <img
        className=" w-[150px] object-contain"
        src={feature}
        alt="feature image"
      />
    </div>
  );
}
