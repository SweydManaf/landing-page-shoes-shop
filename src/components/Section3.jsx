import UnderlineGreenImage from "../assets/underline-green.svg";

export default function Section3() {
  return (
    <section className="bg-[#FFD89F] md:bg-white px-20  flex flex-col gap-8 md:gap-14 items-center pt-20 md:pt-52 pb-32 overflow-x-hidden">
      <h2 className="text-4xl md:text-6xl text-[#30F] ">
        Join our mailist{" "}
        <img src={UnderlineGreenImage} alt="" className="m-auto w-40" />
      </h2>

      <p className="uppercase text-base md:text-3xl w-80 md:w-[970px] text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut
        volutpat est. Suspendisse dolor magna, hendrerit sed magna sit amet,
        tempor efficitur nisl
      </p>

      <div className="flex flex-col md:flex-row items-center gap-2 ">
        <input
          type="text"
          placeholder="ENTER YOUR EMAIL"
          className="bg-white border-[1px] button-box-shadow  md:w-[603px] h-max py-5 pr-[160px] pl-[20px] font-semibold outline-none"
        />

        <button className="bg-[#30F] text-white md:text-black text-3xl py-4 px-14 button-input-box-shadow w-full md:w-min">
          Subscribe
        </button>
      </div>
    </section>
  );
}
