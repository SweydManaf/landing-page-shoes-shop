import Shoes1 from "../assets/shoes-1.png";

export default function Section1() {
  return (
    <section className="bg-[#FFD89F] uppercase flex flex-col gap-7 md:gap-0 md:flex-row justify-between px-5 md:px-20 py-10 md:py-12 ">
      <div className="flex flex-col gap-20 md:mt-20">
        <div>
          <h2 className="text-4xl md:text-7xl ">Fly high with the legendary</h2>
          <p className="text-6xl md:text-5xl">nike air jordan 1</p>
        </div>
        <div className="md:flex gap-10 items-center hidden">
          <span className="text-6xl text-[#0E2624]">$430</span>
          <button className="bg-[#30F] text-white text-3xl py-4 px-14 button-box-shadow">
            buy now
          </button>
        </div>
      </div>

      <div className="bg-white w-fit h-fit border-2 border-black shoes1-box-shadow ">
        <img src={Shoes1} alt="" className="py-10 md:py-20  px-2 md:px-10" />
      </div>

      <div className="md:hidden flex gap-10 items-center mt-6">
        <span className="text-6xl text-[#0E2624]">$430</span>
        <button className="bg-[#30F] text-white text-3xl py-4 px-14 button-box-shadow">
          buy now
        </button>
      </div>
    </section>
  );
}
