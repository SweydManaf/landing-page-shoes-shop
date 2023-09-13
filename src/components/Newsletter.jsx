import UnderlineGreenImage from "../assets/underline-green.svg";

export default function Newsletter() {
  return (
    <section className="bg-[#FFD89F] md:bg-white px-20  flex flex-col gap-8 md:gap-14 items-center pt-20 md:pt-52 pb-32 overflow-x-hidden">
      <h2 className="text-4xl md:text-6xl text-[#30F] ">
        Join our mail list{" "}
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
          className="bg-white border-[1px] md:w-[603px] h-max py-5 pr-[160px] pl-[20px] font-semibold outline-none shadow-button-box-shadow hover:shadow-button-box-shadow-hover focus:shadow-button-box-shadow-hover ease-in duration-200 placeholder:tracking-wider tracking-wider"
        />

        <button className="bg-[#30F] text-white text-3xl py-4 px-14 w-full md:w-min shadow-button-box-shadow  hover:shadow-button-box-shadow-hover ease-in duration-200">
          Subscribe
        </button>
      </div>
    </section>
  );
}
