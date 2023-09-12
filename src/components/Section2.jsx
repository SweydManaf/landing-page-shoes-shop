import StarIcon from "../assets/star-icon.svg";
import Shoes2 from "../assets/shoes-2.png";
import UnderlineYellowImage from "../assets/underline-yellow.svg";

export default function Section2() {
  return (
    <section className="bg-[#0E2624] flex flex-col md:pl-20 pt-16 relative overflow-x-hidden overflow-y-clip">
      <div className="flex flex-col md:flex-row items-center gap-6 ">
        <img src={StarIcon} alt="" className="w-16 md:w-max" />
        <h2 className="text-white text-4xl md:text-6xl uppercase">
          why you will want it?
          <img
            src={UnderlineYellowImage}
            alt=""
            className="m-auto w-full md:w-min"
          />
        </h2>
      </div>

      <div className="hidden md:flex justify-between items-center ">
        <img src={Shoes2} alt="" className="w-[980px] translate-y-52" />

        <div className="text-white text-right flex flex-col gap-6">
          <div className="flex gap-11 pl-10 pr-20">
            <div className="text-8xl">1</div>
            <div className="flex flex-col gap-8">
              <div>
                <h4 className="text-5xl">SUPER fEATURE #1 </h4>
                <img src={UnderlineYellowImage} alt="" className="ml-auto" />
              </div>
              <p className="w-60 text-lg ml-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                ut volutpat est. Suspendisse dolor magna, hendrerit sed magna
                sit amet
              </p>
            </div>
          </div>

          {/* LINE DASHED */}
          <div className="flex items-center ">
            <div className="w-2 h-2 rounded-full bg-white"></div>{" "}
            <div className="border-2 border-dashed w-full"></div>
          </div>

          <div className="flex gap-11 pl-10 pr-20">
            <div className="text-8xl">2</div>
            <div className="flex flex-col gap-8">
              <div>
                <h4 className="text-5xl">SUPER fEATURE #2 </h4>
                <img src={UnderlineYellowImage} alt="" className="ml-auto" />
              </div>
              <p className="w-60 text-lg ml-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                ut volutpat est. Suspendisse dolor magna, hendrerit sed magna
                sit amet
              </p>
            </div>
          </div>

          {/* LINE DASHED */}
          <div className="flex items-center ">
            <div className="w-2 h-2 rounded-full bg-white"></div>{" "}
            <div className="border-2 border-dashed w-full"></div>
          </div>

          <div className="flex gap-11 pl-10 pr-20">
            <div className="text-8xl">3</div>
            <div className="flex flex-col gap-8">
              <div>
                <h4 className="text-5xl">SUPER fEATURE #3 </h4>
                <img src={UnderlineYellowImage} alt="" className="ml-auto" />
              </div>
              <p className="w-60 text-lg ml-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                ut volutpat est. Suspendisse dolor magna, hendrerit sed magna
                sit amet
              </p>
            </div>
          </div>
        </div>
      </div>

      <img
        src={Shoes2}
        alt=""
        className="block md:hidden w-full scale-150 translate-x-16 "
      />

      <div className="bg-white text-[#0E2624] pt-20 pb-10 flex md:hidden justify-between items-center ">
        <div className="text-right flex flex-col gap-6">
          <div className="flex gap-11 pl-10 pr-20 md: ">
            <div className="text-8xl text-shadow">1</div>
            <div className="flex flex-col gap-8">
              <div>
                <h4 className="text-4xl md:text-5xl">SUPER fEATURE #1 </h4>
                <img src={UnderlineYellowImage} alt="" className="ml-auto" />
              </div>
              <p className="w-60 text-base ml-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                ut volutpat est. Suspendisse dolor magna, hendrerit sed magna
                sit amet
              </p>
            </div>
          </div>

          {/* LINE DASHED */}
          <div className="flex items-center ml-4">
            <div className="w-2 h-2 rounded-full bg-[#0E2624]"></div>{" "}
            <div className="border-2 border-dashed border-[#0E2624] w-full "></div>
          </div>

          <div className="flex gap-11 pl-10 pr-20">
            <div className="text-8xl text-shadow">2</div>
            <div className="flex flex-col gap-8">
              <div>
                <h4 className="text-4xl md:text-5xl">SUPER fEATURE #2 </h4>
                <img src={UnderlineYellowImage} alt="" className="ml-auto" />
              </div>
              <p className="w-60 text-base ml-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                ut volutpat est. Suspendisse dolor magna, hendrerit sed magna
                sit amet
              </p>
            </div>
          </div>

          {/* LINE DASHED */}
          <div className="flex items-center ml-4">
            <div className="w-2 h-2 rounded-full bg-[#0E2624]"></div>{" "}
            <div className="border-2 border-dashed border-[#0E2624] w-full "></div>
          </div>

          <div className="flex gap-11 pl-10 pr-20">
            <div className="text-8xl text-shadow">3</div>
            <div className="flex flex-col gap-8">
              <div>
                <h4 className="text-4xl md:text-5xl">SUPER fEATURE #3 </h4>
                <img src={UnderlineYellowImage} alt="" className="ml-auto" />
              </div>
              <p className="w-60 text-base ml-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                ut volutpat est. Suspendisse dolor magna, hendrerit sed magna
                sit amet
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
